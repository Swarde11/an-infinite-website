$(document).ready(function() {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const capitals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    const cyrillicLetters = "абвгдежзийклмнопрстуфхцчшщъыьэюя";
    const cyrillicCapitals = "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";
    const arabicLetters = "ابتثجحخدذرزسشصضطظعغفقكلمنهوي";
    const hebrewLetters = "אבגדהוזחטיךכלםמןנסעפצקרשת";
    const japaneseLetters = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん";

    const all = letters + capitals + numbers + 
    symbols + cyrillicLetters + cyrillicCapitals + 
    arabicLetters + hebrewLetters + japaneseLetters;



function randomize() {
    let text = "";

    let clone = $("#link").clone().appendTo(".container");

    for (let i = 0; i < Math.floor(Math.random() * 512); i++) {
        text += all[Math.floor(Math.random() * all.length)];
        
        $(clone).css("color", `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`);
        $(clone).css("font-size", `${Math.floor(Math.random() * 75)}px`);
        $(clone).css("margin-top", `${Math.floor(Math.random() * window.outerHeight)}px`);
        $(clone).css("margin-left", `${Math.floor(Math.random() * window.outerWidth)}px`);
        $(clone).css("display", "inline");

        $(clone).text(text)
    }

    $(clone).click(function() {
        location.href = "../view/index.html";
    });
}

    for (let i = 0; i < 50; i++) {
        randomize();
    }

    $(window).scroll(function () { 
        if ($(window).scrollTop() >= $(document).height() - $(window).height() - 10) {
            for (let i = 0; i < 50; i++) {
                randomize();
            }
        }
    });
});