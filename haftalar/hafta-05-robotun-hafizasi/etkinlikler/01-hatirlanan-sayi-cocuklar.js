/*
 * GÖREV 1 — HATIRLANAN SAYI
 * HİKÂYE: PİKO sana bir kalp gösterse de sakladığı sayıyı unutmamalı.
 * HEDEF: Başlangıçta sayac 3 olsun ve 3 görünsün. A'ya kısa basıp bırak:
 * önce kalp, sonra sayac içindeki sayı görünsün ve ekranda kalsın.
 * KURAL: Başlangıç ve A başlıklarını, başlangıçtaki 3 atamasını koru.
 * Yalnızca hazır parçaları taşı; ekleme, silme, çoğaltma, değer değiştirme.
 * Her gösterinin bitmesini bekle; sonra yeniden bas.
 * DENEME: Yeniden başlatınca 3. A'ya iki ayrı basışta da kalp, sonra 3.
 *
 * TASK 1 — THE REMEMBERED NUMBER
 * STORY: PIKO must remember its stored number even when it shows a heart.
 * GOAL: At startup, set sayac to 3 and show 3. Briefly press and release A:
 * show a heart, then the number stored in sayac, leaving that number visible.
 * RULE: Keep the startup and A containers and the initial assignment of 3.
 * Only move supplied pieces; do not add, delete, duplicate, or change values.
 * Wait for each display sequence to finish before pressing again.
 * TEST: Restart: 3. On each of two separate A presses: a heart, then 3.
 */

let sayac = 3
input.onButtonPressed(Button.A, function () {
    basic.showNumber(sayac)
    basic.showIcon(IconNames.Heart)
})
basic.showNumber(sayac)
