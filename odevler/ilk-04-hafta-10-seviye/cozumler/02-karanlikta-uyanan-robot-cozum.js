/*
 * GÖREV 2 — KARANLIKTA UYANAN ROBOT
 * HİKÂYE: Gece nöbetçisi karanlıkta uyanır, aydınlıkta dinlenir.
 * HEDEF: Sürekli kontrol et. Işık 80'den küçükse şaşkın,
 * 80 veya daha büyükse uykulu yüz göster. Her kontrolde tek yüz.
 * KURAL: Bütün parçalar hazır. Yalnızca yerlerini değiştir.
 * Blok ekleme, silme, çoğaltma veya hazır değerleri değiştirme.
 * Her zaman başlatıcısı sabit kalsın.
 * İPUCU: Tam 80 hangi tarafa düşüyor? A'ya basmak gerekmiyor.
 * DENEME: İlk açılış ölçümünü bekle; sonra 20, 160, 79 ve 80'i dene.
 * Işığı değiştirince sonraki kontrolde yeni yüz gelmeli.
 *
 * TASK 2 — THE ROBOT THAT WAKES IN THE DARK
 * STORY: The night guard wakes in the dark and rests in the light.
 * GOAL: Keep checking. If the light level is below 80, show a surprised face;
 * if it is 80 or higher, show a sleeping face. Show just one face per check.
 * RULE: All the pieces are ready. Only move them.
 * Do not add, delete, or duplicate blocks, or change the supplied values.
 * Keep the forever starter in place.
 * HINT: Which side does exactly 80 belong to? You do not need to press A.
 * TEST: Wait for the first startup reading; then try 20, 160, 79, and 80.
 * After you change the light, the new face should appear at the next check.
 */

basic.forever(function () {
    if (input.lightLevel() < 80) {
        basic.showIcon(IconNames.Surprised)
    } else {
        basic.showIcon(IconNames.Asleep)
    }
})
