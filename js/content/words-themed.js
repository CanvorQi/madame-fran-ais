/*
 * Seed words added theme by theme (A1-B1). Row format: see words-content.js.
 * A row joins its pool's list like any other word, so its id is still `pool:slug`.
 */
SEED.addThemed = function (theme, pool, rows) {
    SEED.words[pool].push(...rows);
    SEED.setTheme(theme, pool, rows.map((r) => r[0]));
};

SEED.addThemed("home", "nouns", [
    ["le canapé", "kanepe", "A2", "", "Le chat dort sur le canapé.", "Kedi kanepede uyuyor."],
    ["l'armoire", "gardırop", "A2", "", "Mes vêtements sont dans l'armoire.", "Giysilerim gardıropta.", "Dişil: une armoire"],
    ["le placard", "dolap", "A2", "", "Les assiettes sont dans le placard.", "Tabaklar dolapta."],
    ["l'étagère", "raf", "A2", "", "Le dictionnaire est sur l'étagère.", "Sözlük rafta.", "Dişil: une étagère"],
    ["la lampe", "lamba", "A1", "", "La lampe est sur la table.", "Lamba masanın üzerinde."],
    ["le tapis", "halı", "A2", "", "Ce tapis vient de Turquie.", "Bu halı Türkiye'den geliyor."],
    ["le miroir", "ayna", "A2", "", "Il y a un miroir dans la salle de bain.", "Banyoda bir ayna var."],
    ["le rideau", "perde", "A2", "", "Je ferme le rideau le soir.", "Akşamları perdeyi kapatırım."],
    ["le réfrigérateur", "buzdolabı", "A2", "", "Le lait est dans le réfrigérateur.", "Süt buzdolabında.", "Konuşma dilinde: le frigo."],
    ["le four", "fırın (ev aleti)", "A2", "", "Le gâteau est dans le four.", "Kek fırında."],
    ["la machine à laver", "çamaşır makinesi", "A2", "", "La machine à laver est en panne.", "Çamaşır makinesi bozuk."],
    ["le lave-vaisselle", "bulaşık makinesi", "B1", "lave-vaisselle", "Nous avons acheté un lave-vaisselle.", "Bir bulaşık makinesi aldık."],
    ["l'aspirateur", "elektrikli süpürge", "B1", "", "Je passe l'aspirateur le samedi.", "Cumartesi günleri elektrik süpürgesi çekerim.", "Eril: un aspirateur"],
    ["l'oreiller", "yastık", "A2", "", "Cet oreiller est très confortable.", "Bu yastık çok rahat.", "Eril: un oreiller"],
    ["la couverture", "battaniye", "A2", "", "J'ai froid, je prends une couverture.", "Üşüyorum, bir battaniye alıyorum."],
    ["le drap", "çarşaf", "B1", "", "Je change le drap du lit.", "Yatağın çarşafını değiştiriyorum."],
    ["l'escalier", "merdiven", "A2", "", "Je prends l'escalier, pas l'ascenseur.", "Asansörü değil, merdiveni kullanıyorum.", "Eril: un escalier"],
    ["le toit", "çatı", "B1", "", "Le chat marche sur le toit.", "Kedi çatıda yürüyor."],
    ["le balcon", "balkon", "A2", "", "Nous prenons le café sur le balcon.", "Kahvemizi balkonda içiyoruz."],
    ["le garage", "garaj", "A1", "", "Ma voiture est dans le garage.", "Arabam garajda."],
    ["la cave", "kiler, bodrum", "A2", "", "Il y a du vin dans la cave.", "Bodrumda şarap var."],
    ["le couloir", "koridor", "A2", "", "La salle de bain est au fond du couloir.", "Banyo koridorun sonunda."],
    ["le sol", "yer, zemin", "A2", "", "Le stylo est tombé sur le sol.", "Kalem yere düştü."],
    ["le déménagement", "taşınma", "B1", "", "Le déménagement est prévu pour lundi.", "Taşınma pazartesiye planlandı."],
    ["le locataire", "kiracı", "B1", "locataires", "Le locataire paie le loyer chaque mois.", "Kiracı kirayı her ay öder."],
    ["la poubelle", "çöp kutusu", "A2", "", "La poubelle est sous l'évier.", "Çöp kutusu lavabonun altında."],
    ["l'évier", "mutfak lavabosu", "B1", "", "Les assiettes sont dans l'évier.", "Tabaklar lavaboda.", "Eril: un évier"],
    ["la vaisselle", "bulaşık, tabak çanak", "A2", "", "La vaisselle est propre.", "Bulaşıklar temiz."]
]);
SEED.addThemed("home", "verbs", [
    ["nettoyer", "temizlemek", "A2", "nettoie, nettoies, nettoie, nettoyons, nettoyez, nettoient, nettoyé, fut=nettoier", "Je nettoie la cuisine.", "Mutfağı temizliyorum.", "", "Il faut nettoyer la salle de bain.", "Banyoyu temizlemek gerekiyor."],
    ["ranger", "toplamak, yerleştirmek", "A2", "", "Je range ma chambre.", "Odamı topluyorum.", "Nous biçimi -geons ile yazılır."],
    ["laver", "yıkamak", "A2", "", "Je lave ma voiture le dimanche.", "Pazar günleri arabamı yıkarım."],
    ["réparer", "tamir etmek", "A2", "", "Mon père répare la porte.", "Babam kapıyı tamir ediyor.", "", "Il faut réparer cette lampe.", "Bu lambayı tamir etmek gerekiyor."],
    ["déménager", "taşınmak", "B1", "", "Nous déménageons à Lyon en mai.", "Mayısta Lyon'a taşınıyoruz."],
    ["allumer", "yakmak, açmak (ışık)", "A2", "", "J'allume la lampe.", "Lambayı yakıyorum."],
    ["éteindre", "söndürmek, kapatmak (ışık)", "A2", "éteins, éteins, éteint, éteignons, éteignez, éteignent, éteint", "Éteins la télévision, s'il te plaît.", "Televizyonu kapat, lütfen."]
]);
SEED.addThemed("home", "verbal", [
    ["faire la vaisselle", "bulaşık yıkamak", "A2", "", "Je fais la vaisselle après le dîner.", "Akşam yemeğinden sonra bulaşık yıkarım."],
    ["faire le lit", "yatağı toplamak", "A2", "", "Je fais le lit tous les matins.", "Her sabah yatağı toplarım."]
]);

SEED.addThemed("family", "nouns", [
    ["le cousin", "kuzen", "A2", "cousine, cousins, cousines", "Mon cousin habite à Bordeaux.", "Kuzenim Bordeaux'da oturuyor."],
    ["le neveu", "erkek yeğen", "B1", "neveux", "Mon neveu a cinq ans.", "Erkek yeğenim beş yaşında."],
    ["la nièce", "kız yeğen", "B1", "", "Ma nièce adore dessiner.", "Kız yeğenim resim yapmaya bayılır."],
    ["le petit-fils", "erkek torun", "A2", "petits-fils", "Mon petit-fils va à l'école.", "Torunum okula gidiyor."],
    ["la petite-fille", "kız torun", "A2", "petites-filles", "Ma petite-fille s'appelle Léa.", "Kız torunumun adı Léa."],
    ["le beau-père", "kayınpeder, üvey baba", "B1", "beaux-pères", "Mon beau-père est très gentil.", "Kayınpederim çok kibar."],
    ["la belle-mère", "kayınvalide, üvey anne", "B1", "belles-mères", "Ma belle-mère habite à Nantes.", "Kayınvalidem Nantes'ta oturuyor."],
    ["le couple", "çift", "A2", "", "Ce jeune couple cherche un appartement.", "Bu genç çift daire arıyor."],
    ["le mariage", "evlilik, düğün", "A2", "", "Le mariage est en juin.", "Düğün haziranda."],
    ["le divorce", "boşanma", "B1", "", "Le divorce a été difficile pour les enfants.", "Boşanma çocuklar için zor oldu."],
    ["le copain", "arkadaş, erkek arkadaş", "A2", "copine, copains, copines", "Je sors avec un copain ce soir.", "Bu akşam bir arkadaşımla çıkıyorum.", "Dişili: la copine."],
    ["le jumeau", "ikiz", "B1", "jumelle, jumeaux, jumelles", "Mon frère jumeau vit au Canada.", "İkiz kardeşim Kanada'da yaşıyor."]
]);
SEED.addThemed("family", "adjectives", [
    ["marié", "evli", "A2", "", "Ma sœur est mariée.", "Kız kardeşim evli."],
    ["célibataire", "bekâr", "A2", "", "Mon oncle est célibataire.", "Amcam bekâr."],
    ["divorcé", "boşanmış", "B1", "", "Ses parents sont divorcés.", "Annesiyle babası boşanmış."]
]);
SEED.addThemed("family", "verbs", [
    ["épouser", "evlenmek (biriyle)", "B1", "", "Il va épouser sa copine en mai.", "Mayısta kız arkadaşıyla evlenecek."],
    ["naître", "doğmak", "A2", "nais, nais, naît, naissons, naissez, naissent, né", "Je suis né à Izmir.", "İzmir'de doğdum.", "Geçmiş zamanda être ile çekilir."],
    ["mourir", "ölmek", "B1", "meurs, meurs, meurt, mourons, mourez, meurent, mort, fut=mourr", "Son grand-père est mort l'année dernière.", "Dedesi geçen yıl öldü.", "Geçmiş zamanda être ile çekilir."]
]);
SEED.addThemed("family", "pronominal", [
    ["se marier", "evlenmek", "A2", "", "Ils se marient samedi.", "Cumartesi evleniyorlar."],
    ["se disputer", "tartışmak, kavga etmek", "B1", "", "Les enfants se disputent souvent.", "Çocuklar sık sık kavga eder."],
    ["s'entendre", "anlaşmak", "B1", "entends, entends, entend, entendons, entendez, entendent, entendu", "Je m'entends bien avec ma sœur.", "Kız kardeşimle iyi anlaşırım."]
]);

SEED.addThemed("body", "nouns", [
    ["le corps", "vücut", "A2", "", "Le sport est bon pour le corps.", "Spor vücuda iyi gelir."],
    ["le cou", "boyun", "A2", "", "J'ai mal au cou.", "Boynum ağrıyor."],
    ["l'épaule", "omuz", "A2", "", "J'ai mal à l'épaule gauche.", "Sol omzum ağrıyor.", "Dişil: une épaule"],
    ["le genou", "diz", "A2", "genoux", "Il s'est blessé au genou.", "Dizini yaraladı.", "Çoğulu: les genoux."],
    ["le doigt", "parmak", "A2", "", "Je me suis coupé le doigt.", "Parmağımı kestim.", "gt okunmaz: [dwa]."],
    ["le nez", "burun", "A1", "", "Le bébé a un petit nez.", "Bebeğin küçük bir burnu var."],
    ["la bouche", "ağız", "A1", "", "Ouvre la bouche, s'il te plaît.", "Ağzını aç, lütfen."],
    ["l'oreille", "kulak", "A2", "", "J'ai mal à l'oreille.", "Kulağım ağrıyor.", "Dişil: une oreille"],
    ["le visage", "yüz", "A2", "", "Elle a un joli visage.", "Güzel bir yüzü var."],
    ["les cheveux", "saç", "A1", "cheveu", "Elle a les cheveux longs.", "Uzun saçları var.", "Fransızcada genellikle çoğul kullanılır."],
    ["le cœur", "kalp", "A2", "", "Mon cœur bat très vite.", "Kalbim çok hızlı atıyor."],
    ["le sang", "kan", "B1", "", "Le médecin fait une analyse de sang.", "Doktor kan tahlili yapıyor."],
    ["la peau", "cilt, deri", "B1", "", "Le soleil est mauvais pour la peau.", "Güneş cilde zararlıdır."],
    ["l'os", "kemik", "B1", "", "Le chien mange un os.", "Köpek bir kemik yiyor.", "Eril: un os. Çoğulu da os yazılır."],
    ["la fièvre", "ateş (hastalık)", "A2", "", "Mon fils a de la fièvre.", "Oğlumun ateşi var."],
    ["la toux", "öksürük", "B1", "", "Ce médicament est contre la toux.", "Bu ilaç öksürüğe karşı."],
    ["le rhume", "soğuk algınlığı", "A2", "", "J'ai un rhume depuis lundi.", "Pazartesiden beri nezleyim."],
    ["la douleur", "ağrı, acı", "B1", "", "Je sens une douleur dans le dos.", "Sırtımda bir ağrı hissediyorum."],
    ["la blessure", "yara", "B1", "", "Sa blessure n'est pas grave.", "Yarası ciddi değil."],
    ["l'ordonnance", "reçete", "B1", "", "Le médecin écrit une ordonnance.", "Doktor reçete yazıyor.", "Dişil: une ordonnance"],
    ["l'infirmier", "hemşire", "A2", "infirmière, infirmiers, infirmières", "L'infirmière est très gentille.", "Hemşire çok nazik.", "Eril: un infirmier, dişil: une infirmière"],
    ["le dentiste", "diş hekimi", "A2", "dentistes", "J'ai rendez-vous chez le dentiste.", "Dişçiden randevum var."],
    ["les urgences", "acil servis", "B1", "", "Nous allons aux urgences.", "Acil servise gidiyoruz.", "Bu anlamda çoğul kullanılır."],
    ["l'ambulance", "ambulans", "A2", "", "L'ambulance arrive très vite.", "Ambulans çok çabuk geliyor.", "Dişil: une ambulance"]
]);
SEED.addThemed("body", "verbs", [
    ["soigner", "tedavi etmek, bakmak", "B1", "", "Le médecin soigne ses malades.", "Doktor hastalarını tedavi ediyor."],
    ["guérir", "iyileşmek, iyileştirmek", "B1", "", "Elle guérit vite.", "Çabuk iyileşiyor."],
    ["tousser", "öksürmek", "A2", "", "Il tousse beaucoup la nuit.", "Geceleri çok öksürüyor."],
    ["respirer", "nefes almak", "A2", "", "Respirez lentement.", "Yavaşça nefes alın."],
    ["souffrir", "acı çekmek", "B1", "souffre, souffres, souffre, souffrons, souffrez, souffrent, souffert", "Mon grand-père souffre du dos.", "Dedem sırt ağrısı çekiyor."]
]);
SEED.addThemed("body", "pronominal", [
    ["se blesser", "yaralanmak", "B1", "", "Attention, tu vas te blesser !", "Dikkat, yaralanacaksın!"]
]);
SEED.addThemed("body", "adjectives", [
    ["blessé", "yaralı", "B1", "", "Le joueur est blessé.", "Oyuncu yaralı."],
    ["enceinte", "hamile", "A2", "", "Ma sœur est enceinte.", "Kız kardeşim hamile."]
]);

SEED.addThemed("food", "nouns", [
    ["la nourriture", "yiyecek", "A2", "", "La nourriture est très bonne ici.", "Burada yemekler çok güzel."],
    ["la carotte", "havuç", "A1", "", "Le lapin mange une carotte.", "Tavşan bir havuç yiyor."],
    ["l'oignon", "soğan", "A2", "", "Je coupe un oignon pour la soupe.", "Çorba için bir soğan doğruyorum.", "Eril: un oignon. Okunuşu [ɔɲɔ̃]."],
    ["l'ail", "sarımsak", "A2", "", "Je n'aime pas l'ail.", "Sarımsak sevmem.", "Eril: de l'ail"],
    ["le citron", "limon", "A1", "", "Je bois du thé avec du citron.", "Limonlu çay içiyorum."],
    ["la banane", "muz", "A1", "", "Je prends une banane après le sport.", "Spordan sonra bir muz yerim."],
    ["la fraise", "çilek", "A1", "", "J'adore la confiture de fraise.", "Çilek reçeline bayılırım."],
    ["le raisin", "üzüm", "A2", "", "Le raisin est bon en septembre.", "Üzüm eylülde güzel olur."],
    ["la poire", "armut", "A1", "", "Cette poire est très sucrée.", "Bu armut çok tatlı."],
    ["la cerise", "kiraz", "A2", "", "La cerise est un fruit d'été.", "Kiraz bir yaz meyvesidir."],
    ["le jambon", "jambon", "A1", "", "Je prends un sandwich au jambon.", "Jambonlu sandviç alıyorum."],
    ["le sandwich", "sandviç", "A1", "sandwichs", "Je mange un sandwich à midi.", "Öğlen sandviç yerim."],
    ["le bœuf", "sığır eti", "A2", "", "Nous mangeons du bœuf ce soir.", "Bu akşam sığır eti yiyoruz."],
    ["l'huile", "yağ (sıvı)", "A2", "", "Je cuisine avec de l'huile d'olive.", "Zeytinyağıyla yemek yaparım.", "Dişil: une huile"],
    ["le poivre", "karabiber", "A2", "", "Tu peux me passer le poivre ?", "Karabiberi uzatabilir misin?"],
    ["la farine", "un", "A2", "", "Il faut de la farine pour faire un gâteau.", "Kek yapmak için un gerekir."],
    ["les pâtes", "makarna", "A1", "", "Mes enfants adorent les pâtes.", "Çocuklarım makarnaya bayılır.", "Her zaman çoğul kullanılır."],
    ["le yaourt", "yoğurt", "A1", "", "Je mange un yaourt le matin.", "Sabahları bir yoğurt yerim."],
    ["la crème", "krema", "A2", "", "Je mets de la crème dans la soupe.", "Çorbaya krema koyuyorum."],
    ["la glace", "dondurma, buz", "A1", "", "Je voudrais une glace au chocolat.", "Çikolatalı dondurma rica ediyorum."],
    ["la bière", "bira", "A1", "", "Il boit une bière avec ses amis.", "Arkadaşlarıyla bira içiyor."],
    ["la bouteille", "şişe", "A1", "", "J'achète une bouteille d'eau.", "Bir şişe su alıyorum."],
    ["l'assiette", "tabak", "A1", "", "L'assiette est sur la table.", "Tabak masanın üzerinde.", "Dişil: une assiette"],
    ["la fourchette", "çatal", "A1", "", "Il manque une fourchette.", "Bir çatal eksik."],
    ["le couteau", "bıçak", "A1", "", "Ce couteau ne coupe pas bien.", "Bu bıçak iyi kesmiyor."],
    ["la cuillère", "kaşık", "A1", "", "Je mange la soupe avec une cuillère.", "Çorbayı kaşıkla içerim."],
    ["la tasse", "fincan", "A1", "", "Je voudrais une tasse de thé.", "Bir fincan çay rica ediyorum."],
    ["le plat", "yemek, tabak", "A2", "", "Quel est le plat du jour ?", "Günün yemeği nedir?"],
    ["le dessert", "tatlı", "A1", "", "Je prends un dessert après le repas.", "Yemekten sonra tatlı yerim."],
    ["la recette", "yemek tarifi", "A2", "", "Tu peux me donner la recette ?", "Bana tarifi verebilir misin?"],
    ["l'ingrédient", "malzeme", "B1", "", "Il manque un ingrédient.", "Bir malzeme eksik.", "Eril: un ingrédient"],
    ["le serveur", "garson", "A2", "serveuse, serveurs, serveuses", "Le serveur apporte le menu.", "Garson menüyü getiriyor."],
    ["l'addition", "hesap (restoran)", "A2", "", "L'addition, s'il vous plaît.", "Hesap, lütfen.", "Dişil: une addition"],
    ["le pourboire", "bahşiş", "B1", "", "Je laisse un pourboire au serveur.", "Garsona bahşiş bırakıyorum."],
    ["le goût", "tat, zevk", "B1", "", "Cette soupe a un goût bizarre.", "Bu çorbanın tadı tuhaf."]
]);
SEED.addThemed("food", "verbs", [
    ["goûter", "tadına bakmak", "A2", "", "Tu veux goûter ce fromage ?", "Bu peynirin tadına bakmak ister misin?"],
    ["couper", "kesmek, doğramak", "A2", "", "Je coupe le pain.", "Ekmeği kesiyorum."],
    ["mélanger", "karıştırmak", "B1", "", "Mélangez la farine et le sucre.", "Unu ve şekeri karıştırın."],
    ["préparer", "hazırlamak", "A1", "", "Je prépare le dîner.", "Akşam yemeğini hazırlıyorum."],
    ["commander", "sipariş etmek", "A2", "", "Nous commandons une pizza.", "Pizza sipariş ediyoruz."],
    ["cuire", "pişirmek, pişmek", "B1", "cuis, cuis, cuit, cuisons, cuisez, cuisent, cuit", "Le riz cuit en dix minutes.", "Pirinç on dakikada pişer."]
]);
SEED.addThemed("food", "adjectives", [
    ["sucré", "tatlı, şekerli", "A2", "", "Ce gâteau est trop sucré.", "Bu kek fazla tatlı."],
    ["épicé", "baharatlı, acılı", "B1", "", "Ce plat est très épicé.", "Bu yemek çok baharatlı."],
    ["végétarien", "vejetaryen", "B1", "", "Ma fille est végétarienne.", "Kızım vejetaryen."],
    ["frais", "taze, serin", "A2", "fraîche, fraîches", "Le poisson est très frais.", "Balık çok taze.", "Dişili düzensizdir: fraîche."]
]);

SEED.addThemed("food", "expressions", [
    ["salé", "tuzlu", "A2", "salée, salés, salées", "La soupe est trop salée.", "Çorba çok tuzlu."]
]);

SEED.addThemed("nature", "nouns", [
    ["la nature", "doğa", "A2", "", "J'aime marcher dans la nature.", "Doğada yürümeyi severim."],
    ["la forêt", "orman", "A1", "", "Il y a beaucoup d'animaux dans la forêt.", "Ormanda çok hayvan var."],
    ["le lac", "göl", "A2", "", "Nous nageons dans le lac.", "Gölde yüzüyoruz."],
    ["la rivière", "dere, ırmak", "A2", "", "Cette rivière est très froide.", "Bu dere çok soğuk."],
    ["le fleuve", "nehir (denize dökülen)", "B1", "", "La Loire est un long fleuve.", "Loire uzun bir nehirdir."],
    ["l'île", "ada", "A2", "", "La Corse est une île.", "Korsika bir adadır.", "Dişil: une île"],
    ["le désert", "çöl", "B1", "", "Il ne pleut presque jamais dans le désert.", "Çölde neredeyse hiç yağmur yağmaz."],
    ["le volcan", "yanardağ", "B1", "", "Ce volcan est très ancien.", "Bu yanardağ çok eski."],
    ["la vallée", "vadi", "B1", "", "Le village est dans la vallée.", "Köy vadide."],
    ["la colline", "tepe", "B1", "", "La maison est sur une colline.", "Ev bir tepenin üzerinde."],
    ["la côte", "kıyı, sahil", "B1", "", "Nous allons sur la côte en été.", "Yazın sahile gideriz."],
    ["la vague", "dalga", "B1", "", "La vague est très haute.", "Dalga çok yüksek."],
    ["le sable", "kum", "A2", "", "Les enfants jouent dans le sable.", "Çocuklar kumda oynuyor."],
    ["la pierre", "taş", "A2", "", "Ce vieux mur est en pierre.", "Bu eski duvar taştan."],
    ["l'herbe", "ot, çimen", "A2", "", "Nous sommes assis sur l'herbe.", "Çimenlerde oturuyoruz.", "Dişil: une herbe"],
    ["la feuille", "yaprak, kâğıt", "A2", "", "La feuille tombe de l'arbre.", "Yaprak ağaçtan düşüyor."],
    ["la plante", "bitki", "A2", "", "Cette plante a besoin d'eau.", "Bu bitkinin suya ihtiyacı var."],
    ["la terre", "toprak, yeryüzü", "A2", "", "La Terre tourne autour du Soleil.", "Dünya Güneş'in etrafında döner."],
    ["la lune", "ay (gök cismi)", "A2", "", "La lune brille cette nuit.", "Ay bu gece parlıyor."],
    ["l'étoile", "yıldız", "A2", "", "Je regarde une étoile dans le ciel.", "Gökyüzünde bir yıldıza bakıyorum.", "Dişil: une étoile"],
    ["le nuage", "bulut", "A2", "", "Il y a un gros nuage dans le ciel.", "Gökyüzünde büyük bir bulut var."],
    ["l'orage", "fırtına (gök gürültülü)", "A2", "", "L'orage arrive ce soir.", "Fırtına bu akşam geliyor.", "Eril: un orage"],
    ["la tempête", "fırtına, kasırga", "B1", "", "La tempête a cassé un arbre.", "Fırtına bir ağacı devirdi."],
    ["le brouillard", "sis", "B1", "", "Il y a du brouillard ce matin.", "Bu sabah sis var."],
    ["le paysage", "manzara", "B1", "", "Le paysage est magnifique ici.", "Manzara burada muhteşem."],
    ["le climat", "iklim", "B1", "", "Le climat est doux à Nice.", "Nice'te iklim ılımandır."],
    ["la saison", "mevsim", "A1", "", "Quelle est ta saison préférée ?", "En sevdiğin mevsim hangisi?"]
]);
SEED.addThemed("nature", "verbs", [
    ["fleurir", "çiçek açmak", "B1", "", "Les arbres fleurissent au printemps.", "Ağaçlar ilkbaharda çiçek açar."],
    ["planter", "dikmek (bitki)", "A2", "", "Je plante des fleurs dans le jardin.", "Bahçeye çiçek dikiyorum."]
]);
SEED.addThemed("nature", "adjectives", [
    ["ensoleillé", "güneşli", "A2", "", "La journée est très ensoleillée.", "Gün çok güneşli."],
    ["nuageux", "bulutlu", "A2", "", "Le ciel est nuageux ce matin.", "Bu sabah gökyüzü bulutlu."],
    ["pluvieux", "yağmurlu", "B1", "", "L'automne est pluvieux en Bretagne.", "Bretanya'da sonbahar yağmurlu geçer."],
    ["sauvage", "yabani, vahşi", "B1", "", "Le loup est un animal sauvage.", "Kurt vahşi bir hayvandır."]
]);

SEED.addThemed("animals", "nouns", [
    ["l'animal", "hayvan", "A1", "", "Tu as un animal à la maison ?", "Evde hayvanın var mı?", "Eril: un animal, çoğulu: des animaux"],
    ["le cheval", "at", "A1", "", "Le cheval court dans le champ.", "At tarlada koşuyor.", "Çoğulu: les chevaux."],
    ["la vache", "inek", "A1", "", "La vache donne du lait.", "İnek süt verir."],
    ["le mouton", "koyun", "A2", "", "Le mouton mange de l'herbe.", "Koyun ot yiyor."],
    ["la chèvre", "keçi", "A2", "", "Ce fromage est fait avec du lait de chèvre.", "Bu peynir keçi sütünden yapılır."],
    ["le cochon", "domuz", "A2", "", "Il y a un cochon à la ferme.", "Çiftlikte bir domuz var."],
    ["la poule", "tavuk (canlı)", "A2", "", "La poule fait des œufs.", "Tavuk yumurtlar."],
    ["le canard", "ördek", "A2", "", "Un canard nage sur le lac.", "Gölde bir ördek yüzüyor."],
    ["le lapin", "tavşan", "A1", "", "Mon fils a un lapin blanc.", "Oğlumun beyaz bir tavşanı var."],
    ["la souris", "fare", "A2", "", "Le chat regarde la souris.", "Kedi fareye bakıyor.", "Bilgisayar faresi için de kullanılır."],
    ["le lion", "aslan", "A2", "", "Le lion dort sous un arbre.", "Aslan ağacın altında uyuyor."],
    ["l'ours", "ayı", "A2", "", "L'ours vit dans la montagne.", "Ayı dağda yaşar.", "Eril: un ours"],
    ["le loup", "kurt", "B1", "", "Le loup est revenu dans les Alpes.", "Kurt Alpler'e geri döndü.", "p okunmaz."],
    ["le renard", "tilki", "B1", "", "Un renard traverse la route.", "Bir tilki yolu geçiyor."],
    ["le singe", "maymun", "A2", "", "Le singe mange une banane.", "Maymun muz yiyor."],
    ["l'éléphant", "fil", "A2", "", "L'éléphant est un très gros animal.", "Fil çok iri bir hayvandır.", "Eril: un éléphant"],
    ["le serpent", "yılan", "A2", "", "J'ai peur du serpent.", "Yılandan korkuyorum."],
    ["l'abeille", "arı", "B1", "", "L'abeille fait du miel.", "Arı bal yapar.", "Dişil: une abeille"],
    ["le papillon", "kelebek", "A2", "", "Un papillon vole dans le jardin.", "Bahçede bir kelebek uçuyor."],
    ["la mouche", "sinek", "A2", "", "Il y a une mouche dans la cuisine.", "Mutfakta bir sinek var."],
    ["l'araignée", "örümcek", "B1", "", "J'ai peur de cette araignée.", "Bu örümcekten korkuyorum.", "Dişil: une araignée"],
    ["la tortue", "kaplumbağa", "A2", "", "La tortue marche lentement.", "Kaplumbağa yavaş yürür."],
    ["la ferme", "çiftlik", "A2", "", "Mes grands-parents ont une ferme.", "Büyükannem ve dedemin bir çiftliği var."],
    ["le champ", "tarla", "B1", "", "Les vaches sont dans le champ.", "İnekler tarlada."],
    ["le zoo", "hayvanat bahçesi", "A1", "", "Nous allons au zoo dimanche.", "Pazar günü hayvanat bahçesine gidiyoruz."]
]);

SEED.addThemed("city", "nouns", [
    ["la cathédrale", "katedral", "A2", "", "La cathédrale de Reims est célèbre.", "Reims Katedrali ünlüdür."],
    ["le château", "şato, kale", "A2", "", "Nous visitons un château.", "Bir şato geziyoruz."],
    ["le monument", "anıt", "A2", "", "Ce monument est très ancien.", "Bu anıt çok eski."],
    ["le trottoir", "kaldırım", "B1", "", "Les enfants marchent sur le trottoir.", "Çocuklar kaldırımda yürüyor."],
    ["le carrefour", "kavşak", "A2", "", "Tournez à droite au carrefour.", "Kavşakta sağa dönün."],
    ["le feu", "ateş, trafik lambası", "A2", "", "Tournez à gauche après le feu.", "Trafik ışığından sonra sola dönün."],
    ["l'avenue", "cadde", "A2", "", "Cette avenue est très longue.", "Bu cadde çok uzun.", "Dişil: une avenue"],
    ["le bâtiment", "bina", "A2", "", "Ce bâtiment est très haut.", "Bu bina çok yüksek."],
    ["l'immeuble", "apartman binası", "A2", "", "J'habite dans un vieil immeuble.", "Eski bir apartmanda oturuyorum.", "Eril: un immeuble"],
    ["la boucherie", "kasap dükkânı", "A2", "", "J'achète de la viande à la boucherie.", "Kasaptan et alıyorum."],
    ["la librairie", "kitapçı", "A2", "", "Je cherche un roman à la librairie.", "Kitapçıda bir roman arıyorum.", "Kütüphane değildir: o la bibliothèque."],
    ["le commissariat", "karakol", "B1", "", "Le commissariat est près de la mairie.", "Karakol belediyenin yakınında."],
    ["la piscine", "yüzme havuzu", "A1", "", "Je vais à la piscine le mercredi.", "Çarşamba günleri havuza giderim."],
    ["le stade", "stadyum", "A2", "", "Le stade est plein ce soir.", "Stadyum bu akşam dolu."],
    ["la banlieue", "banliyö", "B1", "", "Il habite en banlieue.", "Banliyöde oturuyor."],
    ["le centre commercial", "alışveriş merkezi", "A2", "centres commerciaux", "Nous allons au centre commercial.", "Alışveriş merkezine gidiyoruz."],
    ["la mosquée", "cami", "A2", "", "Cette mosquée est magnifique.", "Bu cami muhteşem."],
    ["le parking", "otopark", "A1", "", "Le parking est derrière l'hôtel.", "Otopark otelin arkasında."],
    ["l'habitant", "sakin, oturan kişi", "B1", "habitante, habitants, habitantes", "Cette ville a cent mille habitants.", "Bu şehrin yüz bin sakini var.", "Eril: un habitant"],
    ["le plan", "plan, şehir haritası", "A2", "", "Tu as un plan de la ville ?", "Şehir haritan var mı?"]
]);
SEED.addThemed("city", "adjectives", [
    ["animé", "hareketli, canlı", "B1", "", "Ce quartier est très animé le soir.", "Bu semt akşamları çok hareketli."],
    ["bruyant", "gürültülü", "B1", "", "Ma rue est très bruyante.", "Sokağım çok gürültülü."]
]);

SEED.addThemed("travel", "nouns", [
    ["l'aéroport", "havalimanı", "A1", "", "L'aéroport est loin de la ville.", "Havalimanı şehirden uzak.", "Eril: un aéroport"],
    ["le vol", "uçuş", "A2", "", "Mon vol part à midi.", "Uçuşum öğlen kalkıyor."],
    ["le passeport", "pasaport", "A1", "", "N'oublie pas ton passeport.", "Pasaportunu unutma."],
    ["le visa", "vize", "A2", "", "Il me faut un visa pour ce pays.", "Bu ülke için vizeye ihtiyacım var."],
    ["la douane", "gümrük", "B1", "", "Nous passons la douane à l'aéroport.", "Havalimanında gümrükten geçiyoruz."],
    ["la réservation", "rezervasyon", "A2", "", "J'ai une réservation au nom de Yılmaz.", "Yılmaz adına rezervasyonum var."],
    ["le bagage", "bagaj, valiz", "A2", "", "Ce bagage est trop lourd.", "Bu bagaj çok ağır."],
    ["le guichet", "gişe", "B1", "", "Le guichet est fermé.", "Gişe kapalı."],
    ["le quai", "peron, rıhtım", "B1", "", "Le train part du quai numéro trois.", "Tren üç numaralı perondan kalkıyor."],
    ["la frontière", "sınır", "B1", "", "Nous arrivons à la frontière.", "Sınıra varıyoruz."],
    ["le port", "liman", "A2", "", "Marseille a un très grand port.", "Marsilya'nın çok büyük bir limanı var."],
    ["le bateau", "gemi, tekne", "A1", "", "Nous allons sur l'île en bateau.", "Adaya tekneyle gidiyoruz."],
    ["le camion", "kamyon", "A2", "", "Le camion est garé devant la maison.", "Kamyon evin önünde park etmiş."],
    ["la moto", "motosiklet", "A1", "", "Mon frère a une moto.", "Erkek kardeşimin motosikleti var."],
    ["le tramway", "tramvay", "A2", "", "Je prends le tramway pour aller à l'université.", "Üniversiteye gitmek için tramvaya binerim."],
    ["l'autoroute", "otoyol", "A2", "", "L'autoroute est payante.", "Otoyol paralı.", "Dişil: une autoroute"],
    ["le conducteur", "sürücü", "A2", "conductrice, conducteurs, conductrices", "Le conducteur du bus est très gentil.", "Otobüs şoförü çok kibar."],
    ["le passager", "yolcu", "A2", "passagère, passagers, passagères", "Le passager attend dans l'avion.", "Yolcu uçakta bekliyor."],
    ["la carte d'identité", "kimlik kartı", "A2", "cartes d'identité", "Montrez votre carte d'identité, s'il vous plaît.", "Kimlik kartınızı gösterin, lütfen."],
    ["l'horaire", "tarife, saatler", "A2", "", "Tu connais l'horaire du train ?", "Trenin saatini biliyor musun?", "Eril: un horaire"],
    ["le retard", "gecikme", "A2", "", "Le train a une heure de retard.", "Trenin bir saat gecikmesi var."],
    ["la sortie", "çıkış", "A1", "", "Où est la sortie ?", "Çıkış nerede?"],
    ["l'entrée", "giriş, başlangıç yemeği", "A1", "", "L'entrée du musée est à droite.", "Müzenin girişi sağda.", "Dişil: une entrée"],
    ["l'aller-retour", "gidiş-dönüş", "A2", "allers-retours", "Je voudrais un aller-retour pour Paris.", "Paris'e gidiş-dönüş bilet rica ediyorum.", "Eril: un aller-retour"],
    ["la destination", "varış yeri", "B1", "", "Nous sommes arrivés à destination.", "Varış yerine ulaştık."],
    ["l'auberge de jeunesse", "gençlik hosteli", "B1", "auberges de jeunesse", "Nous dormons dans une auberge de jeunesse.", "Bir gençlik hostelinde kalıyoruz.", "Dişil: une auberge"],
    ["le camping", "kamp alanı", "A2", "", "Nous passons nos vacances au camping.", "Tatilimizi kamp alanında geçiriyoruz."],
    ["le séjour", "konaklama, kalış", "B1", "", "Bon séjour à Paris !", "Paris'te iyi vakit geçirin!"]
]);
SEED.addThemed("travel", "verbs", [
    ["réserver", "rezervasyon yapmak", "A2", "", "Je réserve une chambre pour deux nuits.", "İki gecelik oda ayırtıyorum.", "", "Il faut réserver une table.", "Masa ayırtmak gerekiyor."],
    ["atterrir", "iniş yapmak", "B1", "", "L'avion atterrit à Nice.", "Uçak Nice'e iniyor."],
    ["décoller", "kalkış yapmak", "B1", "", "L'avion décolle dans dix minutes.", "Uçak on dakika içinde kalkıyor."],
    ["monter", "çıkmak, binmek", "A2", "", "Je monte dans le train.", "Trene biniyorum.", "Geçmiş zamanda être ile çekilir."],
    ["annuler", "iptal etmek", "B1", "", "Ils ont annulé notre vol.", "Uçuşumuzu iptal ettiler."],
    ["garer", "park etmek", "A2", "", "Je gare la voiture devant la maison.", "Arabayı evin önüne park ediyorum."]
]);

SEED.addThemed("work", "nouns", [
    ["l'employé", "çalışan", "A2", "employée, employés, employées", "Cet employé est très sérieux.", "Bu çalışan çok ciddi.", "Eril: un employé, dişil: une employée"],
    ["le patron", "patron", "A2", "patronne, patrons, patronnes", "Mon patron est en réunion.", "Patronum toplantıda."],
    ["le salaire", "maaş", "A2", "", "Mon salaire arrive à la fin du mois.", "Maaşım ay sonunda yatıyor."],
    ["le stage", "staj", "A2", "", "Je fais un stage dans une banque.", "Bir bankada staj yapıyorum."],
    ["le contrat", "sözleşme", "B1", "", "Je signe le contrat demain.", "Yarın sözleşmeyi imzalıyorum."],
    ["le chômage", "işsizlik", "B1", "", "Il est au chômage depuis mars.", "Marttan beri işsiz."],
    ["la carrière", "kariyer", "B1", "", "Elle a fait une belle carrière.", "Güzel bir kariyer yaptı."],
    ["l'équipe", "ekip, takım", "A2", "", "Notre équipe gagne toujours.", "Takımımız hep kazanır.", "Dişil: une équipe"],
    ["le projet", "proje", "A2", "", "Ce projet est très important.", "Bu proje çok önemli."],
    ["le dossier", "dosya", "B1", "", "Le dossier est sur mon bureau.", "Dosya masamın üzerinde."],
    ["l'entretien", "iş görüşmesi", "B1", "", "J'ai un entretien d'embauche mardi.", "Salı günü iş görüşmem var.", "Eril: un entretien"],
    ["le CV", "özgeçmiş", "A2", "", "J'envoie mon CV à cette entreprise.", "Özgeçmişimi bu şirkete gönderiyorum."],
    ["l'ingénieur", "mühendis", "A2", "", "Mon mari est ingénieur.", "Kocam mühendis.", "Eril: un ingénieur. Dişili: une ingénieure."],
    ["l'avocat", "avukat, avokado", "A2", "avocate, avocats, avocates", "Ma sœur est avocate.", "Kız kardeşim avukat.", "Eril: un avocat, dişil: une avocate"],
    ["le policier", "polis memuru", "A2", "policière, policiers, policières", "Le policier parle au conducteur.", "Polis sürücüyle konuşuyor."],
    ["le pompier", "itfaiyeci", "A2", "pompiers", "Le pompier arrive très vite.", "İtfaiyeci çok çabuk geliyor."],
    ["le cuisinier", "aşçı", "A2", "cuisinière, cuisiniers, cuisinières", "Le cuisinier prépare le plat du jour.", "Aşçı günün yemeğini hazırlıyor."],
    ["le vendeur", "satıcı, tezgâhtar", "A2", "vendeuse, vendeurs, vendeuses", "La vendeuse est très gentille.", "Tezgâhtar kadın çok nazik."],
    ["l'agriculteur", "çiftçi", "B1", "agricultrice, agriculteurs, agricultrices", "L'agriculteur travaille dans son champ.", "Çiftçi tarlasında çalışıyor.", "Eril: un agriculteur, dişil: une agricultrice"],
    ["le journaliste", "gazeteci", "A2", "journalistes", "Ce journaliste écrit pour Le Monde.", "Bu gazeteci Le Monde için yazıyor."],
    ["l'architecte", "mimar", "A2", "architectes", "L'architecte dessine une maison.", "Mimar bir ev çiziyor.", "Eril ve dişil: un architecte, une architecte"],
    ["le facteur", "postacı", "A2", "factrice, facteurs, factrices", "Le facteur passe à dix heures.", "Postacı saat onda geçiyor."],
    ["le coiffeur", "kuaför", "A2", "coiffeuse, coiffeurs, coiffeuses", "Je vais chez le coiffeur samedi.", "Cumartesi kuaföre gidiyorum."],
    ["l'ouvrier", "işçi", "A2", "ouvrière, ouvriers, ouvrières", "Cet ouvrier travaille à l'usine.", "Bu işçi fabrikada çalışıyor.", "Eril: un ouvrier, dişil: une ouvrière"],
    ["l'usine", "fabrika", "A2", "", "L'usine ferme à six heures.", "Fabrika saat altıda kapanıyor.", "Dişil: une usine"],
    ["la retraite", "emeklilik", "A2", "", "Mon père est à la retraite.", "Babam emekli."]
]);
SEED.addThemed("work", "verbs", [
    ["embaucher", "işe almak", "B1", "", "Cette entreprise embauche dix personnes.", "Bu şirket on kişi işe alıyor."],
    ["licencier", "işten çıkarmak", "B1", "", "L'usine va licencier cent ouvriers.", "Fabrika yüz işçiyi işten çıkaracak."],
    ["gérer", "yönetmek", "B1", "gère, gères, gère, gérons, gérez, gèrent, géré, fut=gérer", "Elle gère un petit restaurant.", "Küçük bir restoran işletiyor."],
    ["organiser", "düzenlemek", "A2", "", "Nous organisons une réunion lundi.", "Pazartesi bir toplantı düzenliyoruz."],
    ["diriger", "yönetmek, yöneltmek", "B1", "", "Il dirige une équipe de dix personnes.", "On kişilik bir ekibi yönetiyor."],
    ["signer", "imzalamak", "A2", "", "Signez ici, s'il vous plaît.", "Buraya imza atın, lütfen."]
]);
SEED.addThemed("work", "verbal", [
    ["prendre sa retraite", "emekli olmak", "B1", "", "Mon oncle va prendre sa retraite en juin.", "Amcam haziranda emekli olacak."]
]);

SEED.addThemed("school", "nouns", [
    ["la classe", "sınıf", "A1", "", "Il y a vingt élèves dans la classe.", "Sınıfta yirmi öğrenci var."],
    ["la matière", "ders (branş), madde", "A2", "", "Quelle est ta matière préférée ?", "En sevdiğin ders hangisi?"],
    ["les mathématiques", "matematik", "A1", "", "Mon fils aime les mathématiques.", "Oğlum matematiği sever.", "Konuşma dilinde: les maths."],
    ["la géographie", "coğrafya", "A2", "", "La géographie est une matière intéressante.", "Coğrafya ilginç bir derstir."],
    ["la physique", "fizik", "A2", "", "J'ai un examen de physique jeudi.", "Perşembe fizik sınavım var."],
    ["la chimie", "kimya", "A2", "", "Elle étudie la chimie à Lyon.", "Lyon'da kimya okuyor."],
    ["le dictionnaire", "sözlük", "A1", "", "Je cherche ce mot dans le dictionnaire.", "Bu kelimeye sözlükte bakıyorum."],
    ["la règle", "kural, cetvel", "A2", "", "Cette règle de grammaire est difficile.", "Bu dil bilgisi kuralı zor."],
    ["le crayon", "kurşun kalem", "A1", "", "J'écris avec un crayon.", "Kurşun kalemle yazıyorum."],
    ["la note", "not", "A2", "", "J'ai une bonne note en français.", "Fransızcadan iyi not aldım."],
    ["le diplôme", "diploma", "A2", "", "Elle a un diplôme de médecine.", "Tıp diploması var."],
    ["le baccalauréat", "lise bitirme sınavı", "B1", "", "Il passe le baccalauréat en juin.", "Haziranda bakaloryaya giriyor.", "Kısaca: le bac."],
    ["le lycée", "lise", "A1", "", "Ma fille va au lycée.", "Kızım liseye gidiyor."],
    ["le collège", "ortaokul", "A2", "", "Mon fils va au collège à pied.", "Oğlum ortaokula yürüyerek gidiyor."],
    ["la bourse", "burs", "B1", "", "Elle a reçu une bourse pour étudier à Paris.", "Paris'te okumak için burs aldı."],
    ["la cantine", "okul yemekhanesi", "A2", "", "Les élèves mangent à la cantine.", "Öğrenciler yemekhanede yemek yiyor."],
    ["le semestre", "dönem", "B1", "", "Le semestre commence en février.", "Dönem şubatta başlıyor."],
    ["la grammaire", "dil bilgisi", "A2", "", "La grammaire française n'est pas facile.", "Fransızca dil bilgisi kolay değil."],
    ["le vocabulaire", "kelime bilgisi", "A2", "", "Je révise le vocabulaire chaque soir.", "Her akşam kelime tekrarı yapıyorum."]
]);
SEED.addThemed("school", "verbs", [
    ["enseigner", "öğretmek", "A2", "", "Elle enseigne le français à Ankara.", "Ankara'da Fransızca öğretiyor."],
    ["répéter", "tekrar etmek", "A2", "répète, répètes, répète, répétons, répétez, répètent, répété, fut=répéter", "Vous pouvez répéter, s'il vous plaît ?", "Tekrar edebilir misiniz, lütfen?"],
    ["corriger", "düzeltmek", "B1", "", "Le professeur corrige les exercices.", "Öğretmen alıştırmaları düzeltiyor."],
    ["échouer", "başarısız olmak", "B1", "", "Il a échoué à l'examen.", "Sınavda başarısız oldu."],
    ["traduire", "çevirmek", "A2", "traduis, traduis, traduit, traduisons, traduisez, traduisent, traduit", "Je traduis ce texte en turc.", "Bu metni Türkçeye çeviriyorum."],
    ["réviser", "tekrar etmek (ders)", "A2", "", "Je révise pour mon examen.", "Sınavım için tekrar yapıyorum."]
]);

SEED.addThemed("clothes", "nouns", [
    ["la jupe", "etek", "A1", "", "Elle porte une jupe noire.", "Siyah bir etek giyiyor."],
    ["le pull", "kazak", "A1", "", "Mets ton pull, il fait froid.", "Kazağını giy, hava soğuk."],
    ["la veste", "ceket", "A1", "", "Cette veste est trop petite.", "Bu ceket fazla küçük."],
    ["le jean", "kot pantolon", "A1", "", "Je porte un jean tous les jours.", "Her gün kot pantolon giyerim."],
    ["le tee-shirt", "tişört", "A1", "", "J'ai acheté un tee-shirt blanc.", "Beyaz bir tişört aldım."],
    ["le chapeau", "şapka", "A1", "", "Il porte un chapeau noir.", "Siyah bir şapka takıyor."],
    ["l'écharpe", "atkı", "A2", "", "Prends ton écharpe, il fait froid.", "Atkını al, hava soğuk.", "Dişil: une écharpe"],
    ["le gant", "eldiven", "A2", "", "J'ai perdu un gant.", "Bir eldivenimi kaybettim."],
    ["la ceinture", "kemer", "A2", "", "Cette ceinture est en cuir.", "Bu kemer deri."],
    ["la cravate", "kravat", "A2", "", "Mon père porte une cravate au travail.", "Babam işte kravat takar."],
    ["la chaussette", "çorap", "A1", "", "Je cherche une chaussette bleue.", "Mavi bir çorap arıyorum."],
    ["la botte", "çizme", "A2", "", "Je mets une botte, puis l'autre.", "Bir çizmeyi, sonra diğerini giyiyorum."],
    ["les lunettes", "gözlük", "A2", "", "Je ne trouve pas mes lunettes.", "Gözlüğümü bulamıyorum.", "Her zaman çoğul kullanılır."],
    ["le maillot de bain", "mayo", "A2", "", "N'oublie pas ton maillot de bain.", "Mayonu unutma."],
    ["le pyjama", "pijama", "A2", "", "Le bébé porte un pyjama bleu.", "Bebek mavi bir pijama giyiyor."],
    ["la taille", "beden, boy", "A2", "", "Quelle est votre taille ?", "Bedeniniz nedir?"],
    ["la pointure", "ayakkabı numarası", "B1", "", "Quelle est votre pointure ?", "Ayakkabı numaranız kaç?"],
    ["la mode", "moda", "A2", "", "Elle aime la mode.", "Modayı seviyor."],
    ["la bague", "yüzük", "A2", "", "Il lui offre une bague.", "Ona bir yüzük hediye ediyor."],
    ["le bijou", "takı, mücevher", "A2", "bijoux", "Ce bijou est très cher.", "Bu takı çok pahalı.", "Çoğulu: les bijoux."],
    ["la montre", "kol saati", "A1", "", "Ma montre ne marche plus.", "Saatim artık çalışmıyor."],
    ["le parapluie", "şemsiye", "A2", "", "Prends ton parapluie, il pleut.", "Şemsiyeni al, yağmur yağıyor."],
    ["le cuir", "deri", "B1", "", "J'aime l'odeur du cuir.", "Deri kokusunu severim."]
]);
SEED.addThemed("clothes", "verbs", [
    ["porter", "giymek, taşımak", "A1", "", "Il porte une chemise blanche.", "Beyaz bir gömlek giyiyor.", "", "Je peux porter ta valise.", "Bavulunu taşıyabilirim."],
    ["enlever", "çıkarmak", "A2", "enlève, enlèves, enlève, enlevons, enlevez, enlèvent, enlevé, fut=enlèver", "J'enlève mes chaussures à la maison.", "Evde ayakkabılarımı çıkarırım."]
]);
SEED.addThemed("clothes", "adjectives", [
    ["élégant", "şık", "A2", "", "Cette robe est très élégante.", "Bu elbise çok şık."],
    ["confortable", "rahat", "A2", "", "Ces chaussures sont confortables.", "Bu ayakkabılar rahat."],
    ["large", "geniş, bol", "A2", "", "Ce pantalon est trop large.", "Bu pantolon fazla bol."],
    ["serré", "dar, sıkı", "B1", "", "Cette chemise est trop serrée.", "Bu gömlek fazla dar."]
]);

SEED.addThemed("shopping", "nouns", [
    ["le panier", "sepet", "A2", "", "Je mets les fruits dans le panier.", "Meyveleri sepete koyuyorum."],
    ["le ticket", "fiş, bilet", "A2", "", "Gardez votre ticket de caisse.", "Kasa fişinizi saklayın."],
    ["la facture", "fatura", "B1", "", "Je paie la facture d'électricité.", "Elektrik faturasını ödüyorum."],
    ["la réduction", "indirim", "A2", "", "Il y a une réduction pour les étudiants.", "Öğrencilere indirim var."],
    ["les soldes", "indirim dönemi", "A2", "", "Les soldes commencent en janvier.", "İndirimler ocakta başlıyor.", "Her zaman çoğul kullanılır."],
    ["la promotion", "kampanya, terfi", "B1", "", "Ce fromage est en promotion.", "Bu peynir kampanyada."],
    ["le portefeuille", "cüzdan", "A2", "", "J'ai perdu mon portefeuille.", "Cüzdanımı kaybettim."],
    ["la monnaie", "bozuk para, para üstü", "A2", "", "Vous avez de la monnaie ?", "Bozuk paranız var mı?"],
    ["le compte", "hesap", "B1", "", "J'ai un compte dans cette banque.", "Bu bankada hesabım var."],
    ["la carte bancaire", "banka kartı", "A2", "cartes bancaires", "Je n'ai pas ma carte bancaire.", "Banka kartım yanımda değil."],
    ["le distributeur", "bankamatik, otomat", "B1", "", "Il y a un distributeur près de la gare.", "Garın yakınında bir bankamatik var."],
    ["l'achat", "satın alma", "A2", "", "Elle fait des achats en ligne.", "İnternetten alışveriş yapıyor.", "Eril: un achat"],
    ["le paiement", "ödeme", "B1", "", "Le paiement se fait en ligne.", "Ödeme internetten yapılıyor."],
    ["le chèque", "çek", "B1", "", "Je ne paie jamais par chèque.", "Hiç çekle ödemem."],
    ["le centime", "kuruş (sent)", "A2", "", "Il me manque un centime.", "Bir sentim eksik."]
]);
SEED.addThemed("shopping", "verbs", [
    ["dépenser", "harcamak", "A2", "", "Je dépense trop d'argent.", "Çok fazla para harcıyorum."],
    ["économiser", "biriktirmek, tasarruf etmek", "B1", "", "Nous économisons pour les vacances.", "Tatil için para biriktiriyoruz."],
    ["rembourser", "parasını geri ödemek", "B1", "", "Le magasin me rembourse.", "Mağaza paramı geri ödüyor."],
    ["échanger", "değiştirmek (takas)", "A2", "", "Je peux échanger cette robe ?", "Bu elbiseyi değiştirebilir miyim?"],
    ["emprunter", "ödünç almak", "A2", "", "J'emprunte un livre à la bibliothèque.", "Kütüphaneden kitap ödünç alıyorum."],
    ["prêter", "ödünç vermek", "A2", "", "Tu peux me prêter ton stylo ?", "Kalemini bana ödünç verebilir misin?"]
]);
SEED.addThemed("shopping", "adjectives", [
    ["gratuit", "ücretsiz", "A2", "", "L'entrée est gratuite pour les enfants.", "Giriş çocuklar için ücretsiz."],
    ["bon marché", "ucuz", "A2", "", "Ce restaurant est bon marché.", "Bu restoran ucuz.", "Eril ve dişilde, tekil ve çoğulda değişmez."]
]);

SEED.addThemed("leisure", "nouns", [
    ["le loisir", "boş zaman uğraşı", "A2", "", "Quel est ton loisir préféré ?", "En sevdiğin uğraş ne?"],
    ["le jeu", "oyun", "A1", "jeux", "Ce jeu est très amusant.", "Bu oyun çok eğlenceli."],
    ["le jouet", "oyuncak", "A1", "", "Ce jouet est pour mon fils.", "Bu oyuncak oğlum için."],
    ["le football", "futbol", "A1", "", "Le football est très populaire en France.", "Futbol Fransa'da çok popülerdir."],
    ["le tennis", "tenis", "A1", "", "Elle joue au tennis le samedi.", "Cumartesi günleri tenis oynuyor."],
    ["la natation", "yüzme", "A2", "", "La natation est un sport complet.", "Yüzme tam bir spordur."],
    ["le ski", "kayak", "A2", "", "Nous faisons du ski dans les Alpes.", "Alpler'de kayak yapıyoruz."],
    ["la randonnée", "doğa yürüyüşü", "A2", "", "Cette randonnée dure trois heures.", "Bu doğa yürüyüşü üç saat sürüyor."],
    ["la danse", "dans", "A1", "", "Ma fille fait de la danse.", "Kızım dans yapıyor."],
    ["la pêche", "balık tutma, şeftali", "A2", "", "Mon père aime la pêche.", "Babam balık tutmayı sever."],
    ["le match", "maç", "A1", "matchs", "Le match commence à vingt heures.", "Maç saat yirmide başlıyor."],
    ["le joueur", "oyuncu", "A2", "joueuse, joueurs, joueuses", "Ce joueur est très rapide.", "Bu oyuncu çok hızlı."],
    ["le ballon", "top", "A1", "", "Les enfants jouent avec un ballon.", "Çocuklar topla oynuyor."],
    ["la guitare", "gitar", "A1", "", "Mon frère joue de la guitare.", "Erkek kardeşim gitar çalıyor."],
    ["le piano", "piyano", "A1", "", "Elle joue du piano depuis cinq ans.", "Beş yıldır piyano çalıyor."],
    ["la collection", "koleksiyon", "A2", "", "J'ai une collection de timbres.", "Pul koleksiyonum var."],
    ["le club", "kulüp", "A2", "", "Je fais partie d'un club de lecture.", "Bir okuma kulübüne üyeyim."],
    ["le festival", "festival", "A2", "festivals", "Le festival de Cannes est célèbre.", "Cannes Festivali ünlüdür."],
    ["le jardinage", "bahçıvanlık", "B1", "", "Ma grand-mère aime le jardinage.", "Büyükannem bahçe işlerini sever."],
    ["le bricolage", "tamir ve el işi", "B1", "", "Mon père adore le bricolage.", "Babam ev tamirlerine bayılır."]
]);
SEED.addThemed("leisure", "verbs", [
    ["nager", "yüzmek", "A1", "", "Je nage dans la mer.", "Denizde yüzüyorum.", "", "Tu sais nager ?", "Yüzmeyi biliyor musun?"],
    ["gagner", "kazanmak", "A2", "", "Notre équipe gagne le match.", "Takımımız maçı kazanıyor."],
    ["skier", "kayak yapmak", "A2", "", "Nous skions en février.", "Şubatta kayak yapıyoruz."],
    ["participer", "katılmak", "B1", "", "Je participe à une course.", "Bir yarışa katılıyorum."]
]);
SEED.addThemed("leisure", "verbal", [
    ["faire du vélo", "bisiklete binmek", "A1", "", "Je fais du vélo le dimanche.", "Pazar günleri bisiklete binerim."],
    ["faire de la randonnée", "doğa yürüyüşü yapmak", "A2", "", "Nous faisons de la randonnée à la montagne.", "Dağda doğa yürüyüşü yapıyoruz."]
]);
SEED.addThemed("leisure", "adjectives", [
    ["amusant", "eğlenceli", "A2", "", "Ce jeu est très amusant.", "Bu oyun çok eğlenceli."],
    ["populaire", "popüler", "A2", "", "Ce sport est très populaire.", "Bu spor çok popüler."]
]);

SEED.addThemed("tech", "nouns", [
    ["internet", "internet", "A1", "internet", "Je cherche l'adresse sur internet.", "Adresi internette arıyorum."],
    ["le site", "web sitesi", "A2", "", "Ce site est très utile.", "Bu site çok faydalı."],
    ["le mot de passe", "şifre", "A2", "", "J'ai oublié mon mot de passe.", "Şifremi unuttum."],
    ["l'application", "uygulama", "A2", "", "J'utilise cette application pour apprendre le français.", "Fransızca öğrenmek için bu uygulamayı kullanıyorum.", "Dişil: une application"],
    ["le portable", "cep telefonu", "A1", "", "Mon portable ne marche plus.", "Cep telefonum artık çalışmıyor."],
    ["le clavier", "klavye", "A2", "", "Ce clavier est français.", "Bu klavye Fransızca."],
    ["l'écran", "ekran", "A2", "", "L'écran de mon téléphone est cassé.", "Telefonumun ekranı kırık.", "Eril: un écran"],
    ["l'imprimante", "yazıcı", "A2", "", "L'imprimante ne marche pas.", "Yazıcı çalışmıyor.", "Dişil: une imprimante"],
    ["le réseau", "ağ, şebeke", "B1", "réseaux", "Il n'y a pas de réseau ici.", "Burada şebeke yok.", "Sosyal medya: les réseaux sociaux."],
    ["le mail", "e-posta", "A2", "", "Je t'envoie un mail ce soir.", "Bu akşam sana e-posta gönderiyorum."],
    ["le fichier", "dosya (bilgisayar)", "A2", "", "Je t'envoie le fichier.", "Dosyayı sana gönderiyorum."],
    ["la tablette", "tablet", "A2", "", "Ma fille lit sur sa tablette.", "Kızım tabletinde okuyor."],
    ["le chargeur", "şarj aleti", "A2", "", "Tu as un chargeur ?", "Şarj aletin var mı?"],
    ["la batterie", "batarya, pil", "A2", "", "La batterie de mon téléphone est vide.", "Telefonumun şarjı bitti."],
    ["le lien", "bağlantı", "B1", "", "Clique sur ce lien.", "Bu bağlantıya tıkla."],
    ["le logiciel", "yazılım", "B1", "", "Ce logiciel est gratuit.", "Bu yazılım ücretsiz."],
    ["l'émission", "televizyon/radyo programı", "A2", "", "Cette émission commence à vingt heures.", "Bu program saat yirmide başlıyor.", "Dişil: une émission"],
    ["l'article", "makale", "A2", "", "J'ai lu un article sur la France.", "Fransa hakkında bir makale okudum.", "Eril: un article"],
    ["le reportage", "röportaj, haber", "B1", "", "Ce reportage parle de l'environnement.", "Bu haber çevreden bahsediyor."],
    ["la publicité", "reklam", "A2", "", "Il y a trop de publicité à la télévision.", "Televizyonda çok fazla reklam var."],
    ["l'enveloppe", "zarf", "A2", "", "Je mets la lettre dans l'enveloppe.", "Mektubu zarfa koyuyorum.", "Dişil: une enveloppe"],
    ["le timbre", "pul", "A2", "", "J'achète un timbre à la poste.", "Postaneden pul alıyorum."],
    ["le colis", "koli, paket", "A2", "", "J'ai reçu un colis ce matin.", "Bu sabah bir koli aldım."]
]);
SEED.addThemed("tech", "verbs", [
    ["télécharger", "indirmek", "A2", "", "Je télécharge cette application.", "Bu uygulamayı indiriyorum."],
    ["cliquer", "tıklamak", "A2", "", "Cliquez ici.", "Buraya tıklayın."],
    ["imprimer", "yazdırmak", "A2", "", "Je dois imprimer mon billet.", "Biletimi yazdırmam gerekiyor."],
    ["enregistrer", "kaydetmek", "B1", "", "N'oublie pas d'enregistrer ton fichier.", "Dosyanı kaydetmeyi unutma."],
    ["partager", "paylaşmak", "A2", "", "Je partage cette photo avec ma famille.", "Bu fotoğrafı ailemle paylaşıyorum."],
    ["supprimer", "silmek", "B1", "", "J'ai supprimé ce message.", "Bu mesajı sildim."]
]);

SEED.addThemed("feelings", "nouns", [
    ["la joie", "sevinç", "A2", "", "Quelle joie de te voir !", "Seni görmek ne büyük sevinç!"],
    ["la tristesse", "üzüntü", "B1", "", "Je vois de la tristesse dans ses yeux.", "Gözlerinde üzüntü görüyorum."],
    ["la peur", "korku", "A2", "", "La peur est normale avant un examen.", "Sınavdan önce korku normaldir."],
    ["la colère", "öfke", "B1", "", "Il est en colère contre moi.", "Bana kızgın."],
    ["l'amour", "aşk, sevgi", "A1", "", "L'amour est important dans la vie.", "Sevgi hayatta önemlidir.", "Eril: un amour"],
    ["le bonheur", "mutluluk", "A2", "", "Je vous souhaite beaucoup de bonheur.", "Size çok mutluluk dilerim."],
    ["la honte", "utanç", "B1", "", "J'ai honte de mon erreur.", "Hatamdan utanıyorum."],
    ["la surprise", "sürpriz", "A2", "", "Quelle bonne surprise !", "Ne güzel sürpriz!"],
    ["la confiance", "güven", "B1", "", "J'ai confiance en toi.", "Sana güveniyorum."],
    ["l'espoir", "umut", "B1", "", "Il garde l'espoir.", "Umudunu koruyor.", "Eril: un espoir"],
    ["le sentiment", "duygu", "B1", "", "C'est un sentiment agréable.", "Bu hoş bir duygu."],
    ["la jalousie", "kıskançlık", "B1", "", "La jalousie est un mauvais sentiment.", "Kıskançlık kötü bir duygudur."],
    ["la solitude", "yalnızlık", "B1", "", "Mon voisin souffre de la solitude.", "Komşum yalnızlıktan muzdarip."]
]);
SEED.addThemed("feelings", "adjectives", [
    ["fier", "gururlu", "B1", "", "Je suis fier de toi.", "Seninle gurur duyuyorum."],
    ["timide", "utangaç", "A2", "", "Mon fils est très timide.", "Oğlum çok utangaç."],
    ["courageux", "cesur", "A2", "", "Le pompier est très courageux.", "İtfaiyeci çok cesur."],
    ["paresseux", "tembel", "A2", "", "Il est un peu paresseux.", "Biraz tembel."],
    ["sérieux", "ciddi", "A2", "", "Cet élève est très sérieux.", "Bu öğrenci çok ciddi."],
    ["jaloux", "kıskanç", "B1", "jalouse, jalouses", "Il est jaloux de son frère.", "Erkek kardeşini kıskanıyor."],
    ["généreux", "cömert", "B1", "", "Ma tante est très généreuse.", "Teyzem çok cömert."],
    ["méchant", "kötü kalpli", "A2", "", "Ce chien n'est pas méchant.", "Bu köpek zararsızdır."],
    ["poli", "kibar", "A2", "", "Cet enfant est très poli.", "Bu çocuk çok kibar."],
    ["nerveux", "gergin", "B1", "", "Je suis nerveux avant l'entretien.", "Görüşmeden önce gerginim."],
    ["inquiet", "endişeli", "B1", "inquiète, inquiets, inquiètes", "Ma mère est inquiète.", "Annem endişeli."],
    ["surpris", "şaşırmış", "A2", "", "Je suis très surpris.", "Çok şaşırdım."],
    ["déçu", "hayal kırıklığına uğramış", "B1", "", "Je suis déçu par ce film.", "Bu film beni hayal kırıklığına uğrattı."],
    ["amoureux", "âşık", "A2", "", "Il est amoureux de sa voisine.", "Komşusuna âşık."],
    ["honnête", "dürüst", "B1", "", "C'est un homme honnête.", "O dürüst bir adam."],
    ["ennuyeux", "sıkıcı", "A2", "", "Ce film est ennuyeux.", "Bu film sıkıcı."],
    ["curieux", "meraklı", "B1", "", "Les enfants sont curieux.", "Çocuklar meraklıdır."],
    ["seul", "yalnız, tek", "A2", "", "Elle habite seule.", "Yalnız yaşıyor."]
]);
SEED.addThemed("feelings", "verbs", [
    ["pleurer", "ağlamak", "A2", "", "Le bébé pleure la nuit.", "Bebek geceleri ağlıyor."],
    ["rire", "gülmek", "A2", "ris, ris, rit, rions, riez, rient, ri", "Nous rions beaucoup ensemble.", "Birlikte çok güleriz."],
    ["sourire", "gülümsemek", "A2", "souris, souris, sourit, sourions, souriez, sourient, souri", "Elle sourit toujours.", "Hep gülümser."],
    ["espérer", "umut etmek", "A2", "espère, espères, espère, espérons, espérez, espèrent, espéré, fut=espérer", "J'espère que tu vas bien.", "Umarım iyisindir."],
    ["craindre", "korkmak, çekinmek", "B1", "crains, crains, craint, craignons, craignez, craignent, craint", "Je crains le pire.", "En kötüsünden korkuyorum."],
    ["embrasser", "öpmek, sarılmak", "A2", "", "J'embrasse ma mère.", "Annemi öpüyorum."]
]);
SEED.addThemed("feelings", "pronominal", [
    ["s'inquiéter", "endişelenmek", "B1", "inquiète, inquiètes, inquiète, inquiétons, inquiétez, inquiètent, inquiété, fut=inquiéter", "Ne t'inquiète pas.", "Endişelenme."],
    ["s'ennuyer", "sıkılmak", "A2", "ennuie, ennuies, ennuie, ennuyons, ennuyez, ennuient, ennuyé, fut=ennuier", "Je m'ennuie à la maison.", "Evde sıkılıyorum."],
    ["se fâcher", "kızmak", "B1", "", "Mon père se fâche rarement.", "Babam nadiren kızar."],
    ["se sentir", "kendini hissetmek", "A2", "sens, sens, sent, sentons, sentez, sentent, senti", "Je me sens bien aujourd'hui.", "Bugün kendimi iyi hissediyorum."]
]);

SEED.addThemed("daily", "nouns", [
    ["le réveil", "çalar saat", "A2", "", "Mon réveil sonne à six heures.", "Çalar saatim altıda çalıyor."],
    ["le savon", "sabun", "A2", "", "Je me lave les mains avec du savon.", "Ellerimi sabunla yıkarım."],
    ["le shampoing", "şampuan", "A2", "", "Il n'y a plus de shampoing.", "Şampuan kalmadı."],
    ["la serviette", "havlu, peçete", "A2", "", "Prends une serviette propre.", "Temiz bir havlu al."],
    ["la brosse à dents", "diş fırçası", "A2", "", "J'ai oublié ma brosse à dents.", "Diş fırçamı unuttum."],
    ["le dentifrice", "diş macunu", "A2", "", "J'achète du dentifrice.", "Diş macunu alıyorum."],
    ["l'habitude", "alışkanlık", "A2", "", "J'ai l'habitude de me lever tôt.", "Erken kalkmaya alışkınım.", "Dişil: une habitude"],
    ["la routine", "rutin", "B1", "", "La routine du matin est importante.", "Sabah rutini önemlidir."]
]);
SEED.addThemed("daily", "pronominal", [
    ["se doucher", "duş almak", "A2", "", "Je me douche le soir.", "Akşamları duş alırım."],
    ["se raser", "tıraş olmak", "A2", "", "Il se rase tous les matins.", "Her sabah tıraş olur."],
    ["se maquiller", "makyaj yapmak", "A2", "", "Elle se maquille avant de sortir.", "Çıkmadan önce makyaj yapar."],
    ["se détendre", "rahatlamak", "B1", "détends, détends, détend, détendons, détendez, détendent, détendu", "Je me détends après le travail.", "İşten sonra rahatlarım."]
]);
SEED.addThemed("daily", "verbal", [
    ["faire la sieste", "şekerleme yapmak", "A2", "", "Le dimanche, je fais la sieste.", "Pazar günleri öğle uykusu uyurum."],
    ["faire la lessive", "çamaşır yıkamak", "A2", "", "Je fais la lessive le samedi.", "Cumartesi günleri çamaşır yıkarım."],
    ["faire la grasse matinée", "sabah geç saate kadar uyumak", "B1", "", "Dimanche, je fais la grasse matinée.", "Pazar günü geç saate kadar uyurum."]
]);

SEED.addThemed("greetings", "expressions", [
    ["à tout à l'heure", "birazdan görüşürüz", "A1", "", "Je pars, à tout à l'heure !", "Ben çıkıyorum, birazdan görüşürüz!"],
    ["à plus tard", "sonra görüşürüz", "A1", "", "Salut, à plus tard !", "Selam, sonra görüşürüz!"],
    ["bonne chance", "iyi şanslar", "A1", "", "Bonne chance pour ton examen !", "Sınavında iyi şanslar!"],
    ["bon courage", "kolay gelsin", "A2", "", "Bon courage pour demain !", "Yarın için kolay gelsin!"],
    ["félicitations", "tebrikler", "A2", "", "Félicitations pour ton diplôme !", "Diploman için tebrikler!"],
    ["bienvenue", "hoş geldiniz", "A1", "", "Bienvenue en France !", "Fransa'ya hoş geldiniz!"],
    ["je suis désolé", "özür dilerim, üzgünüm", "A1", "je suis désolée", "Je suis désolé, je suis en retard.", "Özür dilerim, geç kaldım."],
    ["je vous en prie", "rica ederim", "A2", "", "Merci, madame. — Je vous en prie.", "Teşekkürler hanımefendi. — Rica ederim."],
    ["avec plaisir", "memnuniyetle", "A2", "", "Tu viens ? — Avec plaisir !", "Geliyor musun? — Memnuniyetle!"],
    ["ça ne fait rien", "önemli değil", "A2", "", "Pardon ! — Ça ne fait rien.", "Pardon! — Önemli değil."],
    ["volontiers", "seve seve", "A2", "", "Un café ? — Volontiers !", "Kahve? — Seve seve!"]
]);

SEED.addThemed("description", "adjectives", [
    ["rapide", "hızlı", "A1", "", "Ce train est très rapide.", "Bu tren çok hızlı."],
    ["lent", "yavaş", "A2", "", "Internet est lent ici.", "İnternet burada yavaş."],
    ["gros", "iri, şişman", "A1", "grosse, grosses", "Ce chat est très gros.", "Bu kedi çok şişman."],
    ["mince", "zayıf, ince", "A2", "", "Elle est grande et mince.", "Uzun boylu ve zayıf."],
    ["étroit", "dar", "A2", "", "Cette rue est très étroite.", "Bu sokak çok dar."],
    ["haut", "yüksek", "A1", "", "Cette tour est très haute.", "Bu kule çok yüksek."],
    ["bas", "alçak", "A2", "basse, basses", "Cette table est trop basse.", "Bu masa fazla alçak."],
    ["profond", "derin", "B1", "", "Ce lac est très profond.", "Bu göl çok derin."],
    ["léger", "hafif", "A2", "", "Ce sac est très léger.", "Bu çanta çok hafif."],
    ["plein", "dolu", "A2", "", "Le bus est plein.", "Otobüs dolu."],
    ["vide", "boş", "A2", "", "La bouteille est vide.", "Şişe boş."],
    ["dur", "sert, zor", "A2", "", "Ce pain est dur.", "Bu ekmek sert."],
    ["doux", "yumuşak, tatlı", "A2", "douce, douces", "Ce pull est très doux.", "Bu kazak çok yumuşak."],
    ["riche", "zengin", "A2", "", "Cet homme est très riche.", "Bu adam çok zengin."],
    ["pauvre", "fakir", "A2", "", "Ce pays est pauvre.", "Bu ülke fakir."],
    ["moderne", "modern", "A2", "", "J'habite dans un immeuble moderne.", "Modern bir apartmanda oturuyorum."],
    ["ancien", "eski, kadim", "A2", "", "J'aime les monuments anciens.", "Eski anıtları severim."],
    ["bizarre", "tuhaf", "A2", "", "C'est très bizarre.", "Bu çok tuhaf."],
    ["nécessaire", "gerekli", "A2", "", "Ce papier est nécessaire.", "Bu belge gerekli."],
    ["utile", "faydalı", "A2", "", "Ce livre est très utile.", "Bu kitap çok faydalı."],
    ["dangereux", "tehlikeli", "A2", "", "Cette route est dangereuse.", "Bu yol tehlikeli."],
    ["sûr", "emin, güvenli", "A2", "", "Tu es sûr ?", "Emin misin?"],
    ["vrai", "doğru, gerçek", "A1", "", "C'est vrai ?", "Doğru mu?"],
    ["faux", "yanlış, sahte", "A2", "fausse, fausses", "Cette réponse est fausse.", "Bu cevap yanlış."],
    ["pareil", "aynı, benzer", "B1", "pareille, pareils, pareilles", "Ces deux sacs sont pareils.", "Bu iki çanta aynı."],
    ["différent", "farklı", "A2", "", "Nous sommes très différents.", "Çok farklıyız."],
    ["magnifique", "muhteşem", "A2", "", "Cette vue est magnifique.", "Bu manzara muhteşem."],
    ["normal", "normal", "A2", "", "C'est tout à fait normal.", "Bu gayet normal."],
    ["cassé", "kırık, bozuk", "A2", "", "Cette chaise est cassée.", "Bu sandalye kırık."]
]);

SEED.addThemed("colors", "adjectives", [
    ["orange", "turuncu", "A1", "oranges", "Mon vélo est orange.", "Bisikletim turuncu."],
    ["rose", "pembe", "A1", "", "Elle porte un pull rose.", "Pembe bir kazak giyiyor."],
    ["violet", "mor", "A1", "violette, violets, violettes", "Cette fleur est violette.", "Bu çiçek mor."],
    ["marron", "kahverengi", "A1", "marron", "J'ai des chaussures marron.", "Kahverengi ayakkabılarım var.", "Değişmez: dişil ve çoğulda aynı kalır."],
    ["beige", "bej", "A2", "", "Son manteau est beige.", "Paltosu bej."],
    ["clair", "açık (renk), net", "A2", "", "Ma chambre est très claire.", "Odam çok aydınlık."],
    ["foncé", "koyu (renk)", "A2", "", "Il porte un pantalon bleu foncé.", "Koyu mavi pantolon giyiyor."],
    ["rond", "yuvarlak", "A2", "", "La table est ronde.", "Masa yuvarlak."],
    ["carré", "kare", "A2", "", "Cette boîte est carrée.", "Bu kutu kare."]
]);
SEED.addThemed("colors", "nouns", [
    ["le cercle", "daire", "A2", "", "Dessine un cercle sur la feuille.", "Kâğıda bir daire çiz."],
    ["le triangle", "üçgen", "A2", "", "Ce panneau a la forme d'un triangle.", "Bu tabela üçgen şeklinde."],
    ["la forme", "şekil, form", "A2", "", "Quelle est la forme de cette boîte ?", "Bu kutunun şekli ne?"]
]);

SEED.addThemed("countries", "nouns", [
    ["l'Allemagne", "Almanya", "A1", "allemagne", "Mon oncle travaille en Allemagne.", "Amcam Almanya'da çalışıyor.", "Dişil ülke: en Allemagne"],
    ["l'Angleterre", "İngiltere", "A1", "angleterre", "Je vais en Angleterre cet été.", "Bu yaz İngiltere'ye gidiyorum.", "Dişil ülke: en Angleterre"],
    ["l'Espagne", "İspanya", "A1", "espagne", "Nous partons en Espagne.", "İspanya'ya gidiyoruz.", "Dişil ülke: en Espagne"],
    ["l'Italie", "İtalya", "A1", "italie", "J'aime beaucoup l'Italie.", "İtalya'yı çok severim.", "Dişil ülke: en Italie"],
    ["la Belgique", "Belçika", "A1", "belgique", "Bruxelles est en Belgique.", "Brüksel Belçika'dadır."],
    ["la Suisse", "İsviçre", "A1", "suisse", "Genève est en Suisse.", "Cenevre İsviçre'dedir."],
    ["les États-Unis", "Amerika Birleşik Devletleri", "A1", "", "Ma cousine vit aux États-Unis.", "Kuzenim ABD'de yaşıyor.", "Çoğul: aux États-Unis."],
    ["le Canada", "Kanada", "A1", "canada", "On parle français au Canada.", "Kanada'da Fransızca konuşulur.", "Eril ülke: au Canada."],
    ["le Japon", "Japonya", "A1", "japon", "Le Japon est un beau pays.", "Japonya güzel bir ülkedir.", "Eril ülke: au Japon."],
    ["la Chine", "Çin", "A1", "chine", "La Chine est très grande.", "Çin çok büyüktür."],
    ["l'Europe", "Avrupa", "A1", "europe", "La France est en Europe.", "Fransa Avrupa'dadır.", "Dişil kıta: en Europe"],
    ["l'Afrique", "Afrika", "A1", "afrique", "On parle français en Afrique.", "Afrika'da Fransızca konuşulur.", "Dişil kıta: en Afrique"],
    ["l'Asie", "Asya", "A1", "asie", "La Turquie est en Asie et en Europe.", "Türkiye Asya ve Avrupa'dadır.", "Dişil kıta: en Asie"],
    ["l'étranger", "yabancı, yurt dışı", "A2", "étrangère, étrangers, étrangères", "Ma sœur vit à l'étranger.", "Kız kardeşim yurt dışında yaşıyor.", "Eril: un étranger, dişil: une étrangère"],
    ["la nationalité", "uyruk", "A1", "", "Quelle est votre nationalité ?", "Uyruğunuz nedir?"],
    ["la capitale", "başkent", "A1", "", "Ankara est la capitale de la Turquie.", "Ankara Türkiye'nin başkentidir."],
    ["le drapeau", "bayrak", "A2", "", "Le drapeau français est bleu, blanc et rouge.", "Fransız bayrağı mavi, beyaz ve kırmızıdır."]
]);
SEED.addThemed("countries", "adjectives", [
    ["espagnol", "İspanyol", "A1", "", "Mon voisin est espagnol.", "Komşum İspanyol."],
    ["belge", "Belçikalı", "A1", "", "Elle est belge.", "O Belçikalı."],
    ["suisse", "İsviçreli", "A1", "", "Ce chocolat est suisse.", "Bu çikolata İsviçre malı."],
    ["américain", "Amerikalı", "A1", "", "Mon professeur est américain.", "Öğretmenim Amerikalı."],
    ["japonais", "Japon", "A1", "", "J'aime la cuisine japonaise.", "Japon mutfağını severim."],
    ["chinois", "Çinli", "A1", "", "Elle apprend le chinois.", "Çince öğreniyor."],
    ["étranger", "yabancı", "A2", "étrangère, étrangers, étrangères", "J'aime les langues étrangères.", "Yabancı dilleri severim."]
]);

SEED.addThemed("time", "nouns", [
    ["le siècle", "yüzyıl", "A2", "", "Ce château date du seizième siècle.", "Bu şato on altıncı yüzyıldan kalma."],
    ["la seconde", "saniye", "A1", "", "Attends une seconde.", "Bir saniye bekle."],
    ["le moment", "an", "A2", "", "C'est le bon moment.", "Doğru zaman bu."],
    ["le futur", "gelecek", "A2", "", "Je pense au futur.", "Geleceği düşünüyorum."],
    ["le passé", "geçmiş", "A2", "", "Il ne faut pas penser au passé.", "Geçmişi düşünmemek gerekir."],
    ["le présent", "şimdiki zaman", "A2", "", "J'aime vivre dans le présent.", "Şimdiki anı yaşamayı severim."],
    ["l'avenir", "gelecek", "B1", "", "L'avenir de nos enfants est important.", "Çocuklarımızın geleceği önemli.", "Eril: un avenir"],
    ["la date", "tarih (gün)", "A1", "", "Quelle est la date de ton anniversaire ?", "Doğum günün ne zaman?"],
    ["le calendrier", "takvim", "A2", "", "Je regarde le calendrier.", "Takvime bakıyorum."],
    ["l'époque", "dönem, çağ", "B1", "", "À cette époque, je vivais à Paris.", "O dönemde Paris'te yaşıyordum.", "Dişil: une époque"],
    ["la veille", "bir önceki gün", "B1", "", "Je suis arrivé la veille de Noël.", "Noelden bir gün önce vardım."],
    ["le lendemain", "ertesi gün", "B1", "", "Le lendemain, il est parti.", "Ertesi gün gitti."]
]);
SEED.addThemed("time", "adverbs", [
    ["autrefois", "eskiden", "B1", "", "Autrefois, cette rue était calme.", "Eskiden bu sokak sakindi."],
    ["récemment", "son zamanlarda", "B1", "", "J'ai vu ce film récemment.", "Bu filmi yakın zamanda gördüm."],
    ["longtemps", "uzun süre", "A2", "", "J'ai attendu longtemps.", "Uzun süre bekledim."],
    ["soudain", "aniden", "B1", "", "Soudain, la lumière s'éteint.", "Aniden ışık sönüyor."],
    ["actuellement", "şu anda", "B1", "", "Il travaille actuellement à Lille.", "Şu anda Lille'de çalışıyor.", "İngilizce actually gibi aslında demek değildir."],
    ["rarement", "nadiren", "A2", "", "Je vais rarement au cinéma.", "Nadiren sinemaya giderim."]
]);
SEED.addThemed("time", "expressions", [
    ["de temps en temps", "ara sıra", "A2", "", "Je vois mes cousins de temps en temps.", "Kuzenlerimi ara sıra görürüm."],
    ["tout à coup", "birdenbire", "B1", "", "Tout à coup, il a commencé à pleuvoir.", "Birdenbire yağmur başladı."]
]);

SEED.addThemed("numbers", "numbers", [
    ["dix-sept", "on yedi", "A1", "", "Mon fils a dix-sept ans.", "Oğlum on yedi yaşında."],
    ["dix-huit", "on sekiz", "A1", "", "Elle a dix-huit ans.", "O on sekiz yaşında."],
    ["dix-neuf", "on dokuz", "A1", "", "Ce livre coûte dix-neuf euros.", "Bu kitap on dokuz euro."],
    ["un million", "bir milyon", "A2", "million, millions", "Cette ville a un million d'habitants.", "Bu şehrin bir milyon sakini var.", "Ardından de gelir: un million de personnes."]
]);
SEED.addThemed("numbers", "nouns", [
    ["le nombre", "sayı, adet", "A2", "", "Le nombre d'étudiants augmente.", "Öğrenci sayısı artıyor."],
    ["le chiffre", "rakam", "A2", "", "Ce numéro a dix chiffres.", "Bu numara on rakamlı."],
    ["le kilo", "kilo", "A1", "", "Je voudrais un kilo de pommes.", "Bir kilo elma rica ediyorum."],
    ["le gramme", "gram", "A2", "", "Il faut deux cents grammes de farine.", "İki yüz gram un gerekiyor."],
    ["le litre", "litre", "A2", "", "J'achète un litre de lait.", "Bir litre süt alıyorum."],
    ["le mètre", "metre", "A2", "", "La tour Eiffel mesure trois cents mètres.", "Eyfel Kulesi üç yüz metre boyunda."],
    ["le kilomètre", "kilometre", "A2", "", "Le village est à dix kilomètres.", "Köy on kilometre uzakta."],
    ["la moitié", "yarım, yarısı", "A2", "", "Je mange la moitié du gâteau.", "Kekin yarısını yiyorum."],
    ["le quart", "çeyrek", "A1", "", "Il est trois heures et quart.", "Saat üçü çeyrek geçiyor."],
    ["la douzaine", "düzine", "A2", "", "Je voudrais une douzaine d'œufs.", "Bir düzine yumurta rica ediyorum."],
    ["la dizaine", "on kadar", "B1", "", "Il y a une dizaine de personnes.", "On kadar kişi var."],
    ["le pourcentage", "yüzde oranı", "B1", "", "Quel est le pourcentage de réussite ?", "Başarı yüzdesi nedir?"]
]);
SEED.addThemed("numbers", "adjectives", [
    ["deuxième", "ikinci", "A1", "", "C'est la deuxième rue à droite.", "Sağdan ikinci sokak."],
    ["quatrième", "dördüncü", "A1", "", "J'habite au quatrième étage.", "Dördüncü katta oturuyorum."]
]);

SEED.addThemed("society", "nouns", [
    ["le gouvernement", "hükûmet", "B1", "", "Le gouvernement prépare une nouvelle loi.", "Hükûmet yeni bir yasa hazırlıyor."],
    ["le président", "cumhurbaşkanı, başkan", "A2", "présidente, présidents, présidentes", "Le président parle à la télévision.", "Cumhurbaşkanı televizyonda konuşuyor."],
    ["le ministre", "bakan", "B1", "ministres", "Le ministre visite une école.", "Bakan bir okulu ziyaret ediyor."],
    ["la loi", "yasa, kanun", "B1", "", "Tout le monde doit respecter la loi.", "Herkes yasaya uymalıdır."],
    ["l'élection", "seçim", "B1", "", "L'élection a lieu en avril.", "Seçim nisanda yapılıyor.", "Dişil: une élection"],
    ["le vote", "oy", "B1", "", "Le vote est un droit.", "Oy vermek bir haktır."],
    ["le citoyen", "vatandaş", "B1", "citoyenne, citoyens, citoyennes", "Chaque citoyen peut voter.", "Her vatandaş oy kullanabilir."],
    ["la politique", "siyaset", "A2", "", "Mon père parle souvent de la politique.", "Babam sık sık siyasetten bahseder."],
    ["la démocratie", "demokrasi", "B1", "", "La démocratie protège nos droits.", "Demokrasi haklarımızı korur."],
    ["la liberté", "özgürlük", "A2", "", "La liberté est très importante.", "Özgürlük çok önemlidir."],
    ["l'égalité", "eşitlik", "B1", "", "Nous défendons l'égalité.", "Eşitliği savunuyoruz.", "Dişil: une égalité"],
    ["la justice", "adalet", "B1", "", "Il demande la justice.", "Adalet istiyor."],
    ["le droit", "hak, hukuk", "B1", "", "Elle étudie le droit à Paris.", "Paris'te hukuk okuyor."],
    ["le tribunal", "mahkeme", "B1", "", "Le tribunal est à côté de la mairie.", "Mahkeme belediyenin yanında."],
    ["le crime", "suç, cinayet", "B1", "", "La police cherche l'auteur du crime.", "Polis suçun failini arıyor."],
    ["le voleur", "hırsız", "B1", "voleuse, voleurs, voleuses", "Le voleur a pris mon portefeuille.", "Hırsız cüzdanımı aldı."],
    ["la police", "polis", "A1", "", "J'appelle la police.", "Polisi arıyorum."],
    ["la guerre", "savaş", "A2", "", "La guerre est une chose terrible.", "Savaş korkunç bir şeydir."],
    ["la paix", "barış", "A2", "", "Nous voulons vivre en paix.", "Barış içinde yaşamak istiyoruz."],
    ["la pauvreté", "yoksulluk", "B1", "", "La pauvreté reste un grave problème.", "Yoksulluk ciddi bir sorun olmaya devam ediyor."],
    ["la société", "toplum, şirket", "B1", "", "La société change vite.", "Toplum hızla değişiyor."],
    ["l'environnement", "çevre", "A2", "", "Il faut protéger l'environnement.", "Çevreyi korumak gerekiyor.", "Eril: un environnement"],
    ["la pollution", "kirlilik", "A2", "", "La pollution est un problème dans les grandes villes.", "Kirlilik büyük şehirlerde bir sorundur."],
    ["le déchet", "atık, çöp", "B1", "", "Ce déchet va dans la poubelle jaune.", "Bu atık sarı çöp kutusuna gider."],
    ["le recyclage", "geri dönüşüm", "B1", "", "Le recyclage est important pour la planète.", "Geri dönüşüm gezegen için önemlidir."],
    ["l'énergie", "enerji", "B1", "", "Le soleil donne de l'énergie.", "Güneş enerji verir.", "Dişil: une énergie"],
    ["la planète", "gezegen", "A2", "", "Notre planète est en danger.", "Gezegenimiz tehlikede."],
    ["le danger", "tehlike", "A2", "", "Attention, danger !", "Dikkat, tehlike!"],
    ["l'association", "dernek", "B1", "", "Je travaille pour une association.", "Bir dernek için çalışıyorum.", "Dişil: une association"],
    ["la manifestation", "gösteri, yürüyüş", "B1", "", "La manifestation commence à midi.", "Gösteri öğlen başlıyor."],
    ["la grève", "grev", "B1", "", "Les conducteurs de train sont en grève.", "Tren makinistleri grevde."],
    ["l'impôt", "vergi", "B1", "", "Je paie mes impôts en septembre.", "Vergilerimi eylülde öderim.", "Eril: un impôt"],
    ["l'armée", "ordu", "B1", "", "Son frère est dans l'armée.", "Erkek kardeşi orduda.", "Dişil: une armée"]
]);
SEED.addThemed("society", "verbs", [
    ["voter", "oy vermek", "B1", "", "Je vote dimanche.", "Pazar günü oy veriyorum."],
    ["protéger", "korumak", "A2", "protège, protèges, protège, protégeons, protégez, protègent, protégé, fut=protéger", "Nous devons protéger la nature.", "Doğayı korumalıyız."],
    ["recycler", "geri dönüştürmek", "B1", "", "Je recycle le papier et le verre.", "Kâğıdı ve camı geri dönüştürüyorum."],
    ["polluer", "kirletmek", "B1", "", "Les voitures polluent les villes.", "Arabalar şehirleri kirletiyor."],
    ["voler", "uçmak, çalmak", "A2", "", "Un oiseau vole dans le ciel.", "Gökyüzünde bir kuş uçuyor.", "İkinci anlamı: On m'a volé mon sac."],
    ["respecter", "saygı göstermek, uymak", "A2", "", "Il faut respecter les autres.", "Başkalarına saygı göstermek gerekir."],
    ["défendre", "savunmak", "B1", "défends, défends, défend, défendons, défendez, défendent, défendu", "Cet avocat défend ses clients.", "Bu avukat müvekkillerini savunuyor."],
    ["augmenter", "artmak, artırmak", "B1", "", "Les prix augmentent chaque année.", "Fiyatlar her yıl artıyor."],
    ["diminuer", "azalmak, azaltmak", "B1", "", "Le chômage diminue.", "İşsizlik azalıyor."]
]);
SEED.addThemed("society", "adjectives", [
    ["politique", "siyasi", "B1", "", "Il a un rôle politique.", "Siyasi bir rolü var."],
    ["social", "sosyal, toplumsal", "B1", "", "C'est un problème social.", "Bu toplumsal bir sorun."],
    ["public", "kamuya ait", "B1", "publique, publics, publiques", "Elle travaille dans un service public.", "Kamu hizmetinde çalışıyor."],
    ["écologique", "çevreci", "B1", "", "Le vélo est un transport écologique.", "Bisiklet çevreci bir ulaşım aracıdır."],
    ["international", "uluslararası", "B1", "", "C'est une école internationale.", "Bu uluslararası bir okul."]
]);

SEED.addThemed("arts", "nouns", [
    ["l'art", "sanat", "A2", "", "J'aime l'art moderne.", "Modern sanatı severim.", "Eril: un art"],
    ["l'artiste", "sanatçı", "A2", "artistes", "Cet artiste est très connu.", "Bu sanatçı çok tanınıyor.", "Eril ve dişil: un artiste, une artiste"],
    ["le peintre", "ressam", "A2", "", "Monet est un peintre français.", "Monet Fransız bir ressamdır."],
    ["la peinture", "resim, boya", "A2", "", "Elle fait de la peinture le week-end.", "Hafta sonları resim yapıyor."],
    ["la sculpture", "heykel", "B1", "", "Cette sculpture est au Louvre.", "Bu heykel Louvre'da."],
    ["le roman", "roman", "A2", "", "Je lis un roman de Victor Hugo.", "Victor Hugo'nun bir romanını okuyorum."],
    ["le poème", "şiir", "A2", "", "Elle écrit un poème.", "Bir şiir yazıyor."],
    ["le poète", "şair", "B1", "", "Baudelaire est un grand poète.", "Baudelaire büyük bir şairdir."],
    ["l'écrivain", "yazar", "A2", "", "Cet écrivain vit à Paris.", "Bu yazar Paris'te yaşıyor.", "Eril: un écrivain"],
    ["l'auteur", "yazar, yapıt sahibi", "B1", "", "Qui est l'auteur de ce livre ?", "Bu kitabın yazarı kim?", "Eril: un auteur"],
    ["le théâtre", "tiyatro", "A1", "", "Nous allons au théâtre ce soir.", "Bu akşam tiyatroya gidiyoruz."],
    ["la pièce", "oda, oyun, bozuk para", "A2", "", "Cette pièce de théâtre est très drôle.", "Bu tiyatro oyunu çok komik."],
    ["l'acteur", "aktör", "A2", "actrice, acteurs, actrices", "Cet acteur joue très bien.", "Bu aktör çok iyi oynuyor.", "Eril: un acteur, dişil: une actrice"],
    ["le chanteur", "şarkıcı", "A2", "chanteuse, chanteurs, chanteuses", "Ce chanteur est très populaire.", "Bu şarkıcı çok popüler."],
    ["le concert", "konser", "A1", "", "Le concert commence à vingt heures.", "Konser saat yirmide başlıyor."],
    ["l'exposition", "sergi", "A2", "", "Nous visitons une exposition de photos.", "Bir fotoğraf sergisi geziyoruz.", "Dişil: une exposition"],
    ["la scène", "sahne", "B1", "", "Le chanteur arrive sur la scène.", "Şarkıcı sahneye çıkıyor."],
    ["le spectacle", "gösteri", "A2", "", "Le spectacle commence bientôt.", "Gösteri birazdan başlıyor."],
    ["le personnage", "karakter (roman, film)", "B1", "", "Ce personnage est très drôle.", "Bu karakter çok komik."],
    ["la bande dessinée", "çizgi roman", "A2", "bandes dessinées", "Mon fils lit une bande dessinée.", "Oğlum çizgi roman okuyor.", "Konuşma dilinde: la BD."],
    ["la tradition", "gelenek", "B1", "", "Cette tradition est très ancienne.", "Bu gelenek çok eski."],
    ["la culture", "kültür", "A2", "", "J'aime la culture française.", "Fransız kültürünü severim."]
]);
SEED.addThemed("arts", "verbs", [
    ["dessiner", "resim çizmek", "A2", "", "Ma fille dessine un chat.", "Kızım bir kedi çiziyor."],
    ["peindre", "boyamak, resim yapmak", "B1", "peins, peins, peint, peignons, peignez, peignent, peint", "Il peint un paysage.", "Bir manzara resmi yapıyor."],
    ["créer", "yaratmak", "B1", "", "Cet artiste crée de belles sculptures.", "Bu sanatçı güzel heykeller yaratıyor."],
    ["applaudir", "alkışlamak", "B1", "", "Le public applaudit le chanteur.", "Seyirci şarkıcıyı alkışlıyor."]
]);

SEED.addThemed("opinions", "nouns", [
    ["l'avis", "görüş, fikir", "A2", "", "Quel est ton avis ?", "Fikrin nedir?", "Eril: un avis"],
    ["l'opinion", "kanaat, görüş", "B1", "", "Je respecte ton opinion.", "Görüşüne saygı duyuyorum.", "Dişil: une opinion"],
    ["l'argument", "argüman, kanıt", "B1", "", "Cet argument n'est pas sérieux.", "Bu argüman ciddi değil.", "Eril: un argument"],
    ["la raison", "neden, akıl", "A2", "", "Quelle est la raison de ton retard ?", "Gecikmenin nedeni ne?"],
    ["le point de vue", "bakış açısı", "B1", "", "Je comprends ton point de vue.", "Bakış açını anlıyorum."],
    ["l'exemple", "örnek", "A2", "", "Donne-moi un exemple.", "Bana bir örnek ver.", "Eril: un exemple"],
    ["la solution", "çözüm", "A2", "", "Il y a toujours une solution.", "Her zaman bir çözüm vardır."],
    ["la cause", "neden, sebep", "B1", "", "Quelle est la cause de ce problème ?", "Bu sorunun nedeni ne?"],
    ["la conséquence", "sonuç", "B1", "", "Cette décision a une conséquence grave.", "Bu kararın ciddi bir sonucu var."],
    ["le résultat", "sonuç", "A2", "", "Je connais le résultat de l'examen.", "Sınavın sonucunu biliyorum."],
    ["l'avantage", "avantaj", "B1", "", "Quel est l'avantage de ce travail ?", "Bu işin avantajı nedir?", "Eril: un avantage"],
    ["l'inconvénient", "dezavantaj", "B1", "", "Le seul inconvénient est le prix.", "Tek dezavantajı fiyatı.", "Eril: un inconvénient"],
    ["la différence", "fark", "A2", "", "Quelle est la différence entre ces deux mots ?", "Bu iki kelime arasındaki fark ne?"],
    ["le choix", "seçim, tercih", "A2", "", "C'est un bon choix.", "Bu iyi bir tercih."],
    ["la décision", "karar", "A2", "", "J'ai pris une décision.", "Bir karar verdim."],
    ["l'erreur", "hata", "A2", "", "J'ai fait une erreur.", "Bir hata yaptım.", "Dişil: une erreur"]
]);
SEED.addThemed("opinions", "verbs", [
    ["discuter", "tartışmak, konuşmak", "A2", "", "Nous discutons de ce projet.", "Bu projeyi tartışıyoruz."],
    ["décider", "karar vermek", "A2", "", "Je décide de partir.", "Gitmeye karar veriyorum."],
    ["proposer", "önermek", "A2", "", "Je propose un café.", "Bir kahve öneriyorum."],
    ["accepter", "kabul etmek", "A2", "", "J'accepte votre invitation.", "Davetinizi kabul ediyorum."],
    ["refuser", "reddetmek", "A2", "", "Il refuse de répondre.", "Cevap vermeyi reddediyor."],
    ["convaincre", "ikna etmek", "B1", "convaincs, convaincs, convainc, convainquons, convainquez, convainquent, convaincu", "Tu ne peux pas me convaincre.", "Beni ikna edemezsin."],
    ["critiquer", "eleştirmek", "B1", "", "Il critique toujours les autres.", "Hep başkalarını eleştirir."],
    ["douter", "şüphe etmek", "B1", "", "Je doute de cette information.", "Bu bilgiden şüphe ediyorum."],
    ["prouver", "kanıtlamak", "B1", "", "Tu dois prouver ce que tu dis.", "Söylediğini kanıtlamalısın."],
    ["comparer", "karşılaştırmak", "A2", "", "Je compare les prix.", "Fiyatları karşılaştırıyorum."]
]);
SEED.addThemed("opinions", "pronominal", [
    ["se tromper", "yanılmak", "A2", "", "Tu te trompes.", "Yanılıyorsun."],
    ["se souvenir", "hatırlamak", "A2", "souviens, souviens, souvient, souvenons, souvenez, souviennent, souvenu, fut=souviendr", "Je me souviens de cette histoire.", "Bu hikâyeyi hatırlıyorum.", "de ile kullanılır: se souvenir de."],
    ["s'intéresser", "ilgilenmek", "B1", "", "Je m'intéresse à la politique.", "Siyasetle ilgileniyorum.", "à ile kullanılır: s'intéresser à."],
    ["s'occuper", "ilgilenmek, bakmak", "B1", "", "Elle s'occupe de ses parents.", "Annesi ve babasıyla ilgileniyor.", "de ile kullanılır: s'occuper de."]
]);
SEED.addThemed("opinions", "conjunctions", [
    ["cependant", "bununla birlikte", "B1", "", "Il est riche ; cependant, il n'est pas heureux.", "Zengin; bununla birlikte mutlu değil."],
    ["pourtant", "oysa, yine de", "B1", "", "Il a mal au pied, pourtant il court.", "Ayağı ağrıyor, yine de koşuyor."],
    ["puisque", "madem, -dığına göre", "B1", "puisqu'", "Puisque tu es là, tu peux m'aider.", "Madem buradasın, bana yardım edebilirsin."],
    ["lorsque", "-dığı zaman", "B1", "lorsqu'", "Lorsque je suis fatigué, je dors.", "Yorgun olduğumda uyurum."],
    ["bien que", "-mesine rağmen", "B1", "bien qu'", "Bien qu'il pleuve, nous sortons.", "Yağmur yağmasına rağmen çıkıyoruz.", "Ardından subjonctif gelir."],
    ["tandis que", "oysa, -iken", "B1", "tandis qu'", "Il aime la mer, tandis que j'aime la montagne.", "O denizi sever, oysa ben dağı severim."],
    ["sinon", "yoksa, aksi halde", "A2", "", "Dépêche-toi, sinon nous allons rater le train.", "Acele et, yoksa treni kaçıracağız."]
]);
SEED.addThemed("opinions", "adverbs", [
    ["surtout", "özellikle", "A2", "", "J'aime surtout le chocolat noir.", "Özellikle bitter çikolatayı severim."],
    ["plutôt", "daha çok, oldukça", "A2", "", "Je préfère plutôt le thé.", "Daha çok çay tercih ederim."],
    ["presque", "neredeyse", "A2", "", "Il est presque midi.", "Saat neredeyse on iki."],
    ["seulement", "yalnızca", "A2", "", "J'ai seulement dix euros.", "Yalnızca on eurom var."],
    ["environ", "yaklaşık", "A2", "", "Il y a environ cent personnes.", "Yaklaşık yüz kişi var."],
    ["heureusement", "neyse ki", "A2", "", "Heureusement, tu es là.", "Neyse ki buradasın."],
    ["malheureusement", "ne yazık ki", "A2", "", "Malheureusement, je ne peux pas venir.", "Ne yazık ki gelemem."]
]);
SEED.addThemed("opinions", "prepositions", [
    ["malgré", "-e rağmen", "B1", "", "Nous sortons malgré la pluie.", "Yağmura rağmen çıkıyoruz."],
    ["selon", "-e göre", "B1", "", "Selon moi, c'est une erreur.", "Bana göre bu bir hata."],
    ["grâce à", "sayesinde", "B1", "", "J'ai réussi grâce à toi.", "Senin sayende başardım.", "Olumlu durumlar için; olumsuzda à cause de."],
    ["afin de", "-mek için", "B1", "afin d'", "Je travaille afin de payer mes études.", "Okul masraflarımı ödemek için çalışıyorum."],
    ["sauf", "hariç", "A2", "", "Je mange tout sauf le poisson.", "Balık hariç her şeyi yerim."]
]);
SEED.addThemed("opinions", "expressions", [
    ["à mon avis", "bence", "A2", "", "À mon avis, ce film est trop long.", "Bence bu film fazla uzun."],
    ["par exemple", "örneğin", "A2", "", "J'aime les fruits, par exemple les fraises.", "Meyveleri severim, örneğin çileği."],
    ["c'est-à-dire", "yani", "A2", "", "Il arrive bientôt, c'est-à-dire à midi.", "Yakında geliyor, yani öğlen."],
    ["au contraire", "tam tersine", "B1", "", "Il n'est pas triste, au contraire !", "Üzgün değil, tam tersine!"],
    ["d'ailleurs", "zaten, üstelik", "B1", "", "Il est très gentil ; d'ailleurs, tout le monde l'aime.", "Çok kibar; zaten herkes onu sever."],
    ["de plus", "üstelik", "B1", "", "Il fait froid ; de plus, il pleut.", "Hava soğuk; üstelik yağmur yağıyor."],
    ["en effet", "gerçekten de", "B1", "", "Elle est en effet très malade.", "Gerçekten de çok hasta."],
    ["en fait", "aslında", "A2", "", "En fait, je ne suis pas d'accord.", "Aslında katılmıyorum."]
]);

SEED.addThemed("emergency", "nouns", [
    ["l'accident", "kaza", "A2", "", "Il y a eu un accident sur la route.", "Yolda bir kaza oldu.", "Eril: un accident"],
    ["l'urgence", "acil durum", "B1", "", "En cas d'urgence, appelez le 112.", "Acil durumda 112'yi arayın.", "Dişil: une urgence"],
    ["l'incendie", "yangın", "B1", "", "Les pompiers éteignent l'incendie.", "İtfaiyeciler yangını söndürüyor.", "Eril: un incendie"],
    ["la sécurité", "güvenlik", "A2", "", "La sécurité des enfants est importante.", "Çocukların güvenliği önemli."],
    ["la victime", "kurban, kazazede", "B1", "", "La victime est à l'hôpital.", "Kazazede hastanede.", "Erkek için de dişil kalır: il est la victime."],
    ["le témoin", "tanık", "B1", "", "Le témoin parle à la police.", "Tanık polisle konuşuyor."],
    ["les secours", "kurtarma ekibi", "B1", "", "Les secours arrivent rapidement.", "Kurtarma ekibi hızla geliyor."],
    ["la plainte", "şikâyet (resmi)", "B1", "", "Il a déposé une plainte au commissariat.", "Karakola şikâyette bulundu."],
    ["la sirène", "siren", "B1", "", "J'entends la sirène de l'ambulance.", "Ambulansın sirenini duyuyorum."],
    ["le casque", "kask", "A2", "", "Mets ton casque pour faire du vélo.", "Bisiklete binmek için kaskını tak."],
    ["l'extincteur", "yangın söndürücü", "B1", "", "L'extincteur est près de la porte.", "Yangın söndürücü kapının yanında.", "Eril: un extincteur"],
    ["la sortie de secours", "acil çıkış", "B1", "", "La sortie de secours est au fond du couloir.", "Acil çıkış koridorun sonunda."]
]);
SEED.addThemed("emergency", "verbs", [
    ["sauver", "kurtarmak", "A2", "", "Le pompier a sauvé le chat.", "İtfaiyeci kediyi kurtardı."],
    ["crier", "bağırmak", "A2", "", "Ne crie pas, je t'entends.", "Bağırma, seni duyuyorum."],
    ["disparaître", "kaybolmak", "B1", "disparais, disparais, disparaît, disparaissons, disparaissez, disparaissent, disparu, fut=disparaîtr", "Mon portefeuille a disparu.", "Cüzdanım kayboldu."]
]);
SEED.addThemed("emergency", "verbal", [
    ["porter plainte", "şikâyette bulunmak", "B1", "", "Je vais porter plainte contre lui.", "Ondan şikâyetçi olacağım."],
    ["appeler à l'aide", "yardım çağırmak", "A2", "", "Elle a appelé à l'aide.", "Yardım çağırdı."]
]);
SEED.addThemed("emergency", "expressions", [
    ["au secours", "imdat", "A1", "", "Au secours ! Aidez-moi !", "İmdat! Yardım edin!"],
    ["au feu", "yangın var", "A2", "", "Au feu ! Sortez vite !", "Yangın var! Çabuk çıkın!"],
    ["en cas de", "... durumunda", "B1", "en cas d'", "En cas de problème, appelez-moi.", "Sorun olursa beni arayın."]
]);

SEED.addThemed("admin", "nouns", [
    ["le formulaire", "form", "A2", "", "Remplissez ce formulaire, s'il vous plaît.", "Lütfen bu formu doldurun."],
    ["la demande", "başvuru, talep", "A2", "", "J'ai fait une demande de visa.", "Vize başvurusu yaptım."],
    ["le document", "belge", "A2", "", "Il faut apporter tous les documents.", "Bütün belgeleri getirmek gerekiyor."],
    ["la photocopie", "fotokopi", "A2", "", "Donnez-moi une photocopie de votre passeport.", "Bana pasaportunuzun bir fotokopisini verin."],
    ["la signature", "imza", "A2", "", "Il manque votre signature.", "İmzanız eksik."],
    ["l'inscription", "kayıt", "A2", "", "L'inscription à l'université commence en juillet.", "Üniversite kaydı temmuzda başlıyor.", "Dişil: une inscription"],
    ["l'ambassade", "büyükelçilik", "A2", "", "Je dois aller à l'ambassade de France.", "Fransa Büyükelçiliği'ne gitmem gerekiyor.", "Dişil: une ambassade"],
    ["le consulat", "konsolosluk", "B1", "", "Le consulat est fermé le dimanche.", "Konsolosluk pazar günü kapalı."],
    ["la préfecture", "valilik", "B1", "", "Je prends rendez-vous à la préfecture.", "Valilikten randevu alıyorum."],
    ["le titre de séjour", "oturma izni", "B1", "", "Mon titre de séjour est valable un an.", "Oturma iznim bir yıl geçerli."],
    ["l'attestation", "belge, onay yazısı", "B1", "", "J'ai besoin d'une attestation de travail.", "Bir çalışma belgesine ihtiyacım var.", "Dişil: une attestation"],
    ["le justificatif de domicile", "ikametgâh belgesi", "B1", "", "Une facture peut servir de justificatif de domicile.", "Bir fatura ikametgâh belgesi olarak kullanılabilir."],
    ["le délai", "süre, mühlet", "B1", "", "Le délai est de deux semaines.", "Süre iki hafta."],
    ["le tampon", "mühür, damga", "B1", "", "Il faut un tampon sur ce papier.", "Bu kâğıda bir mühür gerekiyor."]
]);
SEED.addThemed("admin", "verbs", [
    ["remplir", "doldurmak", "A2", "", "Je remplis le formulaire.", "Formu dolduruyorum."],
    ["renouveler", "yenilemek", "B1", "renouvelle, renouvelles, renouvelle, renouvelons, renouvelez, renouvellent, renouvelé, fut=renouveller", "Je dois renouveler mon passeport.", "Pasaportumu yenilemem gerekiyor."]
]);
SEED.addThemed("admin", "pronominal", [
    ["s'inscrire", "kaydolmak", "A2", "inscris, inscris, inscrit, inscrivons, inscrivez, inscrivent, inscrit, fut=inscrir", "Je m'inscris à un cours de français.", "Bir Fransızca kursuna kaydoluyorum."]
]);
SEED.addThemed("admin", "adjectives", [
    ["obligatoire", "zorunlu", "A2", "", "Le passeport est obligatoire.", "Pasaport zorunlu."],
    ["valable", "geçerli", "B1", "", "Ce billet n'est plus valable.", "Bu bilet artık geçerli değil."]
]);
SEED.addThemed("admin", "verbal", [
    ["faire la queue", "sıra beklemek", "A2", "", "Nous faisons la queue devant le guichet.", "Gişenin önünde sıra bekliyoruz."]
]);

SEED.addThemed("celebrations", "nouns", [
    ["Pâques", "Paskalya", "A2", "", "Nous partons en vacances à Pâques.", "Paskalya'da tatile gidiyoruz.", "Artikelsiz kullanılır."],
    ["le Nouvel An", "yılbaşı", "A1", "", "Nous fêtons le Nouvel An chez des amis.", "Yılbaşını arkadaşlarda kutluyoruz."],
    ["le réveillon", "yılbaşı / Noel gecesi yemeği", "B1", "", "Le réveillon commence à neuf heures.", "Yılbaşı yemeği saat dokuzda başlıyor."],
    ["le ramadan", "ramazan", "A2", "", "Pendant le ramadan, ils mangent après le coucher du soleil.", "Ramazanda güneş battıktan sonra yemek yerler."],
    ["la fête du Sacrifice", "Kurban Bayramı", "B1", "", "Pour la fête du Sacrifice, toute la famille se réunit.", "Kurban Bayramı'nda bütün aile bir araya gelir."],
    ["le jour férié", "resmî tatil günü", "B1", "jours fériés", "Le premier mai est un jour férié.", "Bir mayıs resmî tatil günüdür."],
    ["l'invité", "davetli, misafir", "A2", "", "Les invités arrivent à huit heures.", "Davetliler saat sekizde geliyor.", "Eril: un invité; dişil: une invitée"],
    ["l'invitation", "davet", "A2", "", "Merci pour l'invitation !", "Davet için teşekkürler!", "Dişil: une invitation"],
    ["la bougie", "mum", "A2", "", "Il y a dix bougies sur le gâteau.", "Pastanın üzerinde on mum var."],
    ["la cérémonie", "tören", "B1", "", "La cérémonie a lieu à la mairie.", "Tören belediyede yapılıyor."],
    ["le bouquet", "buket", "A2", "", "Il offre un bouquet de fleurs à sa mère.", "Annesine bir buket çiçek veriyor."]
]);
SEED.addThemed("celebrations", "verbs", [
    ["inviter", "davet etmek", "A1", "", "J'invite mes amis à dîner.", "Arkadaşlarımı akşam yemeğine davet ediyorum."],
    ["fêter", "kutlamak", "A2", "", "Nous fêtons son anniversaire samedi.", "Doğum gününü cumartesi kutluyoruz."],
    ["souhaiter", "dilemek", "A2", "", "Je te souhaite une bonne année.", "Sana mutlu yıllar dilerim."],
    ["célébrer", "kutlamak (resmî)", "B1", "célèbre, célèbres, célèbre, célébrons, célébrez, célèbrent, célébré", "La ville célèbre la fête nationale.", "Şehir ulusal bayramı kutluyor."]
]);
SEED.addThemed("celebrations", "expressions", [
    ["bonne année", "mutlu yıllar", "A1", "", "Bonne année et bonne santé !", "Mutlu yıllar, sağlıklı bir yıl!"],
    ["joyeux anniversaire", "doğum günün kutlu olsun", "A1", "", "Joyeux anniversaire, Marie !", "Doğum günün kutlu olsun, Marie!"],
    ["joyeux Noël", "mutlu Noeller", "A1", "", "Joyeux Noël à toute la famille !", "Bütün aileye mutlu Noeller!"],
    ["bonne fête", "bayramın kutlu olsun; iyi eğlenceler", "A2", "", "Bonne fête, maman !", "Anneler Günün kutlu olsun anne!"],
    ["à votre santé", "şerefe", "A2", "", "À votre santé !", "Şerefe!", "Arkadaşlar arasında: à ta santé, ya da kısaca santé."]
]);

SEED.addThemed("materials", "nouns", [
    ["le papier", "kâğıt", "A1", "", "Tu as une feuille de papier ?", "Bir kâğıdın var mı?"],
    ["la boîte", "kutu", "A1", "", "Les biscuits sont dans la boîte.", "Bisküviler kutunun içinde."],
    ["l'objet", "nesne, eşya", "A2", "", "J'ai perdu un objet dans le train.", "Trende bir eşya kaybettim.", "Eril: un objet"],
    ["le bois", "tahta, odun", "A2", "", "Cette table est en bois.", "Bu masa tahtadan.", "Malzeme en ile söylenir: en bois, en métal."],
    ["le plastique", "plastik", "A2", "", "Cette bouteille est en plastique.", "Bu şişe plastik."],
    ["le métal", "metal", "B1", "métaux", "La porte est en métal.", "Kapı metalden."],
    ["le fer", "demir", "B1", "", "Ce pont est en fer.", "Bu köprü demirden."],
    ["l'or", "altın", "A2", "", "Elle porte une bague en or.", "Altın bir yüzük takıyor.", "Eril: l'or est cher."],
    ["le coton", "pamuk", "A2", "", "J'aime les chemises en coton.", "Pamuklu gömlekleri severim."],
    ["la laine", "yün", "B1", "", "Ce pull en laine est chaud.", "Bu yün kazak sıcak tutuyor."],
    ["la soie", "ipek", "B1", "", "Elle a une robe en soie.", "İpek bir elbisesi var."],
    ["le tissu", "kumaş", "B1", "", "Ce tissu vient d'Inde.", "Bu kumaş Hindistan'dan geliyor."],
    ["le carton", "karton", "B1", "", "Nous mettons les livres dans des cartons.", "Kitapları kolilere koyuyoruz."],
    ["la brique", "tuğla", "B1", "", "La maison est en brique.", "Ev tuğladan."],
    ["l'outil", "alet", "B1", "", "Les outils sont dans le garage.", "Aletler garajda.", "Eril: un outil"],
    ["le marteau", "çekiç", "B1", "", "J'ai besoin d'un marteau.", "Bir çekice ihtiyacım var."],
    ["les ciseaux", "makas", "A2", "", "Tu peux me passer les ciseaux ?", "Makası bana verebilir misin?", "Her zaman çoğuldur."],
    ["la colle", "yapıştırıcı", "B1", "", "Il n'y a plus de colle.", "Yapıştırıcı kalmadı."],
    ["la pile", "pil", "B1", "", "La télécommande n'a plus de pile.", "Kumandanın pili bitti."],
    ["l'ampoule", "ampul", "B1", "", "Il faut changer l'ampoule.", "Ampulü değiştirmek gerekiyor.", "Dişil: une ampoule"]
]);
SEED.addThemed("materials", "verbs", [
    ["construire", "inşa etmek", "A2", "construis, construis, construit, construisons, construisez, construisent, construit", "Ils construisent une maison.", "Bir ev inşa ediyorlar."],
    ["casser", "kırmak", "A2", "", "J'ai cassé un verre.", "Bir bardak kırdım."],
    ["coller", "yapıştırmak", "B1", "", "Je colle une photo dans mon cahier.", "Defterime bir fotoğraf yapıştırıyorum."],
    ["plier", "katlamak", "B1", "", "Elle plie ses vêtements.", "Giysilerini katlıyor."]
]);
/* More pronominal verbs, each under the theme it belongs to. */
SEED.addThemed("daily", "pronominal", [
    ["se coiffer", "saçını taramak", "A2", "", "Elle se coiffe devant le miroir.", "Aynanın önünde saçını tarıyor."],
    ["se déshabiller", "soyunmak", "A2", "", "Les enfants se déshabillent avant le bain.", "Çocuklar banyodan önce soyunuyor."],
    ["s'endormir", "uykuya dalmak", "A2", "endors, endors, endort, endormons, endormez, endorment, endormi", "Je m'endors toujours devant la télé.", "Hep televizyonun önünde uyuyakalırım."],
    ["se sécher", "kurulanmak", "B1", "sèche, sèches, sèche, séchons, séchez, sèchent, séché", "Je me sèche les cheveux.", "Saçlarımı kurutuyorum."],
    ["s'arrêter", "durmak", "A2", "", "Le bus s'arrête devant l'école.", "Otobüs okulun önünde duruyor."]
]);
SEED.addThemed("leisure", "pronominal", [
    ["se baigner", "denize / suya girmek", "A2", "", "En été, nous nous baignons dans la mer.", "Yazın denize gireriz."],
    ["s'entraîner", "antrenman yapmak", "B1", "", "Il s'entraîne trois fois par semaine.", "Haftada üç kez antrenman yapıyor."]
]);
SEED.addThemed("family", "pronominal", [
    ["se rencontrer", "tanışmak, karşılaşmak", "A2", "", "Mes parents se sont rencontrés à Paris.", "Annemle babam Paris'te tanıştı."],
    ["s'aimer", "birbirini sevmek", "A2", "", "Ils s'aiment beaucoup.", "Birbirlerini çok seviyorlar."],
    ["se téléphoner", "telefonlaşmak", "A2", "", "Nous nous téléphonons chaque dimanche.", "Her pazar telefonlaşırız."],
    ["se séparer", "ayrılmak", "B1", "", "Ils se sont séparés l'année dernière.", "Geçen yıl ayrıldılar."]
]);
SEED.addThemed("travel", "pronominal", [
    ["se garer", "park etmek", "A2", "", "Je me gare devant la maison.", "Evin önüne park ediyorum."],
    ["se perdre", "kaybolmak (yolunu)", "A2", "perds, perds, perd, perdons, perdez, perdent, perdu", "Je me perds souvent dans cette ville.", "Bu şehirde sık sık kayboluyorum."]
]);
SEED.addThemed("feelings", "pronominal", [
    ["se calmer", "sakinleşmek", "A2", "", "Calme-toi, ce n'est pas grave.", "Sakin ol, önemli değil."],
    ["s'excuser", "özür dilemek", "A2", "", "Je m'excuse pour mon retard.", "Geç kaldığım için özür dilerim."],
    ["s'énerver", "sinirlenmek", "B1", "", "Ne t'énerve pas !", "Sinirlenme!"],
    ["se plaindre", "şikâyet etmek", "B1", "plains, plains, plaint, plaignons, plaignez, plaignent, plaint", "Il se plaint toujours du bruit.", "Hep gürültüden şikâyet ediyor.", "de ile kullanılır: se plaindre de."],
    ["se moquer", "alay etmek", "B1", "", "Ne te moque pas de lui.", "Onunla alay etme.", "de ile kullanılır: se moquer de."]
]);
SEED.addThemed("opinions", "pronominal", [
    ["se demander", "merak etmek, kendine sormak", "B1", "", "Je me demande s'il va venir.", "Gelecek mi diye merak ediyorum."],
    ["se rendre compte", "farkına varmak", "B1", "", "Je me rends compte que c'est difficile.", "Bunun zor olduğunun farkındayım."],
    ["se rappeler", "hatırlamak", "B1", "rappelle, rappelles, rappelle, rappelons, rappelez, rappellent, rappelé, fut=rappeller", "Tu te rappelles notre premier voyage ?", "İlk yolculuğumuzu hatırlıyor musun?", "de almaz: se rappeler quelque chose."],
    ["s'habituer", "alışmak", "B1", "", "Je m'habitue à la vie en France.", "Fransa'daki hayata alışıyorum.", "à ile kullanılır: s'habituer à."],
    ["se débrouiller", "başının çaresine bakmak", "B1", "", "Je me débrouille bien en français.", "Fransızcada idare ediyorum."]
]);
SEED.addThemed("body", "pronominal", [
    ["se faire mal", "canı yanmak, bir yerini incitmek", "A2", "", "Je me suis fait mal au genou.", "Dizimi incittim."],
    ["se casser", "kırılmak; kırmak (kendi uzvunu)", "A2", "", "Il s'est cassé la jambe au ski.", "Kayakta bacağını kırdı."]
]);
SEED.addThemed("school", "pronominal", [
    ["se taire", "susmak", "B1", "tais, tais, tait, taisons, taisez, taisent, tu, fut=tair", "Taisez-vous, s'il vous plaît.", "Lütfen susun."],
    ["se concentrer", "konsantre olmak", "B1", "", "Je n'arrive pas à me concentrer.", "Konsantre olamıyorum."]
]);
SEED.addThemed("food", "pronominal", [
    ["se servir", "kendine almak (yemek)", "B1", "sers, sers, sert, servons, servez, servent, servi", "Servez-vous, je vous en prie.", "Buyurun, alın lütfen."]
]);
SEED.addThemed("home", "pronominal", [
    ["s'installer", "yerleşmek", "B1", "", "Nous nous sommes installés à Nantes.", "Nantes'a yerleştik."]
]);
SEED.addThemed("admin", "pronominal", [
    ["se renseigner", "bilgi almak", "B1", "", "Je me renseigne à l'accueil.", "Danışmadan bilgi alıyorum."]
]);

SEED.addThemed("materials", "adjectives", [
    ["solide", "sağlam", "A2", "", "Cette chaise est très solide.", "Bu sandalye çok sağlam."],
    ["fragile", "kırılgan", "A2", "", "Attention, ce vase est fragile.", "Dikkat, bu vazo kırılgan."]
]);

/* ---------- Words used in the dialogues and chats ---------- */
SEED.addThemed("greetings", "expressions", [
    ["bravo", "bravo, aferin", "A1", "", "Bravo, tu as réussi !", "Bravo, başardın!"],
    ["ah", "ah, öyle mi", "A1", "", "Ah oui ? C'est vrai ?", "Öyle mi? Gerçekten mi?", "Şaşırma ya da anlama bildirir: ah bon ? (öyle mi?)"],
    ["un instant", "bir saniye, bir dakika", "A2", "", "Un instant, s'il vous plaît.", "Bir saniye lütfen."],
    ["bonne soirée", "iyi akşamlar (vedalaşırken)", "A1", "", "Merci et bonne soirée !", "Teşekkürler, iyi akşamlar!", "Karşılaşırken bonsoir, ayrılırken bonne soirée denir."]
]);
SEED.addThemed("description", "adjectives", [
    ["super", "süper, harika", "A1", "", "Ton idée est super !", "Fikrin harika!", "Konuşma dilinde; değişmez: des films super."],
    ["parfait", "mükemmel, harika", "A2", "", "Parfait, on part à huit heures.", "Harika, saat sekizde çıkıyoruz."],
    ["cool", "havalı, güzel", "A2", "cools", "Ton nouveau vélo est cool.", "Yeni bisikletin çok havalı.", "Konuşma dilinde; dişilde değişmez: une fille cool."]
]);
SEED.addThemed("food", "verbs", [
    ["désirer", "arzu etmek, istemek", "A2", "", "Vous désirez un dessert ?", "Tatlı arzu eder misiniz?", "Garsonların kibar sorusu: Vous désirez ? (Ne arzu edersiniz?)"],
    ["emporter", "götürmek, alıp gitmek", "A2", "", "J'emporte mon déjeuner au bureau.", "Öğle yemeğimi ofise götürüyorum."]
]);
SEED.addThemed("food", "expressions", [
    ["à emporter", "paket (götürmek için)", "A1", "", "Un café à emporter, s'il vous plaît.", "Paket bir kahve lütfen.", "Karşıtı: sur place (burada)."]
]);
SEED.addThemed("travel", "adjectives", [
    ["double", "çift, iki kişilik", "A2", "", "Je voudrais une chambre double.", "Çift kişilik bir oda istiyorum.", "Tek kişilik oda: une chambre simple."]
]);
SEED.addThemed("home", "nouns", [
    ["le rez-de-chaussée", "zemin kat", "A2", "", "La cuisine est au rez-de-chaussée.", "Mutfak zemin katta.", "Çoğulu değişmez: des rez-de-chaussée."]
]);
SEED.addThemed("tech", "nouns", [
    ["le wifi", "wifi, kablosuz internet", "A1", "", "Il y a le wifi dans l'hôtel ?", "Otelde wifi var mı?"],
    ["l'informatique", "bilişim, bilgisayar bilimi", "A2", "", "Mon frère travaille dans l'informatique.", "Erkek kardeşim bilişim sektöründe çalışıyor.", "Dişil: une informatique. Sıfat olarak da kullanılır: un ingénieur informatique."]
]);
SEED.addThemed("tech", "adjectives", [
    ["mobile", "mobil, taşınabilir", "A2", "", "J'ai téléchargé une application mobile.", "Bir mobil uygulama indirdim.", "le mobile: cep telefonu."]
]);
SEED.addThemed("body", "nouns", [
    ["la gorge", "boğaz", "A2", "", "J'ai mal à la gorge.", "Boğazım ağrıyor."],
    ["le virus", "virüs", "A2", "", "C'est un petit virus, ce n'est pas grave.", "Küçük bir virüs, ciddi değil.", "Çoğulu değişmez: des virus."],
    ["le comprimé", "tablet, hap", "A2", "", "Prenez un comprimé après le repas.", "Yemekten sonra bir tablet alın."],
    ["le docteur", "doktor", "A1", "", "Merci, docteur !", "Teşekkürler doktor!", "Hitap ederken docteur; genelde le médecin denir."]
]);
SEED.addThemed("body", "expressions", [
    ["bon rétablissement", "geçmiş olsun", "A2", "", "Tu es malade ? Bon rétablissement !", "Hasta mısın? Geçmiş olsun!"]
]);
SEED.addThemed("arts", "nouns", [
    ["la comédie", "komedi", "A2", "", "J'aime les comédies françaises.", "Fransız komedilerini severim."]
]);
SEED.addThemed("work", "verbs", [
    ["présenter", "tanıtmak, sunmak", "A2", "", "Je vous présente mon collègue.", "Size iş arkadaşımı tanıtayım.", "Kendini tanıtmak: se présenter."]
]);
SEED.addThemed("work", "nouns", [
    ["l'expérience", "deneyim", "A2", "", "J'ai cinq ans d'expérience.", "Beş yıllık deneyimim var.", "Dişil: une expérience"],
    ["la qualité", "nitelik, kalite", "A2", "", "La patience est une grande qualité.", "Sabır büyük bir erdemdir."],
    ["la distance", "mesafe", "B1", "", "Quelle est la distance entre Paris et Lyon ?", "Paris ile Lyon arasındaki mesafe ne kadar?"]
]);
SEED.addThemed("work", "expressions", [
    ["à distance", "uzaktan", "B1", "", "Je travaille à distance deux jours par semaine.", "Haftada iki gün uzaktan çalışıyorum."]
]);
SEED.addThemed("work", "adjectives", [
    ["innovant", "yenilikçi", "B1", "", "C'est une entreprise innovante.", "Bu yenilikçi bir şirket."]
]);
SEED.addThemed("school", "verbs", [
    ["améliorer", "geliştirmek, iyileştirmek", "B1", "", "Je veux améliorer mon français.", "Fransızcamı geliştirmek istiyorum.", "Kendini geliştirmek: s'améliorer."]
]);
SEED.addThemed("feelings", "nouns", [
    ["le défaut", "kusur, zayıf yön", "B1", "", "Tout le monde a des défauts.", "Herkesin kusurları vardır.", "Karşıtı: la qualité."]
]);
SEED.addThemed("feelings", "adjectives", [
    ["impatient", "sabırsız", "A2", "", "Ne sois pas impatient !", "Sabırsız olma!"]
]);
SEED.addThemed("opinions", "verbs", [
    ["hésiter", "tereddüt etmek", "B1", "", "N'hésitez pas à me poser des questions.", "Bana soru sormaktan çekinmeyin.", "sans hésiter: hiç düşünmeden."]
]);
SEED.addThemed("city", "nouns", [
    ["le bruit", "gürültü, ses", "A2", "", "Il y a trop de bruit dans cette rue.", "Bu sokakta çok fazla gürültü var."]
]);
SEED.addThemed("nature", "nouns", [
    ["l'air", "hava (solunan)", "A2", "", "À la montagne, l'air est frais.", "Dağda hava serin.", "Eril: un air. Hava durumu için le temps kullanılır."]
]);
SEED.addThemed("nature", "adjectives", [
    ["pur", "saf, temiz", "B1", "", "L'eau de cette source est pure.", "Bu kaynağın suyu saf."]
]);
SEED.addThemed("travel", "verbs", [
    ["revenir", "geri gelmek, dönmek", "A2", "reviens, reviens, revient, revenons, revenez, reviennent, revenu, fut=reviendr", "Je reviens dimanche soir.", "Pazar akşamı dönüyorum.", "Geçmiş zamanda être ile çekilir: je suis revenu."],
    ["changer", "değiştirmek", "A2", "", "À Lyon, je dois changer de train.", "Lyon'da aktarma yapmam gerekiyor.", "changer de + artikelsiz isim: changer de train (aktarma yapmak). Nous biçimi: changeons."]
]);
SEED.addThemed("travel", "nouns", [
    ["la voie", "peron, hat; yol", "A2", "", "Le train part de la voie trois.", "Tren üçüncü perondan kalkıyor."]
]);
SEED.addThemed("travel", "adjectives", [
    ["direct", "direkt, aktarmasız", "A2", "", "C'est un vol direct pour Paris.", "Bu, Paris'e direkt bir uçuş."]
]);
SEED.addThemed("clothes", "nouns", [
    ["le modèle", "model", "A2", "", "J'aime beaucoup ce modèle de robe.", "Bu elbise modelini çok seviyorum."],
    ["la cabine", "kabin (deneme kabini)", "A2", "", "Je peux essayer ce pantalon dans la cabine ?", "Bu pantolonu kabinde deneyebilir miyim?"]
]);
SEED.addThemed("home", "nouns", [
    ["le fond", "dip, arka taraf", "A2", "", "Les toilettes sont au fond du couloir.", "Tuvaletler koridorun sonunda.", "au fond de: -in dibinde, en arkasında."]
]);
SEED.addThemed("shopping", "nouns", [
    ["la marque", "marka", "A2", "", "Tu préfères quelle marque de téléphone ?", "Hangi telefon markasını tercih edersin?"],
    ["le remboursement", "para iadesi", "B1", "", "Je voudrais un remboursement, s'il vous plaît.", "Para iadesi istiyorum lütfen."],
    ["le dérangement", "rahatsızlık", "B1", "", "Excusez-moi pour le dérangement.", "Rahatsız ettiğim için özür dilerim."]
]);
SEED.addThemed("feelings", "adjectives", [
    ["désolé", "üzgün (özür dilerken)", "A1", "", "Je suis désolé, je suis en retard.", "Özür dilerim, geç kaldım.", "Özür dilemenin en yaygın yolu: Je suis désolé(e)."]
]);
SEED.addThemed("feelings", "verbs", [
    ["manquer", "özlenmek; eksik olmak; kaçırmak", "B1", "", "Ma famille me manque.", "Ailemi özlüyorum.", "Özlenen şey öznedir: Tu me manques = Seni özlüyorum."]
]);
SEED.addThemed("family", "adjectives", [
    ["unique", "tek, eşsiz", "A2", "", "Je suis fille unique.", "Tek çocuğum (kız).", "fils unique / fille unique: tek çocuk."]
]);
SEED.addThemed("description", "adjectives", [
    ["génial", "harika, dâhiyane", "A2", "", "Ce concert était génial !", "Bu konser harikaydı!"]
]);
SEED.addThemed("daily", "verbs", [
    ["montrer", "göstermek", "A2", "", "Tu peux me montrer tes photos ?", "Fotoğraflarını bana gösterebilir misin?"]
]);
SEED.addThemed("opinions", "adverbs", [
    ["justement", "işte tam da; zaten", "B1", "", "Justement, je voulais te parler.", "Tam da seninle konuşmak istiyordum."]
]);
SEED.addThemed("time", "nouns", [
    ["la soirée", "akşam (süresi); parti", "A1", "", "Nous passons la soirée chez des amis.", "Akşamı arkadaşlarda geçiriyoruz.", "le soir akşam vaktini, la soirée akşamın tamamını ya da bir partiyi anlatır."]
]);

/* ---------- Words used in the seed texts that had no entry ---------- */
SEED.addThemed("daily", "verbs", [
    ["apporter", "getirmek", "A1", "", "J'apporte un gâteau pour la fête.", "Parti için bir kek getiriyorum.", "Bir şeyi getirmek apporter, birini getirmek amener."],
    ["laisser", "bırakmak", "A2", "", "J'ai laissé mes clés sur la table.", "Anahtarlarımı masanın üzerinde bıraktım.", "", "Laisse-moi tranquille !", "Beni rahat bırak!"],
    ["terminer", "bitirmek", "A2", "", "Je termine mon travail à six heures.", "İşimi saat altıda bitiriyorum."]
]);
SEED.addThemed("feelings", "verbs", [
    ["plaire", "hoşa gitmek", "A2", "plais, plais, plaît, plaisons, plaisez, plaisent, plu", "Ce film me plaît beaucoup.", "Bu film çok hoşuma gidiyor.", "Beğenen kişi dolaylı tümleçtir: ça me plaît. S'il vous plaît bu fiilden gelir."]
]);
SEED.addThemed("family", "verbs", [
    ["réunir", "bir araya getirmek", "B1", "", "Noël réunit toute la famille.", "Noel bütün aileyi bir araya getirir.", "Dönüşlü hâli: se réunir (toplanmak)."]
]);
SEED.addThemed("materials", "verbs", [
    ["envelopper", "sarmak, paketlemek", "B1", "", "J'enveloppe le cadeau dans du papier.", "Hediyeyi kâğıda sarıyorum."],
    ["attacher", "bağlamak", "B1", "", "Attachez votre ceinture.", "Kemerinizi bağlayın."]
]);
SEED.addThemed("city", "nouns", [
    ["l'endroit", "yer, mekân", "A2", "", "C'est un endroit très calme.", "Burası çok sakin bir yer.", "Eril: un endroit"],
    ["le banc", "bank", "A2", "", "Une dame lit sur un banc.", "Bir kadın bankta okuyor."],
    ["la fontaine", "çeşme, fıskiye", "A2", "", "Il y a une fontaine sur la place.", "Meydanda bir çeşme var."]
]);
SEED.addThemed("countries", "nouns", [
    ["la région", "bölge", "A2", "", "La Bretagne est une belle région.", "Bretanya güzel bir bölgedir.", "Fransa 13 büyük bölgeye (région) ayrılır."]
]);
SEED.addThemed("school", "nouns", [
    ["la page", "sayfa", "A1", "", "Ouvrez votre livre à la page dix.", "Kitabınızı onuncu sayfada açın."]
]);
SEED.addThemed("body", "nouns", [
    ["l'odeur", "koku", "B1", "", "J'aime l'odeur du pain chaud.", "Sıcak ekmeğin kokusunu severim.", "Dişil: une odeur"]
]);
SEED.addThemed("emergency", "nouns", [
    ["la fumée", "duman", "B1", "", "Il y a de la fumée dans la cuisine !", "Mutfakta duman var!"]
]);
SEED.addThemed("family", "nouns", [
    ["la dame", "hanımefendi, kadın", "A1", "", "Cette dame est ma voisine.", "Bu hanım benim komşum.", "Kibar kullanım; erkek karşılığı le monsieur."]
]);
SEED.addThemed("home", "nouns", [
    ["le meuble", "mobilya parçası", "A2", "", "Nous avons acheté de nouveaux meubles.", "Yeni mobilyalar aldık.", "Mobilya (toplu): les meubles."]
]);
SEED.addThemed("daily", "nouns", [
    ["les affaires", "eşyalar; işler", "A2", "", "Range tes affaires, s'il te plaît.", "Eşyalarını topla, lütfen.", "Tekil l'affaire: iş, mesele."],
    ["le besoin", "ihtiyaç", "A2", "", "Les outils dont nous avons besoin sont ici.", "İhtiyacımız olan aletler burada.", "Çoğunlukla avoir besoin de kalıbında."]
]);
SEED.addThemed("food", "nouns", [
    ["le bonbon", "şeker (yenen)", "A1", "", "Les enfants adorent les bonbons.", "Çocuklar şekere bayılır.", "Toz şeker: le sucre."]
]);
SEED.addThemed("description", "adjectives", [
    ["âgé", "yaşlı", "A2", "", "Mon grand-père est âgé de quatre-vingts ans.", "Dedem seksen yaşında.", "Kibar kullanım: une personne âgée."]
]);
SEED.addThemed("admin", "adjectives", [
    ["complet", "tam, eksiksiz; dolu", "A2", "complète, complets, complètes", "Votre dossier est complet.", "Dosyanız eksiksiz.", "Otel veya tren için: dolu (c'est complet)."],
    ["officiel", "resmî", "B1", "", "Il faut une traduction officielle.", "Resmî bir tercüme gerekiyor."],
    ["périmé", "süresi geçmiş", "B1", "", "Mon passeport est périmé.", "Pasaportumun süresi geçmiş."]
]);
SEED.addThemed("time", "adverbs", [
    ["dorénavant", "bundan sonra", "B1", "", "Dorénavant, la réunion sera le lundi.", "Bundan sonra toplantı pazartesi olacak.", "désormais ile aynı anlamda, daha resmî."]
]);
SEED.addThemed("city", "adverbs", [
    ["autour", "etrafta", "A2", "", "Il y a une fontaine et les enfants jouent autour.", "Bir çeşme var ve çocuklar etrafında oynuyor.", "Ardından isim gelirse: autour de."]
]);
SEED.addThemed("home", "nouns", [
    ["le frigo", "buzdolabı (konuşma dili)", "A1", "", "Il y a du lait dans le frigo.", "Buzdolabında süt var.", "Tam hâli: le réfrigérateur."]
]);
SEED.addThemed("tech", "nouns", [
    ["la télé", "televizyon (konuşma dili)", "A1", "", "Le soir, on regarde la télé.", "Akşamları televizyon izleriz.", "Tam hâli: la télévision."]
]);
SEED.addThemed("greetings", "expressions", [
    ["allô", "alo", "A1", "", "Allô ? C'est Marie.", "Alo? Ben Marie.", "Yalnızca telefonda kullanılır."]
]);

/* ---------- France: cities, regions and B1 culture ---------- */
SEED.addThemed("france", "france", [
    ["Paris", "Paris", "A1", "paris", "Paris est la capitale de la France.", "Paris Fransa'nın başkentidir."],
    ["Lyon", "Lyon", "A1", "lyon", "Lyon est célèbre pour sa cuisine.", "Lyon mutfağıyla ünlüdür."],
    ["Marseille", "Marsilya", "A1", "marseille", "Marseille est un grand port.", "Marsilya büyük bir limandır."],
    ["Nice", "Nice", "A1", "nice", "Nice est au bord de la mer.", "Nice deniz kenarındadır."],
    ["Toulouse", "Toulouse", "A2", "toulouse", "On fabrique des avions à Toulouse.", "Toulouse'da uçak üretilir."],
    ["Bordeaux", "Bordeaux", "A2", "bordeaux", "Bordeaux est connue pour son vin.", "Bordeaux şarabıyla tanınır.", "Türkçedeki bordo rengi bu şehrin şarabından gelir."],
    ["Strasbourg", "Strazburg", "A2", "strasbourg", "Le Parlement européen est à Strasbourg.", "Avrupa Parlamentosu Strazburg'dadır."],
    ["Lille", "Lille", "A2", "lille", "Lille est près de la Belgique.", "Lille Belçika'ya yakındır."],
    ["Nantes", "Nantes", "A2", "nantes", "Nantes est à l'ouest de la France.", "Nantes Fransa'nın batısındadır."],
    ["Rennes", "Rennes", "A2", "rennes", "Rennes est la capitale de la Bretagne.", "Rennes Bretanya'nın başkentidir."],
    ["la Bretagne", "Bretanya", "A2", "bretagne", "Nous passons l'été en Bretagne.", "Yazı Bretanya'da geçiriyoruz.", "Dişil bölge: en Bretagne"],
    ["la Normandie", "Normandiya", "A2", "normandie", "La Normandie est célèbre pour ses pommes.", "Normandiya elmalarıyla ünlüdür.", "Dişil bölge: en Normandie"],
    ["la Provence", "Provence", "A2", "provence", "La lavande pousse en Provence.", "Lavanta Provence'ta yetişir.", "Dişil bölge: en Provence"],
    ["la Côte d'Azur", "Fransız Rivierası", "A2", "côte d'azur", "Nice est sur la Côte d'Azur.", "Nice Fransız Rivierası'ndadır."],
    ["les Alpes", "Alpler", "A2", "alpes", "Nous faisons du ski dans les Alpes.", "Alplerde kayak yapıyoruz.", "Çoğul: dans les Alpes."],
    ["la Loire", "Loire Nehri", "B1", "loire", "Il y a beaucoup de châteaux sur la Loire.", "Loire boyunca çok sayıda şato var."],
    ["Victor Hugo", "Victor Hugo", "A2", "victor hugo, victor-hugo","Victor Hugo est un grand écrivain français.", "Victor Hugo büyük bir Fransız yazardır.", "Sefiller (Les Misérables) romanının yazarı."],
    ["l'Hexagone", "Fransa (altıgen)", "B1", "hexagone", "Il fait beau dans tout l'Hexagone.", "Bütün Fransa'da hava güzel.", "Fransa'nın şekli nedeniyle kullanılan lakap. Eril."],
    ["la Marseillaise", "Fransız millî marşı", "B1", "marseillaise", "On chante la Marseillaise le 14 juillet.", "14 Temmuz'da Marseillaise söylenir."],
    ["la francophonie", "Fransızca konuşan dünya", "B1", "", "La francophonie compte plus de 300 millions de personnes.", "Frankofon dünya 300 milyondan fazla kişiyi kapsar."],
    ["la laïcité", "laiklik", "B1", "", "La laïcité est un principe de la République.", "Laiklik Cumhuriyet'in bir ilkesidir."],
    ["la Révolution française", "Fransız İhtilali", "B1", "révolution française", "La Révolution française a commencé en 1789.", "Fransız İhtilali 1789'da başladı."],
    ["le département", "il (idari birim)", "B1", "", "La France compte 101 départements.", "Fransa'da 101 il vardır.", "Her département'ın bir numarası vardır: Paris 75."],
    ["la Sécurité sociale", "sosyal güvenlik", "B1", "sécurité sociale", "La Sécurité sociale rembourse les médicaments.", "Sosyal güvenlik ilaç masraflarını öder.", "Konuşma dilinde: la Sécu."],
    ["la carte Vitale", "sağlık kartı", "B1", "carte vitale, cartes vitale", "Présentez votre carte Vitale chez le médecin.", "Doktorda sağlık kartınızı gösterin."],
    ["la mutuelle", "tamamlayıcı sağlık sigortası", "B1", "", "Ma mutuelle paie le dentiste.", "Tamamlayıcı sigortam dişçi masrafını ödüyor."],
    ["le SMIC", "asgari ücret", "B1", "smic", "Il gagne le SMIC.", "Asgari ücret alıyor."]
]);

/* ---------- B1 layer ---------- */
SEED.addThemed("feelings", "adjectives", [
    ["épuisé", "bitkin", "B1", "", "Après ce voyage, je suis épuisé.", "Bu yolculuktan sonra bitkinim."],
    ["ému", "duygulanmış", "B1", "", "Elle était très émue pendant le mariage.", "Düğün sırasında çok duygulanmıştı."],
    ["bouleversé", "altüst olmuş, sarsılmış", "B1", "", "Il est bouleversé par cette nouvelle.", "Bu haberle sarsıldı."],
    ["reconnaissant", "minnettar", "B1", "", "Je vous suis très reconnaissant.", "Size çok minnettarım."],
    ["exigeant", "titiz, çok şey bekleyen", "B1", "", "Notre professeur est exigeant.", "Öğretmenimiz titizdir."]
]);
SEED.addThemed("opinions", "adjectives", [
    ["efficace", "etkili, verimli", "B1", "", "Ce médicament est très efficace.", "Bu ilaç çok etkili."],
    ["fiable", "güvenilir", "B1", "", "Cette voiture est fiable.", "Bu araba güvenilir."],
    ["inquiétant", "endişe verici", "B1", "", "La situation est inquiétante.", "Durum endişe verici."],
    ["indispensable", "vazgeçilmez", "B1", "", "Le téléphone est devenu indispensable.", "Telefon vazgeçilmez oldu."],
    ["étonnant", "şaşırtıcı", "B1", "", "C'est étonnant, il n'est pas encore là.", "Şaşırtıcı, hâlâ gelmedi."],
    ["évident", "açık, belli", "B1", "", "La réponse est évidente.", "Cevap açık."],
    ["gênant", "rahatsız edici, utandırıcı", "B1", "", "Cette situation est un peu gênante.", "Bu durum biraz utandırıcı."],
    ["actuel", "şimdiki, güncel", "B1", "", "La situation actuelle est difficile.", "Mevcut durum zor.", "İngilizce actual gibi gerçek demek değildir."]
]);
SEED.addThemed("work", "adjectives", [
    ["compétent", "yetkin", "B1", "", "C'est une avocate très compétente.", "Çok yetkin bir avukat."],
    ["précis", "kesin, net", "B1", "", "J'ai besoin d'une réponse précise.", "Net bir cevaba ihtiyacım var."]
]);
SEED.addThemed("opinions", "verbs", [
    ["remarquer", "fark etmek", "B1", "", "Tu as remarqué sa nouvelle coiffure ?", "Yeni saç modelini fark ettin mi?"],
    ["éviter", "kaçınmak", "B1", "", "J'évite de manger trop de sucre.", "Çok şeker yemekten kaçınırım."],
    ["soutenir", "desteklemek", "B1", "soutiens, soutiens, soutient, soutenons, soutenez, soutiennent, soutenu, fut=soutiendr", "Mes parents me soutiennent toujours.", "Ailem beni hep destekler."],
    ["regretter", "pişman olmak; üzülmek", "B1", "", "Je regrette d'être parti si tôt.", "Bu kadar erken gittiğime pişmanım."],
    ["empêcher", "engellemek", "B1", "", "Le bruit m'empêche de dormir.", "Gürültü uyumamı engelliyor."],
    ["supporter", "katlanmak", "B1", "", "Je ne supporte pas le froid.", "Soğuğa dayanamıyorum.", "Dikkat: desteklemek değil, katlanmak demektir."]
]);
SEED.addThemed("leisure", "verbs", [
    ["profiter", "yararlanmak, tadını çıkarmak", "B1", "", "Nous profitons du beau temps.", "Güzel havanın tadını çıkarıyoruz.", "de ile kullanılır: profiter de."]
]);
SEED.addThemed("work", "verbs", [
    ["prévoir", "öngörmek, planlamak", "B1", "prévois, prévois, prévoit, prévoyons, prévoyez, prévoient, prévu", "La réunion est prévue pour lundi.", "Toplantı pazartesiye planlandı."],
    ["obtenir", "elde etmek", "B1", "obtiens, obtiens, obtient, obtenons, obtenez, obtiennent, obtenu, fut=obtiendr", "Elle a obtenu son diplôme.", "Diplomasını aldı."],
    ["résoudre", "çözmek", "B1", "résous, résous, résout, résolvons, résolvez, résolvent, résolu", "Nous devons résoudre ce problème.", "Bu sorunu çözmeliyiz."],
    ["exiger", "talep etmek, şart koşmak", "B1", "", "Le directeur exige une réponse.", "Müdür bir cevap talep ediyor."]
]);
SEED.addThemed("opinions", "pronominal", [
    ["s'apercevoir", "farkına varmak", "B1", "aperçois, aperçois, aperçoit, apercevons, apercevez, aperçoivent, aperçu, fut=apercevr", "Je me suis aperçu de mon erreur.", "Hatamın farkına vardım.", "de ile kullanılır: s'apercevoir de."]
]);
SEED.addThemed("opinions", "conjunctions", [
    ["en revanche", "buna karşılık", "B1", "", "Il est timide ; en revanche, sa sœur parle beaucoup.", "O utangaç; buna karşılık kız kardeşi çok konuşur."],
    ["par conséquent", "dolayısıyla", "B1", "", "Il pleut ; par conséquent, le match est annulé.", "Yağmur yağıyor; dolayısıyla maç iptal edildi."],
    ["néanmoins", "yine de", "B1", "", "C'est cher ; néanmoins, je vais l'acheter.", "Pahalı; yine de alacağım."],
    ["à condition que", "... şartıyla", "B1", "à condition qu'", "Je viens, à condition que tu sois là.", "Senin orada olman şartıyla gelirim.", "Ardından subjonctif gelir."],
    ["afin que", "... sın diye", "B1", "afin qu'", "Je parle lentement afin que tu comprennes.", "Anlayasın diye yavaş konuşuyorum.", "Ardından subjonctif gelir."]
]);
SEED.addThemed("time", "expressions", [
    ["à l'époque", "o zamanlar", "B1", "", "À l'époque, il n'y avait pas d'internet.", "O zamanlar internet yoktu."],
    ["au fur et à mesure", "yavaş yavaş, ... dikçe", "B1", "", "Tu vas progresser au fur et à mesure.", "Zamanla ilerleyeceksin."]
]);
SEED.addThemed("opinions", "expressions", [
    ["il vaut mieux", "... daha iyi olur", "B1", "il valait mieux, il vaudrait mieux", "Il vaut mieux partir tôt.", "Erken çıkmak daha iyi olur."],
    ["au fond", "aslında, özünde", "B1", "", "Au fond, il est gentil.", "Aslında o iyi biri."],
    ["ça vaut la peine", "zahmetine değer", "B1", "ça valait la peine", "Ce musée, ça vaut la peine !", "Bu müze gezmeye değer!"]
]);
SEED.addThemed("school", "verbal", [
    ["avoir du mal à", "... mekte zorlanmak", "B1", "", "J'ai du mal à comprendre cet accent.", "Bu aksanı anlamakta zorlanıyorum."]
]);

/* ---------- Thinner themes ---------- */
SEED.addThemed("animals", "nouns", [
    ["l'âne", "eşek", "A2", "", "L'âne porte des sacs.", "Eşek çuval taşıyor.", "Eril: un âne"],
    ["le taureau", "boğa", "B1", "", "Le taureau est dans le champ.", "Boğa tarlada."],
    ["le chameau", "deve", "A2", "", "Le chameau vit dans le désert.", "Deve çölde yaşar."],
    ["le tigre", "kaplan", "A2", "", "Le tigre est un animal sauvage.", "Kaplan vahşi bir hayvandır."],
    ["la girafe", "zürafa", "A2", "", "La girafe a un long cou.", "Zürafanın uzun bir boynu var."],
    ["le dauphin", "yunus", "B1", "", "Nous avons vu des dauphins en mer.", "Denizde yunuslar gördük."],
    ["la baleine", "balina", "B1", "", "La baleine est le plus grand animal.", "Balina en büyük hayvandır."],
    ["le requin", "köpekbalığı", "B1", "", "Il n'y a pas de requins ici.", "Burada köpekbalığı yok."],
    ["le perroquet", "papağan", "B1", "", "Mon perroquet parle français.", "Papağanım Fransızca konuşuyor."],
    ["le pigeon", "güvercin", "A2", "", "Il y a beaucoup de pigeons sur la place.", "Meydanda çok güvercin var."],
    ["l'aigle", "kartal", "B1", "", "L'aigle vole très haut.", "Kartal çok yüksekte uçar.", "Eril: un aigle"],
    ["la grenouille", "kurbağa", "B1", "", "La grenouille saute dans l'eau.", "Kurbağa suya atlıyor."],
    ["l'escargot", "salyangoz", "B1", "", "En France, on mange des escargots.", "Fransa'da salyangoz yenir.", "Eril: un escargot"],
    ["le moustique", "sivrisinek", "B1", "", "Les moustiques m'empêchent de dormir.", "Sivrisinekler uyumamı engelliyor."],
    ["la fourmi", "karınca", "B1", "", "Les fourmis travaillent beaucoup.", "Karıncalar çok çalışır."]
]);
SEED.addThemed("animals", "verbs", [
    ["nourrir", "beslemek", "A2", "", "Je nourris le chat le matin.", "Kediyi sabahları beslerim."],
    ["aboyer", "havlamak", "B1", "aboie, aboies, aboie, aboyons, aboyez, aboient, aboyé, fut=aboier", "Le chien du voisin aboie toute la nuit.", "Komşunun köpeği bütün gece havlıyor."]
]);
SEED.addThemed("animals", "adjectives", [
    ["domestique", "evcil", "B1", "", "Le chat est un animal domestique.", "Kedi evcil bir hayvandır."]
]);

SEED.addThemed("colors", "adjectives", [
    ["doré", "altın rengi", "B1", "", "Elle porte une robe dorée.", "Altın rengi bir elbise giyiyor."],
    ["argenté", "gümüş rengi", "B1", "", "Mon téléphone est argenté.", "Telefonum gümüş rengi."],
    ["turquoise", "turkuaz", "A2", "turquoise", "La mer est turquoise.", "Deniz turkuaz.", "Değişmez: des robes turquoise. Türkiye'den gelen taş anlamındadır."],
    ["pâle", "soluk", "B1", "", "Tu es pâle, tu es malade ?", "Solgunsun, hasta mısın?"],
    ["vif", "canlı (renk)", "B1", "", "J'aime les couleurs vives.", "Canlı renkleri severim."],
    ["uni", "düz, tek renk", "B1", "", "Je préfère une chemise unie.", "Düz bir gömleği tercih ederim."],
    ["rayé", "çizgili", "B1", "", "Il porte un pull rayé.", "Çizgili bir kazak giyiyor."],
    ["ovale", "oval", "B1", "", "La table du salon est ovale.", "Salondaki masa oval."],
    ["rectangulaire", "dikdörtgen", "B1", "", "Cette boîte est rectangulaire.", "Bu kutu dikdörtgen."],
    ["pointu", "sivri", "B1", "", "Attention, ce couteau est pointu.", "Dikkat, bu bıçak sivri."]
]);
SEED.addThemed("colors", "nouns", [
    ["le rectangle", "dikdörtgen", "A2", "", "Dessine un rectangle.", "Bir dikdörtgen çiz."],
    ["la ligne", "çizgi, hat", "A2", "", "Tracez une ligne droite.", "Düz bir çizgi çizin."]
]);

SEED.addThemed("emergency", "nouns", [
    ["l'alarme", "alarm", "A2", "", "L'alarme sonne la nuit.", "Alarm gece çalıyor.", "Dişil: une alarme"],
    ["la trousse de secours", "ilk yardım çantası", "B1", "trousses de secours", "La trousse de secours est dans la voiture.", "İlk yardım çantası arabada."]
]);
SEED.addThemed("emergency", "verbs", [
    ["blesser", "yaralamak", "B1", "", "Il s'est blessé en tombant.", "Düşerken yaralandı."],
    ["évacuer", "tahliye etmek", "B1", "", "On évacue le bâtiment.", "Bina tahliye ediliyor."]
]);

SEED.addThemed("admin", "nouns", [
    ["le permis de conduire", "ehliyet", "A2", "permis de conduire", "J'ai mon permis de conduire depuis dix ans.", "On yıldır ehliyetim var."],
    ["la pièce d'identité", "kimlik belgesi", "A2", "pièces d'identité", "Une pièce d'identité est obligatoire.", "Kimlik belgesi zorunludur."],
    ["l'acte de naissance", "doğum belgesi", "B1", "actes de naissance", "Il faut un acte de naissance traduit.", "Tercüme edilmiş doğum belgesi gerekiyor.", "Eril: un acte"],
    ["la copie", "kopya, suret", "A2", "", "Envoyez une copie de votre diplôme.", "Diplomanızın bir suretini gönderin."],
    ["le reçu", "makbuz", "B1", "", "Gardez bien votre reçu.", "Makbuzunuzu iyi saklayın."],
    ["le certificat", "belge, sertifika", "B1", "", "Le médecin m'a donné un certificat.", "Doktor bana bir rapor verdi."]
]);
SEED.addThemed("admin", "verbs", [
    ["déclarer", "beyan etmek, bildirmek", "B1", "", "Il faut déclarer vos revenus.", "Gelirlerinizi beyan etmeniz gerekiyor."],
    ["joindre", "eklemek (belge); ulaşmak", "B1", "joins, joins, joint, joignons, joignez, joignent, joint", "Joignez une photo au formulaire.", "Forma bir fotoğraf ekleyin."]
]);

SEED.addThemed("celebrations", "nouns", [
    ["la fête nationale", "ulusal bayram", "A2", "fêtes nationales", "La fête nationale française est le 14 juillet.", "Fransa'nın ulusal bayramı 14 Temmuz'dur."],
    ["la fête de fin du ramadan", "Ramazan Bayramı", "B1", "", "Pour la fête de fin du ramadan, on mange des douceurs.", "Ramazan Bayramı'nda tatlı yenir."],
    ["la fête des Mères", "Anneler Günü", "A2", "fête des mères", "J'offre des fleurs pour la fête des Mères.", "Anneler Günü için çiçek veriyorum."],
    ["la Saint-Valentin", "Sevgililer Günü", "A2", "saint-valentin", "Ils dînent au restaurant pour la Saint-Valentin.", "Sevgililer Günü için restoranda yemek yiyorlar."],
    ["le bal", "balo", "B1", "bals", "Il y a un bal sur la place le 14 juillet.", "14 Temmuz'da meydanda balo var."],
    ["la décoration", "süsleme, dekorasyon", "A2", "", "Les enfants font les décorations.", "Süslemeleri çocuklar yapıyor."]
]);
SEED.addThemed("celebrations", "verbs", [
    ["décorer", "süslemek", "A2", "", "Nous décorons le sapin de Noël.", "Noel ağacını süslüyoruz."],
    ["trinquer", "kadeh tokuşturmak", "B1", "", "Trinquons à notre amitié !", "Dostluğumuza kadeh kaldıralım!"]
]);
SEED.addThemed("celebrations", "expressions", [
    ["meilleurs vœux", "en iyi dileklerimle", "A2", "", "Meilleurs vœux pour la nouvelle année !", "Yeni yıl için en iyi dileklerimle!"],
    ["bonnes fêtes", "iyi bayramlar, iyi tatiller", "A2", "", "Bonnes fêtes à toute la famille !", "Bütün aileye iyi bayramlar!"]
]);

SEED.addThemed("materials", "nouns", [
    ["l'acier", "çelik", "B1", "", "Ce couteau est en acier.", "Bu bıçak çelikten.", "Eril: un acier"],
    ["le béton", "beton", "B1", "", "Le pont est en béton.", "Köprü betondan."],
    ["le cuivre", "bakır", "B1", "", "Ces casseroles sont en cuivre.", "Bu tencereler bakırdan."],
    ["la corde", "halat, ip", "B1", "", "Il attache le bateau avec une corde.", "Tekneyi bir halatla bağlıyor."],
    ["la ficelle", "sicim", "B1", "", "J'attache le paquet avec de la ficelle.", "Paketi sicimle bağlıyorum."],
    ["le clou", "çivi", "B1", "", "Il plante un clou dans le mur.", "Duvara bir çivi çakıyor."],
    ["la vis", "vida", "B1", "", "Il manque une vis.", "Bir vida eksik."]
]);
SEED.addThemed("materials", "adjectives", [
    ["lisse", "pürüzsüz", "B1", "", "Cette pierre est lisse.", "Bu taş pürüzsüz."],
    ["transparent", "şeffaf", "B1", "", "Le verre est transparent.", "Cam şeffaftır."]
]);

SEED.addThemed("arts", "nouns", [
    ["l'orchestre", "orkestra", "B1", "", "L'orchestre joue du Mozart.", "Orkestra Mozart çalıyor.", "Eril: un orchestre; ch k okunur."],
    ["la poésie", "şiir (sanatı)", "B1", "", "J'aime la poésie de Baudelaire.", "Baudelaire'in şiirini severim."],
    ["le chef-d'œuvre", "başyapıt", "B1", "chefs-d'œuvre", "Ce tableau est un chef-d'œuvre.", "Bu tablo bir başyapıttır."],
    ["le réalisateur", "yönetmen", "B1", "réalisatrice, réalisateurs, réalisatrices", "Ce réalisateur a gagné un prix à Cannes.", "Bu yönetmen Cannes'da ödül kazandı."],
    ["le public", "seyirci, izleyici kitlesi", "B1", "", "Le public applaudit.", "Seyirci alkışlıyor."],
    ["le rôle", "rol", "A2", "", "Elle joue le rôle principal.", "Başrolü oynuyor."],
    ["l'opéra", "opera", "B1", "", "Nous allons à l'opéra ce soir.", "Bu akşam operaya gidiyoruz.", "Eril: un opéra"],
    ["la galerie", "galeri", "B1", "", "Cette galerie expose de jeunes artistes.", "Bu galeri genç sanatçıları sergiliyor."]
]);
SEED.addThemed("arts", "verbs", [
    ["exposer", "sergilemek", "B1", "", "Le musée expose des tableaux de Monet.", "Müze Monet'nin tablolarını sergiliyor."],
    ["interpréter", "yorumlamak, icra etmek", "B1", "interprète, interprètes, interprète, interprétons, interprétez, interprètent, interprété", "Elle interprète une chanson d'Édith Piaf.", "Édith Piaf'ın bir şarkısını seslendiriyor."]
]);
SEED.addThemed("arts", "adjectives", [
    ["classique", "klasik", "A2", "", "J'écoute de la musique classique.", "Klasik müzik dinliyorum."]
]);

/* ---------- Tanıdık Kelimeler: French words Turkish borrowed ---------- */
SEED.addThemed("work", "familiar", [
    ["le chauffeur", "şoför", "A2", "", "Le chauffeur de bus est très gentil.", "Otobüs şoförü çok kibar.", "Türkçe şoför buradan gelir."],
    ["l'atelier", "atölye", "B1", "", "L'artiste travaille dans son atelier.", "Sanatçı atölyesinde çalışıyor.", "Eril: un atelier. Türkçe atölye buradan gelir."]
]);
SEED.addThemed("home", "familiar", [
    ["l'abat-jour", "abajur", "B1", "abat-jour", "L'abat-jour de la lampe est blanc.", "Lambanın abajuru beyaz.", "Eril, değişmez. Türkçe abajur buradan gelir; Fransızcada lamba değil, şapkası demektir."],
    ["le tire-bouchon", "tirbuşon", "B1", "tire-bouchons", "Tu as un tire-bouchon ?", "Tirbuşonun var mı?"],
    ["le réchaud", "ocak (taşınabilir)", "B1", "", "Nous cuisinons sur un réchaud au camping.", "Kampta portatif ocakta yemek pişiriyoruz.", "Türkçe reşo buradan gelir."],
    ["le radiateur", "radyatör, kalorifer peteği", "B1", "", "Le radiateur est froid.", "Kalorifer soğuk."],
    ["le parquet", "parke", "B1", "", "Le salon a un parquet en bois.", "Salonda ahşap parke var."],
    ["le lavabo", "lavabo", "A2", "", "Je me lave les mains au lavabo.", "Ellerimi lavaboda yıkıyorum.", "Mutfak lavabosu ise l'évier."],
    ["la commode", "şifonyer", "B1", "", "Mes pulls sont dans la commode.", "Kazaklarım şifonyerde.", "Dikkat: komodin değil, çekmeceli dolaptır. Komodin: la table de nuit."]
]);
SEED.addThemed("clothes", "familiar", [
    ["le pardessus", "pardösü", "B1", "", "Il met son pardessus gris.", "Gri pardösüsünü giyiyor."],
    ["la fermeture éclair", "fermuar", "B1", "fermetures éclair", "La fermeture éclair de mon sac est cassée.", "Çantamın fermuarı bozuk.", "Türkçe fermuar fermoir (kilit, kopça) kelimesinden gelir."],
    ["le costume", "takım elbise", "A2", "", "Il porte un costume pour le mariage.", "Düğün için takım elbise giyiyor.", "Dikkat: Türkçedeki kostüm değil, takım elbisedir. Kostüm: le déguisement."],
    ["la blouse", "önlük", "B1", "", "Le médecin porte une blouse blanche.", "Doktor beyaz önlük giyiyor.", "Dikkat: bluz değil. Kadın bluzu: le chemisier."],
    ["le maquillage", "makyaj", "A2", "", "Elle ne met pas de maquillage.", "Makyaj yapmıyor."]
]);
SEED.addThemed("shopping", "familiar", [
    ["la vitrine", "vitrin", "A2", "", "Je regarde la vitrine du magasin.", "Mağazanın vitrinine bakıyorum."],
    ["la boutique", "butik, küçük dükkân", "A2", "", "Cette boutique vend des vêtements.", "Bu dükkân giysi satıyor."],
    ["l'étiquette", "etiket", "A2", "", "Le prix est sur l'étiquette.", "Fiyat etiketin üzerinde.", "Dişil: une étiquette"]
]);
SEED.addThemed("tech", "familiar", [
    ["le magazine", "dergi", "A2", "", "Je lis un magazine dans le train.", "Trende dergi okuyorum.", "Dikkat: Türkçedeki magazin değil, her türlü dergidir. Mağaza ise le magasin."]
]);
SEED.addThemed("food", "familiar", [
    ["la mayonnaise", "mayonez", "A2", "", "Je mets de la mayonnaise sur les frites.", "Patates kızartmasına mayonez koyuyorum."],
    ["la purée", "püre", "A2", "", "Les enfants aiment la purée.", "Çocuklar püreyi sever."]
]);
SEED.addThemed("city", "familiar", [
    ["le passage", "geçit, pasaj", "A2", "", "Traversez au passage piéton.", "Yaya geçidinden geçin."]
]);
SEED.addThemed("description", "familiar", [
    ["la nuance", "nüans, ince fark", "B1", "", "Il y a une nuance entre ces deux mots.", "Bu iki kelime arasında ince bir fark var."]
]);
SEED.addThemed("materials", "familiar", [
    ["le tournevis", "tornavida", "B1", "", "Passe-moi le tournevis, s'il te plaît.", "Tornavidayı uzatır mısın lütfen."]
]);
SEED.addThemed("travel", "familiar", [
    ["le volant", "direksiyon", "B1", "", "Ne téléphone pas au volant !", "Direksiyondayken telefonla konuşma!", "Dikkat: la direction direksiyon değil, yön ve yönetim demektir."]
]);

/* ---------- More words found in examples, dialogues and texts ---------- */
SEED.addThemed("daily", "verbs", [
    ["devenir", "olmak (dönüşmek)", "A2", "deviens, deviens, devient, devenons, devenez, deviennent, devenu, fut=deviendr", "Le téléphone est devenu indispensable.", "Telefon vazgeçilmez oldu.", "Geçmiş zamanda être ile çekilir."],
    ["garder", "saklamak, tutmak", "A2", "", "Gardez bien votre reçu.", "Makbuzunuzu iyi saklayın.", "", "Il garde l'espoir.", "Umudunu koruyor."],
    ["poser", "koymak; sormak (soru)", "A2", "", "Je peux poser une question ?", "Bir soru sorabilir miyim?"]
]);
SEED.addThemed("tech", "verbs", [
    ["sonner", "çalmak (zil, telefon)", "A2", "", "Mon réveil sonne à six heures.", "Çalar saatim altıda çalıyor."]
]);
SEED.addThemed("nature", "verbs", [
    ["pousser", "itmek; büyümek, yetişmek", "A2", "", "La lavande pousse en Provence.", "Lavanta Provence'ta yetişir.", "", "Il faut pousser la porte.", "Kapıyı itmek gerekiyor."]
]);
SEED.addThemed("leisure", "verbs", [
    ["sauter", "zıplamak, atlamak", "A2", "", "La grenouille saute dans l'eau.", "Kurbağa suya atlıyor."]
]);
SEED.addThemed("numbers", "verbs", [
    ["mesurer", "ölçmek; boyu olmak", "B1", "", "La tour Eiffel mesure trois cents mètres.", "Eyfel Kulesi üç yüz metre boyunda.", "", "Je mesure un mètre soixante-dix.", "Boyum bir yetmiş."]
]);
SEED.addThemed("admin", "verbs", [
    ["déposer", "bırakmak; teslim etmek", "B1", "", "Il a déposé une plainte au commissariat.", "Karakola şikâyette bulundu.", "", "Je dépose mon dossier à la mairie.", "Dosyamı belediyeye teslim ediyorum."]
]);
SEED.addThemed("materials", "verbs", [
    ["soulever", "kaldırmak", "B1", "soulève, soulèves, soulève, soulevons, soulevez, soulèvent, soulevé, fut=soulèver", "Ce carton est trop lourd, je ne peux pas le soulever.", "Bu koli çok ağır, kaldıramıyorum."]
]);
SEED.addThemed("travel", "verbs", [
    ["rater", "kaçırmak (tren vb.)", "B1", "", "Dépêche-toi, on va rater le train !", "Acele et, treni kaçıracağız!", "Konuşma dilinde başarısız olmak da demektir: rater un examen."]
]);
SEED.addThemed("school", "verbs", [
    ["progresser", "ilerlemek, gelişmek", "B1", "", "Tu progresses vite en français.", "Fransızcada hızlı ilerliyorsun."]
]);
SEED.addThemed("work", "verbs", [
    ["fabriquer", "üretmek, yapmak", "B1", "", "On fabrique des avions à Toulouse.", "Toulouse'da uçak üretilir."]
]);
SEED.addThemed("colors", "verbs", [
    ["tracer", "çizmek (çizgi)", "B1", "", "Tracez une ligne droite.", "Düz bir çizgi çizin."]
]);
SEED.addThemed("body", "verbs", [
    ["battre", "dövmek; atmak (kalp)", "B1", "bats, bats, bat, battons, battez, battent, battu", "Mon cœur bat très vite.", "Kalbim çok hızlı atıyor."]
]);
SEED.addThemed("celebrations", "verbal", [
    ["avoir lieu", "gerçekleşmek, yapılmak", "B1", "", "La cérémonie a lieu à la mairie.", "Tören belediyede yapılıyor."]
]);

SEED.addThemed("opinions", "nouns", [
    ["la situation", "durum", "A2", "", "La situation est compliquée.", "Durum karmaşık."],
    ["la chose", "şey", "A1", "", "J'ai beaucoup de choses à faire.", "Yapacak çok şeyim var."]
]);
SEED.addThemed("home", "nouns", [
    ["le vase", "vazo", "A2", "", "Je mets les fleurs dans un vase.", "Çiçekleri bir vazoya koyuyorum."],
    ["l'électricité", "elektrik", "A2", "", "Il n'y a plus d'électricité.", "Elektrik kesildi.", "Dişil: une électricité"],
    ["la lumière", "ışık", "A2", "", "Éteins la lumière, s'il te plaît.", "Işığı kapat, lütfen."],
    ["les toilettes", "tuvalet", "A1", "", "Où sont les toilettes ?", "Tuvalet nerede?", "Hep çoğul kullanılır."],
    ["le bain", "banyo (küvet banyosu)", "A2", "", "Les enfants prennent un bain.", "Çocuklar banyo yapıyor."],
    ["la casserole", "tencere", "B1", "", "L'eau chauffe dans la casserole.", "Su tencerede ısınıyor."]
]);
SEED.addThemed("celebrations", "nouns", [
    ["le sapin", "çam; Noel ağacı", "B1", "", "Nous décorons le sapin de Noël.", "Noel ağacını süslüyoruz."]
]);
SEED.addThemed("feelings", "nouns", [
    ["l'amitié", "dostluk", "A2", "", "Notre amitié est très importante.", "Dostluğumuz çok önemli.", "Dişil: une amitié"],
    ["la patience", "sabır", "B1", "", "Il faut de la patience pour apprendre une langue.", "Dil öğrenmek için sabır gerekir."]
]);
SEED.addThemed("feelings", "adjectives", [
    ["tranquille", "sakin, rahat", "A2", "", "Laisse-moi tranquille !", "Beni rahat bırak!"]
]);
SEED.addThemed("travel", "nouns", [
    ["la panne", "arıza", "B1", "", "La voiture est en panne.", "Araba arızalı.", "en panne: bozuk."],
    ["le transport", "ulaşım", "A2", "", "Je prends les transports en commun.", "Toplu taşıma kullanıyorum."]
]);
SEED.addThemed("body", "nouns", [
    ["l'analyse", "tahlil", "B1", "", "Le médecin demande une analyse de sang.", "Doktor kan tahlili istiyor.", "Dişil: une analyse"],
    ["le sommeil", "uyku", "A2", "", "Le sommeil est important pour la santé.", "Uyku sağlık için önemli."]
]);
SEED.addThemed("food", "nouns", [
    ["l'olive", "zeytin", "A2", "", "J'achète de l'huile d'olive.", "Zeytinyağı alıyorum.", "Dişil: une olive"],
    ["le miel", "bal", "A2", "", "Je mets du miel dans mon thé.", "Çayıma bal koyuyorum."],
    ["le biscuit", "bisküvi", "A1", "", "Les biscuits sont dans la boîte.", "Bisküviler kutunun içinde."],
    ["la douceur", "tatlılık; tatlı (yiyecek)", "B1", "", "Pour la fête, on mange des douceurs.", "Bayramda tatlı yenir."],
    ["la faim", "açlık", "A2", "", "J'ai une faim de loup !", "Kurt gibi acıktım!", "Çoğunlukla avoir faim kalıbında."],
    ["la pizza", "pizza", "A1", "", "Ce soir, on mange une pizza.", "Bu akşam pizza yiyoruz."],
    ["les frites", "patates kızartması", "A1", "", "Un steak avec des frites, s'il vous plaît.", "Patates kızartmalı bir biftek lütfen."]
]);
SEED.addThemed("time", "nouns", [
    ["la fin", "son", "A1", "", "Mon salaire arrive à la fin du mois.", "Maaşım ay sonunda yatıyor."]
]);
SEED.addThemed("leisure", "nouns", [
    ["la lecture", "okuma", "A2", "", "La lecture est mon passe-temps préféré.", "Okumak en sevdiğim uğraş."],
    ["la course", "koşu, yarış", "A2", "", "Je participe à une course.", "Bir yarışa katılıyorum.", "Çoğulu les courses: alışveriş."]
]);
SEED.addThemed("city", "nouns", [
    ["le panneau", "tabela, levha", "B1", "", "Regarde le panneau : la sortie est à droite.", "Tabelaya bak: çıkış sağda."],
    ["le piéton", "yaya", "A2", "", "Traversez au passage piéton.", "Yaya geçidinden geçin."]
]);
SEED.addThemed("school", "nouns", [
    ["la réussite", "başarı", "B1", "", "Bravo pour ta réussite à l'examen !", "Sınavdaki başarın için tebrikler!"],
    ["la traduction", "çeviri", "B1", "", "Il faut une traduction officielle.", "Resmî bir tercüme gerekiyor."],
    ["les études", "öğrenim", "A2", "", "Elle fait ses études à Lyon.", "Lyon'da okuyor.", "Tekil l'étude: çalışma, inceleme."],
    ["l'accent", "aksan; vurgu işareti", "A2", "", "Il a un petit accent turc.", "Hafif bir Türk aksanı var.", "Eril: un accent"],
    ["le texte", "metin", "A2", "", "Lisez le texte et répondez.", "Metni okuyun ve cevap verin."]
]);
SEED.addThemed("tech", "nouns", [
    ["la télécommande", "uzaktan kumanda", "B1", "", "Où est la télécommande ?", "Kumanda nerede?"],
    ["l'information", "bilgi; haber", "A2", "", "Merci pour l'information.", "Bilgi için teşekkürler.", "Haberler: les informations (les infos)."]
]);
SEED.addThemed("shopping", "nouns", [
    ["le paquet", "paket", "A2", "", "J'attache le paquet avec de la ficelle.", "Paketi sicimle bağlıyorum."]
]);
SEED.addThemed("shopping", "adjectives", [
    ["payant", "ücretli", "B1", "", "L'autoroute est payante.", "Otoyol paralı."]
]);
SEED.addThemed("work", "nouns", [
    ["le service", "hizmet; servis", "A2", "", "Elle travaille dans un service public.", "Kamu hizmetinde çalışıyor."]
]);
SEED.addThemed("nature", "nouns", [
    ["la source", "kaynak", "B1", "", "L'eau de cette source est pure.", "Bu kaynağın suyu saf."],
    ["la lavande", "lavanta", "B1", "", "La lavande sent très bon.", "Lavanta çok güzel kokar."]
]);
SEED.addThemed("society", "nouns", [
    ["le parlement", "parlamento", "B1", "", "Le Parlement européen est à Strasbourg.", "Avrupa Parlamentosu Strazburg'dadır."],
    ["le principe", "ilke", "B1", "", "La laïcité est un principe de la République.", "Laiklik Cumhuriyet'in bir ilkesidir."],
    ["la république", "cumhuriyet", "B1", "", "La France est une république.", "Fransa bir cumhuriyettir."],
    ["le roi", "kral", "B1", "", "Autrefois, la France avait un roi.", "Eskiden Fransa'nın bir kralı vardı.", "Dişil: la reine."]
]);
SEED.addThemed("arts", "nouns", [
    ["le narrateur", "anlatıcı", "B1", "narratrice, narrateurs, narratrices", "Le narrateur raconte son enfance.", "Anlatıcı çocukluğunu anlatıyor."]
]);
SEED.addThemed("clothes", "nouns", [
    ["la coiffure", "saç modeli", "B1", "", "Tu as remarqué sa nouvelle coiffure ?", "Yeni saç modelini fark ettin mi?"]
]);
SEED.addThemed("family", "nouns", [
    ["maman", "anne (hitap)", "A1", "maman", "Bonne fête, maman !", "Anneler Günün kutlu olsun anne!", "Çocuk dili; artikelsiz hitap. Erkek karşılığı papa."]
]);
SEED.addThemed("description", "adjectives", [
    ["principal", "ana, temel", "A2", "", "Elle joue le rôle principal.", "Başrolü oynuyor."],
    ["compliqué", "karmaşık", "A2", "", "C'est un peu compliqué.", "Biraz karmaşık."],
    ["terrible", "korkunç; (konuşma) harika", "A2", "", "Cet accident est terrible.", "Bu kaza korkunç.", "Konuşma dilinde pas terrible: pek iyi değil."]
]);
SEED.addThemed("countries", "adjectives", [
    ["européen", "Avrupalı, Avrupa'ya ait", "A2", "", "Le Parlement européen est à Strasbourg.", "Avrupa Parlamentosu Strazburg'dadır."]
]);
SEED.addThemed("countries", "nouns", [
    ["l'ouest", "batı", "A2", "", "Nantes est à l'ouest de la France.", "Nantes Fransa'nın batısındadır.", "Eril: l'ouest. Doğu: l'est."],
    ["Istanbul", "İstanbul", "A1", "istanbul", "Istanbul est la plus grande ville de Turquie.", "İstanbul Türkiye'nin en büyük şehridir."],
    ["Ankara", "Ankara", "A1", "ankara", "Ankara est la capitale de la Turquie.", "Ankara Türkiye'nin başkentidir."],
    ["Izmir", "İzmir", "A1", "izmir", "Izmir est une grande ville au bord de la mer.", "İzmir deniz kıyısında büyük bir şehirdir."],
    ["Bruxelles", "Brüksel", "A2", "bruxelles", "Bruxelles est en Belgique.", "Brüksel Belçika'dadır.", "x s okunur."],
    ["Genève", "Cenevre", "A2", "genève", "Genève est en Suisse.", "Cenevre İsviçre'dedir."],
    ["l'Inde", "Hindistan", "A2", "inde", "Ce tissu vient d'Inde.", "Bu kumaş Hindistan'dan geliyor.", "Dişil ülke: en Inde"]
]);
SEED.addThemed("france", "france", [
    ["la Corse", "Korsika", "A2", "corse", "La Corse est une très belle île.", "Korsika çok güzel bir adadır.", "Dişil bölge: en Corse"],
    ["Cannes", "Cannes", "A2", "cannes", "Le festival de Cannes a lieu en mai.", "Cannes Festivali mayısta yapılır."],
    ["Reims", "Reims", "B1", "reims", "La cathédrale de Reims est très célèbre.", "Reims Katedrali çok ünlüdür.", "Okunuşu: [rɛ̃s]."],
    ["Brest", "Brest", "A2", "brest", "Il pleut beaucoup à Brest.", "Brest'e çok yağmur yağar."],
    ["la Croisette", "Croisette (Cannes sahil yolu)", "B1", "croisette", "Les acteurs se promènent sur la Croisette.", "Oyuncular Croisette'te geziniyor."]
]);
SEED.addThemed("daily", "verbs", [
    ["quitter", "ayrılmak, terk etmek", "A2", "", "Je quitte le bureau à six heures.", "Ofisten saat altıda çıkıyorum.", "Her zaman nesne alır: quitter la maison."]
]);
SEED.addThemed("home", "verbs", [
    ["chauffer", "ısıtmak, ısınmak", "B1", "", "L'eau chauffe dans la casserole.", "Su tencerede ısınıyor."]
]);
SEED.addThemed("society", "verbs", [
    ["trier", "ayırmak, ayrıştırmak", "B1", "", "Nous trions nos déchets.", "Çöplerimizi ayrıştırıyoruz."]
]);
SEED.addThemed("opinions", "verbs", [
    ["dépendre", "bağlı olmak", "B1", "dépends, dépends, dépend, dépendons, dépendez, dépendent, dépendu", "Ça dépend du temps.", "Havaya bağlı.", "de ile kullanılır: dépendre de."]
]);
SEED.addThemed("opinions", "nouns", [
    ["l'effort", "çaba", "A2", "", "Il faut faire des efforts.", "Çaba göstermek gerekir.", "Eril: un effort"]
]);
SEED.addThemed("opinions", "adjectives", [
    ["pratique", "pratik, kullanışlı", "A2", "", "Ce sac est très pratique.", "Bu çanta çok kullanışlı."]
]);
SEED.addThemed("society", "nouns", [
    ["le geste", "hareket, davranış", "B1", "", "Trier ses déchets, c'est un petit geste pour la planète.", "Çöpü ayrıştırmak gezegen için küçük bir davranıştır."]
]);
SEED.addThemed("society", "adjectives", [
    ["commun", "ortak", "B1", "", "Je prends les transports en commun.", "Toplu taşıma kullanıyorum.", "en commun: ortaklaşa, toplu."]
]);
SEED.addThemed("time", "nouns", [
    ["le début", "başlangıç", "A2", "", "Au début, c'était difficile.", "Başta zordu."],
    ["la période", "dönem", "A2", "", "Janvier est la période des soldes.", "Ocak indirim dönemidir."]
]);
SEED.addThemed("time", "expressions", [
    ["à l'avance", "önceden", "A2", "", "Il vaut mieux réserver à l'avance.", "Önceden ayırtmak daha iyi olur."]
]);
SEED.addThemed("opinions", "prepositions", [
    ["au lieu de", "... yerine", "B1", "", "Je prends le vélo au lieu de la voiture.", "Araba yerine bisiklete biniyorum."],
    ["à condition de", "... şartıyla", "B1", "", "Tu peux sortir à condition de rentrer tôt.", "Erken dönmen şartıyla çıkabilirsin.", "Özneler aynıysa mastarla: à condition de."]
]);
SEED.addThemed("feelings", "nouns", [
    ["la chance", "şans", "A2", "", "J'ai eu de la chance.", "Şansım yaver gitti.", "avoir de la chance: şanslı olmak."]
]);
SEED.addThemed("family", "nouns", [
    ["l'enfance", "çocukluk", "B1", "", "Le narrateur raconte son enfance.", "Anlatıcı çocukluğunu anlatıyor.", "Dişil: une enfance"]
]);
SEED.addThemed("tech", "nouns", [
    ["la vidéo", "video", "A1", "", "Je regarde une vidéo sur mon téléphone.", "Telefonumda bir video izliyorum."]
]);
SEED.addThemed("food", "nouns", [
    ["le steak", "biftek", "A2", "", "Je voudrais un steak bien cuit.", "İyi pişmiş bir biftek istiyorum."]
]);
SEED.addThemed("materials", "nouns", [
    ["le manche", "sap (bıçak, tava)", "B1", "", "Le manche du couteau est en bois.", "Bıçağın sapı tahtadan.", "Dikkat: la manche ise kol (giysi) demektir."]
]);
SEED.addThemed("admin", "nouns", [
    ["l'accueil", "danışma, karşılama", "B1", "", "Je me renseigne à l'accueil.", "Danışmadan bilgi alıyorum.", "Eril: un accueil"]
]);
SEED.addThemed("daily", "nouns", [
    ["le type", "tip, tür; (konuşma) adam", "B1", "", "Ce type est chelou.", "Bu adam tuhaf.", "Konuşma dilinde: le mec."]
]);
SEED.addThemed("city", "adjectives", [
    ["droit", "sağ; düz", "A2", "droite, droits, droites", "Tracez une ligne droite.", "Düz bir çizgi çizin.", "Dosdoğru: tout droit."],
    ["gauche", "sol", "A2", "", "Je lève la main gauche.", "Sol elimi kaldırıyorum."]
]);
SEED.addThemed("description", "pronouns", [
    ["soi", "kendi, kendisi", "B1", "", "Il faut avoir confiance en soi.", "İnsanın kendine güvenmesi gerekir.", "Genel özneyle kullanılır: on, chacun, il faut."]
]);
