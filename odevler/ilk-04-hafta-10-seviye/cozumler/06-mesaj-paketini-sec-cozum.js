input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Surprised)
    basic.pause(1000)
    if (input.buttonIsPressed(Button.B)) {
        for (let index = 0; index < 3; index++) {
            basic.showIcon(IconNames.Heart)
            basic.clearScreen()
            basic.pause(500)
        }
    } else {
        for (let index = 0; index < 2; index++) {
            basic.showIcon(IconNames.No)
            basic.clearScreen()
            basic.pause(500)
        }
    }
    basic.showIcon(IconNames.Yes)
})
