console.log('подключен')

const style = getComputedStyle(document.body)
const mainColor = style.getPropertyValue('--color-primary')
let isDarkThemeEnabled = mainColor === '#000000'

console.log(mainColor)
console.log(isDarkThemeEnabled)

const button = document.querySelector('.button')

button.addEventListener('click', () => {
    if (isDarkThemeEnabled) {
        document.body.style.setProperty('--color-primary', '#FFFFFF')
        document.body.style.setProperty('--color-secondary', '#000000')
        isDarkThemeEnabled = false
    } else {
        document.body.style.setProperty('--color-primary', '#000000')
        document.body.style.setProperty('--color-secondary', '#35af9d')
        isDarkThemeEnabled = true
    }
})