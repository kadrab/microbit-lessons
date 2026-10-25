/*
 * GÖREV 5 — GECE ÜSSÜ: PARÇALAR KARIŞMIŞ!
 * HİKÂYE: PİKO gündüz uyuyor, gece iki görevlinin onayını takip ediyor.
 * HEDEF: Işık 80 ve üstüyse tuşlar ne olursa olsun uykulu yüz göster.
 * Işık 80'den küçükse: tuş yok → çarpı; yalnız A → mutlu;
 * yalnız B → üzgün; A ve B birlikte basılı → onay.
 * Her durumda tek simge göster; ışık veya tuşlar değişince yenile.
 * KURAL: Dört karar ve beş simge hazır, fakat yerleri yanlış.
 * Yalnız taşı: blok ekleme, silme, çoğaltma veya değer değiştirme.
 * DENEME: Işık 20 ve 160 için dört tuş durumunu da dene: toplam sekiz.
 *
 * TASK 5 — NIGHT BASE: THE PIECES ARE MIXED UP!
 * STORY: PİKO sleeps during the day and checks two guards' approvals at night.
 * GOAL: At light level 80 or higher, show a sleeping face whatever the buttons are doing.
 * Below light level 80: no buttons held → cross; only A held → happy;
 * only B held → sad; A and B both held → tick.
 * Show one icon in each case; update it when the light or buttons change.
 * RULE: Four decisions and five icons are ready, but in the wrong places.
 * Only move pieces: do not add, delete or duplicate blocks, or change values.
 * TEST: Try all four button cases at light levels 20 and 160: eight cases in total.
 */

basic.forever(function () {
    // 5 — ÖRNEK ÇÖZÜM: Önce gece izni, sonra iki görevlinin onayı.
    // Aynı kuralları sağlayan başka karar ağaçları da doğru olabilir.
    // 5 — EXAMPLE SOLUTION: First check whether it is night, then the two guards' approvals.
    // Other decision trees that follow the same rules can also be correct.
    if (input.lightLevel() < 80) {
        if (input.buttonIsPressed(Button.A)) {
            if (input.buttonIsPressed(Button.B)) {
                basic.showIcon(IconNames.Yes)
            } else {
                basic.showIcon(IconNames.Happy)
            }
        } else {
            if (input.buttonIsPressed(Button.B)) {
                basic.showIcon(IconNames.Sad)
            } else {
                basic.showIcon(IconNames.No)
            }
        }
    } else {
        basic.showIcon(IconNames.Asleep)
    }
})
