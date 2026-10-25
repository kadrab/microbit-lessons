/*
 * GÖREV 4 — ÜÇ KEZ SORAN ROBOT
 * HEDEF: A'ya kısa basıp bırak. Hazırlık yüzü çıkınca B'yi seç.
 * Robot üç tur yapsın; HER TURUN BAŞINDA B'ye yeniden baksın.
 * B basılıysa kalp, değilse çarpı göstersin. Sonra temizlesin
 * ve 1000 ms boş beklesin. Üç tur bitince onayda kalsın.
 * KURAL: A başlatıcısı ve ilk yüz + bekleme hazırlığı sabit.
 * Kalan hazır parçaları yalnız taşı; ekleme, silme, değer değiştirme.
 * DENE: B bırakılmış → basılı → bırakılmış: çarpı → kalp → çarpı.
 * B'yi boş ekranda değiştir. Yeni seçim sonraki turda okunur.
 */

input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Surprised)
    basic.pause(1000)
    for (let index = 0; index < 3; index++) {
        basic.showIcon(IconNames.Yes)
    }
    if (input.buttonIsPressed(Button.B)) {
    } else {
    }
    basic.showIcon(IconNames.No)
    basic.pause(1000)
    basic.showIcon(IconNames.Heart)
    basic.clearScreen()
})
