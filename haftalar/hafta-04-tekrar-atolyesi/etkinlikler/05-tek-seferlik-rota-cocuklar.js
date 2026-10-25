/*
 * GÖREV 5 — ROTA BİR KEZ SEÇİLİR: PARÇALAR KARIŞMIŞ!
 * HEDEF: A'yı basıp bırak; hazırlık yüzü çıkınca B'yi seç.
 * Hazırlık bitince B'ye yalnız BİR KEZ bak: basılıysa üç kalp,
 * değilse iki üzgün yüz gönder. Seçilen gösteriyi tamamla.
 * Her yüz/kalp sonrası temizle ve 700 ms boş bekle; sonda onayda kal.
 * Gösteri sırasında B değişse bile seçilen rota değişmesin.
 * KURAL: A ve ilk yüz + bekleme sabit. Kalan parçaları yalnız taşı.
 * Ekleme, silme, çoğaltma, değer değiştirme; döngüleri iç içe koyma.
 * DENE: Kalpler başlayınca B'yi bırak. Üç kalp yine tamamlanıyor mu?
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
    basic.pause(700)
    for (let index = 0; index < 3; index++) {
        basic.showIcon(IconNames.Sad)
    }
    basic.pause(700)
    basic.clearScreen()
})
