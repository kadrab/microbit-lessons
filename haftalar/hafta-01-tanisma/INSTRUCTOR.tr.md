# 1. hafta — Eğitmen rehberi

[English](INSTRUCTOR.md) · [Haftanın özeti](README.tr.md)

Bu rehber, mevcut tanışma akışını eğitmen yönergeleriyle ayrıntılandırır. İlk derse ait bağımsız bir kaynak program bulunamadı. Yapılmış bir dersin tarihsel kaydı veya yeni bir programın test edildiği iddiası değildir.

## Hedef ve hazırlık

İki çocuğun da A/B düğme olayını LED ekranındaki bir simgeyle ilişkilendirmesini sağlayın. Değişkenler, koşullar ve tekrar sayıları bu dersin dışında. İsteğe bağlı ek beş dakika dışında 20–30 dakika ayırın.

Bir MakeCode projesi açıp çocukların LED ekranını ve A/B düğmelerini bulmasını isteyin. İki yüz seçsinler. Bir çocuk kurarken diğeri tahmin edip denesin; A'dan B'ye geçerken rolleri değiştirin.

## Ders akışı

| Süre | Etkinlik | Sorulabilecek soru |
|---|---|---|
| 0–5 dk | Ekranı ve düğmeleri bulun; birinci ve ikinci yüzü seçin. | “Her düğme hangi yüzü göstersin?” |
| 5–12 dk | İlk simgeyi A düğmesi olayının içine koyun. | “Hangi blok bu işin ne zaman başlayacağını söylüyor? Hangisi ne yapacağını söylüyor?” |
| 12–20 dk | Rolleri değiştirip ikinci simgeyi B düğmesi olayının içine koyun. | “B'nin işi nereye ait?” |
| 20–25 dk | A, B, B, A sırasını tahmin edip deneyin. | “Düğmeye basmadan beklediğin yüzü söyle.” |
| İsteğe bağlı ek 5 dk | İki simgenin yerini değiştirip aynı sırayı tekrar deneyin. | “Düğmeler aynı. Hangi yönerge değişti?” |

Zorunlu bir simge seçimi veya indirilebilir cevap programı yok. Her olay hedeflenen çıktıyı ürettiği sürece çocuklar kendi yüzlerini seçebilir.

## Beklenen sonuçlar

İki olay da kurulduktan sonra şu sırayı kullanın:

| İşlem | Beklenen görüntü |
|---|---|
| A'ya bas | Seçilen ilk yüz |
| B'ye bas | Seçilen ikinci yüz |
| B'ye tekrar bas | Yine seçilen ikinci yüz |
| A'ya tekrar bas | Yine seçilen ilk yüz |

Simgelerin yerini değiştirdikten sonra A ikinci yüzü, B ilk yüzü göstermeli. İki çocuktan da denemeden önce değişikliği tahmin etmelerini isteyin.

## İpuçları ve bitirme ölçütleri

Bir yüz yanlış düğmeyle görünüyorsa çocuğun o simgeyi içeren olayı göstermesini isteyin. Ardından nereye ait olması gerektiğini sorun. Simgeyi çocuk taşısın ve tahminini denesin.

Her çocuk A için hangi bloğun çalıştığını, B'nin yüzünün nereden değiştirileceğini ve bir simge diğer olaya taşındığında ne olacağını açıklayabilsin. Çalışan görüntü tek başına yeterli değil; ikisi de bağımsız olarak tahmin edip açıklayabilsin.

Bu ayrımlar anlaşıldığında [2. haftaya](../hafta-02-kosullara-giris/README.tr.md) geçin. Sırf tanışma dersini uzatmak için değişken veya koşul eklemeyin.

## Materyal ve doğrulama durumu

Mevcut materyal, bu eğitmen rehberi ve haftanın özetidir. Bu hafta için ilk dersten kalma öğrenci kaynağı, tamamlanmış kaynak veya ZIP paketi yok. Bu rehber eklenirken yeni bir kaynak program üretilmedi; yeniden düzenlenen bu ders fiziksel micro:bit üzerinde test edilmedi.
