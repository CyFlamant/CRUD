const btnEnregistrer = document.getElementById("btnEnregistrer");
const btnReset = document.getElementById("btnReset");
const btnDashboard = document.getElementById("btnDashboard");
const champNom = document.getElementById("Name");
const champAge = document.getElementById("Age");
const champEmail = document.getElementById("Email");
const champIdentifiant = document.getElementById("Identifiant");
const divInscrits = document.getElementById("nbInscrits");
let nbInscrits = 0;

function enregistrer() {
    let nouveauNom = champNom.value;
    let nouveauAge = champAge.value;
    let nouveauEmail =  champEmail.value;
    let nouveauIdentifiant = champIdentifiant.value;

    nouvelleLigne.innerHTML += "<tr><td>" + nouveauNom + "</td><td>" + nouveauAge + "</td><td>" + nouveauEmail + "</td><td>" + nouveauIdentifiant + "</td></tr>";
    nbInscrits += 1;
}

function reset() {
    champNom.value = "";
    champAge.value = "";
    champEmail.value = "";
    champIdentifiant.value = "";
}

function afficherInscrits() {
    divInscrits.innerHTML = nbInscrits;
}

btnEnregistrer.addEventListener("click", enregistrer);
btnReset.addEventListener("click", reset);
btnDashboard.addEventListener("click", afficherInscrits);



