import { getCldImageUrl } from "astro-cloudinary/helpers"

export function applyTransformationToImage({id, imgToTransform, costumeTopic, backgroundTopic}) {
  if (costumeTopic === null) return

  const transformationsSettings = {
    src: id,
    replace: ['Clothes', `${costumeTopic} costume`]
  }

  if (backgroundTopic) transformationsSettings.replaceBackground = backgroundTopic

  console.log(transformationsSettings)
  const url = getCldImageUrl(transformationsSettings)
  imgToTransform.style.opacity = ".3"
  imgToTransform.src = url
  imgToTransform.onload = () => {
    imgToTransform.style.opacity = "1"
  }

  // return {src: url}
}