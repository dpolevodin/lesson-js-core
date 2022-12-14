const cards = document.querySelectorAll('.card')
const cardsButtons = document.querySelectorAll('.card__button')

// console.log(cards)
// console.log(cardsButtons)

cards.forEach(card => card.addEventListener('click', () => {
    if (card.classList.contains('card_active')) {
        card.setAttribute('class', 'card')
        console.log('карточка удалена из выбора покупателя')
    }
    else {
        card.setAttribute('class', 'card card_active')
        console.log('выбрана карточка')
    }
    }, {capture: true})
)

cardsButtons.forEach(card => card.addEventListener('click', (event) => {
if (card.classList.contains('card__button_danger')) {
    event.stopPropagation()
    console.log('удалить товар')
}
else {
    event.stopPropagation();
    console.log('купить товар')
}}, {capture: true}))


