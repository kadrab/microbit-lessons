# İlk dört haftanın tekrar ödevi — eğitmen rehberi

Dil: Türkçe | [English](INSTRUCTOR.md)

Bu ortak paket yeni bir konuya başlamaz. İlk dört haftadaki **işlem sırası, sabit sayıda tekrar, `if/else` ve `forever`** bilgilerini birleştirir. Çocuklar çalışan bir program oluşturmanın yanında, her işlemin kaç kez yapıldığını ve bir kararın ne zaman yeniden kontrol edildiğini açıklayabilmelidir. Bu paket beşinci ders veya 5. hafta değildir. Normal haftaların beş temel etkinlik ve altıncı görev olarak ödev düzeninden bağımsız olarak on tekrar seviyesini korur.

Etkinlikler, micro:bit ve MakeCode kullanan 8–12 yaş aralığındaki iki çocuk için tasarlanmıştır. Ek donanım gerekmez. Ayrı durum değişkenleri, puanlar, kullanıcı tanımlı fonksiyonlar veya iç içe sabit sayılı döngüler öğretilmez. JavaScript'teki `for` sayacı, Bloklar düzenleyicisindeki “N kere tekrarla” bloğunun teknik gösterimidir; çocukların ayrı bir sayaç oluşturması veya bunun üzerinde düşünmesi gerekmez.

## Önerilen çalışma düzeni

Başlangıçta yaklaşık 20–30 dakika ve oturum başına iki seviye planlayın: **1–2, 3–4, 5–6, 7–8, 9–10**. Bu bir süre sınırı değildir. Zor bir görev bütün oturumu kaplayabilir; 9. ve 10. seviyeler daha sonraya bırakılabilir. Önceki derslerden kalan tamamlanmamış çalışmaların üzerine on seviyeyi birden zorunlu tutmayın; 5, 6 ve 8. seviyeler zaten o becerileri yeniden ele alır.

Her görevde bir çocuk programı kursun, diğeri kontrol etsin; sonraki görevde rolleri değiştirin. Kontrol eden çocuk, programı çalıştırmadan önce çıktıyı tahmin etsin. İki çocuk da programın bir bölümünü kendi sözleriyle açıklamalı. Bilgisayarı paylaşmaları, bütün kararları tek bir çocuğun vermesi anlamına gelmemeli.

**Her seviyede dört adım kullanın:** Hedefi oku → sonucu tahmin et → blokları düzenle ve dene → neden çalıştığını açıkla. Çocuklar blokları taşımadan önce kâğıda bir işlem sırası veya karar ağacı çizebilir.

## Dosyaları açma ve ortak kurallar

Her görev için ayrı bir MakeCode projesi oluşturun. `etkinlikler/` içindeki `-cocuklar.js` dosyasının tamamını JavaScript sekmesindeki mevcut kodun yerine yapıştırın, ardından Bloklar görünümüne geçin. Çocukların JavaScript yazması gerekmez; dosya hazır parçaları yükler. Tam yanıtlar `cozumler/` içinde ayrı dosyalardadır.

Görev açıklaması, dosyanın başındaki `/* ... */` yorumundadır. Açıklamanın ayrı ve açık bir çalışma alanı yorumuna dönüşmesi için **yorum ile kod arasındaki boş satırı koruyun**. Kart blokların üzerini kapatırsa üst çubuğundan taşıyın ve köşesinden boyutunu değiştirin. JavaScript dosyası kartın ekrandaki yerini veya boyutunu sabitlemez. Çocuklara yönelik görev yorumları Türkçe kalır.

**1–9. seviyelerde şöyle söyleyin:** “Bütün parçalar burada. Blok eklemeyin, silmeyin, çoğaltmayın ve içlerindeki sayıları değiştirmeyin. Hedefe yalnızca parçaları taşıyarak ulaşın.” Olay veya `forever` kapsayıcısını koruyun. 5, 6 ve 8. seviyelerde baştaki şaşkın yüz ve 1000 ms bekleme de sabit hazırlık sırasıdır. Araç kutusu teknik olarak kilitlenmez; bu bir bulmaca kuralıdır.

İlk dört görevin yorumlarında bir ipucu bulunur. 5–9. seviyelerde hedef ve denemeler vardır, yerleştirme ipucu yoktur. Aşağıdaki eğitmen sorularını yalnızca çocuklar takılırsa kullanın. Başlangıçtaki yanlış yerleşimler bilinçlidir; ilk çıktı cevap değildir. Bir başlangıç dosyasını açtıktan sonra simülatörü durdurun ve önce hedefi okuyun.

**10. seviyede yalnızca görev açıklaması bulunur.** Çocuklar gereken bütün blokları araç kutusundan seçer. MakeCode boş bir “başlangıçta” bloğu oluşturabilir; bu, verilmiş bir çözüm parçası değildir. Tek bir yerleşimde ısrar etmek yerine istenen davranışı sağlayan başka düzenlemeleri de kabul edin.

## Denemeden önce

**A ile başlayan görevler: 1, 3, 4, 5, 6 ve 8.** Sırayı başlatmak için A'ya kısa basıp bırakın. Bitmesini bekleyin; sıra çalışırken A'ya yeniden basmayın. Son simge ekranda kalır. Sırayı yeniden çalıştırmak için A'ya tekrar basıp bırakın.

**5, 6 ve 8. seviyelerde:** Önce iki düğmeyi de bırakın. A'ya basıp bırakın, ardından şaşkın hazırlık yüzü görünürken B'yi basılı tutmaya veya bırakmaya karar verin. A ile başlatmadan önce B'yi basılı tutmayın; bu, A+B etkileşimine dönüşebilir. B koşulu **“Şu anda basılı mı?”** diye sorar; “Daha önce basılmış mıydı?” diye sormaz.

**Sürekli çalışan görevler: 2, 7, 9 ve 10.** Bunlar A'yı beklemez. Sona ulaştıklarında başa dönerler. 7. ve 10. seviyelerdeki onay işareti bir paketin sonunu belirtir; bütün programın durduğu anlamına gelmez. 9. seviyede ek bir onay işareti yoktur.

**Işık kuralı:** Bu bulmacalarda 80'in altındaki değer karanlık, 80 ve üzerindeki değer aydınlık anlamına gelir. Simülatörde 20 ve 160 değerleriyle başlayın, sonra sınır değerleri olan 79 ve 80'i deneyin. 80 eşiği her yerde aynı oda aydınlığını temsil etmez. İlk ışık okuması 0 olabildiği için başlangıçtaki ilk okumayı veya paketi hazırlık sayın. Sonraki paketleri değerlendirin. Onlar da yanlış yoldan ilerliyorsa sorunu başlangıç davranışı olarak geçiştirmeyin; blokların yerleşimini inceleyin.

**Tepkiler anında olmayabilir.** “Simge göster” normalde yaklaşık 600 ms sürer, ardından varsa ayrıca eklenen bekleme çalışır. B'yi veya ışığı değiştirmek, gösterilmekte olan simgeyi geriye dönük değiştirmez. Program ilgili koşula yeniden geldiğinde yeni girdiyi okur. Değişiklikleri ekranın boş kaldığı aralıklarda yapın; milisaniye hassasiyeti yerine kararların sırasını değerlendirin.

## 1. Dört ışıklı selam

**Çocuklara söyleyin:** “PİKO dört ayrı gülümseme göndermek istiyor. Her gülümsemeden sonra ekranı söndürün ve kısa bir boşluk bırakın. Dördü de bitince bir onay işareti gösterin.”

**Hedef:** A → dört kez [mutlu yüz → ekranı temizle → 400 ms bekle] → bir onay işareti. Onay işareti tekrar bloğunun dışında olmalıdır. Sıra kendiliğinden yeniden başlamamalıdır.

**Takılırlarsa sorun:** “Onay işaretini tekrar bloğunun içine koyarsanız dört kez mi, bir kez mi görünür? Gülümsemelerin arasında neden boş ekran var?”

**Dene:** Dört mutlu yüz, dört boşluk ve bir onay işareti sayın. Birkaç saniye bekleyin; başka bir yüz çıkmamalı. A ile yeniden başlatmak aynı sırayı tekrar üretmeli.

## 2. Karanlıkta uyanan robot

**Çocuklara söyleyin:** “PİKO karanlıkta nöbet tutuyor ve şaşkın yüz gösteriyor. Ortam aydınlanınca uykulu yüz gösteriyor. Işık değiştikçe kontrol etmeye devam edin.”

**Hedef:** Sürekli → ışık 80'in altındaysa şaşkın yüz göster; değilse uykulu yüz göster. A ve B gerekmez. Bu yüzler önceki gece/gündüz etkinliklerindekilerden farklıdır; eski bir cevabı hatırlamak yerine bu hikâyenin kuralını izleyin.

**Takılırlarsa sorun:** “Bir kez karar vermek yeterli mi? Oda daha sonra aydınlanırsa ne olmalı?”

**Dene:** 20 → şaşkın, 160 → uykulu, 79 → şaşkın, 80 → uykulu. Işığı değiştirin ve programı yeniden başlatmadan doğru yüzün çıktığını kontrol edin. Başlangıçtaki ilk okumayı değerlendirmeyin.

## 3. Büyüyen kalp makinesi

**Çocuklara söyleyin:** “PİKO bir kez şaşkın bir selam verecek. Ardından küçük kalpten büyük kalbe geçen dansını üç kez yapacak. Dans bitince uyuyacak.”

**Hedef:** A → bir şaşkın yüz → üç kez [küçük kalp → büyük kalp] → bir uykulu yüz. Bu dansa ekran temizleme veya bekleme blokları eklemeyin.

**Takılırlarsa sorun:** “Bir turda kaç kalp var? Selam ve uyku, tekrarlanan dansın parçası mı?”

**Dene:** Bir şaşkın yüz, üç küçük kalp, üç büyük kalp ve bir uykulu yüz bekleyin. Küçük ve büyük kalpler sırayla değişmeli; bütün küçük kalpler önce görünmemeli.

## 4. İki parçalı şifreli mesaj

**Çocuklara söyleyin:** “Alıcı önce iki onay işareti, sonra üç çarpı bekliyor. İkinci bölümdeki boşluklar daha uzun. Şifrenin tamamı bitince bir kalp gönderin.”

**Hedef:** A → iki kez [onay işareti → temizle → 400 ms bekle] → üç kez [çarpı → temizle → 800 ms bekle] → kalp. Sabit sayılı iki tekrar bloğu iç içe değil, art arda çalışır.

**Takılırlarsa sorun:** “İlk bölüm bitmeden ikinci bölüm başlamalı mı? Sondaki kalp hangi tekrar bloğunun içinde olmalı?” İkinci sorunun yanıtı: hiçbirinin.

**Dene:** Sırayla onay, onay, çarpı, çarpı, çarpı, kalp sayın. Çarpıların arasındaki boşluklar daha uzun olmalı. Sondaki kalp yalnızca bir kez görünür ve ekranda kalır.

## 5. Dört yoklama

**Çocuklara söyleyin:** “PİKO dört turun her birinin başında size yeniden soracak. O anda B basılıysa mutlu yüz, değilse üzgün yüz gösterecek. Turların arasında cevabınızı değiştirebilirsiniz.”

**Hedef:** A ile başlayan sabit hazırlık sırasından sonra dört tur çalıştırın. Her tur B'yi kontrol eder → mutlu veya üzgün yüz gösterir → ekranı temizler → ekranı 1000 ms boş bırakır. Dört tur da bitince bir onay işareti gösterin.

**Takılırlarsa sorun:** “İkinci turda yeni bir cevap istiyorsak B sorusu nereye gelmeli?”

**Dene:** Dört üzgün yüz için B'yi bırakılmış tutun; dört mutlu yüz için hazırlık sırasından itibaren basılı tutun. Sonra turların başlangıcında **bırakılmış → basılı → bırakılmış → basılı** sırasını kurun: üzgün → mutlu → üzgün → mutlu bekleyin. B'yi ekranın boş kaldığı aralıklarda değiştirin. Yalnızca B'nin sabit tutulduğu denemeler yeterli değildir.

## 6. Mesaj paketini bir kez seç

**Çocuklara söyleyin:** “PİKO hazırlıktan sonra gösterisini bir kez seçecek. B basılıysa üç kalp, değilse iki çarpı gönderecek. Daha sonra fikrinizi değiştirseniz bile başladığı gösteriyi tamamlayacak.”

**Hedef:** A ile sabit hazırlık → B hakkında tek karar → seçilen dalda ya üç kalp ya da iki çarpı. Her simgeden sonra ekranı temizleyin ve 500 ms boşluk bırakın. Seçilen gösteri tamamlanınca iki yolun ortak finalinde bir onay işareti gösterin.

**Takılırlarsa sorun:** “5. seviyede dört kez sorduk. Burada B'yi kaç kez okumalıyız? Seçmediğimiz gösteri de çalışmalı mı?”

**Dene:** Hazırlık sırasında B'yi basılı tutun, ilk kalpten sonra bırakın. Üç kalp de tamamlanmalı. Yeni bir çalıştırmada hazırlık sırasında B'yi bırakın, ilk çarpıdan sonra basılı tutun. İki çarpı da tamamlanmalı. Her çalıştırma yalnızca bir yoldan ilerlemeli ve tek bir final göstermeli.

## 7. Sürekli paket gönderen fener

**Çocuklara söyleyin:** “PİKO her mesaj paketinin başında ışığı kontrol ediyor. Karanlıkta üç büyük kalp, aydınlıkta iki küçük kalp gönderiyor. Sonunda onay işareti veriyor, biraz bekliyor ve sonraki paketi seçiyor.”

**Hedef:** Sürekli çalışın. Paketin başında ışık < 80 ise üç büyük kalp, değilse iki küçük kalp seçilir. Her kalpten sonra ekranı temizleyin ve 400 ms boşluk bırakın. İki yolun ortak finalinde bir onay işareti ve 1000 ms bekleme bulunur; sonra ışık yeniden kontrol edilir.

**Takılırlarsa sorun:** “Işık değişince paket yarıda durmalı mı? Işık sorusuna yeniden ne zaman geliyoruz?”

**Dene:** Başlangıçtaki hazırlık paketinden sonra 20'de üç büyük kalp, 160'ta iki küçük kalp sayın. Karanlıkta başlayan bir paketin ilk kalbinden sonra ışığı 160'a değiştirin: o paket üç büyük kalbini tamamlamalı, sonraki paket iki küçük kalp içermeli. 79 gece yolunu, 80 gündüz yolunu seçer. Onay işareti ve beklemeden sonra yeni paket başlamalı.

## 8. Kapı ve yolcu istasyonları

**Çocuklara söyleyin:** “PİKO önce iki kapıyı, sonra üç yolcuyu kontrol edecek. Kapıda B'yi basılı tutmak kalp, bırakmak çarpı demek. Yolcuda basılı tutmak mutlu, bırakmak üzgün demek. İki istasyon arasında bir uyku molası var.”

**Hedef:** A ile sabit hazırlık → iki kapı turu → bir uykulu yüz ve 1000 ms ara → üç yolcu turu → bir onay işareti. Her kontrolün başında B'yi okuyun. Her kontrol simgesinden sonra ekranı temizleyin ve 1000 ms boşluk bırakın. Tekrar blokları art arda çalışır.

**Takılırlarsa sorun:** “İki bölüm de aynı soruyu soruyor, ama yanıtlar için aynı resimleri mi kullanıyor? Uyku molası hangi iki işin arasında olmalı?”

**Dene:** B hep bırakılmışken: iki çarpı, ara, üç üzgün yüz. B hep basılıyken: iki kalp, ara, üç mutlu yüz. Sonra kapılarda **bırakılmış → basılı**, yolcularda **basılı → bırakılmış → basılı** deneyin: çarpı → kalp; ara; mutlu → üzgün → mutlu. Hazırlığı, arayı veya finali beş kontrolden biri olarak saymayın.

## 9. Gece nöbetinde yeni kararlar

**Çocuklara söyleyin:** “Merkez aydınlıkta uyuyor. Karanlıkta üç kontrol yapıyor. Her kontrolde B basılıysa mutlu, değilse üzgün yüz gösteriyor. Üç kontrolden sonra yeniden gece mi, gündüz mü diye soruyor.”

**Hedef:** Sürekli çalışın. Işık < 80 ise üç tur [B'yi kontrol et → mutlu veya üzgün yüz → temizle → 1000 ms bekle] yapın. Değilse uykulu yüz gösterin ve 1000 ms bekleyin. Aydınlık dalının B'yi okuması gerekmez. Bu görevde ortak bir final onayı yoktur.

**Takılırlarsa sorun:** “Karanlık bölümünde B'yi kaç kez, ışığı kaç kez soruyoruz? İki soruyu da tekrar bloğunun içine koymak kuralı değiştirir mi?”

**Dene:** Başlangıç hazırlığından sonra ışık 160'tayken B'yi değiştirin: uykulu yüz kalmalı. 20'de üç tur için **bırakılmış → basılı → bırakılmış** kullanın: üzgün → mutlu → üzgün bekleyin. İlk gece yüzünden sonra ışığı 160'a değiştirin: robot uyumadan önce üç gece kontrolü de tamamlanmalı. 79 gece kuralını, 80 gündüz kuralını seçer.

## 10. PİKO'nun komuta merkezi — bağımsız son görev

**Çocuklara söyleyin:** “Mesaj merkezi gece ve gündüz farklı paketler gönderiyor. Her paketin başında vardiyasını seçiyor, ardından paketin her turunda B'yi yeniden kontrol ediyor. Bu kez parçaları siz seçiyorsunuz. Önce paketlerin planını çizin.”

**Hedef:** Sürekli çalışın. Paketin başında ışık < 80 ise üç gece turu seçilir; her turda B basılıysa kalp, değilse çarpı gösterilir. Işık 80 veya üzerindeyse iki gündüz turu seçilir; her turda B basılıysa mutlu, değilse üzgün yüz gösterilir. Her kontrol simgesinden sonra ekranı temizleyin ve 1000 ms boşluk bırakın. Yeni paket seçilmeden önce, iki paketin ortak finalinde bir onay işareti ve 1000 ms bekleme bulunur.

**Çocuğun kendi kontrol listesi:** Paketin başında tek ışık kararı; gece üç, gündüz iki tur; her turda yeni B kontrolü; paketin sonunda tek onay işareti; sonra yeniden başla. Puan, ayrı değişkenler veya iç içe sabit sayılı döngüler gerekmez.

**Takılırlarsa sırayla sorun:** “Önce hangi iki durum arasında seçim yapıyorsunuz? Seçilen bölüm kaç tur içeriyor? Her turda hangi soruyu yeniden soruyorsunuz? İki bölümden biri bitince ortak hangi işlem yapılıyor?” Tam çözümü onlar adına yerleştirmek yerine bir bölümü doğru kurmalarına fırsat verin.

**Dene:** Başlangıçtaki hazırlık paketinden sonra aşağıdaki dört sabit girdi durumunu deneyin. Ardından B'yi gece **bırakılmış → basılı → bırakılmış**, gündüz **basılı → bırakılmış** olarak değiştirin. Son olarak gece paketinin ilk simgesinden sonra ışığı 160'a değiştirin: o paket üç gece turunu da bitirmeli, sonraki paket iki gündüz turu içermeli. 79/80 sınırını da kontrol edin.

| Paketin başındaki ışık | B'nin durumu | Paketteki kontrol simgeleri | Paket finali |
|---|---|---|---|
| 20 | Hep bırakılmış | Üç çarpı | Bir onay işareti ve bekleme |
| 20 | Hep basılı | Üç kalp | Bir onay işareti ve bekleme |
| 160 | Hep bırakılmış | İki üzgün yüz | Bir onay işareti ve bekleme |
| 160 | Hep basılı | İki mutlu yüz | Bir onay işareti ve bekleme |

## Tamamlama ölçütleri ve sonraki konu

Çocuk yalnızca “Çalışıyor!” dediği için seviyeyi tamamlanmış saymayın. **Bir turda ne olduğunu, hangi işlemlerin bir kez yapıldığını, her kararın ne sıklıkla kontrol edildiğini ve farklı girdilerle neyin değiştiğini** açıklayabilmeli. İstenen davranışı üreten farklı bir yerleşimi kabul edin. Hata bulmak ve açıklamak da öğrenmenin bir parçasıdır.

Amaç bütün seviyeleri hızla bitirmek değildir. Çocuklar 5. ve 6. seviyelerin farkını ve 10. seviyede ışık ile B'nin neden farklı zamanlarda okunduğunu açıklayabiliyorsa küçük bir sayma oyunu, **değişkenlere** geçiş için uygun bir sonraki adımdır. Bu tekrar paketi değişken öğretimine başlamaz.

## Paketler ve doğrulamanın sınırları

- [Çocuk paketi](paketler/ilk-04-hafta-cocuklar.zip): yalnızca on çocuk JavaScript dosyası.
- [Çözüm paketi](paketler/ilk-04-hafta-cozumler.zip): yalnızca on tam çözüm JavaScript dosyası.
- Bu eğitmen rehberi iki paketten de ayrıdır. Çocuk paketinde çözüm veya yalnızca eğitmene yönelik ipucu bulunmaz.
- `verify_logic.cjs` yerel kontrol betiğidir ve sonuçları standart çıktıya yazar.

25 Ekim 2026 tarihindeki önceki doğrulamada, micro:bit fonksiyonlarının taklit edildiği yerel ortamda 176 çözüm senaryosu ve 36 başlangıç programı çalıştırması geçti. İlk dokuz başlangıç dosyasındaki parçalar çözümleriyle eşleşti; onuncu çocuk dosyası yalnızca yorum içeriyordu. Yirmi dosyanın tamamı canlı MakeCode düzenleyicisinde normal bloklara dönüştürüldü ve on çocuk dosyasının tamamında görev yorumları açık göründü. Bu kontroller dizin düzenlemesinden önce yapıldı; düzenlemenin yeniden doğrulandığı iddiası değildir. Fiziksel micro:bit testi yapılmadı.

Yerel kontroller ve düzenleyicide blok dönüşümü, gerçek donanımın zamanlamasını veya davranışını kanıtlamaz. Yukarıdaki ilk ışık okuması ve tepki süresi notlarını izleyin. Milisaniye hassasiyeti yerine sayı, sıra, karar zamanı ve paket sınırlarını değerlendirin.

Kaynaklar: [N kere tekrarla](https://makecode.microbit.org/blocks/loops/repeat), [simge göster](https://makecode.microbit.org/reference/basic/show-icon), [ışık seviyesi](https://makecode.microbit.org/reference/input/light-level), [düğmeye basılma olayı](https://makecode.microbit.org/reference/input/on-button-pressed), [düğmenin basılı olup olmadığını kontrol etme](https://makecode.microbit.org/reference/input/button-is-pressed).
