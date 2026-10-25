basic.forever(function () {
    // 1 — ÇÖZÜM: Her turda yalnızca bir yüz seçilir.
    if (input.lightLevel() < 80) {
        basic.showIcon(IconNames.Asleep)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
