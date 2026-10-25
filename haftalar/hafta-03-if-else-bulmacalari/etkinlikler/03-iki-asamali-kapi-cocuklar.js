/*
 * GÖREV 3 — İKİ AŞAMALI KAPI
 * A basılı: görevli hazır. B basılı: giriş izni var.
 * HEDEF: A basılı değilse, B ne olursa olsun uykulu yüz göster.
 * Yalnız A basılıysa çarpı; A ve B birlikte basılıysa onay göster.
 * Her durumda tek simge görünsün; tuşlar değişince karar yenilensin.
 * KURAL: İki karar ve üç simge hazır. Yalnızca yerlerini değiştir.
 * Blok ekleme, silme, çoğaltma veya hazır değerleri değiştirme.
 * DENE: Hiçbir tuş / yalnız A / yalnız B / A ve B birlikte basılı.
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
