/* 
    1-Bakiye görüntüleme
    2-Para çekme
    3-Para yatırma
    4-Çıkış
*/
let opt1 = prompt("işlemler \n1-Bakiye Görüntüleme\n2-Para Çekme\n3-Para Yatırma\n4-Çıkış")
let Bakiye = 1000;


while (opt1 !== "4") {
    opt1 = prompt("işlemler \n1-Bakiye Görüntüleme\n2-Para Çekme\n3-Para Yatırma\n4-Çıkış");

    switch(opt1){
        case "1":
            console.log("Bakiyeniz: " + Bakiye);
            break;

        case "2":
            let tal = Number(prompt("Çekmek istediğiniz miktarı giriniz:   (Bakiyeniz: " + Bakiye + ")"));
            if (tal > Bakiye) {
                console.log("Yetersiz Bakiye");
            } else {
                Bakiye -= tal;
                console.log("Kalan para: " + Bakiye);
            }
            break;

        case "3":
            let tver = Number(prompt("Yatırmak istediğiniz parayı giriniz:   (Bakiyeniz: " + Bakiye + ")"));
            Bakiye += tver;
            console.log("Bakiyeniz: " + Bakiye);
            break;

        case "4":
            console.log("Çıkış yapılıyor..");
            break;

        default:
            console.log("Geçersiz seçim");
            break;
    }
}



