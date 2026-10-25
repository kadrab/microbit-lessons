/*
 * GÖREV 9 / 10 — GECE NÖBETİNDE YENİ KARARLAR
 *
 * PİKO gündüz uyur, gece üç kontrol yapıp ortamı yeniden ölçer.
 * HEDEF: Nöbet BAŞINDA ışığa bak. 80 ve üstüyse uykulu yüz
 * ve 1000 ms bekleme. Sonra ortamı yeniden kontrol et.
 * Işık 80'den küçükse üç tur yap. Her tur başında B basılıysa
 * mutlu, değilse üzgün yüz; ardından temizle ve 1000 ms boş bekle.
 * Üç tur bitmeden ışığı tekrar ölçme. Nöbet kendiliğinden sürsün.
 * DENE: İlk açılış nöbetini hazırlık say. Gece B: bırak → bas → bırak.
 * Beklenen üzgün → mutlu → üzgün. Gündüz B yüzü değiştirmesin.
 * Gece nöbeti ortasında ışık artarsa önce üç tur tamamlanmalı.
 * KURAL: Bütün parçalar hazır. Yalnızca yerlerini değiştir.
 * Blok ekleme, silme, çoğaltma veya hazır değerleri değiştirme.
 * Her zaman başlatıcısı sabit kalsın.
 * Sabit sayılı tekrarları birbirinin içine koyma.
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
