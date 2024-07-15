/*
    1-Dizel   : 24.53
    2-Benzin  : 22.25
    3-LPG     : 11.1

    Gelen müşterinden alınacak bilgiler;
    1-Yakıt tipi
    2-Yüklenecek yakıt litresi
    3-Müşterinin parası
    4-Müşterinin kalan parası
*/
let type =prompt("Lütfen takıt türünü seçiniz\n1)Dizel  :24.53\n2)Benzin    :22.25\n3)LPG   :11.1")
if(type == 1){
    let litre = Number(prompt("Yüklenecek Yakıt litresini yazınız:  "));
    tutar = litre * 24.53
    let bakiye = Number(prompt("toplam tutarınız"+tutar+"elinizdeki parayı giriniz"));
    exit = bakiye - tutar
    if(exit >= 0){
        alert("İşlem başarıyla gerçekleştirilmiştir kalan bakiyeniz"+exit);
    }else{
        alert("işlem başarısız yetersiz bakiye");
    }
}else if(type = 2){
    let litre = Number(prompt("Yüklenecek Yakıt litresini yazınız:  "));
    tutar = litre * 22.25
    let bakiye = Number(prompt("toplam tutarınız"+tutar+"elinizdeki parayı giriniz"));
    exit = bakiye - tutar
    if(exit >= 0){
        alert("İşlem başarıyla gerçekleştirilmiştir kalan bakiyeniz"+exit);
    }else{
        alert("işlem başarısız yetersiz bakiye");
    }
}else if(type == 3){
    let litre = Number(prompt("Yüklenecek Yakıt litresini yazınız:  "));
    tutar = litre * 11.1
    let bakiye = Number(prompt("toplam tutarınız"+tutar+"elinizdeki parayı giriniz"));
    exit = bakiye - tutar
    if(exit >= 0){
        alert("İşlem başarıyla gerçekleştirilmiştir kalan bakiyeniz"+exit);
    }else{
        alert("işlem başarısız yetersiz bakiye");
    }
}else{
    alert("geçersiz seçim yaptınız");
}
