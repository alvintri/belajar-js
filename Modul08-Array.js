//Membuat dan menampilkan sebuah Array
var mobil = ["Avanza","Yaris","Alya"];
console.log('Print Array Mobil :'+mobil);

//Menampilkan satu buah data saja di dalam array
console.log('Print Array Mobil Yaris :'+mobil[1]);

//Membuat sebuah Array yang memiliki berbagai macam tipe data
var campur = ["Avanza",TRUE,123];
console.log('Print Array Campuran :'+mobil);

//Menambahkan array yang baru yaitu Veloz
var mobil = ["Avanza","Yaris","Alya"];
mobil.push("Veloz");
console.log('Print Array Mobil Baru :'+mobil);

//Menampilkan array yang kosong
var arrayKosong = [];
console.log('Print Array Kosong :'+arrayKosong);

//Menampilkan semua elemen pada array mobil
var mobil = ["Avanza","Yaris","Alya","Veloz"]
for(let i=0;i<mobil.length;i++){
    console.log('Cetak mobil ke-' + i + ": " + mobil[i])
}

for(let j in mobil){
    console.log('Cetak mobil ke-' + j + ": " + mobil[j])
}

//Melakukan delete salah satu element pada Array mobil
delete mobil[3]
//mobil.pop()
//mobil.shift()

console.log('Print Array Mobil Deleted :'+mobil);
