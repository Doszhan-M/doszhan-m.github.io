function lazyLoad() {
    const hash = window.location.hash   // досать хеш в url
    const popupWindow = document.querySelector(`${hash}`) // найти секцию по хеш
    let imgInSlaider = popupWindow.querySelectorAll('.slaider__img') // поиск внутри секции

    imgInSlaider.forEach(img => {
        img.src = img.dataset.src
        img.removeAttribute('data-src')
    });
}

export function lazyLoading() {
    window.addEventListener('hashchange', () => { // событие на изменение хеша в url
        lazyLoad()
    })
} 