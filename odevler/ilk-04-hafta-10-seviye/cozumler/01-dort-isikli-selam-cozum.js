input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Happy)
        basic.clearScreen()
        basic.pause(400)
    }
    basic.showIcon(IconNames.Yes)
})
