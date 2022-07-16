/**
 * Tính tổng 2 ký số
 * 
 * Đầu vào
 * - cho người nhập 2 ký số
 * 
 * Xử lý
 * - n là biến chứa 2 ký số từ bàn phím
 * - a là biến chứa ký số đầu tiên: a = Math.floor(n/10);
 * - b là biến chứa ký số thứ hai: b =  Math.floor(n%10);
 * - sum là tổng hai ký số: sum = a+b;
 * 
 * Đầu ra
 * - Tổng 2 ký số
 * 
 */

var numberEl = document.getElementById("text-number");

function handleEl() {
    console.log("yes");
    var number = numberEl.value, a , b;
    a = Math.floor(number/10);
    b = Math.floor(number%10);
    document.getElementById("sum").innerHTML = "<p>"+ a + ' + ' + b + ' = ' + (a+b) + "</p>"
    console.log(a+b);
}