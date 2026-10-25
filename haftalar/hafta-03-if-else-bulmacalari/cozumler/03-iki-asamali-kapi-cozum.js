basic.forever(function () {
    // 3 — ÇÖZÜM: B sorusu yalnız A basılıyken sorulur.
    if (input.buttonIsPressed(Button.A)) {
        if (input.buttonIsPressed(Button.B)) {
            basic.showIcon(IconNames.Yes)
        } else {
            basic.showIcon(IconNames.No)
        }
    } else {
        basic.showIcon(IconNames.Asleep)
    }
})
