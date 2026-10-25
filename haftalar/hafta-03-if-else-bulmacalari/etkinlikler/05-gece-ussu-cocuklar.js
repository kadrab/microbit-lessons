/*
 * GÖREV 5 — GECE ÜSSÜ: PARÇALAR KARIŞMIŞ!
 * PİKO gündüz uyuyor, gece iki görevlinin onayını takip ediyor.
 * HEDEF: Işık 80 ve üstüyse tuşlar ne olursa olsun uykulu yüz göster.
 * Işık 80'den küçükse: tuş yok → çarpı; yalnız A → mutlu;
 * yalnız B → üzgün; A ve B birlikte basılı → onay.
 * Her durumda tek simge göster; ışık veya tuşlar değişince yenile.
 * KURAL: Dört karar ve beş simge hazır, fakat yerleri yanlış.
 * Yalnız taşı: blok ekleme, silme, çoğaltma veya değer değiştirme.
 * DENE: Işık 20 ve 160 için dört tuş durumunu da dene: toplam sekiz.
 */

basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
    } else {
    }
    basic.showIcon(IconNames.Sad)
    if (input.lightLevel() < 80) {
    } else {
    }
    basic.showIcon(IconNames.Yes)
    if (input.buttonIsPressed(Button.A)) {
    } else {
    }
    basic.showIcon(IconNames.Asleep)
    basic.showIcon(IconNames.No)
    if (input.buttonIsPressed(Button.B)) {
    } else {
    }
    basic.showIcon(IconNames.Happy)
})
