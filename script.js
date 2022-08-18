const loader = document.querySelector('.icon-rotate')

const changeLoaderVisible = (isVisible) => loader.setAttribute('class', isVisible ? 'icon-rotate icon-rotate__visible' : 'icon-rotate')

setTimeout(() => changeLoaderVisible(true), 0)

const style = getComputedStyle(document.body)
const mainColor = style.getPropertyValue('--background-black')
let isDarkThemeEnable = mainColor === ' #000000'

document
    .querySelector('.button-color')
    .addEventListener('click', () => {

        if (isDarkThemeEnable) {
            console.log('test1')
            console.log(isDarkThemeEnable)
            document.body.style.setProperty('--background-black', " #a80f0f")
            isDarkThemeEnable = false
        } else  {
            console.log('test2')
            console.log(isDarkThemeEnable)
            document.body.style.setProperty('--background-black', "#000000")
            isDarkThemeEnable = true
        }
    })