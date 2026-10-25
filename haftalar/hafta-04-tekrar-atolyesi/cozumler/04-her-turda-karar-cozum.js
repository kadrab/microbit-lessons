input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Surprised)
    basic.pause(1000)
    for (let index = 0; index < 3; index++) {
        if (input.buttonIsPressed(Button.B)) {
            basic.showIcon(IconNames.Heart)
        } else {
            basic.showIcon(IconNames.No)
        }
        basic.clearScreen()
        basic.pause(1000)
    }
    basic.showIcon(IconNames.Yes)
})
