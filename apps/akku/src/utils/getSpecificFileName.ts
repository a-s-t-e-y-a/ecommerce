export default function getSpecifiedUrl(url:string){
  const parts = url.split('/')
  return parts.pop()
}
