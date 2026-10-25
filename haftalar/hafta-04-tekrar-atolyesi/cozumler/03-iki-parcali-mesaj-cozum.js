/*
 * GÖREV 3 — İKİ PARÇALI UZAY MESAJI
 * HİKÂYE: Alıcı önce büyük, sonra küçük kalpler bekliyor. Sıra önemli!
 * HEDEF: A ile başlat. Önce iki kez büyük kalp göster;
 * her seferinde ekranı temizle ve 300 ms boş beklet.
 * Ardından üç kez küçük kalp göster; her seferinde temizle,
 * 700 ms boş beklet. En sonda bir onay göster ve orada kal.
 * KURAL: Döngüler iç içe olmayacak. A başlatıcısını koru.
 * Yalnız taşı; blok ekleme, silme, çoğaltma veya değer değiştirme.
 * DENEME: Önce iki büyük, sonra üç küçük: toplam kaç kalp gördün?
 *
 * TASK 3 — TWO-PART SPACE MESSAGE
 * STORY: The receiver expects big hearts first, then small hearts. The order matters!
 * GOAL: Start with A. First show a big heart twice;
 * after each one, clear the screen and leave it blank for 300 ms.
 * Then show a small heart three times; after each one, clear the screen
 * and leave it blank for 700 ms. At the very end, show a tick and leave it on the screen.
 * RULE: Do not put one loop inside the other. Keep the A-button starter.
 * Only move pieces; do not add, delete or duplicate blocks, or change values.
 * TEST: First two big hearts, then three small ones: how many hearts did you see in total?
 */

input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 2; index++) {
        basic.showIcon(IconNames.Heart)
        basic.clearScreen()
        basic.pause(300)
    }
    for (let index = 0; index < 3; index++) {
        basic.showIcon(IconNames.SmallHeart)
        basic.clearScreen()
        basic.pause(700)
    }
    basic.showIcon(IconNames.Yes)
})
