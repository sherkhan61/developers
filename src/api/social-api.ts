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
    status: string
    photos: PhotosType
    followed: boolean
}

type MeResponseDataType = {
    id: number, email: string, login: string
}
type LoginResponseDataType = {
    userId: number
}
export const authAPI = {
    me() {
        return instance.get<APIResponseType<MeResponseDataType>>(`auth/me`).then(res => res.data)
    },
    login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
        return instance.post<APIResponseType<LoginResponseDataType>>(`auth/login`, {email, password, rememberMe, captcha})
            .then(res => res.data)
    },
    logout() {
        return instance.delete(`auth/login`)
    },

}



type SavePhotoResponseType = {
    photos: PhotosType
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
    savePhoto(photoFile: File): Promise<APIResponseType<{photos:PhotosType}> | never> {
        const formData = new FormData();
        formData.append("newPhoto", photoFile);
        return instance.put('/profile/photo', formData)
            .then((response) => {
                if (response.data.resultCode === 0) {
                    return response.data;
                }
            });
    },
    saveProfile(profile: ProfileType): Promise<AxiosResponse<APIResponseType>> {
        return instance.put('/profile/', profile).then((response) => {
            return response;
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
             isFriend: boolean, term: string = "") {
        return instance.get<GetsItemsType>(`users?count=${pageSize}&page=${currentPage}&friend=${isFriend}&term=${term}`)
            .then(res => res.data)
    },
    follow(userId: number) {
        return instance.post<APIResponseType>(`follow/${userId}`).then(res => res.data)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`).then(res => res.data) as Promise<APIResponseType>
    },
    isFollowed(userId: number) {
        return instance.get(`follow/${userId}`).then(res => res.data) as Promise<boolean>;
    }
}


export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '11f6f6da-a19a-4694-bc7f-68eb9e84e954'
    }
})


export type GetsItemsType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
}
