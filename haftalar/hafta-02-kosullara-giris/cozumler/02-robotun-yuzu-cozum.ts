/*
 * GÖREV 2 — ROBOTUN YÜZÜ
 * HİKÂYE: PİKO'nun yüzleri karışmış!
 * HEDEF: A basılıyken mutlu, A bırakıldığında uykulu yüz göster.
 * KURAL: İki hazır yüzü doğru yerlere taşı. Blok ekleme, silme veya çoğaltma;
 * hazır koşulu ve değerleri değiştirme.
 * DENEME: Hiçbir tuş / A basılı / A bırakıldı / yalnız B basılı durumlarını dene.
 * Her denemeden önce hangi yüzün görüneceğini söyle.
 *
 * TASK 2 — THE ROBOT'S FACE
 * STORY: PİKO's faces are mixed up!
 * GOAL: Show a happy face while A is held, and a sleeping face when A is released.
 * RULE: Move the two supplied faces to the right places. Do not add, delete or copy
 * blocks; do not change the supplied condition or values.
 * TEST: Try no buttons / A held / A released / only B held.
 * Before each test, say which face you expect to see.
 */

basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Asleep)
    }
})

/*
 * ÇÖZÜM: IF soruyu sorar. Evetse ilk kol, hayırsa ELSE kolu çalışır.
 * THEN “o zaman” demektir; ayrıca aranacak bir blok değildir.
 * SOLUTION: IF asks the question. If yes, the first branch runs; otherwise ELSE runs.
 * THEN means “in that case”; it is not another block to find.
 */
