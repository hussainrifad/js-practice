let option = window.prompt(`1. Grade making
2. Even odd
3. Sort array
4. Leap Year
5. Divisible by 3 and 5
6. Large name
7. Unique number
8. Largest number
9. Monthly savings
 Enter task number`);

const monthly_savings = (payments, li_cost) =>{
    let total_payments = 0;
    for(let payment of payments){
        payment = parseInt(payment);
        if(payment >= 3000){
            let after_tax = payment - payment*0.2;
            total_payments += after_tax;
        }
        else{
            total_payments += payment;
        }
    }
    let savings = total_payments - parseInt(li_cost);
    if(savings >= 0){
        return savings;
    }
    else{
        return 'earn more';
    }
}

option = parseInt(option);
if(option == 1){
    let marks = window.prompt('enter number');
    if(marks>=80 && marks<=100){
        console.log('A+');
    }
    else if(marks>=70 && marks<80){
        console.log('A');
    }
    else if(marks>=60 && marks<70){
        console.log('A-');
    }
    else if(marks>=50 && marks<60){
        console.log('B');
    }
    else if(marks>=40 && marks<50){
        console.log('C');
    }
    else if(marks>=0 && marks<34){
        console.log('F');
    }
    else {
        console.log('invalid marks');
    }
}
else if(option == 2){
    let number = window.prompt('enter number');
    if(number % 2 == 0){
        console.log('number is even');
    }
    else{
        console.log('number is odd');
    }
}
else if(option == 3){
    let numbers = window.prompt('enter array');
    numbers = numbers.split(' ');
    let arr = [];
    for(let n of numbers){
        arr.push(parseInt(n));
    }
    arr.sort((a, b) => a-b);
    console.log(arr);
}   
else if(option == 4){
    const year = parseInt(window.prompt('enter year'));
    if((0 == year % 4) && (0 != year % 100) || (0 == year % 400)){
        console.log('Leap year');
    }
    else{
        console.log('Not Leap year');
    }
}
else if(option == 5){
    for(let i = 1; i <= 50; i++){
        if(i%3 == 0 && i%5 == 0){
            console.log(`${i} divisible by 3 and 5`);
        }
    }
}
else if(option == 6){
    var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
    let large_name = friends[0];
    for(let i = 0; i < friends.length-1; i++){
        if(friends[i].length > friends[i+1]){
            large_name = friends[i];
        }
        else{
            large_name = friends[i+1];
        }
    }
    console.log(large_name);
}
else if(option == 7){
    var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
    var newNumber = [];
    numbers.push(numbers[0])
    for(let i = 1; i < numbers.length; i++){
        if(numbers[i] != newNumber[newNumber.length-1]){
            newNumber.push(numbers[i]);
        }
    }
    numbers = newNumber;
    console.log(numbers);
}

else if(option == 8){
    var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
    let mx = numbers[0];
    for(let n of numbers){
        mx = Math.max(n, mx);
    }
    console.log(mx);
}
else if(option == 9){
    let payments = window.prompt('enter all payments');
    payments = payments.split(' ');
    let arr_payments = [];
    for(let n of payments){
        arr_payments.push(n);
    }
    let living_cost = window.prompt('enter living costs');
    // if()
    console.log((monthly_savings(payments, living_cost)));
}