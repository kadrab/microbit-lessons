/*
 * GÖREV 5 — BEŞİNCİ SİNYAL
 * HİKÂYE: PİKO beş sinyal toplayınca kutlama yapıyor; sonraki sinyalleri de sayıyor.
 * HEDEF: Başlangıçta sayac 0 olsun ve 0 görünsün. A'ya kısa basışta önce 1 artır.
 * Yeni sayı 5'ten küçükse bir kez uykulu yüz göster. Değilse 3 kez:
 * kalp göster, ekranı temizle, 200 ms bekle. İki durumda da en son sayac değerini göster.
 * B'ye kısa basışta sayac 0 olsun ve 0 görünsün. Sayı 5'te durmaz!
 * KURAL: Başlangıç, A ve B başlıklarını koru. Yalnızca hazır parçaları taşı;
 * ekleme, silme, çoğaltma, değer değiştirme. Gösteri bitmeden hiçbir tuşa basma.
 * DENEME: 4. A: uykulu yüz, 4. 5. A: üç kalp, 5. 6. A: üç kalp, 6.
 * B, ardından A: önce 0; sonra uykulu yüz ve 1.
 *
 * TASK 5 — THE FIFTH SIGNAL
 * STORY: PIKO celebrates after collecting five signals and keeps counting later signals too.
 * GOAL: At startup, set sayac to 0 and show 0. A brief A press first increases it by 1.
 * If the new number is less than 5, show one asleep face. Otherwise, repeat 3 times:
 * show a heart, clear the screen, wait 200 ms. In both cases, finish by showing sayac.
 * A brief B press sets sayac to 0 and shows 0. The number does not stop at 5!
 * RULE: Keep the startup, A, and B containers. Only move supplied pieces;
 * do not add, delete, duplicate, or change values. Press no button until the display sequence finishes.
 * TEST: 4th A: asleep face, 4. 5th A: three hearts, 5. 6th A: three hearts, 6.
 * B, then A: first 0; then an asleep face and 1.
 */

let sayac = 0
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 3; index++) {
        basic.showIcon(IconNames.Heart)
        basic.clearScreen()
        basic.pause(200)
    }
    basic.showNumber(sayac)
    if (sayac < 5) {
    } else {
    }
    basic.showIcon(IconNames.Asleep)
    sayac += 1
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(sayac)
    sayac = 0
})
sayac = 0
basic.showNumber(sayac)
