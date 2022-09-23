import { GiftContentApi } from '../types'
import fetch from 'cross-fetch';
export const getGifts = async (category: string, limit:string) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=945VAR9lOvewomJua1ryjeEjkzjFQDjj&q=${category}&limit=${limit}`
  const response = await fetch(url)
  const { data } = await response.json()

  const gifts = data.map((img: GiftContentApi) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }))
  return gifts
}
