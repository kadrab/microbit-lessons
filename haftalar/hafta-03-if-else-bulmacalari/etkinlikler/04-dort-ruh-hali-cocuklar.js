/*
 * GÖREV 4 — PİKO'NUN DÖRT RUH HÂLİ
 * HİKÂYE: PİKO gece rahatsız edilirse üzülüyor, gündüz çağrılırsa şaşırıyor.
 * HEDEF: Işık 80'den küçükken A bırakılmışsa uykulu, basılıysa üzgün.
 * Işık 80 ve üstündeyken A bırakılmışsa mutlu, basılıysa şaşkın.
 * Her durumda yalnız bir yüz görünsün. B sonucu değiştirmesin.
 * KURAL: Üç karar ve dört yüz hazır; iki A sorusunu da kullan.
 * Yalnız taşı: blok ekleme, silme, çoğaltma veya değer değiştirme.
 * DENEME: Işık 20 ve 160 iken A'yı basılı tut ve bırak: dört durum var.
 *
 * TASK 4 — PİKO'S FOUR MOODS
 * STORY: PİKO feels sad when disturbed at night and surprised when called during the day.
 * GOAL: Below light level 80, show a sleeping face if A is released and a sad face if held.
 * At light level 80 or higher, show a happy face if A is released and a surprised face if held.
 * Show only one face in each case. B must not change the result.
 * RULE: Three decisions and four faces are ready; use both A questions.
 * Only move pieces: do not add, delete or duplicate blocks, or change values.
 * TEST: With the light at 20 and at 160, hold A and release it: there are four cases.
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
