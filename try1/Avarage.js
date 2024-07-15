let midterm1 = Number(prompt("1. Vize notunuzu giriniz:"));
let midterm2 = Number(prompt("2. Vize notunuzu giriniz:"));

let final = Number(prompt("final notunuzu giriniz:"));

//avarage
let ortalama = (midterm1*0.3) + (midterm2*0.3) + (final*0.4);

if(ortalama >= 60){

    alert("Dersten geçtiniz");
    console.log("Dersten geçtiniz");

}else{
    alert("Dersten Kaldınz");
    console.log("Dersten Kaldınız");
    
}

