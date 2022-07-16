/**
 * Tính giá trị trung bình 5 chữ số
 * 
 * Đầu vào
 * - giá trị có 5 số thực
 * 
 * Xử lý
 * - n là biến chứa 5 số thực
 * - Tách 5 số thực:
 *      a là kết quả giá trị đầu tiên = Math.floor(n/10000);
 *      b là kết quả giá trị thứ hai = Math.floor(n/1000)%10;
 *      c là kết quả giá trị thứ ba = Math.floor(n/100)%10;
 *      d là kết quả giá trị thứ tư = Math.floor(n/10)%10;
 *      e là kết quả giá trị thứ năm = Math.floor(n%10);
 * - sum = ((a+b+c+d+e)/5)*100
 * Đầu ra
 * trung bình cộng của 5 số thực
 * 
 */

var numberEl = document.getElementById("text-number");
function handleEl() {
    console.log("yes");
    var n = numberEl.value, a, b, c, d, e, sum = 0;
    a = Math.floor(n/10000);
    b = Math.floor(n/1000)%10;
    c = Math.floor(n/100)%10;
    d = Math.floor(n/10)%10;
    e = Math.floor(n%10);
    sum = ((a+b+c+d+e)/5);
    console.log(a, b, c, d, e, sum);
    document.getElementById("sum").innerHTML = "<p>" + '( ' + a + ' + ' + b + ' + ' + c + ' + ' + d + ' + ' + e + ' ) ' + ' / ' + ' 5 ' + ' = ' + sum +  "</p>";
}