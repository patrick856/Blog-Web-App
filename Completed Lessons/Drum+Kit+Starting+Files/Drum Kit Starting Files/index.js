var drumbuttons = document.querySelectorAll('.drum');

drumbuttons.forEach(button => {
    button.addEventListener('click', () => {
        new Audio(button.getAttribute('data-sound')).play();
    });
});

document.addEventListener("keydown", (event) => {
    switch(event.key) {
        case 'w':
            drumbuttons[0].click();
            break;
        case 'a':
            drumbuttons[1].click();
            break;
        case 's':
            drumbuttons[2].click();
            break;
        case 'd':
            drumbuttons[3].click();
            break;
        case 'j':
            drumbuttons[4].click();
            break;
        case 'k':
            drumbuttons[5].click();
            break;        
        case 'l':
            drumbuttons[6].click();
            break;
    }
});