class Kategorie {
    constructor(name, bildUrl, bildName) {
        this.name = name;
        this.bild = function () {
            return new Bild(bildUrl, bildName);
        };
    }
}


class Bild {
    constructor(url, name) {
        this.url = url;
        this.name = name;
    }
}

class Tutorial {
    constructor(name, sprache, beschreibung, dauer, datum, url, embedCode, bildUrl, bildName) {
        this.name = name;
        this.sprache = sprache;
        this.beschreibung = beschreibung;
        this.dauer = dauer;
        this.datum = datum;
        this.url = url;
        this.embedCode = embedCode;
        this.kapitel = [];
        this.kategorienliste = [];
        this.bild = function () {
            return new Bild(bildUrl, bildName);
        }
    }

    fuegeKategorieHinzu(kat) {
        this.kapitel.push(kat);
    }

    fuegeKapitelHinzu(kap) {
        this.kategorienliste.push(kap);
    }
}

class Kapitel {
    constructor(name, beschreibung, dauer) {
        this.name = name;
        this.beschreibung = beschreibung
        this.dauer = dauer;
    }
}

function getDauerInStundenUndMinuten(dauer) {
    let std = dauer.charAt(0) + charAt(1);
    let min = dauer.charAt(3) + charAt(4);

    return std + " Std." + min + " Min.";
}

function getTutorialsZuKategorie(kategorieName) {
    let retArr = [];
    for (let i = 0; i < tutorialArr.length; i++) {
        for (let j = 0; j < tutorialArr[i].kategorienliste.length; j++) {
            if (tutorialArr[i].kategorienliste[j].name === kategorieName) {
                retArr.push(tutorialArr[i]);
            }
        }
    }
    return retArr;
}

let kochenKat = new Kategorie("Kochen", "assets/img/kochen.jpg", "Kochen");
let matheKat = new Kategorie("Mathe", "assets/img/mathe.jpg", "Mathe");
let memeKat = new Kategorie("Memes", "assets/img/memes.jpg", "Memes");
let WebDevKat = new Kategorie("Web-Entwicklung", "assets/img/webdev.jpg", "Web-Entwicklung");

let tutorial1 = new Tutorial("Gnocchi", "English", "Spring Vegetable Gnocchi", "00:23", new Date(Date.now), "", "", "assets/img/Tutorial-Logo.jpg", "Gnocchi-Logo");
let tutorial2 = new Tutorial("Curry", "English", "Massaman Curry", "00:17", new Date(Date.now), "", "", "assets/img/Curry.jpg", "Curry-Logo");

let tut1_kap1 = new Kapitel("Gnocchi Kapitel 1", "Gnocchi Beschreibung 1", "00:05");
let tut1_kap2 = new Kapitel("Gnocchi Kapitel 2", "Gnocchi Beschreibung 2", "00:08");
let tut1_kap3 = new Kapitel("Gnocchi Kapitel 3", "Gnocchi Beschreibung 3", "00:10");

tutorial1.fuegeKapitelHinzu(tut1_kap1);
tutorial1.fuegeKapitelHinzu(tut1_kap2);
tutorial1.fuegeKapitelHinzu(tut1_kap3);

tutorial1.fuegeKategorieHinzu(kochenKat);

let tut2_kap1 = new Kapitel("Curry Kapitel 1", "Curry Beschreibung 1", "00:05");
let tut2_kap2 = new Kapitel("Curry Kapitel 2", "Curry Beschreibung 2", "00:03");
let tut2_kap3 = new Kapitel("Curry Kapitel 3", "Curry Beschreibung 3", "00:07");

tutorial2.fuegeKapitelHinzu(tut2_kap1);
tutorial2.fuegeKapitelHinzu(tut2_kap2);
tutorial2.fuegeKapitelHinzu(tut2_kap3);

tutorial2.fuegeKategorieHinzu(kochenKat);

let tutorialArr = [tutorial1, tutorial2];
let kategorieArr = [kochenKat, matheKat, memeKat, WebDevKat];

tutorialArr.sort(function (a, b) { return a.name.localeCompare(b.name) });
kategorieArr.sort(function (a, b) { return a.name.localeCompare(b.name) });

module.exports.getTutorialsZuKategorie = getTutorialsZuKategorie;
module.exports.getDauerInStundenUndMinuten = getDauerInStundenUndMinuten;