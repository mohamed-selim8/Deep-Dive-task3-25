const name = "mohamed nabil"
let age = 19
var status = true
let arr = [90, 80, 70]
var x = arr.length
var sum = 0;
for (let i = 0; i < x; i++) {
    sum += arr[i]
}
console.log(sum)//240

var avr = sum / 3
console.log(avr)//80
if (avr >= 60 && avr < 75)
    console.log("good")
else if (avr >= 75)
    console.log("very good")
else if (avr >= 90)
    console.log("excellent")
else {
    console.log("failed")
}

var num_std = prompt("enter number....")
num_std = Number(num_std)
switch (num_std) {
    case (1):
        console.log("math:[grade]")
        break
    case (2):
        console.log("science:[grade]")
        break
    case (3):
        console.log("english:[grade]")
        break
    default:
        console.log("check status")
}

for (let i = 0; i < x; i++)
    console.log(arr[i])

function cala(arr) {
    var total = 0
    for (let i = 0; i < x; i++)
        total += arr[i]
    console.log(total)
}
cala(arr);

function avrr(arr) {
    var I = 0
    for (let i = 0; i < x; i++)
        I += arr[i]
    console.log(I)
    var average = I / 3
    console.log(average)
}
avrr(arr);

var num = 10
while (num < 10) {
    console.log("done")
}
var num2 = 10
do {
    console.log("done")
} while (num2 < 10)

let arr_list = [1, 2, 3, 4, 5, 6]
var size = arr_list.length
var summion = 0;
for (let i = 0; i < size; i++) {
    summion += arr_list[i]
}
console.log(summion)

var summion2 = 0
let i = 0
while (i < size) {
    summion2 += arr_list[i]
    i++
}
console.log(summion2)