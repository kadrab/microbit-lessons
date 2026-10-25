basic.forever(function () {
    if (input.lightLevel() < 80) {
        basic.showIcon(IconNames.Surprised)
    } else {
        basic.showIcon(IconNames.Asleep)
    }
})
