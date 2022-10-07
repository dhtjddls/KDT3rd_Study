let student = document.querySelectorAll('.student');
let calBtn = document.querySelector('.cal-btn');
let total = document.querySelector('.total');
let att = document.querySelector('.att');
let ab = document.querySelector('.ab');
let nonStu = document.querySelector('.nonStu');
const back = document.querySelector('body');


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



