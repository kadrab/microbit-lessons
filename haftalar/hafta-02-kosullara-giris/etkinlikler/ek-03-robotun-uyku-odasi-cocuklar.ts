// ROBOTUN UYKU ODASI - COCUKLAR TAMAMLA
// MakeCode > JavaScript: tam dosyayi yapistir, sonra Bloklar'a gec.
// Degisken ve dugme yok. Isik ve kartin durusunu algilayan sensorler var.
// Robot once odaya, sonra kendi durusuna bakiyor.
// Karanlik = isik 80'den kucuk. Tam 80 ve ustu aydinlik kabul ediliyor.
//
// KURALLAR:
// Karanlik + ekran yukari -> uykulu yuz.
// Karanlik + ekran yukari DEGIL -> uzgun yuz: yatagini bulamadi!
// Aydinlik + ekran yukari -> mutlu yuz.
// Aydinlik + ekran yukari DEGIL -> sasirmis yuz: kalkma zamani!
//
// GOREV: Bir 0, iki false ve dort kafasi karisik yuzu tamamla.
// false gecici bir doldurmadir. Girdi'den "ekran yukari hareketi mi?" sec.
// JavaScript karsiligi: input.isGesture(Gesture.ScreenUp)

basic.forever(function () {
    // 1: Karanlik siniri icin 0'i degistir.
    if (input.lightLevel() < 0) {
        // 2: Ilk false yerine ekran yukari sensor kontrolunu koy.
        if (false) {
            // 3: Karanlik ve ekran yukari: hangi yuz?
            basic.showIcon(IconNames.Confused)
        } else {
            // 4: Karanlik ama ekran yukari degil: hangi yuz?
            basic.showIcon(IconNames.Confused)
        }
    } else {
        // 5: Ikinci false yerine de ekran yukari sensor kontrolunu koy.
        if (false) {
            // 6: Aydinlik ve ekran yukari: hangi yuz?
            basic.showIcon(IconNames.Confused)
        } else {
            // 7: Aydinlik ama ekran yukari degil: hangi yuz?
            basic.showIcon(IconNames.Confused)
        }
    }
    basic.pause(200)
})

// Her durumu ayri dene: isik 40 / 150; ekran yukari / yukari degil.
// Sonra 79 ve 80'i ayni durusta karsilastir. Once sonucu tahmin et.
// Dis eger odayi, ic eger durusu kontrol eder. Her turda tek yuz secilir.
// Ekran yukari degil, sadece ekran asagi demek degildir; dik durus da dahildir.
// Kartin acilisinda ilk isik okumasi 0 olabilir; goruntu oturana kadar bekle.
