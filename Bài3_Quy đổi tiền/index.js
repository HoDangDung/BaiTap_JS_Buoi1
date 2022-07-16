/**
 * 
 * Quy đổi tiền tệ từ USD sang VNĐ
 * 
 * Đầu vào
 * - nhập số tiền giá trị USD
 * 
 * Xử lý
 * - money là biến chứa giá trị người dùng
 * - gán biến dollar có giá trị là 23.500;
 * - lấy kết quả kiểu số thực có 3 giá trị sau dấu chấm
 * - sum = decimals((money * dollar),3)
 * 
 * Đầu ra
 * - xuất ra giá trị $
 * 
 */

var moneyEL = document.getElementById("text-money");

function handleEl() {
    var money = moneyEL.value, sum, dollar = 23.500;
    sum = (money * dollar).toFixed(3);
    document.getElementById("sum").innerHTML = "<p>" + sum + ' VNĐ'+"</p>";
    console.log(sum);
}