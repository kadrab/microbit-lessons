input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Surprised)
    basic.pause(1000)
    if (input.buttonIsPressed(Button.B)) {
        for (let index = 0; index < 3; index++) {
            basic.showIcon(IconNames.Heart)
            basic.clearScreen()
            basic.pause(700)
        }
    } else {
        for (let index = 0; index < 2; index++) {
            basic.showIcon(IconNames.Sad)
            basic.clearScreen()
            basic.pause(700)
        }
    }
    basic.showIcon(IconNames.Yes)
})
