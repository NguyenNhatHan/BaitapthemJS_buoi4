//  Bài tập 1
document.getElementById('btnKetqua2').onclick = function () {
    //input
    let ngay = +document.getElementById('ngay').value;
    let thang = +document.getElementById('thang').value
    let nam = +document.getElementById('nam').value;
    let dayNext = 0;
    let monthNext = 0;
    let yearNext = 0;
    let loi = 0;
    // progress
    switch (thang) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            if (ngay == 31) {
                dayNext = 1;
                monthNext = thang == 12 ? 1 : thang + 1;
                yearNext = thang == 12 ? nam + 1 : nam;
                //output
                let ketqua = 'Ngày ' + dayNext + " tháng " + monthNext + " năm " + yearNext;
                document.getElementById('ketqua').innerHTML = ketqua;
            } else if (ngay > 31 || ngay < 1) {
                loi = "Dữ liệu không hợp lệ"
                document.getElementById('ketqua').innerHTML = loi;
            } else {
                dayNext = ngay + 1
                monthNext = thang;
                yearNext = nam;
                //output
                let ketqua = 'Ngày ' + dayNext + " tháng " + monthNext + " năm " + yearNext;
                document.getElementById('ketqua').innerHTML = ketqua;
            } break
        case 4:
        case 6:
        case 9:
        case 11:
            if (ngay == 30) {
                dayNext = 1;
                monthNext = thang == 12 ? 1 : thang + 1;
                yearNext = thang == 12 ? nam + 1 : nam;
                //output
                let ketqua = 'Ngày ' + dayNext + " tháng " + monthNext + " năm " + yearNext;
                document.getElementById('ketqua').innerHTML = ketqua;
            } else if (ngay > 30 || ngay < 1) {
                loi = "Dữ liệu không hợp lệ"
                document.getElementById('ketqua').innerHTML = loi;
            } else {
                dayNext = ngay + 1
                monthNext = thang;
                yearNext = nam;
                //output
                let ketqua = 'Ngày ' + dayNext + " tháng " + monthNext + " năm " + yearNext;
                document.getElementById('ketqua').innerHTML = ketqua;
            } break
        case 2:
            if (nam % 4 == 0 && nam % 100 != 0) {
                if (ngay == 29) {
                    dayNext = 1;
                    monthNext = 3;
                    yearNext = nam;
                    //output
                    let ketqua = 'Ngày ' + dayNext + " tháng " + monthNext + " năm " + yearNext;
                    document.getElementById('ketqua').innerHTML = ketqua;
                } else if (ngay > 29 || ngay < 1) {
                    loi = "Dữ liệu không hợp lệ"
                    document.getElementById('ketqua').innerHTML = loi;
                } else {
                    dayNext = ngay + 1
                    monthNext = thang;
                    yearNext = nam
                    //output
                    let ketqua = 'Ngày ' + dayNext + " tháng " + monthNext + " năm " + yearNext;
                    document.getElementById('ketqua').innerHTML = ketqua;
                }
            } else {
                if (ngay == 28) {
                    dayNext = 1
                    monthNext = 3
                    yearNext = nam
                    //output
                    let ketqua = 'Ngày ' + dayNext + " tháng " + monthNext + " năm " + yearNext;
                    document.getElementById('ketqua').innerHTML = ketqua;
                }
                else if (ngay > 28 || ngay < 1) {
                    loi = "Dữ liệu không hợp lệ"
                    document.getElementById('ketqua').innerHTML = loi;
                } else {
                    dayNext = ngay + 1
                    monthNext = thang
                    yearNext = nam
                    //output
                    let ketqua = 'Ngày ' + dayNext + " tháng " + monthNext + " năm " + yearNext;
                    document.getElementById('ketqua').innerHTML = ketqua;
                }
            }
    }


}
document.getElementById("btnKetqua").onclick = function () {
    //input
    let ngay = +document.getElementById('ngay').value;
    let thang = +document.getElementById('thang').value;
    let nam = +document.getElementById('nam').value;
    let yesterday = 0;
    let lastMonth = 0;
    let lastYear = 0;
    let loi = 0;
    //progress
    switch (thang) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            if (ngay == 1) {
                yesterday = 31;
                lastMonth = thang == 1 ? 12 : thang;
                lastYear = thang == 1 ? nam - 1 : nam;
                //output
                let ketqua = 'Ngày ' + yesterday + " tháng " + lastMonth + " năm " + lastYear;
                document.getElementById('ketqua').innerHTML = ketqua;
            } else if (ngay > 31 || ngay < 1) {
                loi = "Dữ liệu không hợp lệ"
                document.getElementById('ketqua').innerHTML = loi;
            } else {
                yesterday = ngay - 1
                lastMonth = thang;
                lastYear = nam;
                //output
                let ketqua = 'Ngày ' + yesterday + " tháng " + lastMonth + " năm " + lastYear;
                document.getElementById('ketqua').innerHTML = ketqua;
            } break
        case 4:
        case 6:
        case 9:
        case 11:
            if (ngay == 1) {
                yesterday = 30;
                lastMonth = thang == 1 ? 12 : thang;
                lastYear = thang == 1 ? nam - 1 : nam;
                //output
                let ketqua = 'Ngày ' + yesterday + " tháng " + lastMonth + " năm " + lastYear;
                document.getElementById('ketqua').innerHTML = ketqua;
            } else if (ngay > 30 || ngay < 1) {
                loi = "Dữ liệu không hợp lệ"
                document.getElementById('ketqua').innerHTML = loi;
            } else {
                yesterday = ngay - 1
                lastMonth = thang;
                lastYear = nam;
                //output
                let ketqua = 'Ngày ' + yesterday + " tháng " + lastMonth + " năm " + lastYear;
                document.getElementById('ketqua').innerHTML = ketqua;
            } break
        case 2:
            if (nam % 4 == 0 && nam % 100 != 0) {
                if (ngay == 1) {
                    yesterday = 29;
                    lastMonth = 1;
                    lastYear = nam;
                    //output
                    let ketqua = 'Ngày ' + yesterday + " tháng " + lastMonth + " năm " + lastYear;
                    document.getElementById('ketqua').innerHTML = ketqua;
                } else if (ngay > 29 || ngay < 1) {
                    loi = "Dữ liệu không hợp lệ"
                    document.getElementById('ketqua').innerHTML = loi;
                } else {
                    yesterday = ngay - 1
                    lastMonth = thang;
                    lastYear = nam
                    //output
                    let ketqua = 'Ngày ' + yesterday + " tháng " + lastMonth + " năm " + lastYear;
                    document.getElementById('ketqua').innerHTML = ketqua;
                }
            } else {
                if (ngay == 1) {
                    yesterday = 28
                    lastMonth = 1
                    lastYear = nam
                    //output
                    let ketqua = 'Ngày ' + yesterday + " tháng " + lastMonth + " năm " + lastYear;
                    document.getElementById('ketqua').innerHTML = ketqua;
                }
                else if (ngay > 28 || ngay < 1) {
                    loi = "Dữ liệu không hợp lệ"
                    document.getElementById('ketqua').innerHTML = loi;
                } else {
                    yesterday = ngay - 1
                    lastMonth = thang
                    lastYear = nam
                    //output
                    let ketqua = 'Ngày ' + yesterday + " tháng " + lastMonth + " năm " + lastYear;
                    document.getElementById('ketqua').innerHTML = ketqua;
                }
            }
    }
}

// Bài tập 2
document.getElementById('btnKetqua3').onclick = function () {
    //input
    let month = +document.getElementById('month').value;
    let year = +document.getElementById('year').value;
    let guessDay = 0;
    let loi = 0;
    //progress
    if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
        guessDay = 31
        let ketqua2 = 'Tháng ' + month + " Năm " + year + " có " + guessDay + " Ngày";
        document.getElementById('ketqua2').innerHTML = ketqua2
    } else if (month == 4 || month == 6 || month == 9 || month == 11) {
        guessDay = 30;
    } else if (month == 2) {
        if (year % 4 == 0 && year % 100 != 0) {
            guessDay = 29
            let ketqua2 = 'Tháng ' + month + " Năm " + year + " có " + guessDay + " Ngày";
            document.getElementById('ketqua2').innerHTML = ketqua2
        } else {
            guessDay = 28
            let ketqua2 = 'Tháng ' + month + " Năm " + year + " có " + guessDay + " Ngày";
            document.getElementById('ketqua2').innerHTML = ketqua2
        }
    } else if (month > 12 || month < 1) {
        loi = "Dữ liệu không hợp lệ"
        document.getElementById('ketqua2').innerHTML = loi
    }
}

// Bài tập 3
document.getElementById('btnKetqua4').onclick = function () {
    // input
    let so3chuso = +document.getElementById('so3chuso').value;
    let tram = 0
    let chuc = 0
    let donvi = 0
    let tentram = 0;
    let tenchuc = 0
    let tendonvi = 0
    // progress
    donvi += so3chuso % 10;
    so3chuso = Math.floor(so3chuso / 10);
    chuc = so3chuso % 10;
    tram = Math.floor(so3chuso / 10);
    switch (tram) {
        case 1:
            tentram = "Một trăm"
            break
        case 2:
            tentram = "Hai trăm"
            break
        case 3:
            tentram = "Ba trăm"
            break
        case 4:
            tentram = "Bốn trăm"
            break
        case 5:
            tentram = "Năm trăm"
            break
        case 6:
            tentram = "Sáu trăm"
            break
        case 7:
            tentram = "Bảy trăm"
            break
        case 8:
            tentram = "Tám trăm"
            break
        case 9:
            tentram = "Chín trăm"
            break
    }
    switch (chuc) {
        case 1:
            tenchuc = "mười"
            break
        case 2:
            tenchuc = "hai mươi"
            break
        case 3:
            tenchuc = "ba mươi"
            break
        case 4:
            tenchuc = "bốn mươi"
            break
        case 5:
            tenchuc = "năm mươi"
            break
        case 6:
            tenchuc = "sáu mươi"
            break
        case 7:
            tenchuc = "bảy mươi"
            break
        case 8:
            tenchuc = "tám mươi"
            break
        case 9:
            tenchuc = "chín mươi"
            break
        case 0:
            tenchuc = "lẻ"
    }
    switch (donvi) {
        case 1:
            tendonvi = "một"
            break
        case 2:
            tendonvi = "hai"
            break
        case 3:
            tendonvi = "ba"
            break
        case 4:
            tendonvi = "bốn"
            break
        case 5:
            tendonvi = "năm"
            break
        case 6:
            tendonvi = "sáu"
            break
        case 7:
            tendonvi = "bảy"
            break
        case 8:
            tendonvi = "tám"
            break
        case 9:
            tendonvi = "chín"
            break
        case 0:
            tendonvi = " "
    }
    // output
    let ketqua3 = tentram + " " + tenchuc + " " + tendonvi;
    document.getElementById('ketqua3').innerHTML = ketqua3
}

// Bài tập 4
document.getElementById('btnKetqua5').onclick = function () {
    //input
    let tenhs1 = document.getElementById('tenhs1').value
    let tenhs2 = document.getElementById('tenhs2').value
    let tenhs3 = document.getElementById('tenhs3').value
    let xhs1 = +document.getElementById('xhs1').value;
    let xhs2 = +document.getElementById('xhs2').value;
    let xhs3 = +document.getElementById('xhs3').value;
    let yhs1 = +document.getElementById('yhs1').value;
    let yhs2 = +document.getElementById('yhs2').value;
    let yhs3 = +document.getElementById('yhs3').value;
    let truongX = +document.getElementById('truongX').value
    let truongY = +document.getElementById('truongY').value
    let khoangcach1 = 0;
    let khoangcach2 = 0;
    let khoangcach3 = 0;
    let hsxanhat = 0;
    let hsbangnhau = 0;
    //progress
    khoangcach1 = Math.sqrt(Math.pow(truongX - xhs1, 2) + Math.pow(truongY - yhs1, 2));
    khoangcach2 = Math.sqrt(Math.pow(truongX - xhs2, 2) + Math.pow(truongY - yhs2, 2));
    khoangcach3 = Math.sqrt(Math.pow(truongX - xhs3, 2) + Math.pow(truongY - yhs3, 2));
    if (khoangcach1 > khoangcach2 && khoangcach1 > khoangcach3) {
        hsxanhat = tenhs1
        let ketqua4 = "Học sinh xa trường nhất là " + hsxanhat;
        document.getElementById('ketqua4').innerHTML = ketqua4;
    } else if (khoangcach2 > khoangcach1 && khoangcach2 > khoangcach3) {
        hsxanhat = tenhs2
        let ketqua4 = "Học sinh xa trường nhất là " + hsxanhat;
        document.getElementById('ketqua4').innerHTML = ketqua4;
    } else if (khoangcach1 == khoangcach2 && khoangcach1 == khoangcach3) {
        hsbangnhau = tenhs1 + ", " + tenhs2 + ", " + tenhs3
        document.getElementById('ketqua4').innerHTML = "Khoảng cách của 3 học sinh " + hsbangnhau + " đều bằng nhau"
    }
    else {
        hsxanhat = tenhs3
        let ketqua4 = "Học sinh xa trường nhất là " + hsxanhat;
        document.getElementById('ketqua4').innerHTML = ketqua4;
    }
}

