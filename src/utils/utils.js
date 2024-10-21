import { animate, timeline } from "motion"
import { separate } from "flubber";
import { sequenceImageLoading, secuenceImageLoaded } from "@utils/animationSecuencies"
import { paths, text } from "@utils/content.js";

export function getRandomArbitrary(min, max) {
  //max is exclusive
  return Math.random() * (max - min) + min;
}

function getRandomKey(object, currentKey){
  const result = Object.keys(object)
  result.splice(result.indexOf(currentKey), 1)

  return result[Math.floor(getRandomArbitrary(0, result.length))]
}

function getRandomElement(array, currentEl){
  const result = [...array]
  result.splice(result.indexOf(currentEl), 1)

  return result[Math.floor(getRandomArbitrary(0, result.length))]
}

//Closure Technique
function createPathToggler(paths, initialPath) {
  let currentPath = paths[initialPath]
  let lastPath = initialPath

  return function togglePath(path) {
    lastPath = getRandomKey(paths, lastPath)
    currentPath = paths[lastPath]

    const mixPaths = separate(path.getAttribute("d"), currentPath.d, {
      maxSegmentLength: 7,
      single: true
    });

    animate((progress) => path.setAttribute("d", mixPaths(progress)), { duration: 0.5 })
  };
}

function createPhraseToggler(phrases, initialPhrase) {
  let currentPhrase = initialPhrase

  return async function togglePhrase(phrase) {
    await animate(phrase,{y:-20, opacity: 0}, { duration: 0.25 }).finished

    currentPhrase = getRandomElement(phrases, currentPhrase)
    phrase.textContent = currentPhrase

    animate(phrase,{y:[20, 0], opacity: 1}, { duration: 0.25 })
  }
}

export async function animationLoadImage() {
  const path = document.querySelector("path");
  path.setAttribute("d", paths.voodoo.d);
  const togglePath = createPathToggler(paths, 'voodoo')

  const scaryPharse = document.querySelector('.overlay__text')
  scaryPharse.textContent = text.phrases[0]
  const togglePhrase = createPhraseToggler(text.phrases, text.phrases[0])

  
  const control = await timeline(sequenceImageLoading, {duration: 1}).finished
  document.getElementById("appLayout").style.gridTemplateColumns = "0fr 1fr 0fr"

  const glow = document.querySelector(".glow")
  animate(glow, {opacity: 1, visibility: "visible"}, {duration: 0.25})

  const loadingAnimations = setInterval(() => {
    togglePhrase(scaryPharse)
    togglePath(path)
    animate(glow, {filter:`blur(${Math.floor(getRandomArbitrary(10,100))}px)`}, {duration: 1})
  }, 2000)

  return loadingAnimations
}

export function animationShowImage() {
  document.getElementById("appLayout").style.gridTemplateColumns = "0fr 1fr 1fr"
  const control = timeline(secuenceImageLoaded, { delay: 0.5 })
}

export async function createImageDownloadLink({imgSrc, name}) {
  const img = await fetch(imgSrc)
  const imgBlog = await img.blob()
  const imgURL = URL.createObjectURL(imgBlog)

  const link = document.querySelector("#download")
  link.href = imgURL
  link.download = `${name}.jpg`
}