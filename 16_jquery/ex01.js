yellow = $('.yellow');
appleBtn = $('.apple');
pineappleBtn = $('.pineapple');
bananaBtn = $('.banana');
melonBtn = $('.melon');

appleBtn.click(function() {
    yellow.html('<img src="./image/apple.jpg">');
});

bananaBtn.click(function() {
    yellow.html('<img src="./image/banana.jpg">');
});

pineappleBtn.click(function() {
    yellow.html('<img src="./image/pineapple.jpg">');
});

melonBtn.click(function() {
    yellow.html('<img src="./image/melon.jpg">');
});

// 이렇게 일일이 하지말고 parameter로 값을 받아서 전환해주면 되잖아 성인아
