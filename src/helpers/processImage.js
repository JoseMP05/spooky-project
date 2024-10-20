import { pollForProcessingImage } from '@cloudinary-util/util'

export async function processImage(url) {
  return await pollForProcessingImage({ src: url }) //Make visual feedback
}