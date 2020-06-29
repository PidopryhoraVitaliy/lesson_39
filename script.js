const   btn = document.querySelector('.btn'),
        box = document.querySelector('.box');

btn.addEventListener('click', () => {

    let     pos = 0;
    const   timeId = setInterval(frame, 15);

    function frame() {
        if (pos == 300) {
            clearInterval(timeId);
        } else {
            pos++;
            box.style.top = pos + 'px';
            box.style.left = pos + 'px';
        }
    }

});