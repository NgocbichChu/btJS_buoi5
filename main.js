// bai1:

const submitB1 = document.getElementById("submitB1");
submitB1.onclick = function () {
  const benchmark = document.getElementById("benchmark").value * 1;
  const subject_1 = document.getElementById("subject_1").value * 1;
  const subject_2 = document.getElementById("subject_2").value * 1;
  const subject_3 = document.getElementById("subject_3").value * 1;
  const area = document.getElementById("area").value * 1;
  const Contest = document.getElementById("Contest").value * 1;
  var ketQua = "";

  const tongDiem = subject_1 + subject_2 + subject_3 + (area + Contest);
  if (subject_1 == 0 || subject_2 == 0 || subject_3 == 0) {
    ketQua = "Rớt vì bạn có môn 0 điểm";
  } else if (tongDiem >= benchmark) {
    ketQua = "Chúc mừng bạn đã Đậu!!";
  } else {
    ketQua = "Bạn đã Rớt vì không đủ điểm";
  }
  var result = "";
  const footerB1 = document.getElementById("footerB1");
  result += "<p class='alert alert-primary'> " + ketQua + "</p>";
  result +=
    "<p class='alert alert-primary'> Tổng điểm của bạn là:  " +
    tongDiem +
    "</p>";
  footerB1.innerHTML = result;
};

// bai2
const tien50kwDau = 500;
const tien50kwKe = 650;
const tien100kwKe = 850;
const tien150kwKe = 1100;
const conLai = 1300;

const submitB2 = document.getElementById("submitB2");
submitB2.onclick = function () {
  var name = document.getElementById("name").value;
  var soKw = document.getElementById("soKw").value * 1;
  var tienDien = 0;
  if (soKw < 50) {
    tienDien = soKw * conLai;
  } else if (soKw >= 50 && soKw < 100) {
    tienDien = 50 * tien50kwDau + (soKw - 50) * conLai;
  } else if (soKw >= 100 && soKw < 200) {
    tienDien = 50 * tien50kwDau + 50 * tien50kwKe + (soKw - 100) * conLai;
  } else if (soKw >= 200 && soKw < 350) {
    tienDien =
      50 * tien50kwDau +
      50 * tien50kwKe +
      100 * tien100kwKe +
      (soKw - 200) * conLai;
  } else if (soKw >= 350) {
    tienDien =
      50 * tien50kwDau +
      50 * tien50kwKe +
      100 * tien100kwKe +
      150 * tien150kwKe +
      (soKw - 350) * conLai;
  }
  var result = "";
  const footerB2 = document.getElementById("footerB2");
  result += "<p class='alert alert-primary'> Tên khách hàng " + name + "</p>";
  result +=
    "<p class='alert alert-primary'> Tiền điện của bạn là:  " +
    tienDien +
    "</p>";

  footerB2.innerHTML = result;
};
//bai 3
const submitB3 = document.getElementById("submitB3");
submitB3.onclick = function () {
  const fullName = document.getElementById("fullName").value;
  const yearlyIncome = document.getElementById("yearlyIncome").value * 1;
  const person = document.getElementById("person").value * 1;

  var incomeTaxes = yearlyIncome - 4 - person * 1.6;
  var personalIncomeTax = 0;
  if (incomeTaxes <= 60) {
    personalIncomeTax += incomeTaxes * (5 / 100);
  } else if (incomeTaxes > 60 && incomeTaxes <= 120) {
    personalIncomeTax += incomeTaxes * (10 / 100);
  } else if (incomeTaxes > 120 && incomeTaxes <= 210) {
    personalIncomeTax += incomeTaxes * (15 / 100);
  } else if (incomeTaxes > 210 && incomeTaxes <= 384) {
    personalIncomeTax += incomeTaxes * (20 / 100);
  } else if (incomeTaxes > 384 && incomeTaxes <= 624) {
    personalIncomeTax += incomeTaxes * (25 / 100);
  } else if (incomeTaxes > 624 && incomeTaxes <= 960) {
    personalIncomeTax += incomeTaxes * (30 / 100);
  } else if (incomeTaxes > 960) {
    personalIncomeTax += incomeTaxes * (35 / 100);
  }
  var result = "";
  const footerB3 = document.getElementById("footerB3");
  result +=
    "<p class='alert alert-primary'> Tên khách hàng" + fullName + "</p>";
  result +=
    "<p class='alert alert-primary'> Thuế thu nhập cá nhân là:  " +
    personalIncomeTax +
    " triệu </p>";

  footerB3.innerHTML = result;
};
//bai4
//nha dan
const billND = 4.5;
const serviceND = 20.5;
const kenhCaoCap = 7.5;
//doanh nghiep
const billDN = 15;
const serviceDN = 75;
const serviceDNThem = 5;
const kenhCaoCapDN = 50;

const submitB4 = document.getElementById("submitB4");
function showHiddenConnect() {
  const khachHang = document.getElementById("khachHang").value;
  var soKetNoiGroup = document.getElementById("soKetNoiGroup");
  if (khachHang === "ND") {
    soKetNoiGroup.style.display = "none";
  } else if (khachHang === "DN") {
    soKetNoiGroup.style.display = "block";
  }
}
function tinhHoaDonKH() {
  const khachHang = document.getElementById("khachHang").value;
  const conect = document.getElementById("conect").value * 1;
  const kenhCC = document.getElementById("kenhCC").value * 1;
  var ketQua = 0;
  var phiDichVu = 0;
  if (khachHang === "ND") {
    ketQua += billND + serviceND + kenhCC * kenhCaoCap;
  } else if (khachHang === "DN") {
    phiDichVu = serviceDN + (conect > 10 ? (conect - 10) * serviceDNThem : 0);
    ketQua += billDN + phiDichVu + kenhCC * kenhCaoCapDN;
  }
  return ketQua;
}

submitB4.onclick = function () {
  const maKH = document.getElementById("maKH").value;
  const khachHang = document.getElementById("khachHang").value;
  const conect = document.getElementById("conect").value * 1;
  const kenhCC = document.getElementById("kenhCC").value * 1;
  var ketQua = tinhHoaDonKH();
  var result = "";

  const footerB4 = document.getElementById("footerB4");
  result += '<p class="alert alert-primary">Mã khách hàng: ' + maKH + "<br>";
  if (khachHang === "ND") {
    result += "Loại khách hàng: Nhà dân" + "<br>";
  } else if (khachHang === "DN") {
    result += "Loại khách hàng: Doanh nghiệp" + "<br>";
    result += "Số kết nối của doanh nghiệp: " + conect + "<br>";
  }
  result += "Số kênh khách hàng đã thuê: " + kenhCC + "<br>";
  result += "Số tiền cáp khách hàng cần thanh toán: " + ketQua + " $</p>";
  footerB4.innerHTML = result;
};
