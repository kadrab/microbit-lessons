/*
 * GÖREV 5 — ÜÇ ATIŞ
 * HİKÂYE: PİKO bir düğmeyle üç kez zar atacak, en son sonucu da hatırlatacak.
 * HEDEF: Başlangıçta sayi 0 olsun ve 0 görünsün. A'ya kısa basınca 3 tur yap:
 * her tur bir kez 1–6 arasında sayı seçip sakla, göster, ekranı temizle, 400 ms bekle.
 * Üç turdan sonra son saklanan sayıyı bir kez daha göster; yeni çekiliş yapma.
 * KURAL: Başlangıç yığınını ve A başlığını koru. Diğer hazır parçaları yalnızca taşı.
 * Ekleme, silme, çoğaltma, değer değiştirme. Son hatırlatma dâhil bütün gösteri bitsin.
 * DENEME: Üç atış ve son sayının bir hatırlatması olmalı. Örneğin atışlar 1, 6, 2 ise
 * son hatırlatma 2'dir. Bu yalnızca örnek; 4, 4, 4 de olabilir. Her tur gerçekten zar atıyor mu?
 *
 * TASK 5 — THREE ROLLS
 * STORY: PIKO will roll the die three times with one button and recall the final result.
 * GOAL: At startup, set sayi to 0 and show 0. A brief A press runs 3 rounds:
 * each round draws one number from 1–6, stores it, shows it, clears the screen, and waits 400 ms.
 * After three rounds, show the last stored number once more; do not draw again.
 * RULE: Keep the startup stack and A container. Only move the other supplied pieces.
 * Do not add, delete, duplicate, or change values. Wait for the whole sequence, including the final recall.
 * TEST: There must be three rolls and one recall of the final number. For example, if the rolls are
 * 1, 6, 2, the final recall is 2. This is only an example; 4, 4, 4 is possible too. Does every round really roll?
 */

let sayi = 0
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 3; index++) {
        sayi = randint(1, 6)
        basic.showNumber(sayi)
        basic.clearScreen()
        basic.pause(400)
    }
    basic.showNumber(sayi)
})
sayi = 0
basic.showNumber(sayi)
