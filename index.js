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
            if(ngay == 30) {
                dayNext = 1;
                monthNext = thang == 12 ? 1 : thang + 1;
                yearNext = thang == 12 ? nam + 1 : yearNext;
            }else if ( ngay > 30 || ngay < 1){
                dayNext = 0;
                monthNext = 0;
                yearNext = 0;
            }else {
                dayNext = ngay + 1
                monthNext = thang;
                yearNext = nam;
            }break
        case 2:
            if(nam % 4 == 0 && nam % 100 != 0){
                if(ngay == 29){
                    dayNext = 1;
                    monthNext = thang + 1;
                    yearNext = nam;
                }else if (ngay > 29 || ngay < 1){
                    dayNext = 0;
                    monthNext = 0;
                    yearNext = 0;
                }else {
                    dayNext = day + 1
                    monthNext = thang;
                    yearNext = nam
                }
            }   
    }
    //output
    let ketqua = 'Ngày ' + dayNext + " tháng " + monthNext + " năm " + yearNext;
    document.getElementById('ketqua').innerHTML = ketqua;

} 