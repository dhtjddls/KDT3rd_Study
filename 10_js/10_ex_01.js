let even_sum = 0;
let odd_sum = 0;
for (let i = 0; i < 100; i++){
    if (i % 2 == 0){
        even_sum += i;
    }
    else if (i % 3 == 0){
        odd_sum += i;
    }
}
console.log(even_sum + odd_sum);