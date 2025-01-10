function getViewportWidth() {
    return window.innerWidth || document.documentElement.clientWidth;
}


const viewportWidth = getViewportWidth();
console.log(`Die Viewport-Breite beträgt: ${viewportWidth} Pixel.`);



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
    constructor(name, sprache, beschreibung, dauer, datum, url, embedCode, kapitel, bildUrl, bildName) {
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
