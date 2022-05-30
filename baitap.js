// Bài 1: Tính tiền lương nhân viên
//Mô hình 3 khối
//giả sử người đó làm trong 1 tháng => 30 ngày

// - Đầu vào
// + Số Tiền Lương 1 ngày : 100.000
// + Số ngày làm mà người dùng nhập vào: 30 ngày

// - Xử lí
// + Khai báo biến oneday và gán giá trị là số lương 1 ngày: 100000
// + Khai báo biến days và gán giá trị là số ngày làm: 30 (ngày)
// + Khai báo biến onemonth và gán giá trị là số tiền lương một tháng mà người đó làm được.
// + tiền lương 1 tháng = tiền lương 1 ngày * 30 
// - Đầu ra
// + Số Tiền lương 1 tháng 

var oneDay = 100000;
var days = 30;
var oneMonth = oneDay * days;

console.log("tiền lương 1 tháng: " + oneMonth);

//Bài tập 2: tính giá trị trung bình
//Mô hình 3 khối 

// - Đầu vào
// + cho 5 số thực : 1 2 3 4 5
// - Xử lý
// + khai báo biến a gán giá trị là 1 
// + khai báo biến b gán giá trị là 2
// + khai báo biến c gán giá trị là 3
// + khai báo biến d gán giá trị là 4
// + khai báo biến e gán giá trị là 5 
// + khai báo biến chứa giá trị trung bình của 5 số thực từ đầu vào
// + giá trị tb = tổng giá trị của các số thực / số lượng số thực nhập vào
// - Đầu ra
// + Giá trị trung bình của 5 số: 1 2 3 4 5

var a = 1;
var b = 2;
var c = 3;
var d = 4;
var e = 5;

var tb = (a + b + c + d + e) / 5;
console.log("giá trị trung bình của 5 số thực: " + tb);

//bài tập 3: Quy đổi tiền

// - đầu vào
// + 1 usd = 23.500vnđ
// + giả sử số tiền usd do người dùng nhập vào là 10
// - xử lí
// + khai báo biến vnd gán giá trị là 23500 tương đương với 1 usd
// + khai báo biến n gán giá trị 10 là số tiền usd người dùng nhập vào
// + số tiền vnđ quy đổi từ n usd = (n/1) * 23500 = n * 23500
// - đầu ra 
// + số tiền vnd tương đương với 10 usd

var vnd = 23500;
var n = 10;

var total = n * vnd;

console.log("số tiền vnđ quy đổi từ 10 usd: " + total);

//bài tập 4 tính diện tích, chu vi
//mô hình 3 khối
// - đầu vào
// + chiều dài, chiều rộng 
// + giả sử số tiền usd do người dùng nhập vào là 10
// - xử lí
// + khai báo biến a gán giá trị là 4 là chiều dài của 1 HCN
// + khai báo biến b gán giá trị là 3 là chiều rộng của 1 HCN
// + khai báo biến S là diện tích của 1 HCN
// + khai báo biến C là chu vi của 1 HCN
// + diện tích = dài * rộng
// + chu vi = (dài + rộng) * 2
// - đầu ra 
// + diện tích HCN
// + chu vi HCN

var a = 4;
var b = 3;

var s = a*b;
var c = (a + b) * 2;
console.log("diện tích của hcn là: " + s);
console.log("chu vi của hcn là: " + c);

//bài tập 5 : tính tổng 2 ký số
//mô hình 3 khối 

// - đầu vào
// + Cho số đầu vào là 18. Có hai ký số: 1 và 8
// - xử lí 
// + Khai báo biến num gán giá trị là 18
// + tách lấy hàng chục => num % 10 / 10=> làm tròn số Math.floor(num / 10)
// + tách lấy hàng đơn vị => n % 10
// + tổng = hàng chục + hàng đơn vị
//-  đầu ra
// + tổng 2 ký số 

var num = 18;
var chuc = Math.floor(num % 100 / 10);
var donVi = num % 10;

var tong = chuc + donVi;
console.log("tổng 2 ký số: " + tong);

