const contenu = document.querySelector(".contenu");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const btnConnexion = document.querySelector("#seConnecter");
btnConnexion.addEventListener("click", () => {
  envoiUser(username.value, password.value);
});

function envoiUser(username, password) {
  let urlChecking = "https://quiet-dusk-76059.herokuapp.com/api/login_check";

  let bodyRequete = {
    username: username,
    password: password,
  };
  let requete = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyRequete),
  };
  fetch(urlChecking, requete)
    .then((reponse) => reponse.json())
    .then((reponseDeserialisee) => {
      console.log(reponseDeserialisee);

      afficherMessage(reponseDeserialisee.token);
      document.querySelector("#username").value = "";
      document.querySelector("#password").value = "";
    });
}

function afficherMessage(token) {
  contenu.innerHTML = "";
  let urlGood = "https://quiet-dusk-76059.herokuapp.com/api/gateau";

  let requete = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  fetch(urlGood, requete)
    .then((reponse) => reponse.json())
    .then((messageServeur) => {
      console.log(form);
      messageServeur.forEach((gateau) => {
        testUn = `<div>
                    <hr>
                        <h2> Message : ${gateau.name}</h2>
                    <hr>
            </div>
        `;
        contenu.innerHTML += testUn;
      });
    });
  //   if (username && password) {
  //     return urlGood;
  //   } else {
  //     echo("mauvaise infos");
  //   }
}
