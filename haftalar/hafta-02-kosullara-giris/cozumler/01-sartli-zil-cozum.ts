/*
 * GÖREV 1 — ŞARTLI ZİL
 * HİKÂYE: PİKO'nun zili kimse dokunmasa da çalıyor!
 * HEDEF: Zil yalnız A basılıyken çalsın; A basılı değilse ses çalma.
 * KURAL: Ses bloğunu doğru yere taşı. Blok ekleme, silme veya çoğaltma;
 * hazır ses ayarlarını ve diğer değerleri değiştirme.
 * DENEME: Hiçbir tuş / A basılı / A bırakıldı / yalnız B basılı durumlarını dene.
 * Başlamış kısa ses, A bırakılınca bitebilir; ardından yeni ses başlamamalı.
 *
 * TASK 1 — CONDITIONAL BELL
 * STORY: PİKO's bell rings even when nobody touches it!
 * GOAL: Ring only while A is held; do not play a sound when A is not held.
 * RULE: Move the sound block to the right place. Do not add, delete or copy blocks;
 * do not change the supplied sound settings or other values.
 * TEST: Try no buttons / A held / A released / only B held.
 * A short sound that has already started may finish after A is released;
 * no new sound should start after that.
 */

basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        music.playTone(523, 200)
    }
})

/*
 * ÇÖZÜM: A basılıysa kısa ses çalar; değilse bu iş atlanır.
 * SOLUTION: A short sound plays if A is held; otherwise this job is skipped.
 */
