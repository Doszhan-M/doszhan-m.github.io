function slider() {
    const hash = window.location.hash   // досать хеш в url
    const popupWindow = document.querySelector(`${hash}`) // найти секцию по хеш
    const thisPopupWindow = popupWindow.classList.contains('popup') // есть ли в секции popup

    if (thisPopupWindow) {

        const btnRight = document.querySelector(`${hash} .slaider__btn_right`)
        const btnLeft = document.querySelector(`${hash} .slaider__btn_left`)

        // Find images
        const slaider = document.querySelector(`${hash} .slaider__img-container`)
        const images = document.querySelectorAll(`${hash} .slaider__img-container .slaider__img`)

        // Calculate image width for step
        const stepSize = images[0].clientWidth
        // Move picture
        let counter = 0; // счетчик

        btnRight.addEventListener('click', () => {
            // Если counter равен длине картинок, то обнуляем счетчик.
            if (counter >= images.length - 1) { counter = -1 }
            counter++;
            slaider.style.transform = 'translateX(' + `${-(stepSize) * counter}px)`;
        })

        btnLeft.addEventListener('click', () => {
            if (counter <= 0) { counter = images.length }
            counter--;
            slaider.style.transform = 'translateX(' + `${-stepSize * counter}px)`;
        })
    }
}

export function sliderProject() {
    window.addEventListener('hashchange', () => { // событие на изменение хеша в url
        slider()
    })
}