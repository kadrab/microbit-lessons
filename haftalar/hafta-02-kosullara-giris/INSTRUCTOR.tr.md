# Hazır bloklarla IF etkinlikleri: yerleştir, dene, açıkla

[English](INSTRUCTOR.md)

Bu rehber üç ana/bonus etkinliğini kapsar. Değişken, sayaç, sensör okuması veya kullanıcı tanımlı fonksiyon içermezler. İlk iki etkinlik temel dersi oluşturur; üçüncü isteğe bağlıdır. Çocuklar yalnızca çalışma alanında zaten bulunan blokları taşır.

Paketlerdeki üç ek `ek-` alıştırmasının kuralları farklıdır. Geçici alanlarının tamamlanması gerekir ve araç kutusundan blok seçmek gerekebilir. Bunları açmadan önce [haftanın özetine](README.tr.md) bakın.

## Kurulum ve sınırlar

Her ana `-cocuklar.ts` dosyasının tamamını ayrı bir MakeCode projesinin JavaScript sekmesine yapıştırın, ardından **Bloklar** görünümüne geçin. Ekranı çocuklara bundan sonra verin. Tam çözümleri ayrı tutun.

Hikâye ve hedef, baştaki `/* ... */` yorumundan üretilen açık görev kartında görünür. Yorum ile program arasındaki boş satırı koruyun. Kartı sağ alt köşesinden büyütebilir veya başlığından sürükleyebilirsiniz. Kaynak dosyaları kartın boyutunu ve konumunu saklamaz.

**“Göreviniz bu. İhtiyacınız olan her blok burada. Blok eklemeyin, silmeyin, çoğaltmayın veya değiştirmeyin. Yalnızca taşıyın.”**

Başlangıç blokları birbirine bağlıdır; ancak bazıları yanlış yerdedir. Bu bir düzeltme bulmacasıdır. Boş bir program veya bağlantısız parçaların bulunduğu bir tepsi değildir. TypeScript, bağımsız blokların ekrandaki konumlarını saklamaz. Araç kutusu görünür kalır; çocukların bu etkinlikleri çözmek için ona ihtiyacı yoktur.

Bir bloğu taşımak, altına bağlı blokları da sürükleyebilir. Yerleştirmeyi kolaylaştırıyorsa önce en alttaki çıktı bloğunu ayırın. Başlangıç davranışı dikkat dağıtıyorsa hikâyeyi okumadan önce simülatörü durdurun.

## 1. Şartlı zil — 10–15 dakika

**Hikâye:** PİKO'nun zili bozulmuş; kimse dokunmasa da çalıyor. Yalnızca A basılıyken ses çıkarmalı.

Hazır parçalar: `forever`, `if`, “A basılı mı?” koşulu ve bir kısa ton. Hazır ses ayarlarını değiştirmeyin.

1. Hiçbir düğmeye basmadan robotun ne yaptığını gözlemleyin.
2. “Ses bloğu şu anda hangi sorunun içinde?” diye sorun.
3. Bir çocuk ses bloğunu taşısın; diğeri sonucu tahmin etsin.
4. Hiçbir düğme basılı değil, A basılı, A bırakılmış ve yalnız B basılı durumlarını deneyin.

**Çözüm:** Sesi `if` içine taşıyın. Koşul yanlışsa içindeki iş atlanır. `else` gerekmez. Başlamış olan 200 ms'lik ton, A bırakıldıktan sonra tamamlanabilir; sonraki ton başlamamalı.

V2'nin hoparlörü kullanılabilir. MakeCode belgeleri simülatörde ton çalmaya ilişkin bir sınırlama belirtiyor; bu yüzden sesi önceden kontrol edin. Ses alınamıyorsa ikinci etkinlikle başlayın. Sesin gelmemesi, tek başına mantık hatası olduğunu göstermez. [MakeCode ton çalma belgesi](https://makecode.microbit.org/reference/music/play-tone).

## 2. Robotun yüzü — 15–20 dakika

**Hikâye:** PİKO'nun yüzleri birbirine karışmış. A basılıyken mutlu, A bırakıldığında uykulu görünmeli.

Hazır parçalar: `forever`, `if/else`, “A basılı mı?” koşulu, mutlu yüz ve uykulu yüz.

İki simge başlangıçta boş `if/else` bloğunun altındadır; bu yüzden birbiri ardına görünür. Hiçbir şeyi taşımadan önce çocuklardan hangi simgenin hangi kola ait olduğunu açıklamalarını isteyin. A'yı birkaç saniye basılı tutup bırakın; iki durumu da görmek için zaman tanıyın.

| Girdi durumu | Beklenen sonuç |
|---|---|
| Hiçbir düğme basılı değil | Uykulu yüz |
| A basılı | Mutlu yüz |
| A bırakılmış | Uykulu yüz |
| Yalnız B basılı | Uykulu yüz |
| A ve B birlikte basılı | Mutlu yüz: A hâlâ basılı |

**Önerilen anlatım:** “IF soruyu sorar. Cevap evetse bu işi yaparız. Değilse diğer işi yaparız. Sürekli bloğu aynı soruyu yeniden sorar.” THEN “o zaman” demektir; bulunacak ayrı bir blok değildir.

İlk başarılı denemeden sonra rolleri değiştirin. İki yüzün yerini bilerek ters takıp çocuklardan çalıştırmadan önce sonucu tahmin etmelerini isteyin. Sonra yüzlerden birini koşulun dışına taşıyıp cevaptan bağımsız olarak neden göründüğünü tartışın.

## 3. İki kişilik kilit — isteğe bağlı, 10–15 dakika

**Hikâye:** Kapı yalnızca iki arkadaş da onay verince açılabilir. Bir kişinin onayı yetmez.

Hazır parçalar: `forever`, `if/else`, `AND` / `VE` ile bağlanan iki düğme kontrolü, onay ve çarpı. Çocuklardan koşulun neden farklı olduğunu açıklamalarını isteyin, ardından iki simgeyi kollarına yerleştirin.

| A | B | Beklenen simge |
|---|---|---|
| Bırakılmış | Bırakılmış | Çarpı |
| Basılı | Bırakılmış | Çarpı |
| Bırakılmış | Basılı | Çarpı |
| Basılı | Basılı | Onay |

Fiziksel kartta bir çocuk A'yı, diğeri B'yi basılı tutabilir. Simülatörde ikisini birlikte basılı tutmak zorsa bonusu fiziksel karta bırakın; ilk iki etkinlik yalnızca bir düğme gerektirir. Program bir simge gösterir, gerçek bir kilidi çalıştırmaz.

## Bitirme ölçütleri ve sonraki adım

Çalışan görüntü tek başına yeterli değil. Her çocuk şu soruları kendi başına yanıtlayabilsin:

- Robot hangi soruyu soruyor?
- Cevap hayırsa ne oluyor?
- Bu çıktı bloğu `if` dışına taşınırsa ne değişir?

İlk iki etkinlik henüz açıklanamıyorsa bonusu açmayın. Aynı blokların birkaç farklı yerleşimini tahmin etmek yeterli. Değişkenlere ancak bu ayrım anlaşıldıktan sonra ayrı bir derste dönün; bir sayıyı saklayıp göstermekle başlayın.

## Kaynaklar

- [MakeCode if / else](https://makecode.microbit.org/blocks/logic/if)
- [Bir düğmenin basılı olup olmadığını kontrol etme](https://makecode.microbit.org/reference/input/button-is-pressed)
- [Kısa tonlar ve simülatör sınırlamaları](https://makecode.microbit.org/reference/music/play-tone)

## Paketler ve doğrulama

[Çocuk paketi](paketler/hafta-02-cocuklar.zip), üç ana/bonus başlangıç dosyası ve üç ek `ek-` alıştırması içerir. [Çözüm paketi](paketler/hafta-02-cozumler.zip) bunların altı tam çözümünü içerir. Bu rehberde anlatılan yalnızca taşıma kuralı sadece ana/bonus etkinlikleri için geçerlidir.

Ana dersin altı TypeScript dosyası daha önce normal MakeCode bloklarına dönüştürüldü. Yerel doğrulayıcı [verify_logic.cjs](verify_logic.cjs), üç ana/bonus çiftini kontrol eder: düğme durumları, basma/bırakma geçişleri, başlangıç sürümlerinin bilerek yanlış davranışı ve hazır parçaların yeni blok eklemeden her çözümü oluşturabilmesi. Taklit girdiler ve çıktılar kullanır; fiziksel sesi veya zamanlamayı ölçmez. Üç ek alıştırma kapsamına dahil değildir.

Bu belge ve klasör düzenlemesi sırasında kaynak programın mantığı değiştirilmedi. Yeni bir fiziksel micro:bit doğrulaması yapıldığı iddia edilmiyor.
