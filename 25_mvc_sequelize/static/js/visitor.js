const tbody = document.querySelector('tbody');
let form = document.forms['visitor-form'];
const btnGroup = document.querySelector('.button-group');

    // 생성
    function createVisitor() {
        if (form.name.checkValidity() === false || form.comment.checkValidity() === false){
            alert('입력창을 채워주세요!');
            return
        }
        if (form.name.value.length > 10){
            alert('이름이 너무 길어요! ex) 이름: 10글자 이하');
            return
        }
            axios({
            method : 'POST',
            url: '/visitors/write',
            data: {
                name: form.name.value,
                comment: form.comment.value,
            }
            })
            .then((res) => {
                return res.data;
            })
            .then((data) => {
                const html = `
                    <tr id="tr_${data.id}">
                    <td>${data.id}</td>
                    <td>${data.name}</td>
                    <td>${data.comment}</td>
                    <td><button type="button" onclick="editVisitor(${data.id});">수정</button></td>
                    <td><button type="button" onclick="deleteVisitor(this, ${data.id});">삭제</button></td>
                    </tr>`;

                // insertAdjacentHTML: 특정 요소에 html 추가
                // vs. innerHTML: 기존 노드 지우고 덮어씌움
                // https://developer.mozilla.org/ko/docs/Web/API/Element/insertAdjacentHTML
                // https://chlolisher.tistory.com/158
                tbody.insertAdjacentHTML('beforeend', html); // ver. js
                // $('tbody').append(html); // ver. jquery
        })
        clearInput();
        } 




    // 삭제
    function deleteVisitor(obj, id) {
        let bol = confirm("정말 삭제하시겠습니까?");
        if (bol) {
            axios({
            method : 'delete',
            url: '/visitors/delete',
            data: {
                id : id,
            }
            })
            .then((res) => {
                return res.data;
            })
            .then((data) => {
                obj.closest(`#tr_${id}`).remove();
            })
        }
    }   

    // 변경
    async function editVisitor(id) {
        
        const html = `
        <button type="button" onclick="editDo(${id});">변경</button>
        <button type="button" onclick="editNo();">취소</button>
        `;
        btnGroup.innerHTML = html;
        const result = await axios({
            method : 'get',
            url: `/visitors/get/id=${id}`,
            params: {
                id: id
            }
        })
        .then((res) => {
            return res.data
        });
        form.name.value = result.name;
        form.comment.value = result.comment;
    }

    function editDo(id) {
        if (form.name.checkValidity() === false || form.comment.checkValidity() === false){
            alert('입력창을 채워주세요!');
            return
        }
        if (form.name.value.length > 10){
            alert('이름이 너무 길어요! ex) 이름: 10글자 이하');
            return
        }
        axios({
            method : 'patch',
            url: '/visitors/patch',
            data: {
                id : id,
                name: form.name.value,
                comment: form.comment.value,
            }
            })
            .then((res) => {
                return res.data
            })
            .then((data) => {
                console.log(form.name.value);
                alert(data)
            })
            
            const children = document.querySelector(`#tr_${id}`).children;
            children[1].innerText = form.name.value;
            children[2].innerText = form.comment.value;
            editNo();
    }

    function editNo() {
        clearInput();
        const html = `
        <button type="button" onclick="createVisitor();">등록</button>
        `;
        btnGroup.innerHTML = html;
    }

    // 초기화 함수
    function clearInput() {
        form.name.value = ''
        form.comment.value = ''
    }