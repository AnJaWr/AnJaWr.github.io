let jsonOsoby = {
    "osoby": [{
            imie: "Krystian",
            nazwisko: "Dziopa",
            wzrost: 180,
            oczy: "niebieskie",
            zainteresowania: [
                { nazwa: "podroze" },
                { nazwa: "gotowanie" }
            ]
        },
        {
            imie: "Dominik",
            nazwisko: "Gomuła",
            wzrost: 170,
            oczy: "brązowe",
            zainteresowania: [
                { nazwa: "gotowanie" },
                { nazwa: "języki" }
            ]
        },
        {
            imie: "Claudia",
            nazwisko: "Żelazowska",
            wzrost: 167,
            oczy: "brązowe",
            zainteresowania: [
                { nazwa: "programowanie" },
                { nazwa: "podroze" },
                { nazwa: "języki" }
            ]

        }
    ]
}


jsonOsoby.osoby.forEach((osoba) => {
            console.log(osoba.oczy);
        }

        for (let osoba of jasonOsoby.osoby) {
            console.log(osoba.oczy);
        }