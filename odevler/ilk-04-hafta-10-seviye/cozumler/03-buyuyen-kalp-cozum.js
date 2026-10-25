input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Surprised)
    for (let index = 0; index < 3; index++) {
        basic.showIcon(IconNames.SmallHeart)
        basic.showIcon(IconNames.Heart)
    }
    basic.showIcon(IconNames.Asleep)
})
