//  Bài tập 1
document.getElementById('btnKetqua2').onclick = function () {
    //input
    let ngay = +document.getElementById('ngay').value;
    let thang = +document.getElementById('thang').value
    let nam = +document.getElementById('nam').value;
    let dayNext = 0;
    let monthNext = 0;
    let yearNext = 0;
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
            } else if (ngay > 31 || ngay < 1) {
                dayNext = 0;
                monthNext = 0;
                yearNext = 0;
            } else {
                dayNext = ngay + 1
                monthNext = thang;
                yearNext = nam;
            } break
        case 4:
        case 6:
        case 9:
        case 11:
            if (ngay == 30) {
                dayNext = 1;
                monthNext = thang == 12 ? 1 : thang + 1;
                yearNext = thang == 12 ? nam + 1 : nam;
            } else if (ngay > 30 || ngay < 1) {
                dayNext = 0;
                monthNext = 0;
                yearNext = 0;
            } else {
                dayNext = ngay + 1
                monthNext = thang;
                yearNext = nam;
            } break
        case 2:
            if (nam % 4 == 0 && nam % 100 != 0) {
                if (ngay == 29) {
                    dayNext = 1;
                    monthNext = 3;
                    yearNext = nam;
                } else if (ngay > 29 || ngay < 1) {
                    // dayNext = 0;
                    // monthNext = 0;
                    // yearNext = 0;
                    alert
                } else {
                    dayNext = ngay + 1
                    monthNext = thang;
                    yearNext = nam
                }
            } else {
                if (ngay == 28) {
                    dayNext = 1
                    monthNext = 3
                    yearNext = nam
                }
                else if (ngay > 28 || ngay < 1) {
                    dayNext = 0
                    monthNext = 0
                    yearNext = 0
                } else {
                    dayNext = ngay + 1
                    monthNext = thang
                    yearNext = nam
                }
            }
    }
    //output
    let ketqua = 'Ngày ' + dayNext + " tháng " + monthNext + " năm " + yearNext;
    document.getElementById('ketqua').innerHTML = ketqua;

}
document.getElementById("btnKetqua").onclick = function () {
    //input
    let ngay = +document.getElementById('ngay').value;
    let thang = +document.getElementById('thang').value;
    let nam = +document.getElementById('nam').value;
    let yesterday = 0;
    let lastMonth = 0;
    let lastYear = 0;
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
            } else if (ngay > 31 || ngay < 1) {
                dayNext = 0;
                monthNext = 0;
                yearNext = 0;
            } else {
                yesterday = ngay - 1
                lastMonth = thang;
                lastYear = nam;
            } break
        case 4:
        case 6:
        case 9:
        case 11:
            if (ngay == 1) {
                yesterday = 30;
                lastMonth = thang == 1 ? 12 : thang;
                lastYear = thang == 1 ? nam - 1 : nam;
            } else if (ngay > 30 || ngay < 1) {
                dayNext = 0;
                monthNext = 0;
                yearNext = 0;
            } else {
                yesterday = ngay - 1
                lastMonth = thang;
                lastYear = nam;
            } break
        case 2:
            if (nam % 4 == 0 && nam % 100 != 0) {
                if (ngay == 1) {
                    yesterday = 29;
                    lastMonth = 1;
                    lastYear = nam;
                } else if (ngay > 29 || ngay < 1) {
                    yesterday = 0;
                    lastMonth = 0;
                    lastYear = 0;
                } else {
                    yesterday = ngay - 1
                    lastMonth = thang;
                    lastYear = nam
                }
            } else {
                if (ngay == 1) {
                    yesterday = 28
                    lastMonth = 1
                    lastYear = nam
                }
                else if (ngay > 28 || ngay < 1) {
                    yesterday = 0
                    lastMonth = 0
                    lastYear = 0
                } else {
                    yesterday = ngay - 1
                    lastMonth = thang
                    lastYear = nam
                }
            }
    }
    //output
    let ketqua = 'Ngày ' + yesterday + " tháng " + lastMonth + " năm " + lastYear;
    document.getElementById('ketqua').innerHTML = ketqua;
}

// Bài tập 2
document.getElementById('btnKetqua3').onclick = function(){
    //input
    let month = +document.getElementById('month').value;
    let year = +document.getElementById('year').value;
    let guessDay = 0;
    //progress
    if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12){
        guessDay = 31
    }else if (month == 4 || month == 6 || month == 9 ||month == 11 ){
        guessDay = 30;
    }else if(month == 2) {
        if(year % 4 == 0 && year % 100 != 0){
            guessDay = 29
        }else{
            guessDay = 28
        }

    }
}