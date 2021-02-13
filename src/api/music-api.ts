import axios, {AxiosResponse} from "axios";


const instance = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/http://api.deezer.com/'
});


export interface IArtist {
  id: number
  link: string
  name: string
  picture: string
  picture_big: string
  picture_medium: string
  picture_small: string
  picture_xl: string
  radio: boolean
  tracklist: string
  type: string
}

export interface IAlbum {
  artist: IArtist
  cover: string
  cover_big: string
  cover_medium: string
  cover_small: string
  cover_xl: string
  explicit_lyrics: boolean
  id: number
  link: string
  md5_image: string
  position: number
  record_type: string
  title: string
  tracklist: string
  type: string
}

export interface IPlayLists {
  checksum: string
  creation_date: string
  id: number
  link: string
  md5_image: string
  nb_tracks: number
  picture: string
  picture_big: string
  picture_medium: string
  picture_small: string
  picture_xl: string
  public: boolean
  title: string
  tracklist: string
  type: string
}

export interface IPodcasts {
  available: boolean
  description: string
  fans: number
  id: number
  link: string
  picture: string
  picture_big: string
  picture_medium: string
  picture_small: string
  picture_xl: string
  share: string
  title: string
  type: string
}

export interface ITracks {
  album: IAlbum
  artist: IArtist
  duration: number
  explicit_content_cover: number
  explicit_content_lyrics: number
  explicit_lyrics: boolean
  id: number
  link: string
  md5_image: string
  position: number
  preview: string
  rank: number
  title: string
  title_short: string
  title_version: string
  type: string
}

export  interface IMusicCategory<T> {
  data: Array<T>,
  total: number
}

export interface IMusicResponse {

  albums: IMusicCategory<IAlbum>
  artists: IMusicCategory<IArtist>
  playlists: IMusicCategory<IPlayLists>
  podcasts: IMusicCategory<IPodcasts>
  tracks: IMusicCategory<ITracks>
}


export const musicApi = {
  getMusicChart(): Promise<IMusicResponse | void> {
    return instance.get(`chart/`)
        .then((response: AxiosResponse<IMusicResponse>) => {
          return response.data;
        })
        .catch(err => {
          console.log(err);
        });
  },

  search(query: string): Promise<IMusicCategory<ITracks> | void> {
    return instance.get(`/search?q=${query}`)
        .then((response: AxiosResponse<IMusicCategory<ITracks>>) => {
          return response.data
        }).catch((err) => console.log(err))
  }
};

