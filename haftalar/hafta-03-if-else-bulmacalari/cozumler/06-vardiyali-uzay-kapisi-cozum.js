/*
 * GÖREV 6 — VARDİYALI UZAY KAPISI
 * HİKÂYE: Uzay kapısının gündüz ve gece kuralları farklı.
 * Bu kez hazır kod veya blok yok. Sistemi tamamen sen kuracaksın!
 *
 * HEDEF: Gündüz ve gece için aşağıdaki kuralları uygula.
 * GÜNDÜZ (ışık 80 veya daha büyük):
 * A basılı değilse, B ne olursa olsun çarpı göster.
 * Yalnız A basılıysa mutlu yüz göster.
 * A ve B birlikte basılıysa onay göster.
 *
 * GECE (ışık 80'den küçük):
 * B basılı değilse, A ne olursa olsun uykulu yüz göster.
 * Yalnız B basılıysa üzgün yüz göster.
 * A ve B birlikte basılıysa onay göster.
 *
 * KURAL: Işık veya tuşlar değişince karar yeniden verilsin.
 * Her durumda yalnızca bir simge görünsün; simgeler sırayla akmasın.
 * Blokları araç kutusundan kendin seç. Değişken ve sayaç kullanma.
 * Ses veya ek donanım gerekmiyor.
 *
 * DENEME: Işık 20 ve 160 için hiçbir tuş / yalnız A / yalnız B / ikisi birlikte.
 * Sekiz durumun hepsini dene. Tam 80'in gündüz olduğunu da kontrol et.
 * Önce karar ağacını kâğıda çiz, sonra programını oluştur.
 *
 * TASK 6 — SPACE GATE SHIFTS
 * STORY: The space gate has different rules for day and night.
 * This time there is no prepared code or blocks. You will build the whole system!
 *
 * GOAL: Follow the day and night rules below.
 * DAY (light level 80 or higher):
 * If A is not held, show a cross whatever B is doing.
 * If only A is held, show a happy face.
 * If A and B are both held, show a tick.
 *
 * NIGHT (light level below 80):
 * If B is not held, show a sleeping face whatever A is doing.
 * If only B is held, show a sad face.
 * If A and B are both held, show a tick.
 *
 * RULE: Decide again when the light or buttons change.
 * Show only one icon in each case; do not show the icons in turn.
 * Choose the blocks from the toolbox yourself. Do not use variables or counters.
 * No sound or extra hardware is needed.
 *
 * TEST: At light levels 20 and 160, try no buttons / only A / only B / both held.
 * Try all eight cases. Also check that exactly 80 counts as day.
 * Draw your decision tree on paper first, then build your program.
 */

basic.forever(function () {
    // 6 — VARDİYALI UZAY KAPISI: ÖRNEK ÇÖZÜM
    // Gece B'nin, gündüz A'nın kontrolü önce gelir.
    // 6 — SPACE GATE SHIFTS: EXAMPLE SOLUTION
    // Check B first at night and A first during the day.
    if (input.lightLevel() < 80) {
        if (input.buttonIsPressed(Button.B)) {
            if (input.buttonIsPressed(Button.A)) {
                basic.showIcon(IconNames.Yes)
            } else {
                basic.showIcon(IconNames.Sad)
            }
        } else {
            basic.showIcon(IconNames.Asleep)
        }
    } else {
        if (input.buttonIsPressed(Button.A)) {
            if (input.buttonIsPressed(Button.B)) {
                basic.showIcon(IconNames.Yes)
            } else {
                basic.showIcon(IconNames.Happy)
            }
        } else {
            basic.showIcon(IconNames.No)
        }
    }
})
