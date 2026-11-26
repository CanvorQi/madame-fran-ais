/*
 * Dialogues: model conversations to read and listen to. `lines`: [speaker index into `people`, fr, tr];
 * speaker 1 is the learner's side. `chat` links the role play that practises the same situation.
 *
 * Chats: scripted role plays with a bot. Each step: optional `bot` line [fr, tr] (the previous `ok`
 * reply can stand in for it), a Turkish `task`, `keys` (every group needs one whole-word or phrase
 * match; accents, case and punctuation are ignored), model answers `say`, and the bot's `ok` reply.
 * `end` is the bot's closing line. Ids (`d1`, `c1`) key saved scores: never change them.
 */
SEED.dialogues = [
    {
        id: "d1", level: "A1", title: "Enchanté !", name: "Tanışma", people: ["Léa", "Emre"], chat: "c2",
        lines: [
            [0, "Salut ! Je m'appelle Léa. Et toi ?", "Selam! Benim adım Léa. Ya sen?"],
            [1, "Bonjour Léa, je m'appelle Emre. Enchanté !", "Merhaba Léa, benim adım Emre. Memnun oldum!"],
            [0, "Enchantée ! Tu viens d'où ?", "Ben de memnun oldum! Nerelisin?"],
            [1, "Je viens de Turquie, d'Izmir. Et toi ?", "Türkiye'den, İzmir'den geliyorum. Ya sen?"],
            [0, "Moi, je suis française. J'habite à Lyon. Qu'est-ce que tu fais dans la vie ?", "Ben Fransızım. Lyon'da oturuyorum. Ne iş yapıyorsun?"],
            [1, "Je suis étudiant. J'apprends le français depuis six mois.", "Öğrenciyim. Altı aydır Fransızca öğreniyorum."],
            [0, "Bravo, tu parles déjà bien !", "Bravo, şimdiden iyi konuşuyorsun!"],
            [1, "Merci, tu es gentille. À bientôt !", "Teşekkürler, çok naziksin. Görüşürüz!"]
        ]
    },
    {
        id: "d2", level: "A1", title: "Au café", name: "Kafede", people: ["Le serveur", "Ayşe"], chat: "c1",
        lines: [
            [0, "Bonjour madame, vous désirez ?", "Merhaba hanımefendi, ne arzu edersiniz?"],
            [1, "Bonjour ! Je voudrais un café crème, s'il vous plaît.", "Merhaba! Sütlü bir kahve rica ediyorum."],
            [0, "Et avec ceci ?", "Başka bir şey?"],
            [1, "Un croissant, s'il vous plaît.", "Bir kruvasan lütfen."],
            [0, "Sur place ou à emporter ?", "Burada mı, paket mi?"],
            [1, "Sur place.", "Burada."],
            [0, "Voilà, madame. Bon appétit !", "Buyurun hanımefendi. Afiyet olsun!"],
            [1, "Merci ! L'addition, s'il vous plaît.", "Teşekkürler! Hesap lütfen."],
            [0, "Ça fait cinq euros vingt.", "Beş euro yirmi sent tutuyor."],
            [1, "Voilà. Bonne journée !", "Buyurun. İyi günler!"]
        ]
    },
    {
        id: "d3", level: "A1", title: "Où est le musée ?", name: "Yol sormak", people: ["Une passante", "Emre"], chat: "c3",
        lines: [
            [1, "Excusez-moi, madame. Où est le musée, s'il vous plaît ?", "Affedersiniz hanımefendi. Müze nerede acaba?"],
            [0, "Le musée ? Allez tout droit, puis tournez à gauche.", "Müze mi? Dümdüz gidin, sonra sola dönün."],
            [1, "C'est loin ?", "Uzak mı?"],
            [0, "Non, c'est à cinq minutes à pied. Le musée est en face de la poste.", "Hayır, yürüyerek beş dakika. Müze postanenin karşısında."],
            [1, "En face de la poste… Merci beaucoup !", "Postanenin karşısında… Çok teşekkürler!"],
            [0, "De rien. Bonne visite !", "Bir şey değil. İyi gezmeler!"]
        ]
    },
    {
        id: "d4", level: "A1", title: "Au marché", name: "Pazarda", people: ["Le vendeur", "Mme Martin"],
        lines: [
            [0, "Bonjour madame ! Qu'est-ce que je vous sers ?", "Merhaba hanımefendi! Size ne vereyim?"],
            [1, "Bonjour ! Je voudrais un kilo de tomates, s'il vous plaît.", "Merhaba! Bir kilo domates istiyorum lütfen."],
            [0, "Voilà. Et avec ça ?", "Buyurun. Başka?"],
            [1, "Elles sont combien, les pommes ?", "Elmalar kaç para?"],
            [0, "Trois euros le kilo. Elles sont très bonnes !", "Kilosu üç euro. Çok güzeller!"],
            [1, "Alors, deux kilos de pommes aussi.", "O zaman iki kilo da elma."],
            [0, "Ça fait neuf euros en tout.", "Hepsi dokuz euro tutuyor."],
            [1, "Voilà dix euros.", "Buyurun on euro."],
            [0, "Et un euro de monnaie. Merci, bonne journée !", "Bir euro da paranızın üstü. Teşekkürler, iyi günler!"]
        ]
    },
    {
        id: "d5", level: "A2", title: "À l'hôtel", name: "Otelde", people: ["La réceptionniste", "M. Yılmaz"], chat: "c4",
        lines: [
            [0, "Bonsoir monsieur, bienvenue à l'hôtel du Parc.", "İyi akşamlar beyefendi, Park Oteli'ne hoş geldiniz."],
            [1, "Bonsoir. J'ai une réservation au nom de Yılmaz.", "İyi akşamlar. Yılmaz adına bir rezervasyonum var."],
            [0, "Un instant… Oui, une chambre double pour trois nuits. Votre passeport, s'il vous plaît.", "Bir saniye… Evet, üç gece için çift kişilik oda. Pasaportunuz lütfen."],
            [1, "Voilà. Le petit-déjeuner est à quelle heure ?", "Buyurun. Kahvaltı saat kaçta?"],
            [0, "De sept heures à dix heures, au rez-de-chaussée.", "Yediden ona kadar, zemin katta."],
            [1, "Et il y a le wifi dans la chambre ?", "Odada wifi var mı?"],
            [0, "Oui, bien sûr. Le mot de passe est sur votre clé. Vous êtes dans la chambre 204, au deuxième étage.", "Evet, tabii. Şifre anahtarınızın üzerinde. İkinci kattaki 204 numaralı odadasınız."],
            [1, "Parfait, merci beaucoup.", "Harika, çok teşekkürler."],
            [0, "Je vous en prie. Bon séjour !", "Rica ederim. İyi konaklamalar!"]
        ]
    },
    {
        id: "d6", level: "A2", title: "Chez le médecin", name: "Doktorda", people: ["Le médecin", "Ayşe"], chat: "c5",
        lines: [
            [0, "Bonjour madame, asseyez-vous. Qu'est-ce qui ne va pas ?", "Merhaba hanımefendi, oturun. Neyiniz var?"],
            [1, "J'ai mal à la tête et à la gorge.", "Başım ve boğazım ağrıyor."],
            [0, "Depuis quand ?", "Ne zamandan beri?"],
            [1, "Depuis deux jours. Et je suis très fatiguée.", "İki gündür. Ve çok yorgunum."],
            [0, "Vous avez de la fièvre ?", "Ateşiniz var mı?"],
            [1, "Oui, un peu. Hier soir, j'avais trente-huit.", "Evet, biraz. Dün akşam otuz sekizdi."],
            [0, "Ce n'est pas grave, c'est un petit virus. Reposez-vous et buvez beaucoup d'eau.", "Ciddi değil, küçük bir virüs. Dinlenin ve bol su için."],
            [1, "Je dois prendre des médicaments ?", "İlaç almam gerekiyor mu?"],
            [0, "Oui, un comprimé trois fois par jour, après les repas.", "Evet, günde üç kez, yemeklerden sonra bir tablet."],
            [1, "Merci, docteur. Au revoir !", "Teşekkürler doktor. Hoşça kalın!"]
        ]
    },
    {
        id: "d7", level: "A2", title: "Le week-end", name: "Hafta sonu ne yaptın?", people: ["Thomas", "Zeynep"], chat: "c6",
        lines: [
            [0, "Salut Zeynep ! Tu as passé un bon week-end ?", "Selam Zeynep! Hafta sonun iyi geçti mi?"],
            [1, "Oui, super ! Samedi, je suis allée au cinéma avec ma sœur.", "Evet, süperdi! Cumartesi kız kardeşimle sinemaya gittim."],
            [0, "Ah oui ? Vous avez vu quel film ?", "Öyle mi? Hangi filmi izlediniz?"],
            [1, "Une comédie française. C'était très drôle. Et toi, qu'est-ce que tu as fait ?", "Bir Fransız komedisi. Çok komikti. Ya sen, ne yaptın?"],
            [0, "Moi, j'ai rendu visite à mes grands-parents. On a mangé ensemble et on a joué aux cartes.", "Ben büyükannemle büyükbabamı ziyaret ettim. Birlikte yemek yedik ve kâğıt oynadık."],
            [1, "C'est sympa ! Le week-end prochain, on va au marché ensemble ?", "Ne hoş! Gelecek hafta sonu birlikte pazara gidelim mi?"],
            [0, "Avec plaisir ! À samedi !", "Memnuniyetle! Cumartesi görüşürüz!"]
        ]
    },
    {
        id: "d8", level: "B1", title: "Un entretien d'embauche", name: "İş görüşmesi", people: ["La recruteuse", "Emre"], chat: "c7",
        lines: [
            [0, "Bonjour, merci d'être venu. Pouvez-vous vous présenter ?", "Merhaba, geldiğiniz için teşekkürler. Kendinizi tanıtır mısınız?"],
            [1, "Bien sûr. Je m'appelle Emre Yılmaz, je suis ingénieur informatique.", "Tabii. Adım Emre Yılmaz, bilgisayar mühendisiyim."],
            [0, "Pourquoi voulez-vous travailler chez nous ?", "Neden bizde çalışmak istiyorsunuz?"],
            [1, "Parce que votre entreprise est innovante et que j'aime travailler en équipe.", "Çünkü şirketiniz yenilikçi ve ekip hâlinde çalışmayı seviyorum."],
            [0, "Quelle est votre expérience ?", "Deneyiminiz nedir?"],
            [1, "J'ai travaillé pendant trois ans dans une banque à Istanbul. Je m'occupais des applications mobiles.", "İstanbul'da bir bankada üç yıl çalıştım. Mobil uygulamalarla ilgileniyordum."],
            [0, "Et quels sont vos défauts ?", "Peki zayıf yönleriniz neler?"],
            [1, "Je suis parfois impatient, mais j'essaie de m'améliorer.", "Bazen sabırsızım ama kendimi geliştirmeye çalışıyorum."],
            [0, "Très bien. Nous vous appellerons la semaine prochaine.", "Çok güzel. Sizi gelecek hafta arayacağız."],
            [1, "Merci beaucoup. Au revoir, madame.", "Çok teşekkürler. Hoşça kalın hanımefendi."]
        ]
    },
    {
        id: "d9", level: "B1", title: "Ville ou campagne ?", name: "Şehir mi, kır mı?", people: ["Camille", "Mehmet"],
        lines: [
            [0, "Tu préfères vivre en ville ou à la campagne ?", "Şehirde mi yaşamayı tercih edersin, kırda mı?"],
            [1, "En ville, sans hésiter ! Il y a des cinémas, des musées, des restaurants…", "Şehirde, hiç düşünmeden! Sinemalar, müzeler, restoranlar var…"],
            [0, "C'est vrai, mais la vie y est chère et il y a beaucoup de bruit.", "Doğru ama orada hayat pahalı ve çok gürültü var."],
            [1, "Pourtant, à la campagne, on s'ennuie vite. Il n'y a rien à faire le soir.", "Yine de kırda insan çabuk sıkılır. Akşamları yapacak bir şey yok."],
            [0, "À mon avis, c'est plus calme et on vit mieux. L'air est pur et les gens se connaissent.", "Bence daha sakin ve daha iyi yaşanır. Hava temiz ve insanlar birbirini tanır."],
            [1, "D'accord, mais il faut une voiture pour tout, alors qu'en ville je prends le métro.", "Tamam ama her şey için araba gerekir, oysa şehirde metroya binerim."],
            [0, "Si je pouvais travailler à distance, j'habiterais à la campagne.", "Uzaktan çalışabilseydim kırda otururdum."],
            [1, "Moi aussi, peut-être… mais seulement le week-end !", "Ben de belki… ama sadece hafta sonları!"]
        ]
    },
    {
        id: "d10", level: "A1", title: "À la boulangerie", name: "Fırında", people: ["La boulangère", "Emre"], chat: "c8",
        lines: [
            [0, "Bonjour monsieur, qu'est-ce que je vous donne ?", "Merhaba beyefendi, size ne vereyim?"],
            [1, "Bonjour ! Une baguette, s'il vous plaît.", "Merhaba! Bir baget lütfen."],
            [0, "Bien cuite ou pas trop cuite ?", "İyi pişmiş mi, az pişmiş mi?"],
            [1, "Pas trop cuite. Et deux pains au chocolat, aussi.", "Az pişmiş olsun. Bir de iki çikolatalı çörek."],
            [0, "Voilà. Ce sera tout ?", "Buyurun. Başka bir şey?"],
            [1, "Oui, c'est tout. Ça fait combien ?", "Hayır, bu kadar. Ne kadar tutuyor?"],
            [0, "Trois euros dix, s'il vous plaît.", "Üç euro on sent lütfen."],
            [1, "Voilà. Merci, bonne journée !", "Buyurun. Teşekkürler, iyi günler!"],
            [0, "Merci à vous, au revoir !", "Ben teşekkür ederim, hoşça kalın!"]
        ]
    },
    {
        id: "d11", level: "A1", title: "Ma famille", name: "Aileni anlat", people: ["Claire", "Ayşe"], chat: "c9",
        lines: [
            [0, "C'est qui sur la photo ?", "Fotoğraftaki kim?"],
            [1, "C'est ma famille. Voici mon père, ma mère et mon petit frère.", "Bu benim ailem. İşte babam, annem ve küçük erkek kardeşim."],
            [0, "Ton frère a quel âge ?", "Erkek kardeşin kaç yaşında?"],
            [1, "Il a douze ans. Il est très drôle.", "On iki yaşında. Çok komik."],
            [0, "Et tu as des sœurs ?", "Peki kız kardeşin var mı?"],
            [1, "Oui, j'ai une grande sœur. Elle est mariée et elle a deux enfants.", "Evet, bir ablam var. Evli ve iki çocuğu var."],
            [0, "Alors tu es tante !", "O zaman teyzesin!"],
            [1, "Oui ! Mes neveux habitent à Ankara. Je les vois pendant les vacances.", "Evet! Yeğenlerim Ankara'da oturuyor. Onları tatillerde görüyorum."]
        ]
    },
    {
        id: "d12", level: "A2", title: "À la gare", name: "Garda bilet almak", people: ["L'agent", "Zeynep"], chat: "c10",
        lines: [
            [1, "Bonjour, je voudrais un billet pour Marseille, s'il vous plaît.", "Merhaba, Marsilya'ya bir bilet istiyorum lütfen."],
            [0, "Pour quand ?", "Ne zaman için?"],
            [1, "Pour demain matin.", "Yarın sabah için."],
            [0, "Il y a un train à huit heures douze. Aller simple ou aller-retour ?", "Saat sekizi on iki geçe bir tren var. Gidiş mi, gidiş-dönüş mü?"],
            [1, "Aller-retour. Je reviens dimanche soir.", "Gidiş-dönüş. Pazar akşamı dönüyorum."],
            [0, "En première ou en seconde classe ?", "Birinci mi, ikinci sınıf mı?"],
            [1, "En seconde, c'est moins cher.", "İkinci, daha ucuz."],
            [0, "Ça fait quatre-vingt-cinq euros. Le train part de la voie trois.", "Seksen beş euro tutuyor. Tren üçüncü perondan kalkıyor."],
            [1, "Est-ce que je dois changer de train ?", "Aktarma yapmam gerekiyor mu?"],
            [0, "Non, c'est un train direct. Bon voyage !", "Hayır, direkt tren. İyi yolculuklar!"]
        ]
    },
    {
        id: "d13", level: "A2", title: "Dans un magasin de vêtements", name: "Giyim mağazasında", people: ["La vendeuse", "Mehmet"], chat: "c11",
        lines: [
            [0, "Bonjour ! Je peux vous aider ?", "Merhaba! Yardımcı olabilir miyim?"],
            [1, "Oui, je cherche une veste pour l'hiver.", "Evet, kış için bir ceket arıyorum."],
            [0, "Quelle taille faites-vous ?", "Bedeniniz kaç?"],
            [1, "Je fais du M, je crois.", "Sanırım M giyiyorum."],
            [0, "Nous avons ce modèle en bleu et en noir.", "Bu modelin mavisi ve siyahı var."],
            [1, "Je peux essayer la noire ?", "Siyahı deneyebilir miyim?"],
            [0, "Bien sûr, les cabines sont au fond du magasin.", "Tabii, kabinler mağazanın arka tarafında."],
            [1, "Elle est un peu petite. Vous l'avez en L ?", "Biraz küçük. L bedeni var mı?"],
            [0, "Oui, voilà. Elle vous va très bien !", "Evet, buyurun. Size çok yakıştı!"],
            [1, "Je la prends. Je peux payer par carte ?", "Alıyorum. Kartla ödeyebilir miyim?"]
        ]
    },
    {
        id: "d14", level: "B1", title: "Une réclamation", name: "Şikâyet ve iade", people: ["Le vendeur", "Ayşe"], chat: "c12",
        lines: [
            [1, "Bonjour, j'ai acheté cet aspirateur la semaine dernière, mais il ne marche plus.", "Merhaba, bu süpürgeyi geçen hafta aldım ama artık çalışmıyor."],
            [0, "Je suis désolé. Vous avez le ticket de caisse ?", "Üzgünüm. Fişiniz yanınızda mı?"],
            [1, "Oui, le voici. Je voudrais être remboursée, s'il vous plaît.", "Evet, işte burada. Paramı geri almak istiyorum lütfen."],
            [0, "Nous pouvons vous l'échanger contre un nouveau, si vous préférez.", "Dilerseniz yenisiyle değiştirebiliriz."],
            [1, "Non, merci. Je préférerais un remboursement, parce que c'est la deuxième fois que j'ai un problème avec cette marque.", "Hayır, teşekkürler. Para iadesini tercih ederim, çünkü bu markayla ikinci kez sorun yaşıyorum."],
            [0, "Je comprends. Puisque vous avez le ticket, je vous rembourse tout de suite.", "Anlıyorum. Fişiniz olduğuna göre paranızı hemen iade ediyorum."],
            [1, "Merci, c'est très gentil.", "Teşekkürler, çok naziksiniz."],
            [0, "Je vous en prie. Encore désolé pour le dérangement.", "Rica ederim. Rahatsızlık için tekrar özür dileriz."]
        ]
    },
    {
        id: "d15", level: "B1", title: "Projets de vacances", name: "Tatil planları", people: ["Julien", "Elif"], chat: "c13",
        lines: [
            [0, "Qu'est-ce que tu vas faire cet été ?", "Bu yaz ne yapacaksın?"],
            [1, "J'aimerais partir en Bretagne. On m'a dit que les plages étaient magnifiques.", "Bretanya'ya gitmek isterim. Plajların muhteşem olduğunu söylediler."],
            [0, "C'est vrai, mais il fait souvent frais là-bas. Moi, je préfère le sud.", "Doğru ama orası çoğu zaman serin. Ben güneyi tercih ederim."],
            [1, "Justement, je n'aime pas quand il fait trop chaud. Et toi, tu as des projets ?", "İşte ben de çok sıcak olunca sevmiyorum. Ya senin planların var mı?"],
            [0, "Si j'avais assez d'argent, je ferais le tour de l'Italie en train.", "Yeterince param olsaydı İtalya'yı trenle dolaşırdım."],
            [1, "Ce serait génial ! Tu pourrais peut-être partir moins longtemps ?", "Harika olurdu! Belki daha kısa süreliğine gidebilirsin?"],
            [0, "Bonne idée. Je vais regarder les prix ce soir.", "İyi fikir. Bu akşam fiyatlara bakacağım."],
            [1, "Et quand tu reviendras, tu me montreras tes photos !", "Döndüğünde de bana fotoğraflarını gösterirsin!"]
        ]
    }
];

SEED.chats = [
    {
        id: "c1", level: "A1", title: "Au café", name: "Kafede sipariş ver", bot: "Le serveur",
        desc: "Garsonla konuş: bir içecek ve yiyecek söyle, hesabı iste.",
        steps: [
            { bot: ["Bonjour ! Vous désirez ?", "Merhaba! Ne arzu edersiniz?"], task: "Bir içecek iste (kahve, çay, su, meyve suyu…).", keys: [["cafe", "cafe creme", "the", "eau", "jus", "jus d orange", "chocolat", "coca", "biere", "vin", "limonade"]], say: ["Un café, s'il vous plaît.", "Je voudrais un thé, s'il vous plaît."], ok: ["Très bien.", "Çok iyi."] },
            { bot: ["Et avec ceci ? Vous voulez manger quelque chose ?", "Bunun yanında? Bir şey yemek ister misiniz?"], task: "Bir yiyecek iste (kruvasan, sandviç…) ya da kibarca hayır de.", keys: [["croissant", "sandwich", "salade", "gateau", "tarte", "pain", "omelette", "croque monsieur", "non", "rien"]], say: ["Oui, un croissant, s'il vous plaît.", "Non, merci."], ok: ["D'accord.", "Tamam."] },
            { bot: ["Sur place ou à emporter ?", "Burada mı, paket mi?"], task: "Burada içeceğini ya da paket istediğini söyle.", keys: [["sur place", "ici", "a emporter", "emporter"]], say: ["Sur place, s'il vous plaît.", "À emporter."], ok: ["Parfait. Voilà ! Bon appétit !", "Harika. Buyurun! Afiyet olsun!"] },
            { task: "Teşekkür et.", keys: [["merci"]], say: ["Merci beaucoup !"], ok: ["Je vous en prie.", "Rica ederim."] },
            { bot: ["Tout va bien ?", "Her şey yolunda mı?"], task: "Her şeyin iyi olduğunu söyle ve hesabı iste.", keys: [["addition", "payer", "combien", "ca fait combien"]], say: ["Oui, très bien. L'addition, s'il vous plaît.", "C'est combien ?"], ok: ["Ça fait six euros cinquante. Vous payez par carte ?", "Altı euro elli sent. Kartla mı ödüyorsunuz?"] },
            { task: "Kartla ya da nakit ödeyeceğini söyle.", keys: [["carte", "par carte", "especes", "en especes", "liquide", "oui", "non"]], say: ["Oui, par carte.", "Non, en espèces."], ok: ["Merci, bonne journée !", "Teşekkürler, iyi günler!"] },
            { task: "Vedalaş.", keys: [["au revoir", "bonne journee", "merci", "a bientot", "bonne soiree"]], say: ["Merci, au revoir !"] }
        ],
        end: ["Au revoir, à bientôt !", "Hoşça kalın, yine bekleriz!"]
    },
    {
        id: "c2", level: "A1", title: "Enchanté !", name: "Kendini tanıt", bot: "Léa",
        desc: "Yeni bir arkadaşla tanış: adını, nereli olduğunu, işini ve yaşını söyle.",
        steps: [
            { bot: ["Salut ! Je m'appelle Léa. Et toi, comment tu t'appelles ?", "Selam! Benim adım Léa. Ya senin adın ne?"], task: "Adını söyle.", keys: [["je m appelle", "m appelle", "je suis", "moi c est", "c est"]], say: ["Je m'appelle Emre. Enchanté !"], ok: ["Enchantée !", "Memnun oldum!"] },
            { bot: ["Tu viens d'où ?", "Nerelisin?"], task: "Nereli olduğunu söyle.", keys: [["je viens", "viens de", "viens d", "suis turc", "suis turque", "turquie", "suis de", "suis d"]], say: ["Je viens de Turquie.", "Je suis turque."], ok: ["Ah, super ! J'adore la Turquie.", "Ah, süper! Türkiye'ye bayılırım."] },
            { bot: ["Et tu habites où maintenant ?", "Peki şimdi nerede oturuyorsun?"], task: "Nerede oturduğunu söyle.", keys: [["j habite", "habite", "je vis", "vis"]], say: ["J'habite à Istanbul.", "J'habite à Lyon."], ok: ["C'est une belle ville !", "Güzel bir şehir!"] },
            { bot: ["Qu'est-ce que tu fais dans la vie ?", "Ne iş yapıyorsun?"], task: "Mesleğini ya da öğrenci olduğunu söyle.", keys: [["je suis", "suis", "travaille", "j etudie", "etudie", "etudiant", "etudiante"]], say: ["Je suis étudiant.", "Je travaille dans une banque."], ok: ["Ah, intéressant !", "Ah, ilginç!"] },
            { bot: ["Tu parles quelles langues ?", "Hangi dilleri konuşuyorsun?"], task: "Konuştuğun dilleri söyle.", keys: [["parle", "turc", "anglais", "francais", "allemand", "arabe", "espagnol"]], say: ["Je parle turc, anglais et un peu français."], ok: ["Bravo, ton français est déjà bien !", "Bravo, Fransızcan şimdiden iyi!"] },
            { bot: ["Tu as quel âge ?", "Kaç yaşındasın?"], task: "Yaşını söyle (j'ai … ans).", keys: [["ans"]], say: ["J'ai vingt-cinq ans."], ok: ["Moi, j'ai vingt-trois ans. Bon, je dois partir. À bientôt !", "Ben yirmi üç yaşındayım. Neyse, gitmem lazım. Görüşürüz!"] },
            { task: "Vedalaş.", keys: [["a bientot", "au revoir", "salut", "a plus", "bonne journee", "bonne soiree", "ciao", "a demain"]], say: ["Salut, à bientôt !"] }
        ],
        end: ["À plus !", "Görüşürüz!"]
    },
    {
        id: "c3", level: "A1", title: "Où est le musée ?", name: "Yol sor", bot: "Une passante",
        desc: "Sokakta birine seslen, müzenin yolunu sor ve teşekkür et.",
        steps: [
            { task: "Yoldan geçen birine kibarca seslen.", keys: [["excusez moi", "excusez", "pardon", "bonjour"]], say: ["Excusez-moi, madame."], ok: ["Oui ?", "Evet?"] },
            { task: "Müzenin nerede olduğunu sor.", keys: [["ou", "cherche", "chercher", "aller", "trouve"], ["musee"]], say: ["Où est le musée, s'il vous plaît ?", "Je cherche le musée."], ok: ["Le musée ? Allez tout droit, puis tournez à gauche.", "Müze mi? Dümdüz gidin, sonra sola dönün."] },
            { task: "Uzak olup olmadığını sor.", keys: [["loin", "pres", "combien de temps", "minutes"]], say: ["C'est loin ?"], ok: ["Non, c'est à cinq minutes à pied.", "Hayır, yürüyerek beş dakika."] },
            { task: "Doğru anladığını kontrol et: « Sola mı? »", keys: [["gauche"]], say: ["À gauche ?"], ok: ["Oui, à gauche, après la boulangerie. Le musée est en face de la poste.", "Evet, fırından sonra sola. Müze postanenin karşısında."] },
            { task: "Teşekkür et.", keys: [["merci"]], say: ["Merci beaucoup, madame !"] }
        ],
        end: ["De rien. Bonne visite !", "Bir şey değil. İyi gezmeler!"]
    },
    {
        id: "c4", level: "A2", title: "À l'hôtel", name: "Otele giriş yap", bot: "La réceptionniste",
        desc: "Resepsiyonda rezervasyonunu söyle, kahvaltı ve wifi hakkında soru sor.",
        steps: [
            { bot: ["Bonsoir, bienvenue à l'hôtel du Parc. Je peux vous aider ?", "İyi akşamlar, Park Oteli'ne hoş geldiniz. Yardımcı olabilir miyim?"], task: "Rezervasyonun olduğunu söyle.", keys: [["reservation", "reserve", "reservee", "chambre"]], say: ["Bonsoir, j'ai une réservation au nom de Yılmaz."], ok: ["Un instant… Oui, une chambre double pour trois nuits. C'est bien ça ?", "Bir saniye… Evet, üç gece için çift kişilik oda. Doğru mu?"] },
            { task: "Onayla.", keys: [["oui", "exact", "exactement", "c est ca", "tout a fait", "bien sur", "d accord", "c est bien ca"]], say: ["Oui, c'est ça."], ok: ["Votre passeport, s'il vous plaît.", "Pasaportunuz lütfen."] },
            { task: "Pasaportu verirken « buyurun » de.", keys: [["voila", "voici", "tenez"]], say: ["Voilà."], ok: ["Merci. Vous êtes dans la chambre 204, au deuxième étage.", "Teşekkürler. İkinci kattaki 204 numaralı odadasınız."] },
            { task: "Kahvaltının saat kaçta olduğunu sor.", keys: [["petit dejeuner", "petit dej"], ["heure", "quand", "a quelle heure", "quelle heure"]], say: ["Le petit-déjeuner est à quelle heure ?"], ok: ["De sept heures à dix heures, au rez-de-chaussée.", "Yediden ona kadar, zemin katta."] },
            { task: "Odada wifi olup olmadığını sor.", keys: [["wifi", "wi fi", "internet", "mot de passe"]], say: ["Est-ce qu'il y a le wifi dans la chambre ?"], ok: ["Oui, le mot de passe est sur votre clé.", "Evet, şifre anahtarınızın üzerinde."] },
            { task: "Teşekkür et ve iyi akşamlar dile.", keys: [["merci", "bonne soiree", "bonsoir"]], say: ["Merci beaucoup, bonne soirée !"] }
        ],
        end: ["Bonne soirée et bon séjour !", "İyi akşamlar ve iyi konaklamalar!"]
    },
    {
        id: "c5", level: "A2", title: "Chez le médecin", name: "Doktora derdini anlat", bot: "Le médecin",
        desc: "Nerenin ağrıdığını, ne zamandır sürdüğünü anlat ve ilacı nasıl alacağını sor.",
        steps: [
            { bot: ["Bonjour, asseyez-vous. Qu'est-ce qui ne va pas ?", "Merhaba, oturun. Neyiniz var?"], task: "Başının ağrıdığını söyle.", keys: [["mal"], ["tete"]], say: ["J'ai mal à la tête."], ok: ["Depuis quand ?", "Ne zamandan beri?"] },
            { task: "İki gündür ağrıdığını söyle.", keys: [["depuis", "jours", "hier", "deux jours"]], say: ["Depuis deux jours."], ok: ["Vous avez de la fièvre ?", "Ateşiniz var mı?"] },
            { task: "Ateşin olup olmadığını söyle.", keys: [["oui", "non", "fievre", "degres", "un peu", "trente huit"]], say: ["Oui, un peu. J'ai trente-huit.", "Non, je n'ai pas de fièvre."], ok: ["Vous toussez ?", "Öksürüyor musunuz?"] },
            { task: "Öksürmediğini ama çok yorgun olduğunu söyle.", keys: [["non", "pas"], ["fatigue", "fatiguee"]], say: ["Non, mais je suis très fatigué."], ok: ["Ce n'est pas grave, c'est un petit virus. Reposez-vous et buvez beaucoup d'eau.", "Ciddi değil, küçük bir virüs. Dinlenin ve bol su için."] },
            { task: "İlacı günde kaç kez alman gerektiğini sor.", keys: [["combien", "quand", "comment", "fois"]], say: ["Combien de fois par jour ?", "Je dois prendre les médicaments quand ?"], ok: ["Un comprimé trois fois par jour, après les repas.", "Günde üç kez, yemeklerden sonra bir tablet."] },
            { task: "Teşekkür et ve vedalaş.", keys: [["merci", "au revoir"]], say: ["Merci, docteur. Au revoir !"] }
        ],
        end: ["Au revoir, et bon rétablissement !", "Hoşça kalın, geçmiş olsun!"]
    },
    {
        id: "c6", level: "A2", title: "Le week-end", name: "Hafta sonunu anlat", bot: "Thomas",
        desc: "Passé composé ile hafta sonu ne yaptığını anlat ve bir plan öner.",
        steps: [
            { bot: ["Salut ! Tu as passé un bon week-end ?", "Selam! Hafta sonun iyi geçti mi?"], task: "İyi geçtiğini söyle.", keys: [["oui", "super", "bien", "genial", "excellent", "tres bien"]], say: ["Oui, très bon, merci !"], ok: ["Qu'est-ce que tu as fait samedi ?", "Cumartesi ne yaptın?"] },
            { task: "Cumartesi ne yaptığını passé composé ile söyle (ör. sinemaya gittim).", keys: [["ai", "suis", "sommes", "avons", "j ai"]], say: ["Samedi, je suis allé au cinéma.", "J'ai fait du sport."], ok: ["Ah, cool ! Et dimanche ?", "Ah, güzel! Ya pazar?"] },
            { task: "Pazar günü ne yaptığını söyle.", keys: [["ai", "suis", "sommes", "avons", "rien", "reste", "restee", "dormi", "j ai"]], say: ["Dimanche, je suis resté à la maison et j'ai lu un livre."], ok: ["Moi, j'ai rendu visite à mes grands-parents.", "Ben büyükannemle büyükbabamı ziyaret ettim."] },
            { task: "Nasıl geçtiğini sor (« Nasıldı? »).", keys: [["c etait", "etait", "comment", "sympa", "bien"]], say: ["C'était comment ?", "C'était bien ?"], ok: ["C'était très sympa. On a mangé ensemble et on a joué aux cartes.", "Çok hoştu. Birlikte yemek yedik ve kâğıt oynadık."] },
            { task: "Gelecek hafta sonu birlikte bir şey yapmayı öner.", keys: [["on", "tu veux", "veux", "voudrais", "ensemble", "avec moi", "tu viens"]], say: ["Le week-end prochain, on va au cinéma ensemble ?", "Tu veux venir avec moi au marché samedi ?"], ok: ["Avec plaisir ! Bonne idée.", "Memnuniyetle! İyi fikir."] },
            { task: "Vedalaş.", keys: [["salut", "a plus", "a bientot", "au revoir", "ciao", "a samedi", "bonne journee", "bonne soiree"]], say: ["Super, à samedi !"] }
        ],
        end: ["À samedi !", "Cumartesi görüşürüz!"]
    },
    {
        id: "c7", level: "B1", title: "Un entretien d'embauche", name: "İş görüşmesi yap", bot: "La recruteuse",
        desc: "Kendini tanıt, deneyimini anlat, güçlü ve zayıf yönlerini bağlaçlarla açıkla.",
        steps: [
            { bot: ["Bonjour, merci d'être venu. Pouvez-vous vous présenter ?", "Merhaba, geldiğiniz için teşekkürler. Kendinizi tanıtır mısınız?"], task: "Kendini kısaca tanıt (ad ve meslek).", keys: [["je m appelle", "m appelle", "je suis", "suis"]], say: ["Je m'appelle Emre Yılmaz, je suis ingénieur."], ok: ["Très bien. Pourquoi voulez-vous travailler chez nous ?", "Çok güzel. Neden bizde çalışmak istiyorsunuz?"] },
            { task: "Nedenini parce que ya da car ile açıkla.", keys: [["parce que", "parce qu", "car", "comme"]], say: ["Parce que votre entreprise est innovante et que j'aime travailler en équipe."], ok: ["Quelle est votre expérience ?", "Deneyiminiz nedir?"] },
            { task: "Deneyimini passé composé ve pendant / depuis ile anlat.", keys: [["ai", "j ai", "depuis", "pendant", "ans"]], say: ["J'ai travaillé pendant trois ans dans une banque."], ok: ["Quelles sont vos qualités ?", "Güçlü yönleriniz neler?"] },
            { task: "İki niteliğini söyle (ör. organisé, curieux, sérieux).", keys: [["organise", "organisee", "curieux", "curieuse", "serieux", "serieuse", "dynamique", "patient", "patiente", "motive", "motivee", "autonome", "creatif", "creative", "suis"]], say: ["Je suis organisé et curieux."], ok: ["Et vos défauts ?", "Ya zayıf yönleriniz?"] },
            { task: "Bir zayıf yönünü söyle ve mais / pourtant ile olumlu bitir.", keys: [["mais", "pourtant", "cependant"]], say: ["Je suis parfois impatient, mais j'essaie de m'améliorer."], ok: ["Merci. Avez-vous des questions ?", "Teşekkürler. Sorunuz var mı?"] },
            { task: "Ne zaman cevap vereceklerini sor.", keys: [["quand", "reponse", "date", "combien de temps"]], say: ["Quand est-ce que j'aurai une réponse ?"], ok: ["Nous vous appellerons la semaine prochaine.", "Sizi gelecek hafta arayacağız."] },
            { task: "Teşekkür et ve vedalaş.", keys: [["merci", "au revoir", "bonne journee"]], say: ["Merci beaucoup. Au revoir, madame !"] }
        ],
        end: ["Au revoir, et à bientôt.", "Hoşça kalın, yakında görüşmek üzere."]
    },
    {
        id: "c8", level: "A1", title: "À la boulangerie", name: "Fırından ekmek al", bot: "La boulangère",
        desc: "Selam ver, ekmek ve bir tatlı iste, fiyatı sor ve öde.",
        steps: [
            { task: "Selam ver.", keys: [["bonjour", "bonsoir", "salut"]], say: ["Bonjour, madame !"], ok: ["Bonjour ! Qu'est-ce que je vous donne ?", "Merhaba! Size ne vereyim?"] },
            { task: "Bir baget iste.", keys: [["baguette", "baguettes", "pain"]], say: ["Une baguette, s'il vous plaît."], ok: ["Bien cuite ou pas trop cuite ?", "İyi pişmiş mi, az pişmiş mi?"] },
            { task: "Nasıl istediğini söyle (iyi pişmiş ya da az pişmiş).", keys: [["cuite", "bien cuite", "pas trop", "normale", "comme vous voulez"]], say: ["Bien cuite, s'il vous plaît.", "Pas trop cuite."], ok: ["Voilà. Et avec ça ?", "Buyurun. Başka?"] },
            { task: "Bir tatlı ya da çörek de iste (croissant, pain au chocolat, tarte…).", keys: [["croissant", "croissants", "pain au chocolat", "pains au chocolat", "tarte", "gateau", "eclair", "chausson", "non", "rien", "c est tout"]], say: ["Deux croissants, s'il vous plaît.", "Un pain au chocolat aussi."], ok: ["Très bien. Ce sera tout ?", "Çok iyi. Başka bir şey?"] },
            { task: "Bu kadar olduğunu söyle ve fiyatı sor.", keys: [["combien", "ca fait combien", "c est combien"]], say: ["Oui, c'est tout. Ça fait combien ?"], ok: ["Trois euros dix, s'il vous plaît.", "Üç euro on sent lütfen."] },
            { task: "Parayı verirken « buyurun » de ve iyi günler dile.", keys: [["voila", "voici", "tenez"]], say: ["Voilà. Bonne journée !"] }
        ],
        end: ["Merci à vous, au revoir !", "Ben teşekkür ederim, hoşça kalın!"]
    },
    {
        id: "c9", level: "A1", title: "Ma famille", name: "Aileni anlat", bot: "Claire",
        desc: "Bir arkadaşına aileni anlat: kardeşlerin, yaşları ve nerede yaşadıkları.",
        steps: [
            { bot: ["Tu as une grande famille ?", "Kalabalık bir ailen var mı?"], task: "Ailende kaç kişi olduğunu ya da kimlerin olduğunu söyle.", keys: [["nous sommes", "on est", "j ai", "ma famille", "personnes", "oui", "non", "petite", "grande"]], say: ["Oui, nous sommes cinq.", "Non, j'ai une petite famille."], ok: ["Tu as des frères et sœurs ?", "Kardeşlerin var mı?"] },
            { task: "Kardeşlerin olup olmadığını söyle.", keys: [["frere", "freres", "soeur", "soeurs", "fils unique", "fille unique", "non"]], say: ["J'ai un frère et une sœur.", "Non, je suis fils unique."], ok: ["Ah, d'accord ! Ils ont quel âge ?", "Ha, anladım! Kaç yaşındalar?"] },
            { task: "Yaşlarını söyle (il a … ans / elle a … ans).", keys: [["ans"]], say: ["Mon frère a douze ans et ma sœur a vingt ans."], ok: ["Et tes parents, ils habitent où ?", "Peki annenle baban nerede oturuyor?"] },
            { task: "Annenle babanın nerede oturduğunu söyle.", keys: [["habitent", "vivent", "habite", "vit"]], say: ["Mes parents habitent à Ankara."], ok: ["Tu les vois souvent ?", "Onları sık görür müsün?"] },
            { task: "Onları ne sıklıkla gördüğünü söyle (souvent, le week-end, pendant les vacances…).", keys: [["souvent", "toujours", "parfois", "rarement", "jamais", "week end", "vacances", "tous les", "chaque", "fois", "oui", "non"]], say: ["Je les vois pendant les vacances.", "Oui, tous les week-ends."], ok: ["C'est bien. Moi, ma famille me manque beaucoup.", "Ne güzel. Ben ailemi çok özlüyorum."] },
            { task: "Ailene benzediğini ya da onları sevdiğini söyle (j'aime / j'adore ma famille).", keys: [["aime", "adore", "ressemble", "manque", "manquent"]], say: ["J'adore ma famille.", "Moi aussi, ils me manquent."] }
        ],
        end: ["C'est normal. La famille, c'est important !", "Çok normal. Aile önemlidir!"]
    },
    {
        id: "c10", level: "A2", title: "À la gare", name: "Tren bileti al", bot: "L'agent",
        desc: "Gişede bilet al: nereye, ne zaman, gidiş-dönüş mü, hangi sınıf.",
        steps: [
            { bot: ["Bonjour, je vous écoute.", "Merhaba, sizi dinliyorum."], task: "Lyon'a bir bilet istediğini söyle.", keys: [["billet", "billets", "aller"], ["lyon"]], say: ["Bonjour, je voudrais un billet pour Lyon, s'il vous plaît."], ok: ["Pour quand ?", "Ne zaman için?"] },
            { task: "Ne zaman gitmek istediğini söyle (bugün, yarın sabah, cuma…).", keys: [["aujourd hui", "demain", "ce soir", "matin", "soir", "apres midi", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche", "maintenant"]], say: ["Pour demain matin.", "Pour vendredi soir."], ok: ["Aller simple ou aller-retour ?", "Gidiş mi, gidiş-dönüş mü?"] },
            { task: "Gidiş-dönüş istediğini söyle.", keys: [["aller retour", "retour", "aller simple", "simple"]], say: ["Aller-retour, s'il vous plaît."], ok: ["En première ou en seconde classe ?", "Birinci mi, ikinci sınıf mı?"] },
            { task: "Hangi sınıfı istediğini söyle.", keys: [["premiere", "seconde", "deuxieme"]], say: ["En seconde, s'il vous plaît."], ok: ["Ça fait soixante-dix euros.", "Yetmiş euro tutuyor."] },
            { task: "Trenin hangi perondan kalktığını sor.", keys: [["voie", "quai"], ["quelle", "ou", "part", "numero"]], say: ["Le train part de quelle voie ?"], ok: ["De la voie quatre.", "Dört numaralı perondan."] },
            { task: "Aktarma yapman gerekip gerekmediğini sor.", keys: [["changer", "correspondance", "direct"]], say: ["Est-ce que je dois changer de train ?"], ok: ["Non, c'est un train direct.", "Hayır, direkt tren."] },
            { task: "Teşekkür et.", keys: [["merci"]], say: ["Merci beaucoup !"] }
        ],
        end: ["Je vous en prie. Bon voyage !", "Rica ederim. İyi yolculuklar!"]
    },
    {
        id: "c11", level: "A2", title: "Dans un magasin de vêtements", name: "Kıyafet al", bot: "La vendeuse",
        desc: "Mağazada ne aradığını söyle, bedenini belirt, dene ve satın al.",
        steps: [
            { bot: ["Bonjour ! Je peux vous aider ?", "Merhaba! Yardımcı olabilir miyim?"], task: "Bir kıyafet aradığını söyle (ceket, elbise, pantolon…).", keys: [["cherche", "voudrais", "veux", "besoin"], ["veste", "robe", "pantalon", "chemise", "manteau", "pull", "jupe", "chaussures", "t shirt", "jean"]], say: ["Oui, je cherche une veste.", "Je voudrais un pantalon noir."], ok: ["Quelle taille faites-vous ?", "Bedeniniz kaç?"] },
            { task: "Bedenini söyle (S, M, L ya da 38, 40…).", keys: [["s", "m", "l", "xl", "xs", "taille", "fais", "36", "38", "40", "42", "44", "46"]], say: ["Je fais du M.", "Je fais du 40."], ok: ["Nous l'avons en bleu et en noir.", "Mavisi ve siyahı var."] },
            { task: "Hangi rengi istediğini söyle.", keys: [["bleu", "bleue", "noir", "noire", "le bleu", "le noir", "la bleue", "la noire"]], say: ["Le noir, s'il vous plaît.", "Je préfère la bleue."], ok: ["Voilà.", "Buyurun."] },
            { task: "Deneyip deneyemeyeceğini sor.", keys: [["essayer", "cabine", "cabines"]], say: ["Je peux l'essayer ?", "Où sont les cabines ?"], ok: ["Bien sûr, les cabines sont au fond.", "Tabii, kabinler arka tarafta."] },
            { task: "Biraz küçük olduğunu söyle ve bir büyük beden iste.", keys: [["petit", "petite", "grand", "grande", "serre"], ["plus grand", "plus grande", "taille au dessus", "en l", "en xl", "l", "xl", "42", "44"]], say: ["C'est un peu petit. Vous l'avez en L ?"], ok: ["Oui, voilà. Ça vous va très bien !", "Evet, buyurun. Size çok yakıştı!"] },
            { task: "Aldığını söyle ve kartla ödeyip ödeyemeyeceğini sor.", keys: [["carte", "payer", "prends"]], say: ["Je le prends. Je peux payer par carte ?"], ok: ["Oui, bien sûr. Voici votre sac.", "Evet, tabii. İşte poşetiniz."] },
            { task: "Teşekkür et ve vedalaş.", keys: [["merci", "au revoir", "bonne journee"]], say: ["Merci, au revoir !"] }
        ],
        end: ["Au revoir, bonne journée !", "Hoşça kalın, iyi günler!"]
    },
    {
        id: "c12", level: "B1", title: "Une réclamation", name: "Arızalı ürünü iade et", bot: "Le vendeur",
        desc: "Bozulan bir ürünü mağazaya götür: sorunu passé composé ile anlat, isteğini kibarca ve gerekçesiyle söyle.",
        steps: [
            { bot: ["Bonjour, je peux vous aider ?", "Merhaba, yardımcı olabilir miyim?"], task: "Geçen hafta bir şey aldığını ve artık çalışmadığını söyle.", keys: [["ai achete", "achete", "j ai"], ["marche", "fonctionne", "casse", "cassee", "probleme", "panne"]], say: ["J'ai acheté cet aspirateur la semaine dernière, mais il ne marche plus."], ok: ["Je suis désolé. Vous avez le ticket de caisse ?", "Üzgünüm. Fişiniz yanınızda mı?"] },
            { task: "Fişin olduğunu söyle ve verirken « işte burada » de.", keys: [["voici", "voila", "le voici", "le voila", "oui", "tenez"]], say: ["Oui, le voici."], ok: ["Merci. Nous pouvons vous l'échanger contre un nouveau.", "Teşekkürler. Yenisiyle değiştirebiliriz."] },
            { task: "Değişim yerine para iadesi istediğini conditionnel ile kibarca söyle (je voudrais / je préférerais).", keys: [["voudrais", "prefererais", "aimerais"], ["rembourse", "remboursee", "remboursement", "rembourser", "argent"]], say: ["Je préférerais être remboursé, s'il vous plaît.", "Je voudrais un remboursement."], ok: ["Pourquoi ? C'est un très bon modèle.", "Neden? Çok iyi bir model."] },
            { task: "Nedenini parce que, car ya da comme ile açıkla.", keys: [["parce que", "parce qu", "car", "comme", "puisque"]], say: ["Parce que c'est la deuxième fois que j'ai un problème avec cette marque."], ok: ["Je comprends. Puisque vous avez le ticket, je vous rembourse tout de suite.", "Anlıyorum. Fişiniz olduğuna göre paranızı hemen iade ediyorum."] },
            { task: "Teşekkür et.", keys: [["merci", "gentil", "parfait"]], say: ["Merci, c'est très gentil."] }
        ],
        end: ["Je vous en prie. Encore désolé pour le dérangement.", "Rica ederim. Rahatsızlık için tekrar özür dileriz."]
    },
    {
        id: "c13", level: "B1", title: "Projets de vacances", name: "Tatil planını anlat", bot: "Julien",
        desc: "Yaz planlarını futur ve conditionnel ile anlat, hayal ettiğin tatili si cümlesiyle söyle.",
        steps: [
            { bot: ["Qu'est-ce que tu vas faire cet été ?", "Bu yaz ne yapacaksın?"], task: "Planını futur proche ya da futur simple ile söyle (je vais partir / je partirai…).", keys: [["vais", "irai", "partirai", "resterai", "ferai", "visiterai", "travaillerai", "voudrais", "aimerais", "pense"]], say: ["Je vais partir en Bretagne.", "Je resterai chez moi et je travaillerai."], ok: ["Ah bon ? Pourquoi ?", "Öyle mi? Neden?"] },
            { task: "Nedenini açıkla.", keys: [["parce que", "parce qu", "car", "comme", "puisque"]], say: ["Parce que j'adore la mer et le calme."], ok: ["Moi, je préfère la montagne. Tu préfères la mer ou la montagne ?", "Ben dağı tercih ederim. Sen denizi mi dağı mı tercih edersin?"] },
            { task: "Hangisini tercih ettiğini söyle.", keys: [["prefere", "aime", "adore", "mer", "montagne", "les deux"]], say: ["Je préfère la mer.", "J'aime les deux."], ok: ["Et si tu avais beaucoup d'argent, où est-ce que tu irais ?", "Peki çok paran olsaydı nereye giderdin?"] },
            { task: "Conditionnel ile hayalini söyle (j'irais / je ferais / je visiterais…).", keys: [["irais", "ferais", "visiterais", "partirais", "voyagerais", "achèterais", "acheterais", "habiterais", "resterais", "prendrais"]], say: ["J'irais au Japon.", "Je ferais le tour du monde."], ok: ["Ce serait génial ! Tu m'enverras des photos ?", "Harika olurdu! Bana fotoğraf gönderir misin?"] },
            { task: "Söz ver: döndüğünde ona fotoğrafları göstereceğini söyle (quand + futur).", keys: [["quand", "promis", "bien sur", "oui", "d accord"]], say: ["Oui, quand je reviendrai, je te montrerai mes photos !"] }
        ],
        end: ["Super, bonnes vacances !", "Süper, iyi tatiller!"]
    }
];
