# 3. Hafta — Kolaydan zora altı karar bulmacası

[English](INSTRUCTOR.md)

micro:bit V2 ve MakeCode kullanan iki çocuk için hazırlanmıştır. Değişken, sayaç veya kullanıcı tanımlı fonksiyon yoktur. **1–5. görevler temel ders içi çalışmalardır; 6. görev ödevdir.** İlk beş görevde gereken bütün bloklar hazırdır. Ödev dosyasında yalnızca açıklama vardır; başlangıç kodu yoktur. 4. görevden önce ara verin. Çocuklar karar yollarını açıklayamıyorsa bağımsız ödevi vermeden önce bu yolları yeniden ele alın.

## Hazırlık ve ortak kurallar

[etkinlikler/](etkinlikler/) içindeki bir görevin `-cocuklar.js` dosyasının **tamamını**, yeni bir MakeCode projesinin **JavaScript** sekmesine, varsayılan kodun yerine yapıştırın; ardından **Bloklar** görünümüne geçin. Bu JavaScript kaynakları MakeCode API'lerini kullanır; kendi başına çalışan masaüstü programları değildir. [Çözümleri](cozumler/) ayrı tutun.

**1–5. görevlerde şöyle söyleyin:** “Robot yanlış birleştirilmiş. İhtiyacınız olan bütün bloklar burada. Blok eklemeyin, silmeyin, çoğaltmayın; verilen değerleri değiştirmeyin. Robot görevini doğru yapana kadar blokları taşıyın.”

Bütün koşullar, karşılaştırmalar, sayılar, yüzler, sesler ve beklemeler hazırdır. Bloklar başlangıçta yanlış yerlere bağlanmıştır. Araç kutusu teknik olarak kilitli değildir; onu kullanmamak etkinliğin kuralıdır. Uzun görevlerde bütün parçaları bulmak için görüntüyü uzaklaştırın. Bir bloğu sürüklemek altındaki blokları da taşıyabilir; parçaları alttan başlayarak ayırmak çoğu zaman kolaylık sağlar.

Bir başlangıç dosyasını açtıktan sonra simülatörü durdurun. Önce hedefi anlatın ve çocukların parçaları yeniden yerleştirmesine fırsat verin. Sonra programı çalıştırıp bütün durumları deneyin. Bilerek yanlış hazırlanmış başlangıç kodunun gösterdiği yüzler hedef davranış değildir.

Altı çocuk dosyasının tamamında hikâye, hedef, kurallar ve denemeler baştaki `/* ... */` yorumunda bulunur. Yorumun açık bir çalışma alanı kartı olarak görünmesi için yorum ile kod arasındaki boş satırı koruyun. Gerekirse kartı taşıyın veya boyutunu değiştirin. Çocukların JavaScript yazması gerekmez; kaynak dosyası blokları yüklemenin yoludur.

**6. görev, ödev:** [06-vardiyali-uzay-kapisi-cocuklar.js](etkinlikler/06-vardiyali-uzay-kapisi-cocuklar.js) yalnızca görev yorumunu içerir. Çalıştırılabilir kod, koşul, çıktı veya `forever` bloğu sağlamaz. Varsayılan JavaScript kodunun tamamını bu dosyanın içeriğiyle değiştirin ve Bloklar görünümüne geçin. Bu kez çocuklar bütün blokları araç kutusundan seçebilir. Kurmaya başlamadan önce kâğıda bir karar ağacı çizmelerini isteyin. Değişken veya sayaç eklemeyin.

MakeCode, yalnızca yorum içeren bir kaynak açıldığında boş bir `başlangıçta` bloğu ekleyebilir. Bu, hazır verilmiş bir çözüm parçası değildir ve kullanılması gerekmez. Çocuklar değişebilen girdileri sürekli kontrol etmeyi nasıl sağlayacaklarını kendileri seçmelidir.

[Çocuk ZIP paketi](paketler/hafta-03-cocuklar.zip) yalnızca altı çocuk dosyasını içerir. [Çözüm ZIP paketi](paketler/hafta-03-cozumler.zip) yalnızca altı tam çözümü içerir. Ne cevaplar ne de bu rehber çocuk paketine konmalıdır.

Her görevde bir çocuk kurar, diğeri kontrol eder. Bir sonraki görevde rolleri değiştirin. Her çocuk, çalıştırmadan önce en az bir sonucu tahmin etsin.

## 1. Gece ve gündüz robotu — ders içi, 8–10 dakika

**Şöyle anlatın:** “PİKO karanlıkta uyumalı, aydınlıkta gülümsemeli. Şu anda iki yüzü sırayla gösteriyor. Yüzleri doğru yerlere taşıyın.”

**Yeni fikir:** Sensör ölçümünü doğrudan karşılaştırmak. Bu oyunda **ışık düzeyinin 80'in altında olması karanlık**, **80 veya üzerinde olması aydınlık** demektir. Verilen `80` sayısı sabit bir oyun kuralıdır; değişken değildir.

**Hazır parçalar:** `forever`, bir if/else, ışık düzeyi, `< 80` karşılaştırması, uykulu ve mutlu yüzler.

**Sorun:** “Işık tam 80 olduğunda robot hangi yolu izler?”

**Deneyin:** 20 → uykulu; 160 → mutlu; 79 → uykulu; 80 → mutlu.

## 2. PİKO'nun iki ayrı işi — ders içi, 10–15 dakika

**Şöyle anlatın:** “PİKO yüzünü ışık düzeyine göre seçiyor. Ayrıca B basılı tutulurken kısa sesler çıkarıyor. Zil hem karanlıkta hem aydınlıkta çalışmalı.”

**Yeni fikir:** Birbirinden bağımsız iki if/else kararı. Her geçişte önce ilk soru, sonra ikinci soru sorulur; ikinci karar birincinin içine girmez. Ekran ve ses farklı çıktılardır; biri diğerinin yerini almaz.

**Hazır parçalar:** `forever`, iki if/else bloğu, ışık karşılaştırması, B'nin basılı olup olmadığını kontrol eden koşul, iki yüz, 200 ms ses ve 200 ms bekleme.

**Sorun:** “Zil kararı karanlık dalının içine girerse aydınlıkta ne olur?”

| Işık düzeyi | B | Yüz | Ses |
|---|---|---|---|
| 20 | Bırakılmış | Uykulu | Yok; kısa bekleme |
| 20 | Basılı | Uykulu | Kısa sesler |
| 160 | Bırakılmış | Mutlu | Yok; kısa bekleme |
| 160 | Basılı | Mutlu | Kısa sesler |

`Bekle`, sessiz bir aralık sağlar; sesi durdurma komutu değildir. Kısa ses, süresi bitince durur. Başlamış bir ses, B bırakıldıktan sonra tamamlanabilir.

## 3. İki aşamalı kapı — ders içi, 12–15 dakika

**Şöyle anlatın:** “A, kapı görevlisinin hazır olduğunu; B, giriş izni olduğunu gösteriyor. Görevli yoksa kapı uyuyor. Görevli hazırsa izni kontrol edin: İzin varsa onay, yoksa çarpı gösterin.”

**Yeni fikir:** Bir if/else'i diğerinin içine yerleştirmek. Başlangıçta iki karar art arda durur; çocuklar B kararını A'nın evet dalına taşımalıdır.

**Hazır parçalar:** `forever`, A ve B koşullarını içeren iki if/else bloğu, uykulu yüz, onay ve çarpı.

**Sorun:** “A bırakılmışken yalnızca B'yi basılı tutmak neden kapıyı açmıyor?”

| A | B | Sonuç |
|---|---|---|
| Bırakılmış | Bırakılmış | Uykulu |
| Bırakılmış | Basılı | Uykulu |
| Basılı | Bırakılmış | Çarpı |
| Basılı | Basılı | Onay |

Kapıyı bir LED simgesi temsil eder. Fiziksel kapı veya motor yoktur.

## 4. PİKO'nun dört ruh hâli — ders içi, 15–20 dakika

**Şöyle anlatın:** “PİKO gece rahatsız edilince üzülüyor, gündüz çağrılınca şaşırıyor. A'ya basılmıyorsa gece uyuyor, gündüz gülümsüyor. Dört durumun hepsinde doğru yüzü gösterin.”

**Yeni fikir:** Dıştaki kararın her dalına başka bir karar yerleştirmek. Üç if/else bloğu ve dört yüz hazırdır, ancak başlangıçta hepsi art arda çalışır. Önce ışık kararı, ardından seçilen daldaki A kararı çalışmalıdır. Verilen iki A kontrolü de kullanılmalıdır.

**Sorun:** “İki tane A sorusu var. Neden her geçişte yalnızca biri çalışıyor?”

| Işık düzeyi | A | Sonuç |
|---|---|---|
| 20 | Bırakılmış | Uykulu |
| 20 | Basılı | Üzgün |
| 160 | Bırakılmış | Mutlu |
| 160 | Basılı | Şaşkın |

Bu görevde B sonucu etkilememelidir. Her girdi birleşiminde yüzler sırayla değişmemeli; ekranda tek bir yüz kalmalıdır.

## 5. Gece üssü — ders içi, 20–25 dakika

**Şöyle anlatın:** “Üssümüz gündüz uyuyor. Gece A ve B, iki mürettebat üyesinin onaylarını gösteriyor. Robotun bütün parçaları burada ama birbirine karışmış. Yeni parça almadan kimin hazır olduğunu gösteren sistemi kurun.”

**Kural:** Aydınlıkta düğmeler ne olursa olsun uykulu yüz gösterin. Karanlıkta hiç kimse onay vermiyorsa çarpı; yalnızca A onay veriyorsa mutlu; yalnızca B onay veriyorsa üzgün; ikisi de onay veriyorsa onay simgesi gösterin. Işık veya düğmeler değiştiğinde sonucu güncelleyin. Değişken kullanmayın.

**Hazır parçalar:** Bir `forever`, dört if/else bloğu, bir ışık karşılaştırması, bir A kontrolü, iki B kontrolü ve beş simge. Koşullar ve simgeler yanlış sırada karıştırılmıştır. Verilen bütün parçaları taşıyarak kullanın; iki B kontrolünden hiçbirini silmeyin veya parçaları çoğaltmayın.

**Sorun:** “Hangi soruyu önce sorarsak gündüz diğer soruları atlayabiliriz?” Önce bütün durumları kâğıda yazın, sonra hazır bloklarla bir karar ağacı kurun.

| Işık düzeyi | A | B | Sonuç |
|---|---|---|---|
| 20 | Bırakılmış | Bırakılmış | Çarpı |
| 20 | Basılı | Bırakılmış | Mutlu |
| 20 | Bırakılmış | Basılı | Üzgün |
| 20 | Basılı | Basılı | Onay |
| 160 | Bırakılmış | Bırakılmış | Uykulu |
| 160 | Basılı | Bırakılmış | Uykulu |
| 160 | Bırakılmış | Basılı | Uykulu |
| 160 | Basılı | Basılı | Uykulu |

Örnek çözümde dört if/else bloğu ve beş sonuç vardır. Çocukların onun yerleşimini birebir kopyalaması gerekmez: Davranış ve hazır parça kurallarını karşılayan başka bir karar ağacı da kabul edilir. Son olarak iki düğmeyi de basılı tutup ışığı 79'dan 80'e değiştirin; onay simgesi uykulu yüze dönüşmelidir.

## 6. Vardiyalı uzay kapısı — ödev, 20–30 dakika

**Şöyle anlatın:** “Uzay kapısının gece ve gündüz kuralları farklı. Gündüz A mürettebat üyesi, gece B mürettebat üyesi görevli. Bu kez aşağıdaki her durumda doğru simgeyi gösteren sistemin tamamını kendiniz kurun. Hazır parça veya kod yok.”

**Gündüz — ışık düzeyi 80 veya üzerinde:** A basılı değilse B ne olursa olsun çarpı gösterin. Yalnızca A basılıysa mutlu yüz; hem A hem B basılıysa onay gösterin.

**Gece — ışık düzeyi 80'in altında:** B basılı değilse A ne olursa olsun uykulu yüz gösterin. Yalnızca B basılıysa üzgün yüz; hem A hem B basılıysa onay gösterin.

| Işık düzeyi | A | B | Sonuç |
|---|---|---|---|
| 20 | Bırakılmış | Bırakılmış | Uykulu |
| 20 | Basılı | Bırakılmış | Uykulu |
| 20 | Bırakılmış | Basılı | Üzgün |
| 20 | Basılı | Basılı | Onay |
| 160 | Bırakılmış | Bırakılmış | Çarpı |
| 160 | Basılı | Bırakılmış | Mutlu |
| 160 | Bırakılmış | Basılı | Çarpı |
| 160 | Basılı | Basılı | Onay |

Işık veya düğmeler değiştiğinde kararı yeniden değerlendirin; her durumda tek bir simge gösterin. Değişken veya sayaç kullanmayın. Ses ve ek donanım gereksizdir. Belirli bloklar önermeden önce bir karar ağacı isteyin.

**Takılırlarsa sorun:** “Gündüz kimin yokluğu her şeyi durduruyor? Gece de aynı kişi mi?”

Yetişkin için hazırlanan örnek çözüm beş if/else bloğu içerir. Tek bir doğru kod yerleşimi yoktur: Sekiz durumun tamamını ve değişen girdileri karşılayan çözümleri kabul edin. Özellikle, yalnızca A basılıyken ışığı 79'dan 80'e değiştirmek uykulu yüzü mutluya çevirmelidir. Yalnızca B basılıyken aynı geçiş, üzgün yüzü çarpıya çevirmelidir.

## Uygulama notları

- Işık ölçümleri 0 ile 255 arasındadır. İlk ölçüm 0 olabilir; o ilk anı değerlendirmeye katmayın. `80`, seçtiğimiz eşiktir ve her odada aynı fiziksel aydınlık düzeyini ifade etmez. Simülatörde 20 ve 160 ile başlayın. Gerçek kartta LED yüzeyini kapatıp açmayı deneyin. [MakeCode ışık düzeyi başvurusu](https://makecode.microbit.org/reference/input/light-level)
- Bir simgeyi göstermek varsayılan olarak 600 ms sürer. Düğmelere kısa tıklamak yerine 2–3 saniye basılı tutun ve çıktıyı bekleyin; robot hemen tepki vermeyebilir. [MakeCode simge gösterme başvurusu](https://makecode.microbit.org/reference/basic/show-icon)
- Fiziksel kartta iki düğmenin basılı tutulacağı denemelerde bir çocuk A'yı, diğeri B'yi tutabilir. Simülatörde varsa A+B kontrolünü kullanın.
- 2. görevden önce sesi kontrol edin. Kısa sesler her tarayıcı simülatöründe duyulmayabilir; kart varsa V2 hoparlörüyle kontrol edin. [MakeCode ses çalma başvurusu](https://makecode.microbit.org/reference/music/play-tone)
- `if` soruyu sorar; `then` evet dalı, `else` hayır dalıdır. `forever` bu kararları tekrarlar. [MakeCode if/else başvurusu](https://makecode.microbit.org/blocks/logic/if)

Bir görevi tamamlamak için yalnızca doğru çıktı yeterli değildir. Her çocuk hangi sorunun önce geldiğini, cevap hayır olduğunda ne olduğunu ve hangi girdi değişikliğinin sonucu değiştireceğini açıklamalıdır.

## Paketler ve doğrulamanın kapsamı

Çocuklar için [çocuk paketini](paketler/hafta-03-cocuklar.zip) kullanın; [çözüm paketi](paketler/hafta-03-cozumler.zip) yetişkinde kalsın. Her biri altı JavaScript dosyası içerir; bu rehber her iki paketin de dışında kalır.

Mevcut [verify_logic.cjs](verify_logic.cjs), altı çözümün tamamını ışık/düğme birleşimleri, 79/80 sınırı ve değişen girdiler açısından denetler. Ayrıca ilk beş çocuk/çözüm çiftinin hazır parça envanterlerini karşılaştırır ve 6. görevin yalnızca yorum içerdiğini kontrol eder. Güncel sonuçları ekrana yazdırmak için bu hafta klasöründen `node verify_logic.cjs` çalıştırın.

Yerel testlerde taklit girdiler ve çıktılar kullanılır. MakeCode blok dönüşümü ayrı bir kontroldür; bu kontrollerin hiçbiri fiziksel sesi, zamanlamayı veya micro:bit'e başarılı yüklemeyi doğrulamaz. Bu belge güncellemesiyle yeni tarayıcı veya donanım testi yapıldığı iddia edilmemektedir.
