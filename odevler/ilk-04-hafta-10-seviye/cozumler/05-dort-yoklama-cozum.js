input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Surprised)
    basic.pause(1000)
    for (let index = 0; index < 4; index++) {
        if (input.buttonIsPressed(Button.B)) {
            basic.showIcon(IconNames.Happy)
        } else {
            basic.showIcon(IconNames.Sad)
        }
        basic.clearScreen()
        basic.pause(1000)
    }
    basic.showIcon(IconNames.Yes)
})
