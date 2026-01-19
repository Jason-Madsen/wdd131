
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');
let body = document.body;
let h1 = document.querySelector('h1');
let h2 = document.querySelector('h2');
let statement = document.querySelector('#statement');
let how = document.querySelector('#how');
let list = document.querySelector('#list');
selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        body.style.backgroundColor = '#282828';
        h1.classList.add('darkmode');
        statement.classList.add('darkmode');
        how.classList.add('darkmode');
        list.classList.add('darkmode');
        logo.setAttribute('src', 'images/byui-logo-white.png');
        h2.style.color = "#87AFC7";
        body.style.borderColor = 'white';
    } else {
        body.style.backgroundColor = 'white';
        h1.classList.remove('darkmode');
        statement.classList.remove('darkmode');
        how.classList.remove('darkmode');
        list.classList.remove('darkmode');
        logo.setAttribute('src', 'images/byui-logo.webp');
        h2.style.color = "#3289cc";
        body.style.borderColor = 'black';
    }
}           
                    