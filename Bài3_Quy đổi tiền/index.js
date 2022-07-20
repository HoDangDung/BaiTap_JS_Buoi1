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



function handleEl() {
    var moneyEL = +document.getElementById("text-money").value;
    var sum, current = Intl.NumberFormat("vn-VN");
    sum = moneyEL * 23500;
    document.getElementById("sum").innerHTML = "<p>" + current.format(sum) + ' VNĐ'+"</p>";
    console.log(sum);
}