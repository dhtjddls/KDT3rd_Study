function call(name) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            // let result = console.log(name);
            // resolve(result);
            console.log(name);
            resolve(name);
        }, 1000);
    })
}

function back(txt) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            
            console.log(txt);
            resolve(txt);
        }, 1000);
    })
}

function hell() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            let msg = "callback hell"
            resolve(msg);
        }, 1000);
    })
}

// call('kim')
//     .then(function (name) {
//         console.log(name + ' 반가워');
//     })
//     .then(back().then(function(txt){
//         console.log(txt + ' 을 실행했구나')
//     }))
//     .then(hell().then(function (message) {
//         console.log('여기는 ' + message)
//     }));




    async function exec() {
        let user = await call('kim');
        console.log(user + '님 환영합니다.');
        let hi = await back('back');
        console.log(hi + "를 실행했구나");
        let msg = await hell();
        console.log("여기는 " + msg);
    }

exec();