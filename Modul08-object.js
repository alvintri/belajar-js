const CAR_DATA = {
    warna : "hitam",
    tipe : "SUV",
    merek : "SUZUKI",
    tinggi : 2,
    panjang : 3,
    lebar : 5,
    volume : (tinggi,panjang,lebar) => {
        return tinggi*panjang*lebar
    }
}

const WARNA_MOBIL = CAR_DATA.volume

console.log(WARNA_MOBIL(CAR_DATA.lebar,CAR_DATA.tinggi,CAR_DATA.panjang))

const DATA_ARRAY = [
    {    
        warna : "hitam",
        tipe : "SUV",
        merek : "SUZUKI",
    },
    {    
        warna : "abu",
        tipe : "SUV",
        merek : "TOYOTA",
    },
]

const MERK_MOBIL_ARRAY = DATA_ARRAY[0].merek

const DATA_OBJECT_ARRAY = {
    Mobil : [
        "Avanza", "Innova","Yariss"
    ],
    Mobil_Saya : [
        {    
            warna : "hitam",
            tipe : "SUV",
            merek : "SUZUKI",
        },
        {    
            warna : "abu",
            tipe : "SUV",
            merek : "TOYOTA",
        },
    ],
}

DATA_OBJECT_ARRAY.Mobil[0]