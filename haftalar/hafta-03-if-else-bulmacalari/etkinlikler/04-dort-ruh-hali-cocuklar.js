/*
 * GÖREV 4 — PİKO'NUN DÖRT RUH HÂLİ
 * PİKO gece rahatsız edilirse üzülüyor, gündüz çağrılırsa şaşırıyor.
 * HEDEF: Işık 80'den küçükken A bırakılmışsa uykulu, basılıysa üzgün.
 * Işık 80 ve üstündeyken A bırakılmışsa mutlu, basılıysa şaşkın.
 * Her durumda yalnız bir yüz görünsün. B sonucu değiştirmesin.
 * KURAL: Üç karar ve dört yüz hazır; iki A sorusunu da kullan.
 * Yalnız taşı: blok ekleme, silme, çoğaltma veya değer değiştirme.
 * DENE: Işık 20 ve 160 iken A'yı basılı tut ve bırak: dört durum var.
 */

basic.forever(function () {
    if (input.lightLevel() < 80) {
    } else {
    }
    if (input.buttonIsPressed(Button.A)) {
    } else {
    }
    if (input.buttonIsPressed(Button.A)) {
    } else {
    }
    basic.showIcon(IconNames.Happy)
    basic.showIcon(IconNames.Surprised)
    basic.showIcon(IconNames.Asleep)
    basic.showIcon(IconNames.Sad)
})
