const container1 = document.querySelector('.container-primary')
const container2 = document.querySelector('.container-secondary')
const container3 = document.querySelector('.container-transparent')

document.addEventListener('scroll', () => {
    const valueScrollY = window.scrollY
    container1.style.top = valueScrollY * 0.5 + 'px'
    container2.style.top = valueScrollY * 1.5 + 'px'
    container2.style.left = valueScrollY * 1.5 + 'px'
    container3.style.top = valueScrollY * 2.5 + 'px'
})