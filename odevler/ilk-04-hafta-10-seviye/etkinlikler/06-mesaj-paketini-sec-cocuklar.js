/*
 * GÖREV 6 / 10 — MESAJ PAKETİNİ BİR KEZ SEÇ
 *
 * PİKO gönderime başlarken tek bir paket seçecek.
 * HEDEF: A'yı basıp bırak. Hazırlık bitince B'ye BİR KEZ bak.
 * B basılıysa üç kalp; değilse iki çarpı gönder.
 * Her simgeden sonra temizle ve 500 ms boş bekle.
 * Paket bitince bir onay göster ve orada kal.
 * DENE: İlk kalpten sonra B'yi bırak; üç kalp yine tamamlanmalı.
 * Yeni denemede ilk çarpıdan sonra B'ye bas; iki çarpı tamamlanmalı.
 * Gösteri başladıktan sonra B değişse bile paket değişmesin.
 * KURAL: Bütün parçalar hazır. Yalnızca yerlerini değiştir.
 * Blok ekleme, silme, çoğaltma veya hazır değerleri değiştirme.
 * A başlatıcısı sabit kalsın.
 * İlk şaşkın yüz + 1000 ms hazırlığı da sabit kalsın.
 * İki tuş boşken A'yı basıp bırak; hazırlıkta B'yi seç.
 * Finale kadar A'ya tekrar basma.
 * Sabit sayılı tekrarları birbirinin içine koyma.
 */

input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Surprised)
    basic.pause(1000)
    for (let index = 0; index < 2; index++) {
        basic.showIcon(IconNames.Yes)
    }
    basic.showIcon(IconNames.Heart)
    if (input.buttonIsPressed(Button.B)) {
    } else {
    }
    basic.clearScreen()
    basic.pause(500)
    for (let index = 0; index < 3; index++) {
        basic.showIcon(IconNames.No)
    }
    basic.pause(500)
    basic.clearScreen()
})
