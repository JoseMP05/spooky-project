import { pollForProcessingImage } from '@cloudinary-util/util'
import { getCldImageUrl } from "astro-cloudinary/helpers"
import { animate, stagger, timeline } from "motion"

export async function applyTransformationToImage({id, imgToTransform, costumeTopic, backgroundTopic}) {
  if (costumeTopic === null) return

  const transformationsSettings = {
    src: id,
    replace: ['Clothes', `${costumeTopic} costume`]
  }

  if (backgroundTopic) transformationsSettings.replaceBackground = backgroundTopic

  const url = getCldImageUrl(transformationsSettings)

  // loadingImage()
  const isProcessed = await pollForProcessingImage({ src: url })

  if (isProcessed) imgToTransform.src = url
  else console.error("Failed to process the image.") //Make visual feedback

  imgToTransform.onload = () => {
    imgToTransform.style.opacity = "1"
  }

  // return {src: url}
}
