/**
 * Mô Hình Ba Khối
 * 
 * Đầu vào
 * - số lương một ngày
 * - số ngày làm 
 * 
 * Xử lý
 * - moneyDay: số tiền lương một ngày
 * - day: số ngày làm
 * - sum = money * day
 * 
 * Đầu ra
 * - tiền lương nhân viên
 */

var dayEl = document.getElementById("text-day");
var moneyEl = document.getElementById("text-money");
function TinhLuong() {
    var moneyDay = moneyEl.value, dayValue = dayEl.value, sum;
    if (moneyDay != '') {
        sum = moneyDay * dayValue;
    } else {
        sum = 100000 * dayValue;
    }
    document.getElementById("sum").innerHTML = "<p>" + 'Tổng tiền lương: ' + sum +"</p>";
    console.log(sum);
}
