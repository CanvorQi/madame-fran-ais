/*
 * Word themes. A theme is a second grouping across pools: seed ids stay `pool:slug`, so a word
 * keeps its pool and only gains a theme. A word has at most one theme; core words may have none.
 * SEED.setTheme tags words already in a pool; SEED.addThemed (words-themed.js) adds and tags rows.
 */
SEED.themes = [
    { id: "home", name: "Ev ve Eşyalar", title: "La maison" },
    { id: "family", name: "Aile ve İlişkiler", title: "La famille" },
    { id: "body", name: "Vücut ve Sağlık", title: "Le corps et la santé" },
    { id: "food", name: "Yiyecek ve İçecek", title: "La nourriture" },
    { id: "nature", name: "Doğa ve Hava Durumu", title: "La nature" },
    { id: "animals", name: "Hayvanlar", title: "Les animaux" },
    { id: "city", name: "Şehir ve Yerler", title: "La ville" },
    { id: "travel", name: "Ulaşım ve Seyahat", title: "Les voyages" },
    { id: "work", name: "İş ve Meslekler", title: "Le travail" },
    { id: "school", name: "Okul ve Eğitim", title: "L'école" },
    { id: "clothes", name: "Giyim ve Aksesuar", title: "Les vêtements" },
    { id: "shopping", name: "Alışveriş ve Para", title: "Les achats" },
    { id: "leisure", name: "Hobi ve Spor", title: "Les loisirs" },
    { id: "tech", name: "Teknoloji ve Medya", title: "Les médias" },
    { id: "feelings", name: "Duygular ve Karakter", title: "Les sentiments" },
    { id: "daily", name: "Günlük Hayat", title: "La vie quotidienne" },
    { id: "greetings", name: "Selamlaşma ve Nezaket", title: "La politesse" },
    { id: "description", name: "Tanımlama Sıfatları", title: "La description" },
    { id: "colors", name: "Renkler ve Şekiller", title: "Les couleurs" },
    { id: "countries", name: "Ülkeler ve Milliyetler", title: "Les pays" },
    { id: "time", name: "Zaman", title: "Le temps" },
    { id: "numbers", name: "Sayılar ve Ölçüler", title: "Les nombres" },
    { id: "france", name: "Fransa", title: "La France" },
    { id: "society", name: "Toplum ve Çevre", title: "La société" },
    { id: "arts", name: "Sanat ve Kültür", title: "La culture" },
    { id: "opinions", name: "Fikir ve Tartışma", title: "Les opinions" }
];

SEED.themeOf = {};
SEED.setTheme = function (theme, pool, words) {
    words.forEach((fr) => { SEED.themeOf[`${pool}:${U.slug(fr)}`] = theme; });
};

SEED.setTheme("home", "nouns", ["la maison", "l'appartement", "la chambre", "la cuisine", "la salle de bain", "le salon", "le jardin", "la porte", "la fenêtre", "la table", "la chaise", "le lit", "la clé", "l'étage", "la salle", "la douche", "l'ascenseur", "le propriétaire", "le loyer", "le mur", "le verre"]);
SEED.setTheme("home", "verbs", ["habiter", "louer"]);
SEED.setTheme("home", "verbal", ["faire le ménage"]);

SEED.setTheme("family", "nouns", ["la famille", "le père", "la mère", "le frère", "la sœur", "le fils", "la fille", "le mari", "la femme", "l'homme", "l'enfant", "le garçon", "le bébé", "les parents", "le grand-père", "la grand-mère", "l'oncle", "la tante", "l'ami", "le voisin", "les gens", "la personne"]);

SEED.setTheme("body", "nouns", ["la tête", "la main", "le pied", "le bras", "la jambe", "l'œil", "le dos", "le ventre", "la dent", "la santé", "le médicament", "la grippe", "la médecine", "le médecin", "l'hôpital"]);
SEED.setTheme("body", "adjectives", ["malade", "fatigué"]);
SEED.setTheme("body", "verbal", ["avoir mal", "avoir sommeil"]);

SEED.setTheme("food", "nouns", ["le pain", "le fromage", "le lait", "l'eau", "le café", "le thé", "le vin", "le jus", "la viande", "le poisson", "le poulet", "le riz", "la pomme", "la pomme de terre", "la tomate", "la salade", "le légume", "le fruit", "l'œuf", "le sucre", "le sel", "le gâteau", "la soupe", "le repas", "le petit déjeuner", "le déjeuner", "le dîner", "le restaurant", "le chocolat", "le beurre", "la confiture", "l'orange"]);
SEED.setTheme("food", "verbs", ["manger", "boire", "cuisiner", "déjeuner", "dîner"]);
SEED.setTheme("food", "adjectives", ["délicieux"]);
SEED.setTheme("food", "verbal", ["avoir faim", "avoir soif", "faire la cuisine"]);
SEED.setTheme("food", "expressions", ["bon appétit"]);

SEED.setTheme("nature", "nouns", ["le soleil", "la pluie", "la neige", "le vent", "la mer", "la montagne", "la campagne", "l'arbre", "la fleur", "le ciel", "le degré", "la plage", "le bord"]);
SEED.setTheme("nature", "verbs", ["pleuvoir", "neiger", "briller"]);
SEED.setTheme("nature", "verbal", ["avoir froid", "avoir chaud"]);
SEED.setTheme("nature", "expressions", ["il fait beau", "il fait chaud", "il fait froid"]);

SEED.setTheme("animals", "nouns", ["le chien", "le chat", "l'oiseau"]);

SEED.setTheme("city", "nouns", ["la ville", "le centre-ville", "le village", "la rue", "la place", "la banque", "la poste", "la pharmacie", "le musée", "le parc", "le pont", "l'église", "le coin", "la tour"]);
SEED.setTheme("city", "verbs", ["tourner", "traverser"]);
SEED.setTheme("city", "expressions", ["à gauche", "à droite", "tout droit"]);
SEED.setTheme("city", "prepositions", ["à côté de", "en face de", "près de", "loin de"]);

SEED.setTheme("travel", "nouns", ["la gare", "la station", "le train", "le bus", "le métro", "la voiture", "le vélo", "l'avion", "le billet", "la valise", "l'hôtel", "le taxi", "la route", "le voyage", "les vacances", "le touriste"]);
SEED.setTheme("travel", "verbs", ["voyager", "visiter", "conduire", "arriver", "partir", "descendre", "retourner"]);
SEED.setTheme("travel", "verbal", ["aller à pied"]);
SEED.setTheme("travel", "expressions", ["à pied"]);

SEED.setTheme("work", "nouns", ["le travail", "le bureau", "l'entreprise", "le métier", "la réunion", "le collègue", "le directeur", "le boulanger"]);
SEED.setTheme("work", "verbs", ["travailler"]);
SEED.setTheme("work", "adjectives", ["occupé"]);

SEED.setTheme("school", "nouns", ["le professeur", "l'étudiant", "l'élève", "l'école", "l'université", "la bibliothèque", "le livre", "le stylo", "le cahier", "la langue", "le mot", "la phrase", "la question", "la réponse", "la leçon", "le cours", "l'examen", "les devoirs", "l'exercice", "le tableau", "l'histoire", "la lettre"]);
SEED.setTheme("school", "verbs", ["apprendre", "comprendre", "étudier", "lire", "écrire", "expliquer", "réussir", "répondre"]);

SEED.setTheme("clothes", "nouns", ["le vêtement", "la chemise", "le pantalon", "la robe", "la chaussure", "le manteau", "le sac"]);
SEED.setTheme("clothes", "verbs", ["mettre", "essayer"]);
SEED.setTheme("clothes", "pronominal", ["s'habiller"]);

SEED.setTheme("shopping", "nouns", ["le magasin", "le supermarché", "le marché", "l'argent", "la carte", "le prix", "la caisse", "les espèces", "le client", "le cadeau"]);
SEED.setTheme("shopping", "verbs", ["acheter", "vendre", "payer", "coûter", "offrir"]);
SEED.setTheme("shopping", "adjectives", ["cher"]);
SEED.setTheme("shopping", "verbal", ["faire les courses"]);

SEED.setTheme("leisure", "nouns", ["la musique", "le sport", "le film", "le cinéma", "la chanson", "la fête", "la photo", "l'anniversaire", "le défilé"]);
SEED.setTheme("leisure", "verbs", ["jouer", "chanter", "danser", "courir", "marcher"]);
SEED.setTheme("leisure", "pronominal", ["se promener", "s'amuser"]);
SEED.setTheme("leisure", "verbal", ["faire du sport", "faire une promenade", "jouer au football"]);

SEED.setTheme("tech", "nouns", ["le téléphone", "l'ordinateur", "le numéro", "le message", "la radio", "la télévision", "le journal"]);
SEED.setTheme("tech", "verbs", ["envoyer", "utiliser", "appeler", "regarder", "écouter"]);

SEED.setTheme("feelings", "adjectives", ["content", "heureux", "triste", "stressé", "gentil", "sympa", "calme", "joyeux", "drôle", "préféré"]);
SEED.setTheme("feelings", "verbs", ["aimer", "adorer", "détester", "préférer"]);
SEED.setTheme("feelings", "verbal", ["avoir peur", "avoir envie de"]);

SEED.setTheme("daily", "nouns", ["le nom", "le prénom", "l'âge", "l'adresse", "le rendez-vous", "la vie"]);
SEED.setTheme("daily", "verbs", ["dormir", "rentrer", "rester", "sortir"]);
SEED.setTheme("daily", "pronominal", ["s'appeler", "se lever", "se coucher", "se laver", "se réveiller", "se brosser les dents", "se reposer", "se préparer", "se dépêcher"]);
SEED.setTheme("daily", "verbal", ["prendre une douche", "prendre un rendez-vous"]);

SEED.setTheme("greetings", "expressions", ["bonjour", "bonsoir", "salut", "au revoir", "merci", "merci beaucoup", "de rien", "s'il vous plaît", "s'il te plaît", "excusez-moi", "madame", "monsieur", "pardon", "oui", "non", "d'accord", "bien sûr", "à bientôt", "à demain", "bonne nuit", "bonne journée", "enchanté", "ça va", "comment ça va", "comment allez-vous", "je voudrais"]);

SEED.setTheme("description", "adjectives", ["grand", "petit", "bon", "mauvais", "beau", "joli", "vieux", "jeune", "nouveau", "facile", "difficile", "intéressant", "chaud", "froid", "propre", "sale", "ouvert", "fermé", "prêt", "libre", "important", "possible", "célèbre", "agréable", "simple", "fort", "grave", "lourd", "long", "court"]);

SEED.setTheme("colors", "nouns", ["la couleur"]);
SEED.setTheme("colors", "adjectives", ["blanc", "noir", "rouge", "bleu", "vert", "jaune", "gris"]);

SEED.setTheme("countries", "nouns", ["le pays", "la France", "la Turquie", "le nord", "le sud"]);
SEED.setTheme("countries", "adjectives", ["français", "turc", "anglais", "allemand", "italien", "national"]);

SEED.setTheme("time", "time", SEED.words.time.map((r) => r[0]));
SEED.setTheme("time", "nouns", ["le temps", "la fois"]);
SEED.setTheme("time", "adverbs", ["aujourd'hui", "hier", "demain", "maintenant", "bientôt", "tôt", "tard"]);
SEED.setTheme("time", "expressions", ["et demie", "en retard", "à l'heure", "tout de suite", "tous les jours", "ce soir"]);

SEED.setTheme("numbers", "numbers", SEED.words.numbers.map((r) => r[0]));
SEED.setTheme("numbers", "adjectives", ["premier", "dernier", "prochain", "troisième", "cinquième"]);

SEED.setTheme("france", "france", SEED.words.france.map((r) => r[0]));

SEED.setTheme("society", "nouns", ["le monde"]);

SEED.setTheme("opinions", "nouns", ["le problème", "l'idée", "la vérité"]);
SEED.setTheme("opinions", "verbs", ["penser", "croire", "savoir", "réfléchir"]);
SEED.setTheme("opinions", "verbal", ["avoir raison", "avoir tort"]);
