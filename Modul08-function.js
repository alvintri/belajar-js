// Membuat fungsi
function sayHello(){
    console.log("Hello World!");
 }
  
 // memanggil fungsi
 sayHello() // maka akan  menghasilkan -> Hello World!

 // FUNGSI dengan Parameter
 function kali(a, b){
    hasilKali = a * b;
    console.log("Hasil kali a*b = " + hasilKali);
 }
  
 kali(3, 2); // -> Hasil kali a*b = 6

 //Fungsi yang Mengembalikan Nilai
 function bagi(a,b){
    hasilBagi = a / b;
    return hasilBagi;
 }
  
 // memanggil fungsi
 var nilai1 = 20;
 var nilai2 = 5;
 var hasilPembagian = bagi(nilai1, nilai2);
  
 console.log('Hasil pembagian nilai1 dan nilai2 = ' + hasilPembagian); //-> 4

 function Person(firstName, lastName){
    // properti
    this.firstName = firstName;
    this.lastName = lastName;

    // method
    this.fullName = function(){
        return `${this.firstName} ${this.lastName}`
    }
    this.showName = function(){
        document.write(this.fullName());
    }
}

var person1 = new Person("Muhar", "Dian");
var person2 = new Person("Petani", "Kode");

person1.showName();
document.write("<br>");
person2.showName();