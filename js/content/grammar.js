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
    {
        id: "adjectives", name: "Sıfatlar: Uyum ve Yer", title: "Les adjectifs",
        info: "Sıfat nitelediği ismin cinsiyetine ve sayısına uyar; çoğu isimden sonra gelir.",
        rules: [
            { h: "Dişil yapımı", p: "Genel kural: eril hâle -e eklenir (petit → petite). Zaten -e ile biten sıfat değişmez (jeune, facile). Dişilde son ünsüz okunmaya başlar: petit [peti] → petite [petit].", ex: [["Il est petit. / Elle est petite.", "O küçük. (eril / dişil)"], ["un livre facile / une question facile", "kolay bir kitap / kolay bir soru"]] },
            { h: "Düzensiz dişiller", p: "-eux → -euse (heureux → heureuse), -if → -ive (sportif → sportive), -er → -ère (cher → chère), -el, -en, -on → ünsüz ikizleşir (italien → italienne, bon → bonne, gentil → gentille). Ezberlenecekler: blanc → blanche, long → longue, frais → fraîche.", table: ["heureux → heureuse", "sportif → sportive", "cher → chère", "italien → italienne", "bon → bonne", "blanc → blanche"] },
            { h: "Çoğul", p: "Genelde -s eklenir ve okunmaz. -s ya da -x ile biten değişmez (français, heureux). -al → -aux (national → nationaux), -eau → -eaux (beau → beaux). Eril ve dişil isimleri birlikte nitelerken sıfat eril çoğul olur.", ex: [["des amis français", "Fransız arkadaşlar"], ["les monuments nationaux", "ulusal anıtlar"], ["Paul et Marie sont contents.", "Paul ve Marie memnun."]] },
            { h: "Yeri: çoğu isimden sonra", p: "Renk, milliyet, şekil ve uzun sıfatlar isimden sonra gelir. Türkçenin tersidir.", ex: [["une robe rouge", "kırmızı bir elbise"], ["un restaurant italien", "bir İtalyan restoranı"], ["un livre intéressant", "ilginç bir kitap"]] },
            { h: "İsimden önce gelenler", p: "Kısa ve sık kullanılan sıfatlar isimden önce gelir. Akılda tutmak için dört grup: güzellik (beau, joli), yaş (jeune, vieux, nouveau), iyilik (bon, mauvais), büyüklük (grand, petit, gros). Sıra bildirenler de önde: premier, dernier.", ex: [["un petit chat noir", "küçük siyah bir kedi"], ["une jolie maison blanche", "beyaz, güzel bir ev"], ["C'est mon premier jour.", "Bu benim ilk günüm."]] },
            { h: "bel, nouvel, vieil", p: "beau, nouveau ve vieux, sesli harf ya da sessiz h ile başlayan eril tekil isimden önce bel, nouvel, vieil olur. Çoğulda değişmez: beaux, nouveaux, vieux.", ex: [["un bel homme", "yakışıklı bir adam"], ["un nouvel appartement", "yeni bir daire"], ["un vieil ami", "eski bir arkadaş"]] },
            { h: "Yeri değişince anlamı değişenler", p: "Bazı sıfatlar isimden önce mecazi, sonra gerçek anlam taşır: un grand homme (büyük bir insan) / un homme grand (uzun boylu bir adam). mon ancien professeur (eski öğretmenim) / une maison ancienne (tarihî ev). mon cher ami (sevgili dostum) / un sac cher (pahalı çanta).", ex: [["C'est mon ancien collègue.", "Bu benim eski iş arkadaşım."], ["J'habite dans un quartier ancien.", "Eski (tarihî) bir semtte oturuyorum."]] },
            { h: "Değişmeyen renkler", p: "Bir meyve ya da nesne adından gelen renkler cinsiyet ve sayıya uymaz: orange, marron. İki kelimelik renkler de değişmez: bleu clair, vert foncé.", ex: [["des chaussures marron", "kahverengi ayakkabılar"], ["une chemise bleu clair", "açık mavi bir gömlek"]] }
        ]
    },
    {
        id: "pronominal", name: "Dönüşlü Fiiller", title: "Les verbes pronominaux",
        info: "Özneyle aynı kişiyi gösteren bir zamirle (me, te, se...) çekilen fiiller.",
        rules: [
            { h: "Yapım", p: "Dönüşlü zamir özneye uyar ve çekimli fiilden önce gelir. Sesli harf önünde me, te, se → m', t', s'.", table: ["je me lève", "tu te lèves", "il / elle se lève", "nous nous levons", "vous vous levez", "ils / elles se lèvent"] },
            { h: "Üç anlam", p: "1) Dönüşlü: eylem özneye döner (se laver: yıkanmak). 2) Karşılıklı: birbirini (s'aimer, se téléphoner). 3) Kalıplaşmış: anlam ayrıca öğrenilir (s'appeler, se rendre compte, se passer).", ex: [["Je me lave.", "Yıkanıyorum."], ["Ils s'aiment.", "Birbirlerini seviyorlar."], ["Comment tu t'appelles ?", "Adın ne?"]] },
            { h: "Dönüşlü mü, değil mi?", p: "Aynı fiil zamirsiz de kullanılabilir; o zaman eylem başkasına yöneliktir.", ex: [["Je lave la voiture. / Je me lave.", "Arabayı yıkıyorum. / Yıkanıyorum."], ["Je réveille les enfants. / Je me réveille.", "Çocukları uyandırıyorum. / Uyanıyorum."]] },
            { h: "Passé composé: être ile", p: "Bütün dönüşlü fiiller être ile çekilir ve ortaç genelde özneye uyar. Fiilden sonra doğrudan nesne gelirse (les mains, les dents) ortaç uymaz.", ex: [["Elle s'est levée tôt.", "Erken kalktı."], ["Nous nous sommes promenés.", "Gezindik."], ["Elle s'est lavé les mains.", "Ellerini yıkadı."]] },
            { h: "Olumsuz ve emir", p: "Olumsuzda ne zamirden önce gelir. Olumlu emirde zamir fiilden sonra tireyle gelir ve te → toi olur; olumsuz emirde önde kalır.", ex: [["Je ne me lève pas.", "Kalkmıyorum."], ["Dépêche-toi !", "Acele et!"], ["Ne t'inquiète pas.", "Merak etme."]] },
            { h: "Mastarda", p: "Zamir mastarın önüne gelir ve yine özneye uyar.", ex: [["Je vais me coucher.", "Yatacağım."], ["Nous voulons nous reposer.", "Dinlenmek istiyoruz."]] },
            { h: "Vücut bölümleri", p: "Türkçedeki iyelik yerine dönüşlü zamir ve belirli artikel kullanılır: ellerimi yıkıyorum → je me lave les mains.", ex: [["Je me brosse les dents.", "Dişlerimi fırçalıyorum."], ["Il s'est cassé la jambe.", "Bacağını kırdı."]] }
        ]
    },
    {
        id: "connectors", name: "Bağlaçlar ve Bağlayıcılar", title: "Les connecteurs logiques",
        info: "Fikirleri birbirine bağlar: neden, sonuç, karşıtlık, amaç ve zaman.",
        rules: [
            { h: "Ekleme ve seçme", p: "et (ve), ou (veya), aussi (de, da), de plus (üstelik), d'ailleurs (zaten).", ex: [["Il fait froid ; de plus, il pleut.", "Hava soğuk; üstelik yağmur yağıyor."]] },
            { h: "Neden", p: "parce que: çünkü, en sık kullanılan; pourquoi sorusuna cevap verir. car: yazı dilinde, cümle başına gelmez. comme: -dığı için, cümle başında. puisque: madem, karşı tarafın da bildiği neden. İsimle: grâce à (olumlu), à cause de (olumsuz).", ex: [["Je reste à la maison parce que je suis malade.", "Evde kalıyorum çünkü hastayım."], ["Comme il pleut, je prends le bus.", "Yağmur yağdığı için otobüse biniyorum."], ["Puisque tu es là, aide-moi.", "Madem buradasın, bana yardım et."], ["Le train est en retard à cause de la neige.", "Tren kar yüzünden gecikti."]] },
            { h: "Sonuç", p: "donc (bu yüzden), alors (o zaman, konuşmada), c'est pourquoi (işte bu yüzden).", ex: [["Je suis fatigué, donc je vais me coucher.", "Yorgunum, bu yüzden yatacağım."], ["Il a beaucoup travaillé ; c'est pourquoi il a réussi.", "Çok çalıştı; işte bu yüzden başardı."]] },
            { h: "Karşıtlık", p: "mais (ama), pourtant (yine de), cependant (bununla birlikte, yazı), par contre (buna karşın, konuşma), alors que / tandis que (oysa, iki şeyi karşılaştırırken).", ex: [["J'aime le thé, par contre je n'aime pas le café.", "Çayı severim, buna karşın kahveyi sevmem."], ["Il est riche, pourtant il n'est pas heureux.", "Zengin, yine de mutlu değil."], ["Je travaille alors que tu dors !", "Sen uyurken (oysa) ben çalışıyorum!"]] },
            { h: "Taviz", p: "même si (-sa bile) + indicatif. bien que (-mesine rağmen) + subjonctif. malgré (-e rağmen) + isim.", ex: [["Même s'il pleut, je sors.", "Yağmur yağsa bile çıkıyorum."], ["Bien qu'il pleuve, je sors.", "Yağmur yağmasına rağmen çıkıyorum."], ["Je sors malgré la pluie.", "Yağmura rağmen çıkıyorum."]] },
            { h: "Amaç", p: "pour / afin de + mastar (özne aynıysa). pour que + subjonctif (özne farklıysa).", ex: [["Je travaille pour gagner de l'argent.", "Para kazanmak için çalışıyorum."], ["Je parle lentement pour que tu comprennes.", "Anlayasın diye yavaş konuşuyorum."]] },
            { h: "Zaman", p: "quand / lorsque (-dığında), pendant que (-iken), dès que (-er -mez). Gelecekten söz ederken quand ve dès que ardından futur gelir.", ex: [["Dès que j'arrive, je t'appelle.", "Varır varmaz seni ararım."], ["Quand tu seras à Paris, écris-moi.", "Paris'te olunca bana yaz."]] },
            { h: "Sıralama", p: "Anlatıyı düzenlemek için: d'abord (önce), ensuite / puis (sonra), enfin (en sonunda). Yazıda: premièrement, deuxièmement, en conclusion.", ex: [["D'abord on visite le musée, ensuite on mange, enfin on rentre.", "Önce müzeyi geziyoruz, sonra yemek yiyoruz, en sonunda dönüyoruz."]] }
        ]
    },
    {
        id: "verb-prep", name: "Fiil + Edat (à / de)", title: "Les verbes et leurs prépositions",
        info: "Bir fiilden sonra mastar ya da nesne gelirken hangi edatın kullanılacağı fiile bağlıdır; fiille birlikte öğrenilir.",
        rules: [
            { h: "Edatsız + mastar", p: "Tercih, istek, yetenek ve hareket fiilleri mastarı doğrudan alır: aimer, adorer, préférer, détester, vouloir, pouvoir, devoir, savoir, aller, venir, il faut.", ex: [["J'aime voyager.", "Seyahat etmeyi severim."], ["Je sais nager.", "Yüzmeyi bilirim."], ["Il faut partir.", "Gitmek gerekiyor."]] },
            { h: "à + mastar", p: "commencer à, apprendre à, réussir à, continuer à, aider quelqu'un à, s'habituer à, penser à.", ex: [["J'apprends à conduire.", "Araba kullanmayı öğreniyorum."], ["Il a réussi à ouvrir la porte.", "Kapıyı açmayı başardı."], ["Tu m'aides à porter ce sac ?", "Bu çantayı taşımama yardım eder misin?"]] },
            { h: "de + mastar", p: "décider de, essayer de, oublier de, refuser de, accepter de, arrêter de, finir de, rêver de, avoir besoin de, avoir envie de, avoir peur de. Sesli harf önünde d'.", ex: [["J'essaie de comprendre.", "Anlamaya çalışıyorum."], ["J'ai oublié d'acheter du pain.", "Ekmek almayı unuttum."], ["Il a arrêté de fumer.", "Sigarayı bıraktı."]] },
            { h: "Kişiye söyleme ve isteme", p: "dire, demander, conseiller, permettre: à + kişi, de + mastar.", ex: [["Je demande à Paul de m'aider.", "Paul'den bana yardım etmesini istiyorum."], ["Le médecin m'a dit de me reposer.", "Doktor bana dinlenmemi söyledi."]] },
            { h: "Edat anlamı değiştirir", p: "penser à: birini / bir şeyi düşünmek; penser de: hakkında fikri olmak. jouer à: oyun ve spor; jouer de: çalgı. parler à: biriyle konuşmak; parler de: bir şeyden söz etmek.", ex: [["Je pense à toi.", "Seni düşünüyorum."], ["Qu'est-ce que tu penses de ce film ?", "Bu film hakkında ne düşünüyorsun?"], ["Il joue au tennis et de la guitare.", "Tenis oynuyor ve gitar çalıyor."]] },
            { h: "Türkçeden farklı olanlar", p: "Bazı fiiller Türkçede -e / -den alırken Fransızcada edatsızdır ya da tersi: regarder la télé (televizyona bakmak), attendre le bus (otobüsü beklemek), écouter la radio, chercher ses clés. téléphoner à quelqu'un (birini aramak), obéir à, ressembler à.", ex: [["J'attends le bus.", "Otobüsü bekliyorum."], ["Je téléphone à ma mère.", "Annemi arıyorum."], ["Il ressemble à son père.", "Babasına benziyor."]] },
            { h: "Zamirle", p: "à + şey → y; de + şey → en. Kişiler için à → lui / leur, de → de lui / d'elle.", ex: [["Tu penses à ton examen ? — Oui, j'y pense.", "Sınavını düşünüyor musun? — Evet, düşünüyorum."], ["Tu as besoin de ce livre ? — Oui, j'en ai besoin.", "Bu kitaba ihtiyacın var mı? — Evet, var."]] }
        ]
    },
    {
        id: "reported", name: "Dolaylı Anlatım", title: "Le discours indirect",
        info: "Birinin söylediğini aktarmak: « Je suis fatigué. » → Il dit qu'il est fatigué.",
        rules: [
            { h: "Düz cümle: que", p: "dire, expliquer, répondre, penser + que. Zamirler ve iyelikler aktaran kişiye göre değişir.", ex: [["Marie dit : « Je suis malade. » → Marie dit qu'elle est malade.", "Marie « Hastayım » diyor. → Marie hasta olduğunu söylüyor."], ["Il dit : « J'aime mon travail. » → Il dit qu'il aime son travail.", "İşini sevdiğini söylüyor."]] },
            { h: "Evet / hayır sorusu: si", p: "Evet ya da hayır cevaplı soru si ile aktarılır; est-ce que düşer. Sesli harf önünde si il → s'il.", ex: [["« Tu viens ? » → Il demande si je viens.", "Gelip gelmediğimi soruyor."], ["Je me demande s'il va pleuvoir.", "Yağmur yağacak mı diye merak ediyorum."]] },
            { h: "Soru kelimesiyle", p: "où, quand, comment, pourquoi, combien, qui aynen kalır; cümle düz sıraya döner. qu'est-ce que → ce que, qu'est-ce qui → ce qui.", ex: [["« Où habites-tu ? » → Il demande où j'habite.", "Nerede oturduğumu soruyor."], ["« Qu'est-ce que tu veux ? » → Elle demande ce que je veux.", "Ne istediğimi soruyor."], ["« Qu'est-ce qui se passe ? » → Il demande ce qui se passe.", "Ne olduğunu soruyor."]] },
            { h: "Emir: de + mastar", p: "Emir cümlesi dire / demander de + mastar ile aktarılır.", ex: [["« Ferme la porte ! » → Il me dit de fermer la porte.", "Kapıyı kapatmamı söylüyor."], ["« Ne parlez pas ! » → Le professeur nous demande de ne pas parler.", "Öğretmen konuşmamamızı istiyor."]] },
            { h: "Geçmişte aktarma: zaman uyumu", p: "Aktaran fiil geçmişteyse (il a dit) zamanlar bir adım geri gider: présent → imparfait, passé composé → plus-que-parfait, futur → conditionnel. imparfait ve conditionnel değişmez.", table: ["« Je suis fatigué. » → Il a dit qu'il était fatigué.", "« J'ai fini. » → Il a dit qu'il avait fini.", "« Je viendrai. » → Il a dit qu'il viendrait.", "« Je vais partir. » → Il a dit qu'il allait partir.", "« J'étais malade. » → Il a dit qu'il était malade.", "« Je voudrais un café. » → Il a dit qu'il voudrait un café."] },
            { h: "Zaman ve yer ifadeleri", p: "Geçmişte aktarırken: aujourd'hui → ce jour-là, hier → la veille, demain → le lendemain, ici → là, maintenant → à ce moment-là.", ex: [["Elle a dit : « Je pars demain. » → Elle a dit qu'elle partait le lendemain.", "Ertesi gün gideceğini söyledi."]] }
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
    },
    {
        id: "plus-que-parfait", cat: "tense", name: "Miş'li Geçmiş (Plus-que-parfait)", title: "Le plus-que-parfait",
        info: "Geçmişteki bir olaydan daha önce olmuş olan: -mıştı.",
        rules: [
            { h: "Kullanım", p: "Geçmişte anlatılan bir andan önce tamamlanmış eylemler. Türkçedeki -mıştı karşılığıdır.", ex: [["Quand je suis arrivé, le film avait déjà commencé.", "Vardığımda film çoktan başlamıştı."], ["Il était fatigué parce qu'il avait mal dormi.", "Yorgundu çünkü kötü uyumuştu."]] },
            { h: "Yapım", p: "avoir ya da être (imparfait) + geçmiş ortaç. Hangi yardımcı fiilin seçileceği passé composé ile aynıdır.", table: ["j'avais fini", "tu avais fini", "il avait fini", "nous avions fini", "vous aviez fini", "ils avaient fini"] },
            { h: "être ile", p: "Hareket fiilleri ve dönüşlü fiiller être ile çekilir; ortaç özneye uyar.", ex: [["Elle était déjà partie.", "O çoktan gitmişti."], ["Nous nous étions rencontrés à Lyon.", "Lyon'da tanışmıştık."]] },
            { h: "Zaman çizelgesi", p: "plus-que-parfait (önce olan) → passé composé (olay) → présent. Olayların sırası tersten anlatılırken çok kullanılır.", ex: [["J'ai retrouvé les clés que j'avais perdues.", "Kaybettiğim anahtarları buldum."]] },
            { h: "Pişmanlık: si + plus-que-parfait", p: "Tek başına keşke anlamı verir. Gerçekleşmemiş geçmiş koşulda sonuç conditionnel passé ile kurulur (avoir / être conditionnel + ortaç).", ex: [["Si j'avais su !", "Keşke bilseydim!"], ["Si tu m'avais appelé, je serais venu.", "Beni arasaydın gelirdim."]] }
        ]
    },
    {
        id: "gerondif", cat: "tense", name: "Ulaç (Gérondif)", title: "Le gérondif",
        info: "en + -ant: -arak, -erken. İki eylemi aynı özneyle bağlar.",
        rules: [
            { h: "Yapım", p: "nous biçiminden -ons atılır, -ant eklenir ve önüne en gelir: nous parlons → en parlant, nous finissons → en finissant. Düzensizler: être → en étant, avoir → en ayant, savoir → en sachant.", table: ["parler → en parlant", "finir → en finissant", "faire → en faisant", "prendre → en prenant", "lire → en lisant", "être → en étant"] },
            { h: "Eşzamanlılık: -erken", p: "İki eylem aynı anda olur ve özneleri aynıdır.", ex: [["Je chante en cuisinant.", "Yemek yaparken şarkı söylerim."], ["Il est tombé en courant.", "Koşarken düştü."]] },
            { h: "Yol ve yöntem: -arak", p: "Bir şeyin nasıl yapıldığını ya da nasıl olduğunu söyler.", ex: [["On apprend une langue en pratiquant.", "Bir dil pratik yaparak öğrenilir."], ["Il a réussi en travaillant beaucoup.", "Çok çalışarak başardı."]] },
            { h: "Koşul: -arsa", p: "Bir koşulu kısaca ifade eder.", ex: [["En partant maintenant, tu arriveras à l'heure.", "Şimdi çıkarsan zamanında varırsın."]] },
            { h: "tout en", p: "Eşzamanlılığı vurgular ya da iki eylem arasında bir çelişki gösterir.", ex: [["Il mange tout en regardant la télé.", "Hem yemek yiyor hem televizyon izliyor."], ["Tout en étant riche, il vit simplement.", "Zengin olduğu hâlde sade yaşıyor."]] },
            { h: "Özne aynı olmalı", p: "Gérondif her zaman ana cümlenin öznesine bağlanır. Özneler farklıysa quand ya da pendant que kullanılır.", ex: [["Je t'ai vu en sortant du métro.", "Metrodan çıkarken (ben) seni gördüm."], ["Je t'ai vu quand tu sortais du métro.", "Sen metrodan çıkarken seni gördüm."]] }
        ]
    },
    {
        id: "passive", cat: "tense", name: "Edilgen Çatı (Voix passive)", title: "La voix passive",
        info: "Eylemi yapanı değil, eylemden etkileneni öne çıkarır: -ılmak, -ilmek.",
        rules: [
            { h: "Yapım", p: "être (istenen zamanda) + geçmiş ortaç. Ortaç özneye uyar. Eylemi yapan par ile verilir.", ex: [["La souris est mangée par le chat.", "Fare kedi tarafından yeniliyor."], ["Cette maison a été construite en 1900.", "Bu ev 1900'de inşa edildi."]] },
            { h: "Zaman être ile verilir", p: "Ana fiil hep ortaç kalır; zamanı être gösterir.", table: ["présent: la lettre est écrite", "passé composé: la lettre a été écrite", "imparfait: la lettre était écrite", "futur: la lettre sera écrite", "futur proche: la lettre va être écrite", "conditionnel: la lettre serait écrite"] },
            { h: "par mı, de mı?", p: "Eylem bildiren fiillerde par, duygu ve durum bildirenlerde (aimer, respecter, connaître, couvrir) de kullanılır.", ex: [["Ce professeur est aimé de ses élèves.", "Bu öğretmen öğrencileri tarafından seviliyor."], ["La table est couverte de livres.", "Masa kitaplarla kaplı."]] },
            { h: "Konuşmada on", p: "Yapan belli değilse ya da önemli değilse Fransızcada edilgen yerine çoğu zaman on kullanılır.", ex: [["On parle français ici.", "Burada Fransızca konuşulur."], ["On m'a volé mon portefeuille.", "Cüzdanım çalındı."]] },
            { h: "se + fiil ile edilgen anlam", p: "Genel kural ve alışkanlıkları anlatırken dönüşlü yapı edilgen anlam verir.", ex: [["Ce vin se boit frais.", "Bu şarap soğuk içilir."], ["Ça ne se fait pas.", "Bu yapılmaz."]] },
            { h: "Yalnızca geçişli fiiller", p: "Edilgen yapı sadece doğrudan nesne alan fiillerle kurulur. téléphoner à, obéir à gibi fiillerin edilgeni olmaz; on kullanılır.", ex: [["On m'a téléphoné.", "Bana telefon edildi."]] }
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

/* ---------- Adjectives, pronominal verbs, connectors, verb + preposition, reported speech ---------- */
SEED.setGrammar("adjectives", "adjectives", ["grand", "petit", "bon", "mauvais", "beau", "joli", "vieux", "jeune", "nouveau", "cher", "heureux", "gentil", "long", "blanc", "italien", "national", "français", "premier", "dernier", "ancien", "orange", "marron"]);
SEED.addGrammar("adjectives", "adjectives", [
    ["sportif", "sportif, spor seven", "A2", "", "Mon frère est très sportif.", "Erkek kardeşim çok sportif.", "Dişili: sportive (-if → -ive)."],
    ["actif", "faal, hareketli", "B1", "", "Ma grand-mère est encore très active.", "Büyükannem hâlâ çok hareketli.", "Dişili: active."]
]);

SEED.setGrammar("pronominal", "pronominal", ["se lever", "se coucher", "se laver", "se réveiller", "s'habiller", "s'appeler", "se brosser les dents", "se promener", "se reposer", "se dépêcher", "s'asseoir", "s'amuser", "se passer", "se voir", "se rencontrer", "s'aimer", "se téléphoner", "se rendre compte", "s'inquiéter", "se casser"]);

SEED.setGrammar("connectors", "conjunctions", ["et", "ou", "mais", "donc", "alors", "parce que", "comme", "quand", "pendant que", "si", "cependant", "pourtant", "puisque", "lorsque", "tandis que", "sinon", "bien que"]);
SEED.setGrammar("connectors", "prepositions", ["à cause de", "grâce à", "malgré", "afin de", "pour"]);
SEED.setGrammar("connectors", "adverbs", ["d'abord", "puis", "ensuite", "enfin", "aussi"]);
SEED.setGrammar("connectors", "expressions", ["de plus", "d'ailleurs", "au contraire", "en effet", "par exemple", "c'est-à-dire", "en fait"]);
SEED.addGrammar("connectors", "conjunctions", [
    ["car", "çünkü", "A2", "", "Je reste ici, car il pleut.", "Burada kalıyorum, çünkü yağmur yağıyor.", "Yazı dilinde kullanılır; cümle başına gelmez."],
    ["même si", "-se bile", "B1", "même s'", "Même si c'est difficile, je continue.", "Zor olsa bile devam ediyorum.", "Ardından indicatif gelir."],
    ["alors que", "oysa, -iken", "B1", "alors qu'", "Il travaille alors que tout le monde dort.", "Herkes uyurken o çalışıyor."],
    ["dès que", "-er -mez", "B1", "dès qu'", "Dès que je rentre, je prends une douche.", "Eve döner dönmez duş alırım.", "Gelecekten söz ederken futur ile: dès que j'arriverai."]
]);
SEED.addGrammar("connectors", "expressions", [
    ["par contre", "buna karşın, öte yandan", "A2", "", "La ville est belle ; par contre, elle est chère.", "Şehir güzel; buna karşın pahalı.", "Konuşma dilinde sık kullanılır."],
    ["c'est pourquoi", "işte bu yüzden", "B1", "", "Il était malade, c'est pourquoi il n'est pas venu.", "Hastaydı, işte bu yüzden gelmedi."]
]);

SEED.setGrammar("verb-prep", "verbs", ["aimer", "préférer", "commencer", "apprendre", "réussir", "essayer", "oublier", "finir", "penser", "jouer", "demander", "aider", "dire", "attendre", "regarder", "écouter", "décider", "refuser", "accepter"]);
SEED.setGrammar("verb-prep", "verbal", ["avoir besoin de", "avoir envie de", "avoir peur", "rendre visite à"]);
SEED.setGrammar("verb-prep", "pronominal", ["s'habituer", "s'intéresser", "s'occuper", "se souvenir", "se mettre à"]);
SEED.addGrammar("verb-prep", "verbs", [
    ["continuer", "devam etmek", "A2", "", "Je continue à apprendre le français.", "Fransızca öğrenmeye devam ediyorum.", "continuer à ya da continuer de + mastar."],
    ["arrêter", "durdurmak, bırakmak", "A2", "", "Arrête de parler !", "Konuşmayı kes!", "Bir eylemi bırakmak: arrêter de + mastar."],
    ["rêver", "rüya görmek, hayal etmek", "B1", "", "Je rêve de visiter le Japon.", "Japonya'yı gezmeyi hayal ediyorum.", "rêver de + isim ya da mastar."]
]);

SEED.setGrammar("reported", "verbs", ["dire", "demander", "répondre", "expliquer", "penser"]);
SEED.setGrammar("reported", "conjunctions", ["que", "si"]);
SEED.setGrammar("reported", "pronominal", ["se demander"]);
SEED.setGrammar("reported", "nouns", ["la veille", "le lendemain"]);
SEED.addGrammar("reported", "verbs", [
    ["raconter", "anlatmak", "A2", "", "Il m'a raconté qu'il avait perdu son travail.", "Bana işini kaybettiğini anlattı."]
]);
SEED.addGrammar("reported", "pronouns", [
    ["ce que", "-dığı şey, ne", "B1", "ce qu'", "Dis-moi ce que tu veux.", "Ne istediğini söyle.", "Dolaylı soruda qu'est-ce que yerine; özne olduğunda ce qui."]
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
SEED.setGrammar("plus-que-parfait", "adverbs", ["déjà"]);
SEED.setGrammar("plus-que-parfait", "verbs", ["être", "avoir"]);
SEED.addGrammar("plus-que-parfait", "adverbs", [
    ["auparavant", "önceden, daha önce", "B1", "", "Je n'avais jamais vu la mer auparavant.", "Daha önce denizi hiç görmemiştim."]
]);

SEED.setGrammar("gerondif", "prepositions", ["en"]);
SEED.addGrammar("gerondif", "expressions", [
    ["tout en", "hem ... hem; -diği hâlde", "B1", "", "Elle travaille tout en écoutant de la musique.", "Hem çalışıyor hem müzik dinliyor.", "Ardından gérondif biçimi (-ant) gelir."]
]);

SEED.setGrammar("passive", "verbs", ["être", "construire", "organiser", "vendre", "écrire", "ouvrir"]);
SEED.setGrammar("passive", "prepositions", ["par", "de"]);
SEED.setGrammar("passive", "pronouns", ["on"]);

SEED.addGrammar("subjonctif", "conjunctions", [
    ["pour que", "-sın diye, -mesi için", "B1", "pour qu'", "Je t'explique pour que tu comprennes.", "Anlayasın diye sana açıklıyorum.", "Ardından subjonctif gelir."],
    ["avant que", "-meden önce", "B1", "avant qu'", "Rentre avant qu'il pleuve.", "Yağmur yağmadan eve dön.", "Ardından subjonctif gelir."]
]);
