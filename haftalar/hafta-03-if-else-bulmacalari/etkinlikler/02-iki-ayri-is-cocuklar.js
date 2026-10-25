/*
 * GÖREV 2 — PİKO'NUN İKİ AYRI İŞİ
 * PİKO hem yüzünü hem zilini kontrol edecek.
 * HEDEF: Işık 80'den küçükse uykulu, 80 ve üstüyse mutlu yüz göster.
 * Ayrıca B basılıysa kısa ton çal; değilse sessizce 200 ms bekle.
 * Zil hem karanlıkta hem aydınlıkta çalışmalı.
 * KURAL: Bütün parçalar hazır. Yalnızca yerlerini değiştir.
 * Blok ekleme, silme, çoğaltma veya hazır değerleri değiştirme.
 * DENE: Işık 20 ve 160 iken B'yi basılı tut ve bırak: dört durum var.
 */

basic.forever(function () {
    if (input.lightLevel() < 80) {
    } else {
    }
    if (input.buttonIsPressed(Button.B)) {
    } else {
    }
    music.playTone(523, 200)
    basic.showIcon(IconNames.Happy)
    basic.pause(200)
    basic.showIcon(IconNames.Asleep)
})
