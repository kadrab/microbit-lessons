input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    for (let index = 0; index < 3; index++) {
        basic.showIcon(IconNames.Happy)
        basic.showIcon(IconNames.Surprised)
    }
    basic.showIcon(IconNames.Asleep)
})
