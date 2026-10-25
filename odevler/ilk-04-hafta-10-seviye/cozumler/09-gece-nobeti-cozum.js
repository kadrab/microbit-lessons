basic.forever(function () {
    if (input.lightLevel() < 80) {
        for (let index = 0; index < 3; index++) {
            if (input.buttonIsPressed(Button.B)) {
                basic.showIcon(IconNames.Happy)
            } else {
                basic.showIcon(IconNames.Sad)
            }
            basic.clearScreen()
            basic.pause(1000)
        }
    } else {
        basic.showIcon(IconNames.Asleep)
        basic.pause(1000)
    }
})
