basic.forever(function () {
    // 6 — VARDİYALI UZAY KAPISI: ÖRNEK ÇÖZÜM
    // Gece B'nin, gündüz A'nın kontrolü önce gelir.
    if (input.lightLevel() < 80) {
        if (input.buttonIsPressed(Button.B)) {
            if (input.buttonIsPressed(Button.A)) {
                basic.showIcon(IconNames.Yes)
            } else {
                basic.showIcon(IconNames.Sad)
            }
        } else {
            basic.showIcon(IconNames.Asleep)
        }
    } else {
        if (input.buttonIsPressed(Button.A)) {
            if (input.buttonIsPressed(Button.B)) {
                basic.showIcon(IconNames.Yes)
            } else {
                basic.showIcon(IconNames.Happy)
            }
        } else {
            basic.showIcon(IconNames.No)
        }
    }
})
