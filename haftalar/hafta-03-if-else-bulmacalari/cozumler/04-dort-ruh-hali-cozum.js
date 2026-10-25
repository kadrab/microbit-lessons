basic.forever(function () {
    // 4 — ÇÖZÜM: Her turda ışık sorusu ve uygun dalın A sorusu çalışır.
    if (input.lightLevel() < 80) {
        if (input.buttonIsPressed(Button.A)) {
            basic.showIcon(IconNames.Sad)
        } else {
            basic.showIcon(IconNames.Asleep)
        }
    } else {
        if (input.buttonIsPressed(Button.A)) {
            basic.showIcon(IconNames.Surprised)
        } else {
            basic.showIcon(IconNames.Happy)
        }
    }
})
