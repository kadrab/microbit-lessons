/*
 * GÖREV 3 — İKİ KİŞİLİK KİLİT (BONUS)
 * HİKÂYE: Kapı için iki arkadaşın da onayı gerekli!
 * HEDEF: A VE B birlikte basılıysa onay, diğer durumlarda çarpı göster.
 * KURAL: İki hazır simgeyi doğru yerlere taşı. Blok ekleme, silme veya çoğaltma;
 * hazır koşulu ve değerleri değiştirme. Ekran kapının kararını temsil eder.
 * DENEME: Hiçbir tuş / yalnız A / yalnız B / ikisi birlikte basılı durumlarını dene.
 * Tek kişinin onayı yeterli oluyor mu?
 *
 * TASK 3 — TWO-PERSON LOCK (BONUS)
 * STORY: Both friends must agree before the door can open!
 * GOAL: Show a check mark when A AND B are both held; show a cross otherwise.
 * RULE: Move the two supplied icons to the right places. Do not add, delete or copy
 * blocks; do not change the supplied condition or values. The display represents
 * the door's decision.
 * TEST: Try no buttons / only A / only B / both held.
 * Is one person's approval enough?
 */

basic.forever(function () {
    if (input.buttonIsPressed(Button.A) && input.buttonIsPressed(Button.B)) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})

/*
 * ÇÖZÜM: İki düğme de o anda basılı olmalı. Tek bir düğme yetmez.
 * LED simgesi kapının kararını temsil eder; program fiziksel kilit çalıştırmaz.
 * SOLUTION: Both buttons must be held at that moment. One button is not enough.
 * The LED icon represents the door's decision; the program does not operate a physical lock.
 */
