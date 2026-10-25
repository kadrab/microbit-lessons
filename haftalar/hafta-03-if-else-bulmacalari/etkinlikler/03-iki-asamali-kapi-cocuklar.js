/*
 * GÖREV 3 — İKİ AŞAMALI KAPI
 * HİKÂYE: A basılı: görevli hazır. B basılı: giriş izni var.
 * HEDEF: A basılı değilse, B ne olursa olsun uykulu yüz göster.
 * Yalnız A basılıysa çarpı; A ve B birlikte basılıysa onay göster.
 * Her durumda tek simge görünsün; tuşlar değişince karar yenilensin.
 * KURAL: İki karar ve üç simge hazır. Yalnızca yerlerini değiştir.
 * Blok ekleme, silme, çoğaltma veya hazır değerleri değiştirme.
 * DENEME: Hiçbir tuş / yalnız A / yalnız B / A ve B birlikte basılı.
 *
 * TASK 3 — TWO-STAGE GATE
 * STORY: A held means the guard is ready. B held means entry is allowed.
 * GOAL: If A is not held, show a sleeping face whatever B is doing.
 * If only A is held, show a cross; if A and B are both held, show a tick.
 * Show just one icon in each case; decide again when the buttons change.
 * RULE: Two decisions and three icons are ready. Only move them to different places.
 * Do not add, delete or duplicate blocks, or change the supplied values.
 * TEST: No buttons held / only A held / only B held / A and B both held.
 */

basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
    } else {
    }
    if (input.buttonIsPressed(Button.B)) {
    } else {
    }
    basic.showIcon(IconNames.No)
    basic.showIcon(IconNames.Asleep)
    basic.showIcon(IconNames.Yes)
})
