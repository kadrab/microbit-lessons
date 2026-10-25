// UYKUCU ROBOT - COCUKLAR TAMAMLA
// MakeCode > JavaScript: dosyanin tamamini yapistir, sonra Bloklar'a gec.
// HIKAYE: Robotumuz karanlikta uyuyor, aydinlikta mutlu oluyor.
// KURAL: Isik 100'den kucukse uykulu yuz; degilse mutlu yuz.
// Bu oyun icin karanlik sinirini 100 sectik. Tam 100, DEGILSE yoludur.
// 0 ve iki kafasi karisik yuz, tamamlayacagin gecici yerlerdir.
// Tuslara basmana gerek yok: surekli blogu isigi tekrar tekrar kontrol eder.

basic.forever(function () {
    // GOREV 1: Kosuldaki 0 yerine kurala uygun sayiyi yaz.
    if (input.lightLevel() < 0) {
        // GOREV 2: Ilk kafasi karisik yuzu uykulu yuzle degistir.
        basic.showIcon(IconNames.Confused)
    } else {
        // GOREV 3: Ikinci kafasi karisik yuzu mutlu yuzle degistir.
        basic.showIcon(IconNames.Confused)
    }
    basic.pause(200)
})

// DENE: Simulatorde isigi once 50, sonra 150 yap. Yuz degisiyor mu?
// TARTIS: Isik tam 100 olursa robot hangi yolu secer? Once tahmin et.
// Karti yeni actiginda olcumun oturmasi icin kisa bir sure bekle.
