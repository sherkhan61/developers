import axios, {AxiosResponse} from 'axios'


export type APIResponseType<T = {}> = {
    resultCode: number,
    messages: Array<any> | string,
    data: T
}


export type LoginInfoType = {
    email: string
    password: string
    rememberMe: boolean
    captcha?: string
    logError?: string
};

export type ProfileType = {
    userId?: null | number
    lookingForAJob?: null | boolean
    lookingForAJobDescription?: null | string
    fullName?: null | string
    contacts?: null | ContactsType
    photos?: null | PhotosType
    aboutMe?: null | string
}
export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type PhotosType = {
    small: string | null
    large: string | null
}
export type UserType = {
    id: number
    name: string
    status: null | string
    photos: PhotosType
    followed: boolean
}


export type GetsItemsType = {
    items: Array<UserType>
    totalCount?: number
    error?: string | null
}

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '4f7e21cc-f57a-4375-bb0e-06b5f7dc4de6'
    }
})


type MeResponseDataType = {
    id: number, email: string, login: string
}
type LoginResponseDataType = {
    userId: number
}
export const authAPI = {
    me(): Promise<MeResponseDataType> {
        return instance
            .get(`/auth/me`)
            .then((response) => {
                if (response.data.resultCode === 0) return response.data.data
            })
    },
    login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
        return instance.post<APIResponseType<LoginResponseDataType>>(`auth/login`, {
            email,
            password,
            rememberMe,
            captcha
        })
            .then(res => res.data)
    },
    logout() {
        return instance.delete(`auth/login`)
    },

}


export const profileAPI = {
    getProfile(userId: number) {
        return instance.get<ProfileType>(`profile/` + userId).then(res => res.data)
    },
    getStatus(userId: number) {
        return instance.get<string>('profile/status/' + userId).then(res => res.data)
    },
    updateStatus(status: string) {
        return instance.put<APIResponseType>('profile/status', {status: status}).then(res => res.data)
    },
    savePhoto(photoFile: File): Promise<APIResponseType<{ photos: PhotosType }> | never> {
        const formData = new FormData()
        formData.append('newPhoto', photoFile)
        return instance.put('/profile/photo', formData)
            .then((response) => {
                if (response.data.resultCode === 0) {
                    return response.data
                }
            })
    },
    saveProfile(profile: ProfileType): Promise<AxiosResponse<APIResponseType>> {
        return instance.put('/profile/', profile).then((response) => {
            return response
        })
    }
}


type GetCaptchaUrlResponseType = {
    url: string
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get<GetCaptchaUrlResponseType>(`security/get-captcha-url`).then(res => res.data)
    }
}


export const usersAPI = {
    getUsers(pageSize: number, currentPage: number,
             isFriend: boolean, term: string = ''): Promise<GetsItemsType> {
        return instance.get(`users?count=${pageSize}&page=${currentPage}&friend=${isFriend}&term=${term}`)
            .then((response) => response.data)
    },
    follow(userId: number) {
        return instance.post<APIResponseType>(`follow/${userId}`).then(res => res.data)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`).then(res => res.data) as Promise<APIResponseType>
    },
    isFollowed(userId: number) {
        return instance.get(`follow/${userId}`).then(res => res.data) as Promise<boolean>
    }
}


// chatApi

const subcribers = {
    'messages-received': [] as MessagesReceivedSubscriberType[],
    'status-changed': [] as StatusChangedSubscriberType[]
}

let ws: WebSocket | null = null
type EventsNamesType = 'messages-received' | 'status-changed'

const closeHandler = () => {
    notifySubscribersAboutStatus('pending')
    setTimeout(createChannel, 3000)
}
const messageHandler = (e: MessageEvent) => {
    const newMessages = JSON.parse(e.data)
    subcribers['messages-received'].forEach(s => s(newMessages))
}
const openHandler = () => {
    notifySubscribersAboutStatus('ready')
}
const errorHandler = () => {
    notifySubscribersAboutStatus('error')
    console.error('REFRESH PAGE')
}
const cleanUp = () => {
    ws?.removeEventListener('close', closeHandler)
    ws?.removeEventListener('message', messageHandler)
    ws?.removeEventListener('open', openHandler)
    ws?.removeEventListener('error', errorHandler)
}
const notifySubscribersAboutStatus = (status: StatusType) => {
    subcribers['status-changed'].forEach(s => s(status))
}

function createChannel() {
    cleanUp()
    ws?.close()
    ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
    notifySubscribersAboutStatus('pending')
    ws.addEventListener('close', closeHandler)
    ws.addEventListener('message', messageHandler)
    ws.addEventListener('open', openHandler)
    ws.addEventListener('error', errorHandler)
}


export const chatAPI = {
    start() {
        createChannel()
    },
    stop() {
        subcribers['messages-received'] = []
        subcribers['status-changed'] = []
        cleanUp()
        ws?.close()
    },
    subscribe(eventName: EventsNamesType, callback: MessagesReceivedSubscriberType | StatusChangedSubscriberType) {
        // @ts-ignore
        subcribers[eventName].push(callback)
        return () => {
            // @ts-ignore
            subcribers[eventName] = subcribers[eventName].filter(s => s !== callback)
        }
    },
    unsubscribe(eventName: EventsNamesType, callback: MessagesReceivedSubscriberType | StatusChangedSubscriberType) {
        // @ts-ignore
        subcribers[eventName] = subcribers[eventName].filter(s => s !== callback)
    },
    sendMessage(message: string) {
        ws?.send(message)
    }
}

type MessagesReceivedSubscriberType = (messages: ChatMessageAPIType[]) => void
type StatusChangedSubscriberType = (status: StatusType) => void

export type ChatMessageAPIType = {
    message: string
    photo: string
    userId: number
    userName: string
}
export type StatusType = 'pending' | 'ready' | 'error'



