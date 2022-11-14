const loginForm = document.forms['loginForm'];
const loginBtn = document.querySelector('.loginBtn');

loginBtn.addEventListener('click', () => {
    axios({
        method :'POST',
        url: '/postLogin',
        data : {
            userid: loginForm.userid.value,
            pw: loginForm.pw.value,
        }
    })
})



