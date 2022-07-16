/**
 * Tính diện tích, chu vi hình chữ nhật
 * 
 * Đầu vào
 * - Chiều dài, chiều rộng hình chữ nhật
 * 
 * Xử lý
 * - d là biến chứa giá trị chiều dài hình chữ nhật từ bàn phím
 * - r là biến chứa giá trị chiều dài hình chữ nhật từ bàn phím
 * - S là biến chứa kết quả diện tích hình chữ nhật 
 * - C là biến chứa kết quả chu vi hình chữ nhật
 * - S = d*r;
 * - S = d*2 + r*2; 
 * 
 * Đầu ra
 * kết quả chu vi, diện tích hình chữ nhật
 * 
 */


function chuVi() {
    var chieuRongEl = +document.getElementById("text-rong").value;
    var chieuDaiEl = +document.getElementById("text-dai").value;
    var C = (chieuDaiEl + chieuRongEl) * 2;
    document.getElementById("text-chuVi").innerHTML = "<p>" + ' ( ' + chieuDaiEl + ' + ' + chieuRongEl + ' ) ' + ' * ' + ' 2 ' + ' = ' + C + "</p>"
    console.log(chieuDaiEl, chieuRongEl, C);
}

function dienTich() {
    var chieuRongEl = +document.getElementById("text-rong").value;
    var chieuDaiEl = +document.getElementById("text-dai").value;
    var S = chieuDaiEl * chieuRongEl;
    document.getElementById("text-dienTich").innerHTML = "<p>" + chieuDaiEl + ' * ' + chieuRongEl + ' = ' + S + "</p>"
    console.log(chieuDaiEl, chieuRongEl, S);
}