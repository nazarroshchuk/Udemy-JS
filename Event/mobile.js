// touchstart  == при дотику пальця
// touchmove  ==  коли при дотику рухати пальцем
// touchend   == як тіки палець відривається від елемента
// touchenter  == як тіки палець заходить на межі елемента
// touchleave  == коли палець вийшов за межі елемента
// touchcancel  == коли точка дотику більне не реєтсрується на поверхні, палець вийшов з амежі браузера
window.addEventListener('DOMContentLoaded', () => {

    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();
        console.log('start');
    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();
        console.log('move');
    });

    box.addEventListener('touchend', (e) => {
        e.preventDefault();
        console.log('end');
    });

});

//  Event has several added features in touch
// touches  == видає кількість пальців які торкнулись до екрану
// targetTouches
// changedTouches  == список пальців які зробили якусь дію, відірвали напр від екрану
