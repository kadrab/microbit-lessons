/*
 * GÖREV 1 — GECE GÜNDÜZ ROBOTU
 * HİKÂYE: PİKO'nun yüzleri karışmış. Robotu doğru çalıştır!
 * HEDEF: Işık 80'den küçükse uykulu yüz göster.
 * Işık 80 veya daha büyükse mutlu yüz göster.
 * Işık değişince yüz de değişsin; iki yüz sırayla akmasın.
 * KURAL: Bütün parçalar hazır. Yalnızca yerlerini değiştir.
 * Blok ekleme, silme, çoğaltma veya hazır değerleri değiştirme.
 * DENEME: Işığı 20, 160, 79 ve tam 80 yap. Sonucu önceden tahmin et.
 *
 * TASK 1 — DAY AND NIGHT ROBOT
 * STORY: PİKO's faces are mixed up. Make the robot work correctly!
 * GOAL: Show a sleeping face when the light level is below 80.
 * Show a happy face when the light level is 80 or higher.
 * When the light changes, the face should change too; do not show both faces in turn.
 * RULE: All the pieces are ready. Only move them to different places.
 * Do not add, delete or duplicate blocks, or change the supplied values.
 * TEST: Set the light level to 20, 160, 79 and exactly 80. Predict each result first.
 */

basic.forever(function () {
    // 1 — ÇÖZÜM: Her turda yalnızca bir yüz seçilir.
    // 1 — SOLUTION: Only one face is chosen in each round.
    if (input.lightLevel() < 80) {
        basic.showIcon(IconNames.Asleep)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
