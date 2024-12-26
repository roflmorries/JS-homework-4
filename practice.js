// 1.

let numbers = "";

for (let i = 10; i <= 20; i++) {
    numbers += i;

    if (i < 20) {
        numbers += ", ";
    }

}
document.write(numbers);


// 2.

let numbers = "";

for (let i = 10; i <= 20; i++) {
    numbers += i * i;

    if (i < 20) {
        numbers += ", ";
    }

}
document.write(numbers);


// 3.

let numbers = "";

for (let i = 1; i <= 10; i++) {
    numbers += `${i} * 7 = ${i * 7}<br>`;
}
document.write(numbers)


// 4.

let sum = 0;

for (let i = 1; i <= 15; i++) {
    sum += i;
}
document.write(`Сумма всех целых чисел от 1 до 15: ${sum}`)


// 5.

let sum = BigInt(1);

for (let i = 15; i <= 35; i++) {

    if (Number.isInteger(i)) {
        sum *= BigInt(i);
    }
}
document.write(`Произведение всех чисел от 15 до 35: ${sum}`)


// 6.

let sum = 0;
let counter = 0;

for (let i = 1; i <= 500; i++) {
    sum += i;
    counter++;
}

let arithmeticAverage = sum / counter;

alert(`${arithmeticAverage} является средним арифметическим всех целых чисел от 1 до 500.`);


// 7.

let sum = 0;

for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
        sum += i;
    }
}

alert(`${sum} - сумма парных чисел от 30 до 80.`)


// 8.

for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        console.log(i)
    }
}


// 9.

const userNum = parseInt(prompt("Введите натуральное число (>0): "));

let divisorCount = 0;
let divisorSum = 0;

console.log(`Все делители числа ${userNum}:`);

for (let i = 1; i <= userNum; i++) {
    if (userNum % i === 0) {
        console.log(i + '');

        if (i % 2 === 0) {
            divisorCount++;
            divisorSum += i;
        }
    }
}

console.log(`Количество парных делителей: ${divisorCount}`);
console.log(`Сумма парных делителей: ${divisorSum}`);


// 10.

for (let i = 1; i <= 10; i++) {
    let row = "";

    for (let j = 1; j <= 10; j++) {
        row += `${i * j}\t`;
    }
    console.log(row);
}