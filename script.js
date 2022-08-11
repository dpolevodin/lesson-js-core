const button = document.querySelector('.button')

button.addEventListener('click', () => {
    document
        .querySelector('.modal')
        .setAttribute('class', 'modal')
})

const closeButton = document.querySelector('.modal__button')

closeButton.addEventListener('click', () => {
    document
        .querySelector('.modal')
        .setAttribute('class', 'modal modal_hidden')
})