input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 3; index++) {
        basic.showIcon(IconNames.Heart)
        basic.clearScreen()
        basic.pause(400)
    }
    basic.showIcon(IconNames.Yes)
})
