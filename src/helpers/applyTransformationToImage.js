import { getCldImageUrl } from "astro-cloudinary/helpers"

export async function applyTransformationToImage({id, imgToTransform, costumeTopic, backgroundTopic}) {
  if (costumeTopic === null) return

  const transformationsSettings = {
    src: id,
    replace: ['Clothes', `${costumeTopic} costume`]
  }

  if (backgroundTopic) transformationsSettings.replaceBackground = backgroundTopic
  return {src: getCldImageUrl(transformationsSettings)}
}

