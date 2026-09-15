const balloon = document.getElementById('balloon');

let size = 200; 
let colors = ['red', 'green', 'blue']; 
let colorIndex = 0; 

balloon.addEventListener('click', () => {
   
    size += 10;

    if (size > 420) {
        size = 200;
    }


    colorIndex = (colorIndex + 1) % colors.length;

    updateBalloonStyle();
});


balloon.addEventListener('mouseleave', () => {
    size -= 5;

    if (size < 200) {
        size = 200;
    }

    colorIndex = (colorIndex - 1 + colors.length) % colors.length;

    updateBalloonStyle();
});

function updateBalloonStyle() {
    balloon.style.width = size + 'px';
    balloon.style.height = size + 'px';
    balloon.style.backgroundColor = colors[colorIndex];
}