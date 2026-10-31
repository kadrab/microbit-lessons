/*
 * GÖREV 6 — SAYIM İSTASYONU (ÖDEV)
 * HİKÂYE: PİKO'nun istasyonu üçer paket alıyor. Her paketten sonra toplamı kontrol et!
 * HEDEF: Başlangıçta sayac 0 olsun ve 0 görünsün. A'ya kısa basışta 3 kez:
 * 1 artır, yeni sayıyı göster; sayı 5'ten küçükse çarpı, değilse onay göster; 400 ms bekle.
 * Üç tekrar bittikten sonra sayac değerini bir kez daha göster ve ekranda bırak.
 * Sonraki A kaldığı yerden sürsün. B'ye kısa basışta sayac 0 olsun ve 0 görünsün.
 * KURAL: Bu kez hazır parça yok. Öğrendiğin blokları kendin seç; yalnızca sayac
 * adlı bir sayı değişkeni kullan. Son sayı gösterimi dâhil bütün gösteri bitmeden tuşa basma.
 * DENEME: İlk A: 1-çarpı, 2-çarpı, 3-çarpı; en son 3.
 * İkinci A: 4-çarpı, 5-onay, 6-onay; en son 6. Üçüncü A: 7, 8, 9 hep onay; en son 9.
 * B: 0. Sonraki A ilk denemedeki gibi olmalı.
 *
 * TASK 6 — COUNTING STATION (HOMEWORK)
 * STORY: PIKO's station receives three packages at a time. Check the total after every package!
 * GOAL: At startup, set sayac to 0 and show 0. A brief A press repeats 3 times:
 * increase by 1, show the new number; show a cross if it is less than 5, otherwise a check mark; wait 400 ms.
 * After all three repeats, show sayac once more and leave it visible.
 * The next A continues from that total. A brief B press sets sayac to 0 and shows 0.
 * RULE: No pieces are supplied this time. Choose blocks you have learned; use just one
 * number variable named sayac. Press no button until the entire sequence, including the final number display, finishes.
 * TEST: First A: 1-cross, 2-cross, 3-cross; finish on 3.
 * Second A: 4-cross, 5-check, 6-check; finish on 6. Third A: 7, 8, 9 all with checks; finish on 9.
 * B: 0. The next A must behave like the first test.
 */

let sayac = 0
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 3; index++) {
        sayac += 1
        basic.showNumber(sayac)
        if (sayac < 5) {
            basic.showIcon(IconNames.No)
        } else {
            basic.showIcon(IconNames.Yes)
        }
        basic.pause(400)
    }
    basic.showNumber(sayac)
})
input.onButtonPressed(Button.B, function () {
    sayac = 0
    basic.showNumber(sayac)
})
sayac = 0
basic.showNumber(sayac)
