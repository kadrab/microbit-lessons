/*
 * GÖREV 9 — GECE NÖBETİNDE YENİ KARARLAR
 * HİKÂYE: PİKO gündüz uyur, gece üç kontrol yapıp ortamı yeniden ölçer.
 * HEDEF: Nöbet BAŞINDA ışığa bak. 80 ve üstüyse uykulu yüz
 * ve 1000 ms bekleme. Sonra ortamı yeniden kontrol et.
 * Işık 80'den küçükse üç tur yap. Her tur başında B basılıysa
 * mutlu, değilse üzgün yüz; ardından temizle ve 1000 ms boş bekle.
 * Üç tur bitmeden ışığı tekrar ölçme. Nöbet kendiliğinden sürsün.
 * KURAL: Bütün parçalar hazır. Yalnızca yerlerini değiştir.
 * Blok ekleme, silme, çoğaltma veya hazır değerleri değiştirme.
 * Her zaman başlatıcısı sabit kalsın.
 * Sabit sayılı tekrarları birbirinin içine koyma.
 * DENEME: İlk açılış nöbetini hazırlık say. Gece B: bırak → bas → bırak.
 * Beklenen üzgün → mutlu → üzgün. Gündüz B yüzü değiştirmesin.
 * Gece nöbeti ortasında ışık artarsa önce üç tur tamamlanmalı.
 *
 * TASK 9 — NEW DECISIONS DURING NIGHT WATCH
 * STORY: PIKO sleeps by day, makes three checks at night, then measures the light again.
 * GOAL: Check the light at the START of the watch. If it is 80 or higher, show a sleeping
 * face and wait 1000 ms. Then check the surroundings again.
 * If the light is below 80, run three rounds. At the start of each round, show a happy
 * face if B is held, or a sad face otherwise; then clear the screen and leave it blank for 1000 ms.
 * Do not measure the light again until all three rounds finish. Keep the watch running on its own.
 * RULE: All the pieces are ready. Only move them.
 * Do not add, delete, or duplicate blocks, or change the supplied values.
 * Keep the forever starter in place.
 * Do not put fixed-count repeats inside one another.
 * TEST: Treat the first startup watch as preparation. At night, use B: released → held → released.
 * Expect sad → happy → sad. During the day, B must not change the face.
 * If the light increases midway through a night watch, all three rounds must finish first.
 */

basic.forever(function () {
    for (let index = 0; index < 3; index++) {
        basic.showIcon(IconNames.Asleep)
    }
    if (input.buttonIsPressed(Button.B)) {
    } else {
    }
    basic.showIcon(IconNames.Happy)
    basic.pause(1000)
    if (input.lightLevel() < 80) {
    } else {
    }
    basic.clearScreen()
    basic.showIcon(IconNames.Sad)
    basic.pause(1000)
})
