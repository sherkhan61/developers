import axios, {AxiosInstance, AxiosResponse} from "axios";


const instance: AxiosInstance = axios.create({
    baseURL: "http://api.mediastack.com/v1"
});

export interface INewsParams {
    type?: string,
    category?: string,
    keywords?: string
}

interface INewsData {
    data: Array<IArticle>
    status: string,
    totalResults: number,
}

export interface IArticle {
    author: string,
    description: string,
    published_at: string
    source: string
    image: string
    title: string
    url: string
}


export const mediaStackApi = {
    getNews({
                category = "&categories=general", keywords = ""
            }: INewsParams ): Promise<Array<IArticle> | void> {
        return instance.get (`/news?access_key=2d201ce392268e5c78f5555e388a9238&sort=published_desc${category}${keywords}`)
            .then((response: AxiosResponse<INewsData>) => {
                if (response.statusText === "OK") {
                    return response.data.data
                } else {
                    console.log(response);
                }
            })
            .catch((err) => console.log(err));
    }
};