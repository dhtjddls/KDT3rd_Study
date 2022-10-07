const todoForm = document.querySelector('#todoForm');
const ul = document.querySelector('.todos');
const clickMe = document.querySelector('#clickme');
const todoInput = document.querySelector('input');



clickMe.addEventListener('click', (e) => {
    console.log(e);
});


todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    //  생성
    
    let todoLi = document.createElement('input');
    todoLi.setAttribute('type', 'checkbox');
    
    let todoLabel = document.createElement('label');
    todoLabel.innerText = todoInput.value;
    
    const br = document.createElement('br');

    let removBtn = document.createElement('button');
    removBtn.setAttribute('type', 'button');
    removBtn.innerText = 'X';

    let liContainer = document.createElement('div');
    liContainer.appendChild(todoLi);
    liContainer.appendChild(todoLabel);
    liContainer.appendChild(removBtn);
    liContainer.appendChild(br);


    //  추가
    ul.appendChild(liContainer);

    todoInput.value = '';

    // 제거 버튼 이벤트
    removBtn.addEventListener('click', function() {
        liContainer.remove();
    })
});

// 변경 이벤트(input)
const chgInput = document.querySelector('#change-input');

chgInput.addEventListener('input', function() {
    const div = document.querySelector('.intro');
    div.textContent = chgInput.value;
    // let randomRgbColor = `rgb(${(Math.floor(Math.random() * 256))}, ${(Math.floor(Math.random() * 256))}, ${(Math.floor(Math.random() * 256))})`
    // document.body.style.backgroundColor = randomRgbColor;
})

const keyInput = document.querySelector('#key-input');
keyInput.addEventListener('keydown', (event) =>{

    if (event.code === 'ArrowUp') {
		console.log('UP!')
	} else if (event.code === 'ArrowRight') {
		console.log('RIGHT!')
	} else if (event.code === 'ArrowLeft') {
		console.log('LEFT!')
	} else if (event.code === 'ArrowDown') {
		console.log('RIGHT!')
	} else {
    console.log('others');
	}
});