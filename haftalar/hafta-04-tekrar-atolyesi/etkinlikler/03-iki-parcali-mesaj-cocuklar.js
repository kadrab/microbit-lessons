/*
 * GÖREV 3 — İKİ PARÇALI UZAY MESAJI
 * Alıcı önce büyük, sonra küçük kalpler bekliyor. Sıra önemli!
 * HEDEF: A ile başlat. Önce iki kez büyük kalp göster;
 * her seferinde ekranı temizle ve 300 ms boş beklet.
 * Ardından üç kez küçük kalp göster; her seferinde temizle,
 * 700 ms boş beklet. En sonda bir onay göster ve orada kal.
 * KURAL: Döngüler iç içe olmayacak. A başlatıcısını koru.
 * Yalnız taşı; blok ekleme, silme, çoğaltma veya değer değiştirme.
 * DENE: Önce iki büyük, sonra üç küçük: toplam kaç kalp gördün?
 */

input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 3; index++) {
        basic.showIcon(IconNames.Heart)
        basic.pause(300)
    }
    basic.showIcon(IconNames.Yes)
    basic.clearScreen()
    for (let index = 0; index < 2; index++) {
        basic.pause(700)
        basic.showIcon(IconNames.SmallHeart)
    }
    basic.clearScreen()
})
