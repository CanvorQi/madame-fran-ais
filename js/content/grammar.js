/*
 * Grammar groups: a third grouping across pools, for function words studied as a rule set
 * (time adverbs, place prepositions, possessives, tenses...). Seed ids stay `pool:slug`; unlike
 * themes, a word may sit in several groups. SEED.setGrammar tags existing rows, SEED.addGrammar adds rows.
 * `rules`: [{ h: heading, p: Turkish explanation, table?: [6 French forms], ex?: [[fr, tr], ...] }].
 * `cat: "tense"` lists the group under verb tenses. Seed sentences and paragraphs join a group via `gram`.
 */
SEED.grammar = [
    {
        id: "adv-time", name: "Zaman Zarfları", title: "Les adverbes de temps",
        info: "Eylemin ne zaman olduğunu söyler.",
        rules: [
            { h: "Cümledeki yeri", p: "Zaman zarfları genelde cümlenin başına ya da sonuna gelir. Başa gelince ardından virgül konur.", ex: [["Demain, je travaille.", "Yarın çalışıyorum."], ["Je travaille demain.", "Yarın çalışıyorum."]] },
            { h: "déjà, encore, bientôt", p: "Bu kısa zarflar bileşik zamanda yardımcı fiil ile ortacın arasına girer.", ex: [["J'ai déjà fini.", "Çoktan bitirdim."], ["Il n'est pas encore arrivé.", "Henüz gelmedi."]] },
            { h: "Sıralama", p: "Olayları sıralamak için: d'abord (önce), puis / ensuite (sonra), enfin (en sonunda).", ex: [["D'abord je mange, ensuite je sors, enfin je dors.", "Önce yerim, sonra çıkarım, en sonunda uyurum."]] },
            { h: "Geçmiş, şimdi, gelecek", p: "avant-hier → hier → aujourd'hui → demain → après-demain. Bir anlatı içinde ise la veille (bir gün önce) ve le lendemain (ertesi gün) kullanılır." }
        ]
    },
    {
        id: "adv-freq", name: "Sıklık Zarfları", title: "Les adverbes de fréquence",
        info: "Eylemin ne sıklıkla olduğunu söyler.",
        rules: [
            { h: "Cümledeki yeri", p: "Çekimli fiilden hemen sonra gelir. Bileşik zamanda yardımcı fiilden sonra gelir.", ex: [["Je mange souvent des pommes.", "Sık sık elma yerim."], ["J'ai souvent mangé dans ce restaurant.", "Bu restoranda sık sık yemek yedim."]] },
            { h: "Sıklık ölçeği", p: "toujours (her zaman) › souvent (sık sık) › parfois / quelquefois (bazen) › rarement (nadiren) › ne ... jamais (asla)." },
            { h: "jamais", p: "Olumsuz anlamda ne ile birlikte kullanılır; ne çekimli fiilden önce, jamais sonra gelir.", ex: [["Je ne fume jamais.", "Asla sigara içmem."]] },
            { h: "Kalıplar", p: "tous les jours (her gün), tous les soirs (her akşam), une fois par semaine (haftada bir), de temps en temps (ara sıra), d'habitude (genellikle).", ex: [["D'habitude, je prends le bus.", "Genellikle otobüse binerim."]] }
        ]
    },
    {
        id: "adv-place", name: "Yer ve Yön Zarfları", title: "Les adverbes de lieu",
        info: "Yeri ya da yönü tek başına bildirir.",
        rules: [
            { h: "Zarf mı, edat mı?", p: "Zarf tek başına kullanılır, ardından isim gelmez. İsim gelecekse yer edatı gerekir.", ex: [["Le chat est dehors.", "Kedi dışarıda."], ["Le chat est devant la porte.", "Kedi kapının önünde."]] },
            { h: "ici, là, là-bas", p: "ici: burada. là: konuşmada hem burada hem orada anlamına gelir. là-bas: uzaktaki orası.", ex: [["Viens ici !", "Buraya gel!"], ["Je ne suis pas là ce soir.", "Bu akşam burada değilim."], ["Tu vois la maison là-bas ?", "Oradaki evi görüyor musun?"]] },
            { h: "Yön tarifi", p: "à gauche (sola), à droite (sağa), tout droit (dümdüz), en haut (yukarıda), en bas (aşağıda).", ex: [["Allez tout droit, puis tournez à gauche.", "Dümdüz gidin, sonra sola dönün."]] },
            { h: "y zamiri", p: "Daha önce söylenen yerin yerine geçer ve fiilden önce gelir.", ex: [["Tu vas à Paris ? — Oui, j'y vais demain.", "Paris'e mi gidiyorsun? — Evet, yarın oraya gidiyorum."]] }
        ]
    },
    {
        id: "prep-place", name: "Yer Edatları", title: "Les prépositions de lieu",
        info: "Bir şeyin nerede olduğunu ismin önünde söyler.",
        rules: [
            { h: "sur, sous, dans", p: "sur: üzerinde (değerek), sous: altında, dans: içinde. au-dessus de: üstünde (değmeden).", ex: [["Le livre est sur la table.", "Kitap masanın üzerinde."], ["Le chat dort sous le lit.", "Kedi yatağın altında uyuyor."]] },
            { h: "de ile bitenler", p: "près de, loin de, à côté de, en face de, autour de... ardından gelen le ve les ile birleşir: de + le = du, de + les = des.", ex: [["J'habite près du parc.", "Parkın yakınında oturuyorum."], ["La pharmacie est en face des magasins.", "Eczane mağazaların karşısında."]] },
            { h: "Şehir ve ülke", p: "Şehir: à. Dişil ülke (genelde -e ile biter): en. Eril ülke: au. Çoğul ülke: aux.", ex: [["J'habite à Paris, en France.", "Fransa'da, Paris'te oturuyorum."], ["Il travaille au Canada.", "Kanada'da çalışıyor."]] },
            { h: "chez", p: "Kişiyle kullanılır: birinin evinde ya da iş yerinde.", ex: [["Je vais chez le médecin.", "Doktora gidiyorum."], ["Ce soir, on mange chez moi.", "Bu akşam bende yiyoruz."]] }
        ]
    },
    {
        id: "prep-time", name: "Zaman Edatları", title: "Les prépositions de temps",
        info: "Zamanı ismin önünde bildirir.",
        rules: [
            { h: "depuis, pendant, il y a", p: "depuis: -den beri, hâlâ sürüyor (présent ile). pendant: boyunca, bitmiş süre. il y a: ... önce.", ex: [["J'habite ici depuis trois ans.", "Üç yıldır burada oturuyorum."], ["J'ai habité à Lyon pendant trois ans.", "Üç yıl boyunca Lyon'da oturdum."], ["Je suis arrivé il y a trois ans.", "Üç yıl önce geldim."]] },
            { h: "dans ve en", p: "dans + süre: ... sonra (gelecek). en + süre: ... içinde, ... sürede.", ex: [["Le train part dans dix minutes.", "Tren on dakika sonra kalkıyor."], ["J'ai fait l'exercice en dix minutes.", "Alıştırmayı on dakikada yaptım."]] },
            { h: "avant ve après", p: "İsimle doğrudan, fiille avant de + mastar kullanılır.", ex: [["Je bois un café avant le cours.", "Dersten önce bir kahve içerim."], ["Je me lave les mains avant de manger.", "Yemekten önce ellerimi yıkarım."]] },
            { h: "Saat, ay, yıl", p: "Saat: à (à huit heures). Ay ve yıl: en (en mai, en 2024). Gün: artikelsiz (lundi) ya da her pazartesi anlamında le lundi.", ex: [["Je suis né en mai.", "Mayısta doğdum."], ["Le lundi, je vais à la piscine.", "Pazartesileri havuza giderim."]] }
        ]
    },
    {
        id: "adv-degree", name: "Miktar ve Derece Zarfları", title: "Les adverbes de quantité",
        info: "Ne kadar olduğunu söyler.",
        rules: [
            { h: "très ve beaucoup", p: "très sıfat ve zarfla, beaucoup fiille kullanılır. très beaucoup denmez.", ex: [["Elle est très gentille.", "O çok kibar."], ["J'aime beaucoup ce film.", "Bu filmi çok seviyorum."]] },
            { h: "Miktar + de + isim", p: "Miktar zarfından sonra gelen isimde artikel düşer, yalnızca de (sesli harf önünde d') kalır.", ex: [["Il y a beaucoup de monde.", "Çok kalabalık."], ["Je voudrais un peu de sucre.", "Biraz şeker rica ediyorum."], ["Je n'ai pas assez d'argent.", "Yeterince param yok."]] },
            { h: "très mi, trop mu?", p: "trop olması gerekenden fazla demektir ve genelde olumsuz bir sonuç taşır.", ex: [["Ce manteau est très beau, mais trop cher.", "Bu palto çok güzel ama fazla pahalı."]] }
        ]
    },
    {
        id: "adv-manner", name: "Tarz Zarfları", title: "Les adverbes de manière",
        info: "Eylemin nasıl yapıldığını söyler.",
        rules: [
            { h: "-ment ile yapım", p: "Sıfatın dişil hâline -ment eklenir: lent → lente → lentement, heureux → heureuse → heureusement. Sesli harfle biten sıfatta eril hâli kullanılır: vrai → vraiment.", ex: [["Il parle lentement.", "Yavaş konuşuyor."]] },
            { h: "bon mu, bien mi?", p: "bon sıfattır ve ismi niteler; bien zarftır ve fiili niteler. Aynı şekilde mauvais / mal.", ex: [["C'est un bon livre.", "Bu iyi bir kitap."], ["Elle chante bien.", "İyi şarkı söylüyor."]] },
            { h: "Cümledeki yeri", p: "Fiilden sonra gelir. Bileşik zamanda bien, mal, vite gibi kısa zarflar yardımcı fiil ile ortaç arasına girer.", ex: [["J'ai bien dormi.", "İyi uyudum."]] }
        ]
    },
    {
        id: "compare", name: "Karşılaştırma", title: "La comparaison",
        info: "İki şeyi karşılaştırır.",
        rules: [
            { h: "Sıfatla", p: "plus + sıfat + que (daha), moins + sıfat + que (daha az), aussi + sıfat + que (kadar).", ex: [["Paul est plus grand que Marc.", "Paul, Marc'tan daha uzun."], ["Le bus est moins cher que le train.", "Otobüs trenden daha ucuz."], ["Elle est aussi gentille que sa sœur.", "Kız kardeşi kadar kibar."]] },
            { h: "Fiil ve isimle", p: "Fiil: plus que, moins que, autant que. İsim: plus de, moins de, autant de + isim + que.", ex: [["Je travaille autant que toi.", "Senin kadar çalışıyorum."], ["Il a plus de livres que moi.", "Onun benden daha çok kitabı var."]] },
            { h: "Düzensiz biçimler", p: "bon → meilleur, bien → mieux, mauvais → pire (ya da plus mauvais).", ex: [["Ce gâteau est meilleur que l'autre.", "Bu pasta diğerinden daha iyi."], ["Tu parles mieux que moi.", "Benden daha iyi konuşuyorsun."]] },
            { h: "En üstünlük", p: "le / la / les + plus ya da moins + sıfat. Ardından de gelir.", ex: [["C'est la plus belle ville de France.", "Fransa'nın en güzel şehri bu."], ["C'est le meilleur restaurant du quartier.", "Mahallenin en iyi restoranı bu."]] }
        ]
    },
    {
        id: "negation", name: "Olumsuzluk", title: "La négation",
        info: "Olumsuzluk iki parçalıdır ve çekimli fiili sarar.",
        rules: [
            { h: "ne ... pas", p: "ne çekimli fiilden önce, pas sonra gelir. Sesli harf önünde ne → n'. Konuşmada ne çoğu zaman düşer: Je sais pas.", ex: [["Je ne parle pas italien.", "İtalyanca konuşmuyorum."], ["Il n'aime pas le café.", "Kahveyi sevmez."]] },
            { h: "Bileşik zamanda ve mastarda", p: "Bileşik zamanda olumsuzluk yardımcı fiili sarar. Mastarda ne pas ikisi birlikte önde durur.", ex: [["Je n'ai pas mangé.", "Yemek yemedim."], ["Je préfère ne pas sortir.", "Çıkmamayı tercih ederim."]] },
            { h: "Olumsuzda de", p: "Olumsuz cümlede un, une, des, du, de la → de olur. être ile değişmez.", ex: [["J'ai une voiture. → Je n'ai pas de voiture.", "Arabam var. → Arabam yok."], ["Ce n'est pas un chat.", "Bu bir kedi değil."]] },
            { h: "Diğer olumsuzluklar", p: "ne ... plus (artık), ne ... jamais (asla), ne ... rien (hiçbir şey), ne ... personne (kimse), ne ... que (sadece).", ex: [["Je n'habite plus ici.", "Artık burada oturmuyorum."], ["Je ne vois personne.", "Kimseyi görmüyorum."]] },
            { h: "Olumsuz soruya evet: si", p: "Olumsuz bir soruya evet derken oui değil si kullanılır.", ex: [["Tu ne viens pas ? — Si, je viens !", "Gelmiyor musun? — Geliyorum tabii!"]] }
        ]
    },
    {
        id: "articles", name: "Artikeller", title: "Les articles",
        info: "Fransızcada neredeyse her isim bir artikelle kullanılır. Artikel ismin cinsiyetini (eril / dişil) ve sayısını (tekil / çoğul) gösterir.",
        rules: [
            { h: "Hangi kelimelere gelir?", p: "Artikel yalnızca isimlerin önüne gelir: şeyler, kişiler, hayvanlar, yerler, soyut kavramlar, ülkeler, diller, mevsimler. Fiil, sıfat, zarf ve zamirlerin önüne gelmez. İsimle artikel arasına sıfat girebilir: un petit chat. Türkçede artikel olmadığı için her yeni ismi artikeliyle ezberle: maison değil, la maison.", ex: [["La maison est grande.", "Ev büyük."], ["Le soleil brille.", "Güneş parlıyor."], ["L'amitié est importante.", "Dostluk önemlidir."]] },
            { h: "Tablo", p: "Belirli (o bilinen): le (eril), la (dişil), l' (sesli harf / sessiz h önünde), les (çoğul). Belirsiz (bir): un, une, des. Bölüm (biraz): du, de la, de l'.", table: ["le livre · la table", "l'arbre · l'école", "les livres · les tables", "un livre · une table", "des livres · des tables", "du pain · de la soupe · de l'eau"] },
            { h: "Cinsiyet nasıl anlaşılır?", p: "Her ismin bir cinsiyeti vardır ve çoğu zaman tahmin edilemez; artikeliyle öğrenilir. Yardımcı ipuçları: -tion, -sion, -té, -ure, -ette, -ie ile bitenler çoğunlukla dişil; -ment, -age, -eau, -isme, -oir ile bitenler çoğunlukla eril. İstisnalar var: la plage, l'eau (dişil).", ex: [["la situation, la liberté, la voiture", "durum, özgürlük, araba (dişil)"], ["le moment, le fromage, le bureau", "an, peynir, ofis (eril)"]] },
            { h: "l' ve sesli harf", p: "le ve la, sesli harfle ya da sessiz h ile başlayan isimden önce l' olur. Bu yüzden l' cinsiyeti göstermez; kelime notlarında cinsiyet ayrıca yazılır (Dişil: une école). Bazı h harfleri sessiz sayılmaz (h aspiré) ve kısaltma yapılmaz: le héros, la Hollande.", ex: [["l'ami, l'école, l'hôtel", "arkadaş, okul, otel"], ["le haricot, la honte", "fasulye, utanç (h aspiré)"]] },
            { h: "Çoğul", p: "Çoğulda cinsiyet farkı kalkar: les ve des. İsmin sonuna genelde -s eklenir ama okunmaz; çoğul olduğunu çoğu zaman sadece artikelden anlarız. Sesli harfle başlayan isimde les ve des'in s'si bağlanarak z okunur: les_amis [lezami].", ex: [["le chat → les chats", "kedi → kediler"], ["une fille → des filles", "bir kız → kızlar"]] },
            { h: "Belirli artikel ne zaman?", p: "1) Bilinen, daha önce söz edilen şey. 2) Türün geneli ve beğeniler: aimer, adorer, préférer, détester ardından hep belirli artikel gelir. 3) Tek olan şeyler: le soleil. 4) Ülke, dil, mevsim, kıta: la France, le français, l'été. 5) Vücut bölümleri: j'ai mal à la tête. 6) Her pazartesi gibi alışkanlık: le lundi.", ex: [["J'aime le café, mais je déteste le thé.", "Kahveyi severim ama çaydan nefret ederim."], ["La Turquie est un beau pays.", "Türkiye güzel bir ülke."], ["Le samedi, je vais au marché.", "Cumartesileri pazara giderim."]] },
            { h: "Belirsiz artikel ne zaman?", p: "İlk kez söz edilen, sayılabilen tek bir şey (un, une) ya da belirsiz sayıda şey (des). Türkçede bir ya da hiçbir şey denmeyen yerlerde Fransızca yine artikel ister.", ex: [["Il y a un chat dans le jardin.", "Bahçede bir kedi var."], ["J'achète des pommes.", "Elma alıyorum."]] },
            { h: "Bölüm artikeli ne zaman?", p: "Sayılamayan şeylerden belirsiz bir miktar: yiyecek, içecek ve soyut şeyler. Türkçede genelde hiçbir şeyle karşılanmaz. manger, boire, prendre, acheter, vouloir fiillerinden sonra sık gelir.", ex: [["Je bois du café et de l'eau.", "Kahve ve su içerim."], ["Tu veux de la salade ?", "Salata ister misin?"], ["Il faut du courage.", "Cesaret gerekir."]] },
            { h: "Beğeni mi, tüketim mi?", p: "Aynı isim fiile göre farklı artikel alır: sevmek genel (le), yemek / içmek miktar (du).", ex: [["J'aime le fromage. Je mange du fromage.", "Peyniri severim. Peynir yerim."]] },
            { h: "Birleşen biçimler", p: "à ve de, le ve les ile birleşir: à + le = au, à + les = aux, de + le = du, de + les = des. la ve l' birleşmez: à la, à l', de la, de l'.", ex: [["Je vais au marché, à la poste et à l'école.", "Pazara, postaneye ve okula gidiyorum."], ["C'est le livre du professeur.", "Bu öğretmenin kitabı."], ["J'ai mal aux dents.", "Dişlerim ağrıyor."]] },
            { h: "Artikelin de olduğu durumlar", p: "1) Olumsuzda un, une, des, du, de la → de: je n'ai pas de voiture (être hariç). 2) Miktar sözcüğünden sonra: beaucoup de, un peu de, un kilo de, une bouteille de. 3) Çoğul isimden önce sıfat gelirse des → de: de beaux jours.", ex: [["Je ne mange pas de viande.", "Et yemem."], ["Je voudrais un kilo de tomates.", "Bir kilo domates rica ediyorum."]] },
            { h: "Artikel gelmeyen durumlar", p: "1) Şehir adları: à Paris. 2) Kişi adları: Marie. 3) être ile meslek, din, milliyet: il est médecin. 4) en ile ülke ve taşıt: en France, en bus. 5) Dil, parler ile: je parle français. 6) Bazı kalıplar: avoir faim, avec plaisir, sans sucre. 7) Ay ve gün adları: en mai, lundi.", ex: [["Il est professeur à Lyon.", "Lyon'da öğretmen."], ["Je parle turc et anglais.", "Türkçe ve İngilizce konuşurum."], ["Un café sans sucre, s'il vous plaît.", "Şekersiz bir kahve lütfen."]] }
        ]
    },
    {
        id: "subject", name: "Özne Zamirleri", title: "Les pronoms sujets",
        info: "Fiilin öznesidir ve Türkçedeki gibi düşürülemez.",
        rules: [
            { h: "Biçimler (être ile)", p: "Fransızcada çekim ekleri çoğu zaman aynı okunduğundan özne her zaman söylenir.", table: ["je suis", "tu es", "il / elle / on est", "nous sommes", "vous êtes", "ils / elles sont"] },
            { h: "tu mu, vous mu?", p: "tu: aile, arkadaş, çocuk. vous: çoğul ya da tanımadığın birine kibar hitap.", ex: [["Tu viens avec moi ?", "Benimle geliyor musun?"], ["Vous êtes madame Martin ?", "Siz Martin Hanım mısınız?"]] },
            { h: "on", p: "Konuşmada çoğu zaman nous yerine kullanılır, fiil 3. tekil çekilir. Genel anlamda insan da demektir.", ex: [["On va au cinéma ce soir ?", "Bu akşam sinemaya gidelim mi?"], ["En France, on mange du fromage.", "Fransa'da peynir yenir."]] },
            { h: "ils ve elles", p: "Karışık bir grupta (bir erkek bile olsa) ils kullanılır.", ex: [["Marie et Paul ? Ils sont au travail.", "Marie ve Paul mü? İşteler."]] }
        ]
    },
    {
        id: "stressed", name: "Vurgulu Zamirler", title: "Les pronoms toniques",
        info: "Vurgu için, edattan sonra ve c'est ile kullanılır.",
        rules: [
            { h: "Biçimler", p: "Özne zamirlerinden farklı olanlar: moi, toi, lui, eux. Diğerleri aynıdır.", table: ["moi", "toi", "lui / elle", "nous", "vous", "eux / elles"] },
            { h: "Ne zaman?", p: "Vurgu yaparken, edattan sonra, c'est ile ve tek kelimelik cevaplarda.", ex: [["Moi, j'aime le thé.", "Ben çayı severim."], ["Je vais au cinéma avec toi.", "Seninle sinemaya gidiyorum."], ["C'est lui.", "O."], ["Moi aussi !", "Ben de!"]] }
        ]
    },
    {
        id: "object", name: "Nesne Zamirleri", title: "Les pronoms compléments",
        info: "Nesnenin yerine geçer ve fiilin önüne gelir.",
        rules: [
            { h: "Doğrudan nesne (-i)", p: "me, te, le, la, l', nous, vous, les. Edatsız nesnenin yerine geçer.", ex: [["Je vois Marie. → Je la vois.", "Marie'yi görüyorum. → Onu görüyorum."], ["Tu connais mes parents ? — Oui, je les connais.", "Annemle babamı tanıyor musun? — Evet, onları tanıyorum."]] },
            { h: "Dolaylı nesne (-e)", p: "me, te, lui, nous, vous, leur. à ile kurulan nesnenin yerine geçer: parler à, téléphoner à, donner à.", ex: [["Je parle à Paul. → Je lui parle.", "Paul'le konuşuyorum. → Onunla konuşuyorum."], ["Je leur donne un cadeau.", "Onlara bir hediye veriyorum."]] },
            { h: "Yeri", p: "Çekimli fiilden önce gelir. Bileşik zamanda yardımcı fiilden önce, olumsuzda ne ile fiil arasında durur.", ex: [["Je l'ai vu hier.", "Onu dün gördüm."], ["Je ne le connais pas.", "Onu tanımıyorum."]] },
            { h: "y ve en", p: "y: à + yer ya da şey. en: de + şey ya da miktar.", ex: [["Tu vas au marché ? — Oui, j'y vais.", "Pazara mı gidiyorsun? — Evet, oraya gidiyorum."], ["Tu veux du pain ? — Oui, j'en veux.", "Ekmek ister misin? — Evet, (ondan) istiyorum."]] },
            { h: "Olumlu emirde", p: "Olumlu emirde zamir fiilden sonra gelir ve me, te → moi, toi olur.", ex: [["Regarde-moi !", "Bana bak!"], ["Donnez-lui le livre.", "Ona kitabı verin."]] }
        ]
    },
    {
        id: "possessive", name: "İyelik Sıfat ve Zamirleri", title: "Les possessifs",
        info: "Kime ait olduğunu söyler.",
        rules: [
            { h: "İyelik sıfatları", p: "Eril / dişil / çoğul: mon, ma, mes (benim) · ton, ta, tes (senin) · son, sa, ses (onun) · notre, nos (bizim) · votre, vos (sizin) · leur, leurs (onların).", table: ["mon livre", "ta maison", "son père", "notre ville", "vos amis", "leurs enfants"] },
            { h: "Sahibe değil isme uyar", p: "son ve sa, sahibin cinsiyetini değil, ismin cinsiyetini gösterir. son père hem kadının hem erkeğin babası olabilir.", ex: [["Marie aime son père et sa mère.", "Marie annesini ve babasını seviyor."], ["Paul aime son père et sa mère.", "Paul annesini ve babasını seviyor."]] },
            { h: "Sesli harf önünde", p: "Sesli harf ya da sessiz h ile başlayan dişil isimde ma, ta, sa yerine mon, ton, son kullanılır.", ex: [["C'est mon amie Claire.", "Bu arkadaşım Claire."], ["Ton école est loin ?", "Okulun uzak mı?"]] },
            { h: "İyelik zamirleri", p: "İsmin yerine geçer: le mien (benimki), le tien, le sien, le nôtre, le vôtre, le leur. Artikel ve ek isme uyar: la mienne, les miens.", ex: [["C'est ton sac ? — Oui, c'est le mien.", "Bu senin çantan mı? — Evet, benimki."], ["Ta voiture est rouge, la mienne est bleue.", "Senin araban kırmızı, benimki mavi."]] }
        ]
    },
    {
        id: "demonstrative", name: "İşaret Sıfat ve Zamirleri", title: "Les démonstratifs",
        info: "Bu, şu, bunlar: gösterir.",
        rules: [
            { h: "ce, cet, cette, ces", p: "ce: eril. cet: sesli harf ya da sessiz h ile başlayan eril isim. cette: dişil. ces: çoğul.", ex: [["Ce livre est intéressant.", "Bu kitap ilginç."], ["Cet hôtel est cher.", "Bu otel pahalı."], ["Cette robe est belle.", "Bu elbise güzel."], ["Ces chaussures sont neuves.", "Bu ayakkabılar yeni."]] },
            { h: "-ci ve -là", p: "Yakın ve uzağı ayırmak için ismin sonuna -ci (bu) ya da -là (şu) eklenir.", ex: [["Je préfère cette chemise-ci, pas celle-là.", "Bu gömleği tercih ederim, şunu değil."]] },
            { h: "celui, celle, ceux, celles", p: "İsmin yerine geçer; tek başına kullanılmaz: ardından -ci / -là, de ya da qui gelir.", ex: [["C'est le vélo de Paul ? — Non, c'est celui de Marc.", "Paul'ün bisikleti mi? — Hayır, Marc'ınki."], ["Celle qui chante est ma sœur.", "Şarkı söyleyen kız kardeşim."]] },
            { h: "ce, ça, cela, ceci", p: "ce yalnızca être ile kullanılır (c'est). Diğer fiillerle ça (konuşma) ya da cela (yazı) kullanılır.", ex: [["C'est beau.", "Güzel."], ["Ça coûte combien ?", "Bu ne kadar?"], ["Ça me plaît.", "Bu hoşuma gidiyor."]] }
        ]
    },
    {
        id: "presentatives", name: "C'est, Il y a ve Sunum Kalıpları", title: "Les présentatifs",
        info: "Bir şeyi tanıtmak, göstermek ya da var olduğunu söylemek için.",
        rules: [
            { h: "c'est ve ce sont", p: "Bir şeyi ya da kişiyi tanıtır: bu ... -dır. Çoğulda ce sont. Olumsuz: ce n'est pas. Geçmişte c'était, gelecekte ce sera.", ex: [["C'est mon frère.", "Bu benim erkek kardeşim."], ["Ce sont mes amis.", "Bunlar arkadaşlarım."], ["Ce n'est pas grave.", "Önemli değil."], ["C'était un beau voyage.", "Güzel bir yolculuktu."]] },
            { h: "c'est mi, il est mi?", p: "il / elle est + sıfat ya da artikelsiz meslek: kişiyi niteler. c'est + artikel ya da iyelik + isim. Genel bir durumu yorumlarken c'est + eril sıfat.", ex: [["Il est médecin. / C'est un médecin.", "O doktor. / O bir doktor."], ["Elle est gentille.", "O kibar."], ["C'est mon ami.", "Bu benim arkadaşım."], ["Paris ? C'est magnifique !", "Paris mi? Muhteşem!"]] },
            { h: "c'est ile vurgu", p: "c'est + vurgulu zamir ya da isim + qui / que: cümlenin bir öğesini öne çıkarır.", ex: [["Qui est là ? — C'est moi.", "Kim o? — Benim."], ["C'est Marie qui a gagné.", "Kazanan Marie."]] },
            { h: "il y a: var", p: "Tekilde de çoğulda da aynı kalır. Olumsuzu il n'y a pas de. Soru: est-ce qu'il y a ... ? Geçmişte il y avait, gelecekte il y aura.", ex: [["Il y a un parc près d'ici.", "Buraya yakın bir park var."], ["Il y a des étudiants dans la salle.", "Salonda öğrenciler var."], ["Il n'y a pas de pain.", "Ekmek yok."], ["Il y avait beaucoup de monde.", "Çok kalabalıktı."]] },
            { h: "il y a + süre: önce", p: "Geçmiş zamanla kullanılınca ... önce demektir.", ex: [["Je suis arrivé il y a deux jours.", "İki gün önce geldim."]] },
            { h: "il y a mı, c'est mi?", p: "il y a bir şeyin var olduğunu, c'est ne olduğunu söyler. Çoğu zaman birlikte kullanılır.", ex: [["Il y a un homme à la porte. C'est mon voisin.", "Kapıda bir adam var. Komşum."]] },
            { h: "Qu'est-ce qu'il y a ?", p: "Ne var? Ne oldu? anlamına gelir.", ex: [["Qu'est-ce qu'il y a ? Tu es triste ?", "Ne oldu? Üzgün müsün?"]] },
            { h: "voici, voilà", p: "İşte: bir şeyi gösterirken ya da verirken. voilà konuşmada ikisinin yerine de kullanılır ve tamam, oldu anlamına da gelir.", ex: [["Voici mon passeport.", "İşte pasaportum."], ["Voilà, c'est fini !", "İşte, bitti!"]] },
            { h: "il faut", p: "Gerekir. Ardından mastar ya da isim gelir; özne hep il'dir.", ex: [["Il faut partir maintenant.", "Şimdi çıkmak gerekiyor."], ["Il faut du temps pour apprendre une langue.", "Bir dil öğrenmek için zaman gerekir."]] }
        ]
    },
    {
        id: "question", name: "Soru Kelimeleri", title: "Les mots interrogatifs",
        info: "Soru sormanın üç yolu ve soru kelimeleri.",
        rules: [
            { h: "Üç soru biçimi", p: "Tonlama (konuşma), est-ce que (her yerde), devrik yapı (resmî). Devrik yapıda fiil ile özne tireyle bağlanır.", ex: [["Tu viens ?", "Geliyor musun?"], ["Est-ce que tu viens ?", "Geliyor musun?"], ["Viens-tu ?", "Geliyor musun?"]] },
            { h: "Soru kelimeleri", p: "qui (kim), que / quoi (ne), où (nerede), quand (ne zaman), comment (nasıl), pourquoi (neden), combien (ne kadar). Konuşmada sona da gelebilir.", ex: [["Où tu habites ? / Tu habites où ?", "Nerede oturuyorsun?"], ["Pourquoi tu ris ? — Parce que c'est drôle.", "Neden gülüyorsun? — Çünkü komik."]] },
            { h: "quel", p: "Hangi, ne: isme uyar. quel, quelle, quels, quelles.", ex: [["Quelle heure est-il ?", "Saat kaç?"], ["Quels livres tu aimes ?", "Hangi kitapları seversin?"]] },
            { h: "qu'est-ce que", p: "Ne? demenin en yaygın yolu. Konuşmada quoi sona gelir.", ex: [["Qu'est-ce que tu fais ?", "Ne yapıyorsun?"], ["Tu fais quoi ?", "Ne yapıyorsun?"]] },
            { h: "lequel", p: "Hangisi: seçenekler arasından sorar ve isme uyar.", ex: [["Laquelle tu préfères ?", "Hangisini tercih edersin?"]] }
        ]
    },
    {
        id: "relative", name: "İlgi Zamirleri", title: "Les pronoms relatifs",
        info: "İki cümleyi bağlar; Türkçedeki -en, -dığı eklerinin karşılığı.",
        rules: [
            { h: "qui: özne", p: "Ardından genelde fiil gelir. Türkçede -en.", ex: [["L'homme qui parle est mon père.", "Konuşan adam benim babam."]] },
            { h: "que: nesne", p: "Ardından özne gelir. Sesli harf önünde qu'. Türkçede -dığı.", ex: [["Le livre que je lis est intéressant.", "Okuduğum kitap ilginç."], ["Le film qu'on a vu était long.", "İzlediğimiz film uzundu."]] },
            { h: "où: yer ve zaman", p: "Yer ve zaman bildiren isimlerden sonra.", ex: [["La ville où j'habite est petite.", "Oturduğum şehir küçük."], ["Le jour où je suis arrivé, il pleuvait.", "Geldiğim gün yağmur yağıyordu."]] },
            { h: "dont: de yerine", p: "de ile kurulan fiil ve kalıplarda: parler de, avoir besoin de, avoir peur de.", ex: [["C'est le livre dont je parle.", "Bahsettiğim kitap bu."], ["Voici l'outil dont tu as besoin.", "İşte ihtiyacın olan alet."]] }
        ]
    },
    {
        id: "indefinite", name: "Belgisiz Sıfat ve Zamirler", title: "Les indéfinis",
        info: "Belirsiz kişi, şey ya da miktar bildirir.",
        rules: [
            { h: "Sıfat olanlar", p: "İsmin önüne gelir: chaque (her bir, tekil), quelques (birkaç), plusieurs (birçok), certains (bazı), aucun (hiçbir).", ex: [["Je lis chaque soir.", "Her akşam okurum."], ["J'ai quelques amis à Lyon.", "Lyon'da birkaç arkadaşım var."]] },
            { h: "Zamir olanlar", p: "quelqu'un (biri), quelque chose (bir şey), chacun (her biri), tout le monde (herkes), rien (hiçbir şey), personne (kimse).", ex: [["Quelqu'un a appelé.", "Biri aradı."], ["Tout le monde est content.", "Herkes memnun."]] },
            { h: "tout", p: "İsme uyar: tout le, toute la, tous les, toutes les. tout seul kullanılınca her şey demektir.", ex: [["Je travaille tous les jours.", "Her gün çalışırım."], ["Toute la famille est là.", "Bütün aile burada."], ["Tout va bien.", "Her şey yolunda."]] },
            { h: "quelque chose de + sıfat", p: "Sıfat de ile bağlanır ve eril kalır. Aynısı rien, quelqu'un için de geçerli.", ex: [["Je voudrais quelque chose de chaud.", "Sıcak bir şey rica ediyorum."], ["Il n'y a rien d'intéressant.", "İlginç bir şey yok."]] },
            { h: "ne ile kullanılanlar", p: "rien, personne, aucun cümlede ne ile birlikte gelir.", ex: [["Je n'ai aucune idée.", "Hiçbir fikrim yok."], ["Personne ne répond.", "Kimse cevap vermiyor."]] }
        ]
    },

    /* ---------- Verb tenses ---------- */
    {
        id: "present", cat: "tense", name: "Şimdiki ve Geniş Zaman", title: "Le présent",
        info: "Türkçedeki şimdiki zamanın ve geniş zamanın ikisini de karşılar.",
        rules: [
            { h: "Kullanım", p: "Je mange: hem yiyorum hem yerim. Anlık olduğunu vurgulamak için être en train de + mastar.", ex: [["Je mange une pomme.", "Bir elma yiyorum."], ["Je mange à midi.", "Öğlen yemek yerim."], ["Je suis en train de travailler.", "Şu an çalışıyorum."]] },
            { h: "-er fiiller (parler)", p: "Fiillerin büyük çoğunluğu. -e, -es, -e, -ent ekleri okunmaz; dört biçim aynı sesle söylenir.", table: ["je parle", "tu parles", "il parle", "nous parlons", "vous parlez", "ils parlent"] },
            { h: "-ir fiiller (finir)", p: "Çoğulda -iss- eklenir.", table: ["je finis", "tu finis", "il finit", "nous finissons", "vous finissez", "ils finissent"] },
            { h: "Düzensiz fiiller", p: "En sık kullanılanlar düzensizdir: être, avoir, aller, faire, pouvoir, vouloir... Her fiilin kelime sayfasında çekim tablosu var.", ex: [["Je suis, j'ai, je vais, je fais.", "Ben -im, sahibim, gidiyorum, yapıyorum."]] },
            { h: "depuis ile", p: "Geçmişte başlayıp hâlâ süren eylemler için présent kullanılır.", ex: [["J'apprends le français depuis un an.", "Bir yıldır Fransızca öğreniyorum."]] }
        ]
    },
    {
        id: "imperative", cat: "tense", name: "Emir Kipi", title: "L'impératif",
        info: "Emir, rica, öneri ve talimat için.",
        rules: [
            { h: "Yapım", p: "Yalnızca tu, nous, vous kişileri vardır ve özne söylenmez. -er fiillerde tu biçiminin sonundaki -s düşer.", ex: [["Parle plus fort !", "Daha yüksek sesle konuş!"], ["Partons !", "Gidelim!"], ["Écoutez, s'il vous plaît.", "Dinleyin lütfen."]] },
            { h: "Düzensizler", p: "être: sois, soyons, soyez. avoir: aie, ayons, ayez. aller: va, allons, allez.", ex: [["Sois sage !", "Uslu dur!"], ["N'ayez pas peur.", "Korkmayın."]] },
            { h: "Olumsuz emir", p: "ne ... pas fiili sarar.", ex: [["Ne touche pas !", "Dokunma!"]] },
            { h: "Dönüşlü ve zamirli fiiller", p: "Olumluda zamir fiilden sonra tireyle gelir, olumsuzda önde kalır.", ex: [["Lève-toi !", "Kalk!"], ["Ne te lève pas.", "Kalkma."], ["Asseyez-vous.", "Oturun."]] }
        ]
    },
    {
        id: "passe-compose", cat: "tense", name: "Geçmiş Zaman (Passé composé)", title: "Le passé composé",
        info: "Geçmişte olup bitmiş eylemler: Türkçedeki -dı.",
        rules: [
            { h: "Yapım", p: "avoir ya da être (présent) + geçmiş ortaç.", ex: [["J'ai mangé une pizza.", "Bir pizza yedim."], ["Nous avons visité le musée.", "Müzeyi gezdik."]] },
            { h: "Geçmiş ortaç", p: "-er → -é (parlé), -ir → -i (fini). Düzensizler: être → été, avoir → eu, faire → fait, prendre → pris, voir → vu, boire → bu, lire → lu, mettre → mis.", ex: [["J'ai pris le train et j'ai lu un livre.", "Trene bindim ve bir kitap okudum."]] },
            { h: "être ile çekilenler", p: "Hareket ve durum değişikliği bildiren fiiller (aller, venir, arriver, partir, entrer, sortir, monter, descendre, naître, mourir, rester, tomber, retourner) ve bütün dönüşlü fiiller. Ortaç özneye uyar.", table: ["je suis allé(e)", "tu es allé(e)", "il est allé / elle est allée", "nous sommes allé(e)s", "vous êtes allé(e)(s)", "ils sont allés / elles sont allées"] },
            { h: "Dönüşlü fiiller", p: "Dönüşlü zamir + être + ortaç.", ex: [["Elle s'est levée à sept heures.", "Saat yedide kalktı."]] },
            { h: "Olumsuz ve zarflar", p: "Olumsuzluk ve kısa zarflar yardımcı fiili sarar ya da ondan sonra gelir.", ex: [["Je n'ai pas compris.", "Anlamadım."], ["J'ai déjà vu ce film.", "Bu filmi zaten gördüm."]] }
        ]
    },
    {
        id: "imparfait", cat: "tense", name: "Hikâye Geçmişi (Imparfait)", title: "L'imparfait",
        info: "Geçmişte süren durum, alışkanlık ve betimleme: -ardı, -yordu.",
        rules: [
            { h: "Kullanım", p: "Geçmişteki alışkanlıklar (-ardı), betimleme (hava, yaş, duygu, görünüş) ve süren arka plan (-yordu).", ex: [["Quand j'étais petit, j'habitais à Izmir.", "Küçükken İzmir'de otururdum."], ["Il faisait beau et les enfants jouaient.", "Hava güzeldi ve çocuklar oynuyordu."]] },
            { h: "Yapım", p: "nous biçiminden -ons atılır, ekler eklenir: -ais, -ais, -ait, -ions, -iez, -aient. Tek istisna être: j'étais.", table: ["je parlais", "tu parlais", "il parlait", "nous parlions", "vous parliez", "ils parlaient"] },
            { h: "Imparfait mı, passé composé mu?", p: "Imparfait arka planı ve süren durumu, passé composé o sırada olan tek ve bitmiş olayı anlatır.", ex: [["Je dormais quand le téléphone a sonné.", "Telefon çaldığında uyuyordum."], ["Il pleuvait, alors nous sommes restés à la maison.", "Yağmur yağıyordu, bu yüzden evde kaldık."]] },
            { h: "Masal başlangıcı", p: "Masallar imparfait ile başlar.", ex: [["Il était une fois une petite fille.", "Bir varmış bir yokmuş, küçük bir kız varmış."]] }
        ]
    },
    {
        id: "futur-proche", cat: "tense", name: "Yakın Gelecek ve Yakın Geçmiş", title: "Le futur proche et le passé récent",
        info: "aller + mastar (-acak) ve venir de + mastar (az önce -dı).",
        rules: [
            { h: "Futur proche: aller + mastar", p: "Konuşmada en çok kullanılan gelecek zaman: planlar ve hemen olacak şeyler.", table: ["je vais manger", "tu vas manger", "il va manger", "nous allons manger", "vous allez manger", "ils vont manger"] },
            { h: "Örnekler", p: "Olumsuzda ne ... pas aller fiilini sarar.", ex: [["Il va pleuvoir.", "Yağmur yağacak."], ["Ce soir, je vais regarder un film.", "Bu akşam bir film izleyeceğim."], ["Je ne vais pas sortir.", "Dışarı çıkmayacağım."]] },
            { h: "Passé récent: venir de + mastar", p: "Az önce olmuş bir şey. venir présent'te çekilir.", ex: [["Je viens de manger.", "Az önce yemek yedim."], ["Le train vient de partir.", "Tren az önce kalktı."]] },
            { h: "Dikkat", p: "venir de + yer: -den gelmek. venir de + mastar: az önce yapmış olmak.", ex: [["Je viens de Turquie.", "Türkiye'den geliyorum."], ["Je viens d'arriver.", "Az önce geldim."]] }
        ]
    },
    {
        id: "futur-simple", cat: "tense", name: "Gelecek Zaman (Futur simple)", title: "Le futur simple",
        info: "Daha uzak gelecek, tahmin ve sözler: -acak.",
        rules: [
            { h: "Yapım", p: "Mastar + -ai, -as, -a, -ons, -ez, -ont. -re ile biten fiillerde son e düşer: prendre → je prendrai.", table: ["je parlerai", "tu parleras", "il parlera", "nous parlerons", "vous parlerez", "ils parleront"] },
            { h: "Düzensiz kökler", p: "être → ser-, avoir → aur-, aller → ir-, faire → fer-, pouvoir → pourr-, venir → viendr-, voir → verr-, vouloir → voudr-, devoir → devr-.", ex: [["Demain, il fera beau.", "Yarın hava güzel olacak."], ["Nous irons en France l'été prochain.", "Gelecek yaz Fransa'ya gideceğiz."]] },
            { h: "quand + futur", p: "Türkçede -ınca / -dığında denen gelecekteki durumlarda Fransızca quand ardından da futur kullanır.", ex: [["Quand je serai grand, je serai médecin.", "Büyüyünce doktor olacağım."]] },
            { h: "si + présent, futur", p: "Gerçekleşebilir koşul: si'li kısım présent, sonuç futur.", ex: [["S'il pleut, je resterai à la maison.", "Yağmur yağarsa evde kalacağım."]] }
        ]
    },
    {
        id: "conditionnel", cat: "tense", name: "Şart Kipi (Conditionnel)", title: "Le conditionnel",
        info: "Kibar istek, dilek, öneri ve hayalî koşul: -ardı, -acaktı.",
        rules: [
            { h: "Yapım", p: "Futur kökü + imparfait ekleri (-ais, -ais, -ait, -ions, -iez, -aient).", table: ["j'aimerais", "tu aimerais", "il aimerait", "nous aimerions", "vous aimeriez", "ils aimeraient"] },
            { h: "Kibarlık", p: "İstek ve ricaları yumuşatır: je voudrais, pourriez-vous, j'aimerais.", ex: [["Je voudrais un café, s'il vous plaît.", "Bir kahve rica ediyorum."], ["Pourriez-vous m'aider ?", "Bana yardım edebilir misiniz?"]] },
            { h: "Dilek ve öneri", p: "aimer, vouloir ile dilek; devoir ile öneri.", ex: [["J'aimerais voyager au Japon.", "Japonya'ya gitmek isterdim."], ["Tu devrais dormir un peu.", "Biraz uyumalısın."]] },
            { h: "si + imparfait, conditionnel", p: "Gerçek dışı ya da hayalî koşul.", ex: [["Si j'avais de l'argent, j'achèterais une maison.", "Param olsaydı bir ev alırdım."]] }
        ]
    },
    {
        id: "subjonctif", cat: "tense", name: "Dilek Kipi (Subjonctif)", title: "Le subjonctif",
        info: "Zorunluluk, istek, duygu ve şüphe bildiren ifadelerden sonra que ile gelir.",
        rules: [
            { h: "Yapım", p: "ils biçiminden -ent atılır ve -e, -es, -e, -ent eklenir. nous ve vous biçimleri imparfait ile aynıdır.", table: ["que je parte", "que tu partes", "qu'il parte", "que nous partions", "que vous partiez", "qu'ils partent"] },
            { h: "Düzensizler", p: "être: que je sois. avoir: que j'aie. aller: que j'aille. faire: que je fasse. pouvoir: que je puisse. savoir: que je sache. vouloir: que je veuille." },
            { h: "Zorunluluk: il faut que", p: "il faut que ardından her zaman subjonctif gelir.", ex: [["Il faut que tu partes maintenant.", "Şimdi gitmen gerekiyor."], ["Il faut que je fasse mes devoirs.", "Ödevlerimi yapmam gerekiyor."]] },
            { h: "İstek ve duygu", p: "vouloir que, aimer que, être content que, avoir peur que... İki öznenin farklı olması gerekir; aynıysa mastar kullanılır.", ex: [["Je veux que tu viennes.", "Gelmeni istiyorum."], ["Je veux venir.", "Gelmek istiyorum."], ["Je suis content que tu sois là.", "Burada olmana sevindim."]] },
            { h: "Bağlaçlar", p: "pour que (-sın diye), bien que (-mesine rağmen), avant que (-meden önce) ardından subjonctif gelir.", ex: [["Je parle lentement pour que tu comprennes.", "Anlayasın diye yavaş konuşuyorum."], ["Bien qu'il soit fatigué, il travaille.", "Yorgun olmasına rağmen çalışıyor."]] }
        ]
    }
];

SEED.gramOf = {};
SEED.setGrammar = function (group, pool, words) {
    words.forEach((fr) => {
        const id = `${pool}:${U.slug(fr)}`;
        (SEED.gramOf[id] = SEED.gramOf[id] || []).push(group);
    });
};
SEED.addGrammar = function (group, pool, rows) {
    SEED.words[pool].push(...rows);
    SEED.setGrammar(group, pool, rows.map((r) => r[0]));
};

/* ---------- Adverbs ---------- */
SEED.setGrammar("adv-time", "adverbs", ["aujourd'hui", "hier", "demain", "maintenant", "déjà", "encore", "bientôt", "tôt", "tard", "d'abord", "puis", "ensuite", "enfin", "autrefois", "récemment", "longtemps", "soudain", "actuellement"]);
SEED.setGrammar("adv-time", "expressions", ["tout de suite", "tout à coup", "ce soir", "en retard", "à l'heure"]);
SEED.addGrammar("adv-time", "adverbs", [
    ["avant-hier", "evvelsi gün", "A2", "", "Je suis arrivé avant-hier.", "Evvelsi gün geldim."],
    ["après-demain", "öbür gün", "A2", "", "Nous partons après-demain.", "Öbür gün yola çıkıyoruz."],
    ["désormais", "bundan böyle", "B1", "", "Désormais, je prends le train.", "Bundan böyle trene biniyorum."],
    ["aussitôt", "hemen, derhal", "B1", "", "Il est parti aussitôt.", "Hemen gitti.", "aussitôt que: -er -mez."]
]);
SEED.addGrammar("adv-time", "expressions", [
    ["tout à l'heure", "az önce; birazdan", "A2", "", "Je te vois tout à l'heure.", "Birazdan görüşürüz.", "Geçmiş zamanla az önce, gelecekle birazdan demektir."]
]);

SEED.setGrammar("adv-freq", "adverbs", ["toujours", "souvent", "parfois", "jamais", "rarement"]);
SEED.setGrammar("adv-freq", "expressions", ["tous les jours", "de temps en temps", "en général"]);
SEED.addGrammar("adv-freq", "adverbs", [
    ["quelquefois", "bazen", "A2", "", "Je vais quelquefois à la piscine.", "Bazen havuza giderim.", "parfois ile aynı anlamdadır."]
]);
SEED.addGrammar("adv-freq", "expressions", [
    ["d'habitude", "genellikle, çoğunlukla", "A2", "", "D'habitude, je me lève à sept heures.", "Genellikle saat yedide kalkarım."],
    ["une fois par semaine", "haftada bir", "A2", "", "Je fais du sport une fois par semaine.", "Haftada bir spor yaparım.", "Aynı kalıp: deux fois par jour, une fois par mois."]
]);

SEED.setGrammar("adv-place", "adverbs", ["ici", "là", "loin", "près", "dehors"]);
SEED.setGrammar("adv-place", "expressions", ["à gauche", "à droite", "tout droit"]);
SEED.setGrammar("adv-place", "pronouns", ["y"]);
SEED.addGrammar("adv-place", "adverbs", [
    ["là-bas", "orada, oraya (uzak)", "A1", "", "Tu vois la tour là-bas ?", "Oradaki kuleyi görüyor musun?"],
    ["partout", "her yerde", "A2", "", "J'ai cherché mes clés partout.", "Anahtarlarımı her yerde aradım."],
    ["ailleurs", "başka yerde", "B1", "", "Allons manger ailleurs.", "Başka yerde yiyelim."],
    ["dedans", "içeride", "B1", "", "Ouvre la boîte : il y a un cadeau dedans.", "Kutuyu aç: içinde bir hediye var."],
    ["dessus", "üstünde", "B1", "", "Voici la table, mets le vase dessus.", "İşte masa, vazoyu üstüne koy."],
    ["dessous", "altında", "B1", "", "Soulève le livre, la lettre est dessous.", "Kitabı kaldır, mektup altında."]
]);
SEED.addGrammar("adv-place", "expressions", [
    ["en haut", "yukarıda, yukarı", "A2", "", "Ma chambre est en haut.", "Odam yukarıda."],
    ["en bas", "aşağıda, aşağı", "A2", "", "Je t'attends en bas.", "Seni aşağıda bekliyorum."],
    ["quelque part", "bir yerde, bir yere", "A2", "", "J'ai laissé mon sac quelque part.", "Çantamı bir yerde bıraktım."],
    ["nulle part", "hiçbir yerde", "B1", "", "Je ne trouve mes lunettes nulle part.", "Gözlüğümü hiçbir yerde bulamıyorum.", "ne ile kullanılır."]
]);

SEED.setGrammar("adv-degree", "adverbs", ["très", "trop", "beaucoup", "peu", "assez", "plus", "moins", "presque", "environ", "seulement", "plutôt"]);
SEED.addGrammar("adv-degree", "adverbs", [
    ["tellement", "o kadar, öyle çok", "A2", "", "Je suis tellement fatigué !", "O kadar yorgunum ki!"]
]);
SEED.addGrammar("adv-degree", "expressions", [
    ["un peu", "biraz", "A1", "", "Je parle un peu français.", "Biraz Fransızca konuşurum.", "İsimle: un peu de sucre."],
    ["à peine", "ancak, güçbela", "B1", "", "J'ai à peine dormi cette nuit.", "Bu gece neredeyse hiç uyumadım."]
]);

SEED.setGrammar("adv-manner", "adverbs", ["bien", "mal", "vite", "lentement", "vraiment", "ensemble", "heureusement", "malheureusement"]);
SEED.addGrammar("adv-manner", "adverbs", [
    ["doucement", "yavaşça, usulca", "A2", "", "Parle doucement, le bébé dort.", "Yavaş konuş, bebek uyuyor."],
    ["facilement", "kolayca", "A2", "", "Elle trouve facilement du travail.", "Kolayca iş buluyor."],
    ["rapidement", "hızla", "A2", "", "Il a rapidement compris.", "Hızla anladı."],
    ["exactement", "tam olarak", "A2", "", "C'est exactement ça !", "Tam olarak bu!"],
    ["ainsi", "böylece, bu şekilde", "B1", "", "Il pleuvait ; ainsi, nous sommes restés à la maison.", "Yağmur yağıyordu; böylece evde kaldık."],
    ["mieux", "daha iyi", "A2", "", "Je vais mieux aujourd'hui.", "Bugün daha iyiyim.", "bien zarfının karşılaştırma biçimi."],
    ["comme ça", "böyle, bu şekilde", "A1", "", "On fait comme ça ?", "Böyle mi yapalım?"]
]);

/* ---------- Prepositions ---------- */
SEED.setGrammar("prep-place", "prepositions", ["à", "en", "dans", "sur", "sous", "devant", "derrière", "entre", "chez", "contre", "vers", "au bord de", "à côté de", "en face de", "près de", "loin de"]);
SEED.addGrammar("prep-place", "prepositions", [
    ["au-dessus de", "-in üstünde (değmeden)", "B1", "au-dessus d'", "La lampe est au-dessus de la table.", "Lamba masanın üstünde.", "sur değerek, au-dessus de değmeden üstte demektir."],
    ["au-dessous de", "-in altında (aşağısında)", "B1", "au-dessous d'", "Il fait deux degrés au-dessous de zéro.", "Hava sıfırın altında iki derece."],
    ["autour de", "-in etrafında", "A2", "autour d'", "Les enfants dansent autour de l'arbre.", "Çocuklar ağacın etrafında dans ediyor."],
    ["au milieu de", "-in ortasında", "A2", "au milieu d'", "Il y a une fontaine au milieu de la place.", "Meydanın ortasında bir çeşme var."],
    ["au bout de", "-in sonunda, ucunda", "B1", "au bout d'", "La gare est au bout de la rue.", "Gar sokağın sonunda.", "Zaman için de: au bout d'une heure (bir saat sonra)."],
    ["à travers", "içinden, arasından", "B1", "", "Nous marchons à travers la forêt.", "Ormanın içinden yürüyoruz."],
    ["le long de", "boyunca (yol, kıyı)", "B1", "le long d'", "Nous nous promenons le long de la Seine.", "Sen nehri boyunca yürüyoruz."]
]);

SEED.setGrammar("prep-time", "prepositions", ["avant", "après", "pendant", "depuis", "jusqu'à", "vers", "en", "dans"]);
SEED.setGrammar("prep-time", "expressions", ["il y a"]);
SEED.addGrammar("prep-time", "prepositions", [
    ["dès", "-den itibaren", "B1", "", "Je travaille dès huit heures.", "Saat sekizden itibaren çalışıyorum."],
    ["à partir de", "-den itibaren", "A2", "à partir d'", "Le magasin est ouvert à partir de neuf heures.", "Mağaza saat dokuzdan itibaren açık."]
]);

/* ---------- Comparison and negation ---------- */
SEED.setGrammar("compare", "adverbs", ["plus", "moins", "aussi", "mieux"]);
SEED.setGrammar("compare", "conjunctions", ["comme", "que"]);
SEED.addGrammar("compare", "adverbs", [
    ["autant", "o kadar (çok)", "B1", "", "Je travaille autant que toi.", "Senin kadar çalışıyorum.", "Fiil ve isimle eşitlik: autant que, autant de."]
]);
SEED.addGrammar("compare", "adjectives", [
    ["meilleur", "daha iyi", "A2", "", "Ce gâteau est meilleur que l'autre.", "Bu pasta diğerinden daha iyi.", "bon sıfatının karşılaştırma biçimi; plus bon denmez."],
    ["pire", "daha kötü", "B1", "", "Ce film est pire que le premier.", "Bu film ilkinden daha kötü."]
]);

SEED.setGrammar("negation", "adverbs", ["ne", "pas", "ne ... pas", "ne ... plus", "ne ... rien", "jamais"]);
SEED.setGrammar("negation", "conjunctions", ["ni ... ni"]);
SEED.setGrammar("negation", "pronouns", ["rien"]);
SEED.setGrammar("negation", "expressions", ["non"]);
SEED.addGrammar("negation", "adverbs", [
    ["ne ... jamais", "asla, hiç", "A1", "", "Je ne mange jamais de viande.", "Asla et yemem."],
    ["ne ... personne", "hiç kimse", "A2", "", "Je ne connais personne ici.", "Burada kimseyi tanımıyorum."],
    ["ne ... que", "sadece", "B1", "", "Je n'ai que dix euros.", "Sadece on eurom var.", "Olumsuz değil, kısıtlama bildirir: seulement anlamındadır."],
    ["ne ... pas encore", "henüz ... değil", "A2", "", "Je n'ai pas encore mangé.", "Henüz yemek yemedim."]
]);
SEED.addGrammar("negation", "expressions", [
    ["non plus", "de (olumsuz)", "A2", "", "Je n'aime pas le café. — Moi non plus.", "Kahveyi sevmem. — Ben de.", "Olumluda aussi, olumsuzda non plus kullanılır."]
]);

/* ---------- Articles and pronouns ---------- */
SEED.setGrammar("articles", "pronouns", ["le", "un", "des"]);
SEED.setGrammar("articles", "prepositions", ["du", "au", "aux", "de"]);

SEED.setGrammar("subject", "pronouns", ["je", "tu", "il", "elle", "on", "nous", "vous", "ils", "elles"]);
SEED.setGrammar("stressed", "pronouns", ["moi", "toi", "lui", "elle", "nous", "vous", "eux", "elles"]);
SEED.setGrammar("object", "pronouns", ["me", "te", "se", "lui", "leur", "nous", "vous", "y"]);
SEED.setGrammar("object", "prepositions", ["en"]);

SEED.setGrammar("possessive", "pronouns", ["mon", "ton", "son", "notre", "votre", "leur"]);
SEED.addGrammar("possessive", "pronouns", [
    ["le mien", "benimki", "A2", "la mienne, les miens, les miennes", "Ce n'est pas ton stylo, c'est le mien.", "Bu senin kalemin değil, benimki."],
    ["le tien", "seninki", "B1", "la tienne, les tiens, les tiennes", "Mon sac est noir ; le tien est rouge.", "Benim çantam siyah; seninki kırmızı."],
    ["le sien", "onunki", "B1", "la sienne, les siens, les siennes", "J'ai mon billet et il a le sien.", "Benim biletim bende, onunki de onda."],
    ["le nôtre", "bizimki", "B1", "la nôtre, les nôtres", "Votre maison est plus grande que la nôtre.", "Sizin eviniz bizimkinden büyük."],
    ["le vôtre", "sizinki", "B1", "la vôtre, les vôtres", "Ce manteau, c'est le vôtre ?", "Bu palto sizinki mi?"]
]);

SEED.setGrammar("demonstrative", "pronouns", ["ce", "ça"]);
SEED.setGrammar("demonstrative", "expressions", ["c'est", "ce sont"]);
SEED.addGrammar("demonstrative", "pronouns", [
    ["cela", "bu, şu", "A2", "", "Cela ne me plaît pas.", "Bu hoşuma gitmiyor.", "Yazı dilinde; konuşmada ça kullanılır."],
    ["ceci", "bu (yakındaki)", "B1", "", "Prends ceci, c'est pour toi.", "Bunu al, senin için."],
    ["celui", "-ki, bu (eril)", "B1", "celle, ceux, celles", "Quel gâteau ? Celui au chocolat.", "Hangi pasta? Çikolatalı olan.", "Biçimleri: celle (dişil), ceux, celles (çoğul). Yakın/uzak için: celui-ci, celui-là."]
]);
SEED.addGrammar("demonstrative", "expressions", [
    ["voici", "işte (yakın)", "A1", "", "Voici mon frère.", "İşte erkek kardeşim."],
    ["voilà", "işte", "A1", "", "Voilà ton café.", "İşte kahven."]
]);

SEED.setGrammar("presentatives", "expressions", ["c'est", "ce sont", "il y a", "il faut", "voici", "voilà", "qu'est-ce que c'est"]);
SEED.setGrammar("presentatives", "pronouns", ["ce", "ça"]);

SEED.setGrammar("question", "pronouns", ["qui", "quoi", "où", "comment", "pourquoi", "combien", "quel"]);
SEED.setGrammar("question", "conjunctions", ["quand"]);
SEED.setGrammar("question", "expressions", ["est-ce que", "qu'est-ce que", "qu'est-ce que c'est", "n'est-ce pas"]);
SEED.addGrammar("question", "pronouns", [
    ["lequel", "hangisi", "B1", "laquelle, lesquels, lesquelles", "J'ai deux livres. Lequel tu veux ?", "İki kitabım var. Hangisini istersin?"]
]);
SEED.setGrammar("relative", "pronouns", ["qui", "où", "lequel"]);
SEED.setGrammar("relative", "conjunctions", ["que"]);
SEED.addGrammar("relative", "pronouns", [
    ["dont", "-dığı (de ile)", "B1", "", "C'est le livre dont je parle.", "Bu, bahsettiğim kitap.", "de ile kurulan fiillerde: parler de, avoir besoin de."]
]);

SEED.setGrammar("indefinite", "pronouns", ["tout", "quelque chose", "quelqu'un", "chaque", "autre", "même", "rien", "on"]);
SEED.addGrammar("indefinite", "pronouns", [
    ["quelques", "birkaç", "A1", "quelque", "J'ai quelques amis à Paris.", "Paris'te birkaç arkadaşım var."],
    ["plusieurs", "birçok, birkaç", "A2", "", "J'ai visité plusieurs pays.", "Birçok ülke gezdim."],
    ["certain", "bazı, belli", "B1", "certaine, certains, certaines", "Certains étudiants travaillent le soir.", "Bazı öğrenciler akşamları çalışıyor."],
    ["chacun", "her biri", "B1", "chacune", "Chacun a sa chambre.", "Her birinin kendi odası var."],
    ["aucun", "hiçbir", "B1", "aucune", "Je n'ai aucune idée.", "Hiçbir fikrim yok.", "ne ile kullanılır."],
    ["tout le monde", "herkes", "A1", "", "Tout le monde est là.", "Herkes burada.", "Fiil tekil çekilir: tout le monde est."],
    ["n'importe quoi", "herhangi bir şey; saçmalık", "B1", "", "Il dit n'importe quoi.", "Saçmalıyor."]
]);

/* ---------- Tense markers and helper verbs ---------- */
SEED.setGrammar("present", "adverbs", ["maintenant", "aujourd'hui", "toujours", "souvent"]);
SEED.setGrammar("present", "verbs", ["être", "avoir", "faire"]);
SEED.addGrammar("present", "expressions", [
    ["en ce moment", "şu sıralar, şu an", "A1", "", "En ce moment, je travaille beaucoup.", "Şu sıralar çok çalışıyorum."]
]);
SEED.addGrammar("present", "verbal", [
    ["être en train de", "-mekte olmak", "A2", "", "Je suis en train de cuisiner.", "Şu an yemek yapıyorum.", "Eylemin tam şu anda sürdüğünü vurgular."]
]);

SEED.setGrammar("imperative", "expressions", ["s'il vous plaît", "s'il te plaît", "excusez-moi", "attention"]);

SEED.setGrammar("passe-compose", "adverbs", ["hier", "avant-hier", "déjà", "ne ... pas encore"]);
SEED.setGrammar("passe-compose", "expressions", ["il y a"]);
SEED.setGrammar("passe-compose", "verbs", ["être", "avoir"]);
SEED.addGrammar("passe-compose", "expressions", [
    ["la semaine dernière", "geçen hafta", "A1", "", "La semaine dernière, j'ai visité Lyon.", "Geçen hafta Lyon'u gezdim.", "Aynı kalıp: le mois dernier, l'année dernière."]
]);

SEED.setGrammar("imparfait", "adverbs", ["autrefois"]);
SEED.setGrammar("imparfait", "expressions", ["d'habitude"]);
SEED.setGrammar("imparfait", "conjunctions", ["quand", "pendant que"]);
SEED.addGrammar("imparfait", "expressions", [
    ["il était une fois", "bir varmış bir yokmuş", "A2", "", "Il était une fois un roi très riche.", "Bir varmış bir yokmuş, çok zengin bir kral varmış."]
]);

SEED.setGrammar("futur-proche", "verbs", ["aller", "venir"]);
SEED.setGrammar("futur-proche", "adverbs", ["bientôt"]);
SEED.setGrammar("futur-proche", "expressions", ["ce soir", "tout de suite", "tout à l'heure"]);

SEED.setGrammar("futur-simple", "adverbs", ["demain", "après-demain", "désormais"]);
SEED.setGrammar("futur-simple", "adjectives", ["prochain"]);
SEED.setGrammar("futur-simple", "conjunctions", ["si", "quand"]);
SEED.addGrammar("futur-simple", "expressions", [
    ["la semaine prochaine", "gelecek hafta", "A1", "", "La semaine prochaine, nous partirons en vacances.", "Gelecek hafta tatile gideceğiz.", "Aynı kalıp: le mois prochain, l'année prochaine."]
]);

SEED.setGrammar("conditionnel", "expressions", ["je voudrais"]);
SEED.setGrammar("conditionnel", "conjunctions", ["si"]);
SEED.setGrammar("conditionnel", "verbs", ["pouvoir", "vouloir", "devoir"]);

SEED.setGrammar("subjonctif", "expressions", ["il faut"]);
SEED.setGrammar("subjonctif", "conjunctions", ["bien que"]);
SEED.addGrammar("subjonctif", "conjunctions", [
    ["pour que", "-sın diye, -mesi için", "B1", "pour qu'", "Je t'explique pour que tu comprennes.", "Anlayasın diye sana açıklıyorum.", "Ardından subjonctif gelir."],
    ["avant que", "-meden önce", "B1", "avant qu'", "Rentre avant qu'il pleuve.", "Yağmur yağmadan eve dön.", "Ardından subjonctif gelir."]
]);
