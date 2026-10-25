basic.forever(function () {
    // 5 — ÖRNEK ÇÖZÜM: Önce gece izni, sonra iki görevlinin onayı.
    // Aynı kuralları sağlayan başka karar ağaçları da doğru olabilir.
    if (input.lightLevel() < 80) {
        if (input.buttonIsPressed(Button.A)) {
            if (input.buttonIsPressed(Button.B)) {
                basic.showIcon(IconNames.Yes)
            } else {
                basic.showIcon(IconNames.Happy)
            }
        } else {
            if (input.buttonIsPressed(Button.B)) {
                basic.showIcon(IconNames.Sad)
            } else {
                basic.showIcon(IconNames.No)
            }
        }
    } else {
        basic.showIcon(IconNames.Asleep)
    }
})
