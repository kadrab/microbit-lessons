/*
 * GÖREV 5 — ROTA BİR KEZ SEÇİLİR: PARÇALAR KARIŞMIŞ!
 * HİKÂYE: PİKO gösterinin başında bir rota seçecek ve onu tamamlayacak.
 * HEDEF: A'yı basıp bırak; hazırlık yüzü çıkınca B'yi seç.
 * Hazırlık bitince B'ye yalnız BİR KEZ bak: basılıysa üç kalp,
 * değilse iki üzgün yüz gönder. Seçilen gösteriyi tamamla.
 * Her yüz/kalp sonrası temizle ve 700 ms boş bekle; sonda onayda kal.
 * Gösteri sırasında B değişse bile seçilen rota değişmesin.
 * KURAL: A ve ilk yüz + bekleme sabit. Kalan parçaları yalnız taşı.
 * Ekleme, silme, çoğaltma, değer değiştirme; döngüleri iç içe koyma.
 * DENEME: Kalpler başlayınca B'yi bırak. Üç kalp yine tamamlanıyor mu?
 *
 * TASK 5 — CHOOSE THE ROUTE ONCE: THE PIECES ARE MIXED UP!
 * STORY: PİKO will choose a route at the start of the show and finish that route.
 * GOAL: Press and release A; choose B's state when the preparation face appears.
 * After preparation, check B only ONCE: if held, send three hearts;
 * otherwise send two sad faces. Finish the chosen show.
 * After each face/heart, clear the screen and leave it blank for 700 ms; finish on a tick.
 * Even if B changes during the show, the chosen route must stay the same.
 * RULE: Keep A and the first face + pause in place. Only move the remaining pieces.
 * Do not add, delete, duplicate or change values; do not put one loop inside another.
 * TEST: Release B when the hearts start. Does the show still complete all three hearts?
 */

input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Surprised)
    basic.pause(1000)
    if (input.buttonIsPressed(Button.B)) {
        for (let index = 0; index < 3; index++) {
            basic.showIcon(IconNames.Heart)
            basic.clearScreen()
            basic.pause(700)
        }
    } else {
        for (let index = 0; index < 2; index++) {
            basic.showIcon(IconNames.Sad)
            basic.clearScreen()
            basic.pause(700)
        }
    }
    basic.showIcon(IconNames.Yes)
})
