// ROBOTUN UYKU ODASI - TAM COZUM
// MakeCode > JavaScript: tam dosyayi yapistir, sonra Bloklar'a gec.
// Degisken, dugme ve ek sensor parcasi kullanilmaz.
// Dis karar isigi, secilen yolun icindeki karar kartin durusunu kontrol eder.

basic.forever(function () {
    if (input.lightLevel() < 80) {
        // Karanlik oda: simdi durusu kontrol et.
        if (input.isGesture(Gesture.ScreenUp)) {
            basic.showIcon(IconNames.Asleep)
        } else {
            basic.showIcon(IconNames.Sad)
        }
    } else {
        // Aydinlik oda: simdi durusu kontrol et.
        if (input.isGesture(Gesture.ScreenUp)) {
            basic.showIcon(IconNames.Happy)
        } else {
            basic.showIcon(IconNames.Surprised)
        }
    }
    basic.pause(200)
})

// CEVAPLAR:
// 40 + ekran yukari: Asleep / uykulu.
// 40 + ekran yukari degil: Sad / uzgun.
// 150 + ekran yukari: Happy / mutlu.
// 150 + ekran yukari degil: Surprised / sasirmis.
// 79 karanlik koluna, 80 aydinlik koluna gider.
// Ic DEGILSE durusla; dis DEGILSE isikla ilgilidir.
// Her turda sadece bir ic karar ve bir yuz gosterimi calisir.
// Ekran yukari degil ifadesi, dik veya yana egik duruslari da kapsar.
// Isik esigi 80 bu etkinlik icin secilmistir; evrensel bir karanlik olcusu degildir.
// Isik ilk okumada 0 verebilir; acilista kisa bir sure bekleyin.
// Kaynak: https://makecode.microbit.org/reference/input/light-level
// Kaynak: https://makecode.microbit.org/reference/input/is-gesture
