var users = [
    "D3XT3R",
    "UT0N!O",
    "FR!NK",
    "D00F3N$HM!RTZ",
    "E99M@N",
    "L3XLUTH0R",
    "0TT00CT@V!US",
    "Z0!DB3R9",
    "$@NCH3Z",
    "$T@NF0RD",
    "R!CH@RD$"]

var passwords = [
    "lefromage",
    "bombonburbujabellota",
    "ilovemyjob",
    "DOOFENSHMIRTZMALVADOSYASOCIADOS",
    "ihatesonic",
    "kryptoniteLover",
    "noloapaguesotto",
    "contraseña123",
    "pepinillorickelmejor",
    "0101001101010000",
    "07012005"]

var realNames = [
    "Dexter Michael Louis McPherson",
    "Drake Utonium",
    "John I.Q. Nerdelbaum Frink, Jr.",
    "Heinz Doofenshmirtz",
    "Ivo Robotnik",
    'Alexander Joseph "Lex" Luthor',
    "Otto Gunther Octavius",
    "John Alejandro Zoidberg",
    "Richard Daniel Sanchez",
    "Stanford Filbrick Pines",
    "Reed Nathaniel Richards"
]
var pfp = [
    "assets/profilePictures/dexter.png",
    "assets/profilePictures/utonio.png",
    "assets/profilePictures/frink.png",
    "assets/profilePictures/doof.png",
    "assets/profilePictures/eggman.png",
    "assets/profilePictures/lex.png",
    "assets/profilePictures/otto.png",
    "assets/profilePictures/zoid.png",
    "assets/profilePictures/rick.png",
    "assets/profilePictures/stanford.png",
    "assets/profilePictures/reed.png"
]

const loginForm = document.getElementById('adhogForm');
const loginTitle = document.getElementById('formTitle');
loginForm.addEventListener('submit', function(event){
    event.preventDefault();
    const sentUser = document.getElementById('adhogUser');
    const sentPass = document.getElementById('adhogPass');
    for (let x = 0; x<users.length; x++){
        if (sentUser.value == users[x]){
            console.log("User okay!");
            if (sentPass.value == passwords[x]){
                console.log("Pass okay!");
                localStorage.setItem('username', realNames[x]);
                localStorage.setItem('pfp', pfp[x]);
                window.location.href = 'adhog.html';
                return;
            }
        }
    }
});