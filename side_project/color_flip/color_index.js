let btn = document.getElementById('target');
let center_bar = document.getElementById('c_bar');
let hex = document.querySelector('.hex');
let simple = document.querySelector('.simple')



btn.addEventListener('click', function(event) {
    let randomRgbColor = `rgb(${(Math.floor(Math.random() * 256))}, ${(Math.floor(Math.random() * 256))}, ${(Math.floor(Math.random() * 256))})`
    document.body.style.backgroundColor = randomRgbColor;
    btn.style.backgroundColor = document.body.style.backgroundColor;
    center_bar.innerText = `background-color: ${randomRgbColor}`;
});

hex.addEventListener('click', function (event) {

    btn.addEventListener('click', function(event) {
        let hexColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
        document.body.style.backgroundColor = hexColor;
        btn.style.backgroundColor = document.body.style.backgroundColor;
        center_bar.innerText = `background-color: ${hexColor}`;
    });

})

simple.addEventListener('click', function (event) {
    btn.addEventListener('click', function(event) {
        let randomRgbColor = `rgb(${(Math.floor(Math.random() * 256))}, ${(Math.floor(Math.random() * 256))}, ${(Math.floor(Math.random() * 256))})`
        document.body.style.backgroundColor = randomRgbColor;
        btn.style.backgroundColor = document.body.style.backgroundColor;
        center_bar.innerText = `background-color: ${randomRgbColor}`;
    });
})