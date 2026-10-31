/*
 * GÖREV 2 — HER BASIŞI HATIRLA
 * HİKÂYE: PİKO her selamı saymak istiyor. Ama hep 1'de takılı kalıyor!
 * HEDEF: Başlangıçta sayac 0 olsun ve 0 görünsün. A'ya her kısa basışta
 * saklanan sayı 1 artsın, yeni sayı görünsün ve sonraki basışa kadar saklansın.
 * KURAL: Başlangıç ve A başlıklarını koru. Yalnızca hazır parçaları taşı;
 * ekleme, silme, çoğaltma, değer değiştirme. Gösteri bitince yeniden bas.
 * DENEME: Yeniden başlat: 0. A'ya üç ayrı basış: 1, 2, 3.
 * Tekrar yeniden başlatınca sayı 0 olmalı.
 *
 * TASK 2 — REMEMBER EVERY PRESS
 * STORY: PIKO wants to count every greeting, but it keeps getting stuck at 1!
 * GOAL: At startup, set sayac to 0 and show 0. Each brief A press must
 * increase the stored number by 1, show the new number, and retain it until the next press.
 * RULE: Keep the startup and A containers. Only move supplied pieces;
 * do not add, delete, duplicate, or change values. Wait for the display before pressing again.
 * TEST: Restart: 0. Three separate A presses: 1, 2, 3.
 * Restart again: the number must return to 0.
 */

let sayac = 0
input.onButtonPressed(Button.A, function () {
    sayac += 1
    basic.showNumber(sayac)
})
sayac = 0
basic.showNumber(sayac)
