export type PostType = {
    id: number
    message: string
    likesCount: number
}
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