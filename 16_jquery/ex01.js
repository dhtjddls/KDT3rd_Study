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