basic.forever(function () {
    if (input.lightLevel() < 80) {
        for (let index = 0; index < 3; index++) {
            basic.showIcon(IconNames.Heart)
            basic.clearScreen()
            basic.pause(400)
        }
    } else {
        for (let index = 0; index < 2; index++) {
            basic.showIcon(IconNames.SmallHeart)
            basic.clearScreen()
            basic.pause(400)
        }
    }
    basic.showIcon(IconNames.Yes)
    basic.pause(1000)
})
