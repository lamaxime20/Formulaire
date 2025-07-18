function recupererValeurChoix() {
    const optionRadio = document.getElementsByName("option");
    for(let i = 0; i < optionRadio.length; i++) {
        if(optionRadio[i].checked){
            return optionRadio[i].value || optionRadio[i].nextSibling.textContent.trim();
            // Si pas de value, prends le texte après l'input
        }
    }
    return null; // rien sélectionné
}

function recupererValeurLanguage() {
    const checkboxes = document.getElementsByName("inpt");
    let languesChoisies = [];

    for(let i = 0; i < checkboxes.length; i++){
        if(checkboxes[i].checked){
            // récupère la valeur ou le texte du label
            languesChoisies.push(checkboxes[i].value || checkboxes[i].nextSibling.textContent.trim());
        }
    }
    return languesChoisies;
}

function afficherInfos() {
    const nom = document.getElementById("nom").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;
    const frequence = document.getElementById("frequence").value;

    const choix = recupererValeurChoix();
    const languages = recupererValeurLanguage();

    let message = `Nom: ${nom}
Email: ${email}
Age: ${age}
Fréquence: ${frequence}
Choix de travail: ${choix ? choix : "Non renseigné"}
Langages maîtrisés: ${languages.length > 0 ? languages.join(", ") : "Aucun"}`;

    alert(message);
}

document.getElementById("monFormulaire").addEventListener("submit", function(event) {
  event.preventDefault(); // stoppe la soumission classique
  afficherInfos(); // ta fonction qui récupère et affiche les données
});