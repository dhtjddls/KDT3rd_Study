let name = document.querySelector('.name');
let sentence = document.querySelector('.sentence');
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let random = document.querySelector('.random');
let img = document.querySelector('.photo');
var defaul = 1


prev.addEventListener('click', function() {
    defaul -= 1;
    if (defaul <= 0) {
        defaul = 3;
    };

    name.innerText = nameArray[defaul-1];
    sentence.innerText = sentenceArray[defaul-1];
    img.src = `./image/img${defaul}.jpg`
    
    
});

next.addEventListener('click', function() {
    defaul += 1;
    if (defaul > 3) {
        defaul = 1;
    };
    name.innerText = nameArray[defaul-1];
    sentence.innerText = sentenceArray[defaul-1];
    img.src = `./image/img${defaul}.jpg`
    
    
});

random.addEventListener('click', function() {
    let randIndx = Math.floor(Math.random() * 3) + 1;
    img.src = `./image/img${randIndx}.jpg`
    name.innerText = nameArray[randIndx-1];
    sentence.innerText = sentenceArray[randIndx-1];
});




nameArray = ['Susan', 'Katie', 'Megan'];
sentenceArray = ["i'm a pretty girl", 'my name is Katie...', "i'm megan my job is web developer..."];
