basic.forever(function () {
    // ŞARTLI ZİL — ÇÖZÜM
    // A basılıysa kısa ses çalar; değilse bu iş atlanır.
    // A bırakılınca başlamış ton tamamlanabilir; yeni ton başlamaz.
    if (input.buttonIsPressed(Button.A)) {
        music.playTone(523, 200)
    }
})
