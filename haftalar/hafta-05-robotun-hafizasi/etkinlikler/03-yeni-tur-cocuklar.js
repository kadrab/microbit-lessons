/*
 * GÖREV 3 — YENİ TUR
 * HİKÂYE: PİKO selamları sayıyor. Yeni bir tur başlayınca sayımı sıfırlamalı.
 * HEDEF: Başlangıçta sayac 0 olsun ve 0 görünsün. A'ya kısa basışta 1 artır,
 * sonra yeni sayıyı göster. B'ye kısa basışta 0'a ayarla, sonra 0 göster.
 * KURAL: Başlangıç, A ve B başlıklarını koru. Yalnızca hazır parçaları taşı;
 * ekleme, silme, çoğaltma, değer değiştirme. Her gösteri bitince sonraki tuşa bas.
 * DENEME: A, A, B, A sırasıyla 1, 2, 0, 1 göstermeli.
 * Sayı 0 iken B'ye basınca yine 0 olmalı.
 *
 * TASK 3 — A NEW ROUND
 * STORY: PIKO counts greetings. When a new round begins, the count must reset.
 * GOAL: At startup, set sayac to 0 and show 0. A brief A press increases it by 1,
 * then shows the new number. A brief B press sets it to 0, then shows 0.
 * RULE: Keep the startup, A, and B containers. Only move supplied pieces;
 * do not add, delete, duplicate, or change values. Let each display finish before the next press.
 * TEST: A, A, B, A must show 1, 2, 0, 1 in that order.
 * Pressing B when the number is already 0 must still give 0.
 */

let sayac = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(sayac)
    sayac = 0
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(sayac)
    sayac += 1
})
sayac = 0
basic.showNumber(sayac)
