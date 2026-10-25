# 2. hafta — Koşullara kolay giriş

[English](README.md) · [Eğitmen rehberi](INSTRUCTOR.tr.md)

Ana ders **iki kısa etkinlik ve isteğe bağlı bir bonus** içerir. Önce tek bir soruyla başlayın, ardından iki olası sonucu tanıtın. Sonrasında kullanılabilecek üç ek alıştırma bulunuyor; bunlar ana dersi tamamlamanın ön koşulu değildir.

Ana etkinliklerde değişken, sayaç, kullanıcı tanımlı fonksiyon veya `for` döngüsü yok. Gerekli bütün bloklar hazır. Çocuklar yanlış yerdeki blokları taşıyarak bulmacaları çözüyor. Hazır `forever` / “sürekli” bloğu aynı soruyu yeniden soruyor.

## Buradan başlayın

- [Çocuk etkinlikleri — ZIP](paketler/hafta-02-cocuklar.zip): üç ana/bonus dosyası ve üç ek alıştırma.
- [Tam çözümler — ZIP](paketler/hafta-02-cozumler.zip): bu altı çalışmanın çözümleri.
- [Eğitmen rehberi](INSTRUCTOR.tr.md): üç ana/bonus etkinliği için ayrıntılı yönergeler ve deneme durumları.
- [Çocuk kaynakları](etkinlikler/).
- [Çözüm kaynakları](cozumler/).

Her `-cocuklar.ts` dosyasını ayrı bir MakeCode projesinin JavaScript sekmesine yapıştırıp Bloklar'a geçin. Çocukların kaynak kod yazması gerekmiyor. Üç ana/bonus başlangıç dosyası, başta bir `/* ... */` yorumu ve ardından boş satır kullanıyor; böylece görev açık bir çalışma alanı yorumunda görünüyor. Gerekirse kartı büyütün veya taşıyın. Ek alıştırmalar eski kaynak yorumlarını ve doldurulacak alanlarını koruyor; aynı açık kart biçimini kullanmıyor.

Ana etkinlikler için şöyle söyleyin: **“Gerekli bütün parçalar burada. Ekleme, silme, çoğaltma veya değiştirme yapmayın. Yalnızca taşıyın.”** Araç kutusu teknik olarak kilitlenmiş değil; bu etkinliğin kuralı. Çözümleri çocukların başlangıç dosyalarından ayrı tutun.

## Ana ders: kolaydan zora

| Sıra | Etkinlik | Temel ayrım | Önerilen süre |
|---|---|---|---|
| 1 | [Şartlı zil](etkinlikler/01-sartli-zil-cocuklar.ts) | A basılıyken ses çal; değilse bu işi atla. Tek bir `if`. | 10–15 dk |
| 2 | [Robotun yüzü](etkinlikler/02-robotun-yuzu-cocuklar.ts) | A basılıyken mutlu, değilse uykulu yüz göster. `if/else` iki yoldan birini seçer. | 15–20 dk |
| Bonus | [İki kişilik kilit](etkinlikler/03-iki-kisilik-kilit-cocuklar.ts) | Yalnızca A ve B birlikte basılıyken onay göster. Hazır `AND` / `VE` koşulunu açıklayın. | 10–15 dk |

Zil duyulmuyorsa Robotun Yüzü ile devam edin. Ses sorunu, çocuğun koşulu anlamadığını göstermez. Kilit etkinliği onay veya çarpı simgesi gösterir; fiziksel bir kapıyı çalıştırmaz.

Her denemeden önce bir çocuk tahmin etsin, diğeri blokları taşısın. Etkinlikler arasında rolleri değiştirin. İki durumu açıkça karşılaştırmak için düğmeyi birkaç saniye basılı tutup bırakın.

**Önerilen anlatım:** “IF soruyu sorar. Cevap evetse içindeki işi yaparız. ELSE, cevap hayırsa ne yapacağımızı söyler. THEN ‘o zaman’ demektir; bulmamız gereken başka bir blok değildir.”

Her çocuk şu soruları yanıtlayabiliyorsa ana ders tamamdır:

- Robot hangi soruyu soruyor?
- Cevap hayırsa ne oluyor?
- Çıktı bloğunu koşulun dışına taşırsam ne değişir?

İlk iki etkinlik hâlâ açıklanamıyorsa bonusu açmayın. Aynı parçaların başka bir yerleşimini tahmin edip düzeltmek yeterli.

## Ek alıştırmalar

Bu üç alıştırma aynı ZIP'lerde, `ek-` ile başlayan dosyalardadır. **Kuralları ana etkinliklerden farklıdır:** çocuklar `0`, `false` ve `Confused` gibi geçici alanları değiştirir; araç kutusundan yeni değerler veya bloklar seçmeleri gerekebilir. Başlamadan önce bu farkı açıklayın. Hepsi isteğe bağlıdır; en zor olanı sonraki derse kalabilir.

| Önerilen sıra | Çocuk kaynağı | Ne zaman açılmalı? |
|---|---|---|
| 1 | [Uykucu Robot](etkinlikler/ek-01-uykucu-robot-cocuklar.ts) | Tek bir `if/else` anlaşıldığında. Düğme sorusunu “Işık seviyesi 100'den küçük mü?” sorusuyla değiştirin. |
| 2 | [Gizli Selam](etkinlikler/ek-02-gizli-selam-cocuklar.ts) | Sürekli kontrol ile bir olay gerçekleştiğinde bir kez kontrol etme farkını ayırmaya hazır olduklarında. Cihazın sallandığı anda A'nın basılı olup olmadığını kontrol edin. |
| 3 | [Robotun Uyku Odası](etkinlikler/ek-03-robotun-uyku-odasi-cocuklar.ts) | Işık koşulunun ardından kartın duruşuna ilişkin koşulu açıklayabildiklerinde. İç içe kararları tanıtır; zorunlu başlangıç sırasına dahil değildir. |

Uykucu Robot için 99 ve 100 ışık seviyelerini karşılaştırın. Gizli Selam için A basılıyken sallamakla A bırakıldıktan sonra sallamayı karşılaştırın. Robotun Uyku Odası için ışık ve ekran yönünün dört birleşimini tahmin edin; ekran yönünü değiştirmeden 79 ile 80'i karşılaştırın.

Bu, iki temel etkinlik, bir isteğe bağlı bonus ve üç ek alıştırmadan oluşan mevcut derstir. Sonraki haftalarda kullanılacak beş temel görev ve bir ödev yapısına dönüştürülmüş veya bu adla yeniden etiketlenmiş değildir.

## Doğrulama kapsamı

[Yerel doğrulayıcı](verify_logic.cjs) yalnızca üç ana/bonus etkinliğini kapsar. Taklit edilen girdiler ve çıktılar fiziksel sesi veya zamanlamayı ölçmez; üç ek alıştırmayı doğrulamaz. MakeCode blok dönüşümü ve fiziksel cihaz davranışı farklı kontrollerdir. Bu yeniden düzenleme için fiziksel micro:bit doğrulaması yapıldığı iddia edilmiyor.
