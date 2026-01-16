
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');
let image = 
selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        document.body.style.backgroundColor = '#282828';
        document.querySelector('h1').classList.add('darkmode');
        document.querySelector('#statement').classList.add('darkmode');
        document.querySelector('#how').classList.add('darkmode');
        document.querySelector('#list').classList.add('darkmode');
        document.querySelector('img').setAttribute('src', 'images/byui-logo-white.png');
        document.querySelector('h3').style.color = "#87AFC7";
        document.querySelector('body').style.borderColor = 'white';
    } else {
        document.body.style.backgroundColor = 'white';
        document.querySelector('h1').classList.remove('darkmode');
        document.querySelector('#statement').classList.remove('darkmode');
        document.querySelector('#how').classList.remove('darkmode');
        document.querySelector('#list').classList.remove('darkmode');
        document.querySelector('img').setAttribute('src', 'images/byui-logo.webp');
        document.querySelector('h3').style.color = "#3289cc";
        document.querySelector('body').style.borderColor = 'black';
    }
}           
                    