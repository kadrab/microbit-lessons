/*
 * GÖREV 7 / 10 — DURMADAN PAKET GÖNDEREN FENER
 *
 * Uzay feneri paket gönderir, sonra yeni bir paket seçer.
 * HEDEF: Her paket BAŞINDA ışığı bir kez kontrol et.
 * 80'den küçükse üç büyük kalp; 80 ve üstüyse iki küçük kalp.
 * Her kalpten sonra temizle ve 400 ms boş bekle.
 * Paket sonunda bir onay göster, 1000 ms bekle, yeni pakete başla.
 * Bu görev kendiliğinden sürer; A'ya basmak gerekmiyor.
 * DENE: İlk açılış paketini hazırlık say. Sonra ışığı 20 ve 160 yap.
 * Büyük kalplerin ortasında ışığı artır: paket tamamlanmalı;
 * sonraki paket iki küçük kalp olmalı. Tam 80'i de dene.
 * KURAL: Bütün parçalar hazır. Yalnızca yerlerini değiştir.
 * Blok ekleme, silme, çoğaltma veya hazır değerleri değiştirme.
 * Her zaman başlatıcısı sabit kalsın.
 * Sabit sayılı tekrarları birbirinin içine koyma.
 */

basic.forever(function () {
    for (let index = 0; index < 2; index++) {
        basic.showIcon(IconNames.Yes)
    }
    basic.showIcon(IconNames.SmallHeart)
    if (input.lightLevel() < 80) {
    } else {
    }
    basic.clearScreen()
    basic.pause(400)
    for (let index = 0; index < 3; index++) {
        basic.showIcon(IconNames.Heart)
    }
    basic.pause(400)
    basic.clearScreen()
    basic.pause(1000)
})
