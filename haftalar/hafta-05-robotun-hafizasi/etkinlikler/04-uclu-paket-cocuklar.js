/*
 * GÖREV 4 — ÜÇLÜ PAKET
 * HİKÂYE: PİKO paketleri üçer üçer alıyor. Her paketi sayıp toplamı hatırlamalı.
 * HEDEF: Başlangıçta sayac 0 olsun ve 0 görünsün. A'ya kısa basışta 3 kez:
 * 1 artır, yeni sayıyı göster, 400 ms bekle. Sonraki A kaldığı yerden sürsün.
 * B'ye kısa basışta sayac 0 olsun ve 0 görünsün.
 * KURAL: Başlangıç, A ve B başlıklarını koru. Yalnızca hazır parçaları taşı;
 * ekleme, silme, çoğaltma, değer değiştirme. Üç adım da bitmeden hiçbir tuşa basma.
 * DENEME: İlk A: 1, 2, 3. İkinci A: 4, 5, 6. B: 0. Sonraki A: 1, 2, 3.
 *
 * TASK 4 — A PACK OF THREE
 * STORY: PIKO receives packages in threes. It must count each one and remember the total.
 * GOAL: At startup, set sayac to 0 and show 0. A brief A press repeats 3 times:
 * increase by 1, show the new number, wait 400 ms. The next A continues from that total.
 * A brief B press sets sayac to 0 and shows 0.
 * RULE: Keep the startup, A, and B containers. Only move supplied pieces;
 * do not add, delete, duplicate, or change values. Press no button until all three steps finish.
 * TEST: First A: 1, 2, 3. Second A: 4, 5, 6. B: 0. Next A: 1, 2, 3.
 */

let sayac = 0
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 3; index++) {
        basic.showNumber(sayac)
        basic.pause(400)
    }
    sayac += 1
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(sayac)
    sayac = 0
})
sayac = 0
basic.showNumber(sayac)
