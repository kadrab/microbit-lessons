/*
 * GÖREV 1 — ÜÇ KALP, BİR SELAM
 * HİKÂYE: PİKO arkadaşına üç kalp gönderip mesajını bitirmek istiyor.
 * HEDEF: A'ya kısa basıp bırak. Kalp üç kez yanıp sönsün.
 * Her kalpten sonra ekran temizlensin ve 400 ms boş kalsın.
 * Üçüncü tur bitince bir kez onay işareti göster ve orada kal.
 * KURAL: A başlatıcısını koru. Bütün parçalar hazır; yalnız taşı.
 * Blok ekleme, silme, çoğaltma veya hazır değerleri değiştirme.
 * DENEME: Üç kalp say. Onay kaç kez geliyor? Yeniden A ile başlat.
 *
 * TASK 1 — THREE HEARTS, ONE GREETING
 * STORY: PİKO wants to send a friend three hearts and then finish the message.
 * GOAL: Press and release A briefly. Make the heart flash three times.
 * After each heart, clear the screen and leave it blank for 400 ms.
 * After the third round, show a tick once and leave it on the screen.
 * RULE: Keep the A-button starter. All the pieces are ready; only move them.
 * Do not add, delete or duplicate blocks, or change the supplied values.
 * TEST: Count three hearts. How many times does the tick appear? Start again with A.
 */

input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 3; index++) {
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.Yes)
    }
    basic.clearScreen()
    basic.pause(400)
})
