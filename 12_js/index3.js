function addNode() {
    // alert("버튼을 클릭하셨군요!");
    let div = document.getElementById('div1');
    let p = document.createElement('p');
    let img = document.createElement('img');
    img.setAttribute('src', './image/beach.jpg');
    img.setAttribute('alt', 'roopy');
    p.innerText = '버튼을 눌러 만들어진 p 태그';
    p.style.fontWeight = '700';
    p.classList.add('append-p');
    div.append(p, img);
}

function removeNode() {
    // console.log('hi');
    let div = document.querySelector('#div1');
    let p = document.querySelector('#div1 > p');
    let img = document.querySelector('#div1 > img');

    div.removeChild(p);
    div.removeChild(img);
}

let ul = document.querySelector('ul');
let li = document.createElement('li');
li.innerText = '오렌지'


ul.append(li);

let container = document.querySelector('.container');
let img = document.createElement('img');
img.setAttribute('src', './image/beach.jpg');
img.setAttribute('alt', 'roopy');
let title = document.createElement('div');
title.innerText = '루피다 임마'

container.append(img, title);


