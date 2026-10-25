/*
 * GÖREV 2 / 10 — KARANLIKTA UYANAN ROBOT
 *
 * Gece nöbetçisi karanlıkta uyanır, aydınlıkta dinlenir.
 * HEDEF: Sürekli kontrol et. Işık 80'den küçükse şaşkın,
 * 80 veya daha büyükse uykulu yüz göster. Her kontrolde tek yüz.
 * İPUCU: Tam 80 hangi tarafa düşüyor? A'ya basmak gerekmiyor.
 * DENE: İlk açılış ölçümünü bekle; sonra 20, 160, 79 ve 80'i dene.
 * Işığı değiştirince sonraki kontrolde yeni yüz gelmeli.
 * KURAL: Bütün parçalar hazır. Yalnızca yerlerini değiştir.
 * Blok ekleme, silme, çoğaltma veya hazır değerleri değiştirme.
 * Her zaman başlatıcısı sabit kalsın.
 */

basic.forever(function () {
    if (input.lightLevel() < 80) {
    } else {
    }
    basic.showIcon(IconNames.Asleep)
    basic.showIcon(IconNames.Surprised)
})
