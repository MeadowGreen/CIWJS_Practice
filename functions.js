const langOne = document.querySelector(".langOne");
const langTwo = document.querySelector(".langTwo");
const langthree = document.querySelector(".langThree");
const multLang = document.querySelector(".multLang");

langOne.addEventListener('mouseover', () => {
    langOne.classList.add("progress-bar-striped");
})  

langOne.addEventListener('mouseout', () => {
    langOne.classList.remove("progress-bar-striped")
})
    
langTwo.addEventListener('mouseover', () => {
    langTwo.classList.add("progress-bar-striped");
})

langTwo.addEventListener('mouseout', () => {
    langTwo.classList.remove("progress-bar-striped");
})
