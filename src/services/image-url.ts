import noImageUrl from '../assets/images/no-image-placeholder.webp'

export const cropImage = (url: string) => {
  if (!url) return noImageUrl

  const target = 'media/'
  const index = url.indexOf(target) + target.length
  return url.slice(0, index) + 'crop/600/400/' + url.slice(index)
}
