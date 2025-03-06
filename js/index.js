"use strict"

const galleryA = document.querySelector(`.gallery-a`)
console.log(galleryA)

const galleryB = document.querySelector(`.gallery-b`)
console.log(galleryB)

const galleryC = document.querySelector(`.gallery-c`)
console.log(galleryC)

const visibleButton = document.querySelector(`.visible-button`)
console.log(visibleButton)

const galleryVisible = document.querySelector(`.gallery-visible`)
console.log(galleryVisible)

galleryA.addEventListener(`click` , ()=>{
    galleryVisible.classList.add(`isActive`)
})
visibleButton.addEventListener(`click` , ()=>{
    galleryVisible.classList.remove(`isActive`)
})
galleryB.addEventListener(`click` , ()=>{
    galleryVisible.classList.add(`isActive`)
})
visibleButton.addEventListener(`click` , ()=>{
    galleryVisible.classList.remove(`isActive`)
})
galleryC.addEventListener(`click` , ()=>{
    galleryVisible.classList.add(`isActive`)
})
visibleButton.addEventListener(`click` , ()=>{
    galleryVisible.classList.remove(`isActive`)
})
