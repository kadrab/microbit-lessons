/*
 * GÖREV 4 — ÜÇ KEZ SORAN ROBOT
 * HİKÂYE: PİKO üç turluk gösterisinde her tur için yeni bir seçim bekliyor.
 * HEDEF: A'ya kısa basıp bırak. Hazırlık yüzü çıkınca B'yi seç.
 * Robot üç tur yapsın; HER TURUN BAŞINDA B'ye yeniden baksın.
 * B basılıysa kalp, değilse çarpı göstersin. Sonra temizlesin
 * ve 1000 ms boş beklesin. Üç tur bitince onayda kalsın.
 * KURAL: A başlatıcısı ve ilk yüz + bekleme hazırlığı sabit.
 * Kalan hazır parçaları yalnız taşı; ekleme, silme, değer değiştirme.
 * DENEME: B bırakılmış → basılı → bırakılmış: çarpı → kalp → çarpı.
 * B'yi boş ekranda değiştir. Yeni seçim sonraki turda okunur.
 *
 * TASK 4 — THE ROBOT THAT ASKS THREE TIMES
 * STORY: PİKO is waiting for a new choice in each round of its three-round show.
 * GOAL: Press and release A briefly. Choose B's state when the preparation face appears.
 * Make the robot run three rounds; check B again at the START OF EVERY ROUND.
 * If B is held, show a heart; otherwise show a cross. Then clear the screen
 * and leave it blank for 1000 ms. After three rounds, leave a tick on the screen.
 * RULE: Keep the A-button starter and the first face + pause preparation section in place.
 * Only move the remaining prepared pieces; do not add, delete or change values.
 * TEST: B released → held → released: cross → heart → cross.
 * Change B while the screen is blank. The new choice is read in the next round.
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
