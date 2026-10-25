/*
 * GÖREV 1 — ÜÇ KALP, BİR SELAM
 * PİKO arkadaşına üç kalp gönderip mesajını bitirmek istiyor.
 * HEDEF: A'ya kısa basıp bırak. Kalp üç kez yanıp sönsün.
 * Her kalpten sonra ekran temizlensin ve 400 ms boş kalsın.
 * Üçüncü tur bitince bir kez onay işareti göster ve orada kal.
 * KURAL: A başlatıcısını koru. Bütün parçalar hazır; yalnız taşı.
 * Blok ekleme, silme, çoğaltma veya hazır değerleri değiştirme.
 * DENE: Üç kalp say. Onay kaç kez geliyor? Yeniden A ile başlat.
 */

input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 3; index++) {
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.Yes)
    }
    basic.clearScreen()
    basic.pause(400)
})
