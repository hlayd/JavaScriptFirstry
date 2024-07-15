let kilo = Number(prompt("Kilonuzu giriniz"));
let boy = Number(prompt("Boyunuzu  giriniz(metre)"));

let sonuc = kilo/(boy*2);

if(sonuc <18.5){
    console.log("ideal kilonun altında"+sonuc);

}else if(sonuc >=18.5 && sonuc<=24.9){
    console.log("ideal kilonun kiloda"+sonuc);
    
}else if(sonuc >= 25 &&  sonuc <=29.9){
    console.log("ideal kilonun üstünde");

}else if(sonuc >= 30 &&  sonuc <=39.9){
    console.log("obez");

}else if(sonuc >= 40){
    console.log("morbid obez");
}