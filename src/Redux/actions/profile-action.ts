import {PhotosType, ProfileType} from '../../types/types'


export const actions = {
    addPostActionCreate: (newPostText: string) => ({type: 'SN/PROFILE/ADD-POST', newPostText} as const),
    setUsersProfile: (profile: ProfileType) => ({type: 'SN/PROFILE/SET_USERS_PROFILE', profile} as const),
    setStatus: (status: string) => ({type: 'SN/PROFILE/SET_STATUS', status} as const),
    deletePost: (postId: number) => ({type: 'SN/PROFILE/DELETE_POST', postId} as const),
    savePhotoSuccess: (photos: PhotosType) => ({type: 'SN/PROFILE/SAVE_PHOTO_SUCCESS', photos} as const),
}