console.log(document); // js
console.log($(document)); // jquery

// 1. Load Event
// jquery
$(document).ready(function() {
    console.log('ready - 문서의 dom 트리가 완성되면 실행')
});

$(function () {
    console.log('안녕?');
});

// js
document.addEventListener('DOMContentLoaded', function () {
    console.log('domcontentloaded - 문서의 dom 트리가 완성되면 실행');
})

// mouse event

$('.p-msg').click(() => {
    $('.p-msg').css('color' , 'red');
})

console.log($('.num')); // length: 4
$('.num').click(function() {
    // $('.num').css('color', 'blue');
    // $(this): 자기자신을 의미
    $(this).css('color', 'blue');
    console.log($(this)); // 클릭이 발생한 그 요소를 의미
});

// $('.numbers').mouseover(function(){
//     $(this).css('background-color', 'skyblue');
//     $(this).append('<div>mouseover called!</div>');
// });

// hover(): 마우스 올렸을 때, 떼었을 때
// hover(inFunc, outFunc)
$('.div-hover').hover(
    function () {
        $(this).addClass('hover');
    },
    function () {
        $(this).removeClass('hover');
    }
)

$('#todo-form').submit(function(e) {
    e.preventDefault();

    const todo = $('input[name="todo"]').val();
    $('.todos').append(`<li>${todo}</li>`);
    $('input[name="todo"]').val('');

})