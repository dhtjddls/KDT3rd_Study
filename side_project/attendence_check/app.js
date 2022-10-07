let student = document.querySelectorAll('.student');
let calBtn = document.querySelector('.cal-btn');
let total = document.querySelector('.total');
let att = document.querySelector('.att');
let ab = document.querySelector('.ab');
let nonStu = document.querySelector('.nonStu');
const back = document.querySelector('body');
let reBtn = document.querySelector('.re-btn');
let button = document.querySelectorAll('button');

const darkmodeBtn = document.querySelector('.dark-toggle');

const tipsBtn = document.querySelector('.tips');

calBtn.addEventListener('click', window.btn = function() {
    let totalNum = student.length;
    //  css:checked => 가상 선택자
    const query = 'input[name="sitted"]:checked'; 
    const noquery = 'input[name="sitted"]:not(:checked)';
    const noseleted = document.querySelectorAll(noquery);
    const seleted = document.querySelectorAll(query);
    let abstu = totalNum - seleted.length;
    let attstu = seleted.length;
    let absArr = '';
    total.innerText = `총원 : ${totalNum}`;
    att.innerText = `출석 : ${attstu}`;
    ab.innerHTML = `결석 : ${abstu}`;
    
    for (st of noseleted){
        absArr += st.id + ' ';
    }

    nonStu.innerText = `없는 사람 : ${absArr}`


    
});

back.addEventListener('keydown', (e) =>{
    if (e.code === 'Enter'){
        btn(); 
    }
});

darkmodeBtn.addEventListener('click', () => {
    if (back.classList.contains('dark-mode')) {
        back.classList.remove('dark-mode');
        for(i of button){
            i.classList.remove('dark-mode');
        }
    }
    else {
        back.classList.add('dark-mode');
        for(i of button){
            i.classList.add('dark-mode');
        }
    }
})


tipsBtn.addEventListener('click', () => {
    swal({
        title: "Tab, Spacebar, Enter 키를 사용하세요!",
    });
})

reBtn.addEventListener('click', () => {
    total.innerText = `총원 : `;
    att.innerText = `출석 : `;
    ab.innerHTML = `결석 : `;
    nonStu.innerText = `없는 사람 : `;
    const query = 'input[name="sitted"]:checked'; 
    const seleted = document.querySelectorAll(query);
    for (let i = 0; i < seleted.length; i++) {
        seleted[i].checked = false;
        
    }
});
