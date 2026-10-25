/*
 * GÖREV 1 — GECE GÜNDÜZ ROBOTU
 * PİKO'nun yüzleri karışmış. Robotu doğru çalıştır!
 * HEDEF: Işık 80'den küçükse uykulu yüz göster.
 * Işık 80 veya daha büyükse mutlu yüz göster.
 * Işık değişince yüz de değişsin; iki yüz sırayla akmasın.
 * KURAL: Bütün parçalar hazır. Yalnızca yerlerini değiştir.
 * Blok ekleme, silme, çoğaltma veya hazır değerleri değiştirme.
 * DENE: Işığı 20, 160, 79 ve tam 80 yap. Sonucu önceden tahmin et.
 */

basic.forever(function () {
    if (input.lightLevel() < 80) {
    } else {
    }
    basic.showIcon(IconNames.Happy)
    basic.showIcon(IconNames.Asleep)
})
