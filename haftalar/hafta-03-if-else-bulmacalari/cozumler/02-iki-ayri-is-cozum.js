/*
 * GÖREV 2 — PİKO'NUN İKİ AYRI İŞİ
 * HİKÂYE: PİKO hem yüzünü hem zilini kontrol edecek.
 * HEDEF: Işık 80'den küçükse uykulu, 80 ve üstüyse mutlu yüz göster.
 * Ayrıca B basılıysa kısa ton çal; değilse sessizce 200 ms bekle.
 * Zil hem karanlıkta hem aydınlıkta çalışmalı.
 * KURAL: Bütün parçalar hazır. Yalnızca yerlerini değiştir.
 * Blok ekleme, silme, çoğaltma veya hazır değerleri değiştirme.
 * DENEME: Işık 20 ve 160 iken B'yi basılı tut ve bırak: dört durum var.
 *
 * TASK 2 — PİKO'S TWO SEPARATE JOBS
 * STORY: PİKO will control both its face and its bell.
 * GOAL: Show a sleeping face below light level 80 and a happy face at 80 or higher.
 * Also, play a short tone if B is held; otherwise wait silently for 200 ms.
 * The bell must work in both darkness and light.
 * RULE: All the pieces are ready. Only move them to different places.
 * Do not add, delete or duplicate blocks, or change the supplied values.
 * TEST: With the light at 20 and at 160, hold B and release it: there are four cases.
 */

basic.forever(function () {
    // 2 — ÇÖZÜM: İki soru da her turda, sırayla sorulur.
    // İkinci soru ilk sorunun kollarından birinin içine konmaz.
    // 2 — SOLUTION: Both questions are asked in each round, one after the other.
    // The second question is not placed inside either branch of the first question.
    if (input.lightLevel() < 80) {
        basic.showIcon(IconNames.Asleep)
    } else {
        basic.showIcon(IconNames.Happy)
    }
    if (input.buttonIsPressed(Button.B)) {
        music.playTone(523, 200)
    } else {
        basic.pause(200)
    }
})
