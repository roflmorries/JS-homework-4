// 1

let nums = ""

for (let i = 20; i <= 30; i += 0.5) {
    nums += i + " ";
}
console.log(nums);


// 2.

let usdToUah = 42;

for (let i = 10; i <= 100; i += 10) {
    let uah = usdToUah * i;
    console.log(`${i} долларов стоят ${uah}`);
}


// 3.

let num = parseInt(prompt("Введите целое число:"));
for (let i = 1; i <= 100; i++) {
    if (i * i <= num) {
        console.log(i);
    }
}


// 4.

const userNum = parseInt(prompt("Введите целое число:"));

let isPrime = true;


if (!userNum >= 1) {
    isPrime = false;
} else {
    for (let i = 2; i < userNum; i++) {
        if (userNum % i === 0) {
            isPrime = false;
            break;
        }
    }
}

console.log(`${userNum} является простым числом: ${isPrime}`);


// 5.

const userNum = parseInt(prompt("Введите целое число:"));

let isPower3rd = false;

for (let i = 1; i <= userNum; i *= 3) {
    if (i === userNum) {
        isPower3rd = true;
        break;
    }
}

console.log(`${userNum} можно получить путем возведения числа 3 в степень: ${isPower3rd}`);