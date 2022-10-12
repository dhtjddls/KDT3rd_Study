var number = document.querySelector('.number');
var minus = document.querySelector('.minus');
var reset = document.querySelector('.reset');
var plus = document.querySelector('.plus');
var cnt = 0;

number.innerHTML = 0;

minus.addEventListener('click', () =>{
    cnt -= 1;
    number.innerHTML = cnt;
    // console.log(cnt);
    if (cnt < 0) {
        number.style.color = 'red';
    }
    else if(cnt > 0) {
        number.style.color = 'blue';
    }
    else {
        number.style.color = 'black';
    }
});

plus.addEventListener('click', () =>{
    cnt += 1;
    number.innerHTML = cnt;
    // console.log(cnt);
    if (cnt < 0) {
        number.style.color = 'red';
    }
    else if(cnt > 0) {
        number.style.color = 'blue';
    }
    else {
        number.style.color = 'black';
    }
});

reset.addEventListener('click', () =>{
    cnt = 0;
    number.innerHTML = cnt;
    number.style.color = 'black';
    // console.log(cnt);
});



