input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 2; index++) {
        basic.showIcon(IconNames.Yes)
        basic.clearScreen()
        basic.pause(400)
    }
    for (let index = 0; index < 3; index++) {
        basic.showIcon(IconNames.No)
        basic.clearScreen()
        basic.pause(800)
    }
    basic.showIcon(IconNames.Heart)
})
