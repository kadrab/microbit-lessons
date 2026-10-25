basic.forever(function () {
    // 2 — ÇÖZÜM: İki soru da her turda, sırayla sorulur.
    // İkinci soru ilk sorunun kollarından birinin içine konmaz.
    if (input.lightLevel() < 80) {
        basic.showIcon(IconNames.Asleep)
    } else {
        basic.showIcon(IconNames.Happy)
    }
    if (input.buttonIsPressed(Button.B)) {
        music.playTone(523, 200)
    } else {
        basic.pause(200)
    }
})
