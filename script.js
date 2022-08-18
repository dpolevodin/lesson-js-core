// const button = document.querySelector('.button')
//
// button.addEventListener('click', () => {
//     document
//         .querySelector('.modal')
//         .setAttribute('class', 'modal')
// })
//
// const closeButton = document.querySelector('.modal__button')
//
// closeButton.addEventListener('click', () => {
//     document
//         .querySelector('.modal')
//         .setAttribute('class', 'modal modal_hidden')
// })

const loader = document.querySelector('.loader')

const changeLoaderVisibility = (isVisible) =>
    loader.setAttribute('class', isVisible ? 'loader loader_visible' : 'loader')

setTimeout(() => changeLoaderVisibility(true), 0)
setTimeout(() => changeLoaderVisibility(false), 3000)