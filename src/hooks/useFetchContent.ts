import { useEffect, useState } from 'react'
import { getGifts } from '../api'

export const useFetchContent = (category: string, limit:string) => {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const getImages = async () => {
    const newImages = await getGifts(category, limit)
    setImages(newImages)
    setIsLoading(false)
  }
  useEffect(() => {
    getImages()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { isLoading, images }
}
