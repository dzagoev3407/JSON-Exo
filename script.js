fetch('https://raw.githubusercontent.com/dzagoev3407/JSON-Exo/main/exo.json')

.then(response => {
  return response.json()
}) // on génère une réponse

.catch(error => 'Erreur : ' + error) // on attrape l'erreur avec la méthode .catch()

.then(response => {
  console.log(response)
  document.write(`Le premier email de l'utilisateur 1 est ${response.email[0]}`)
  document.write(`L'email de secours de l'utilisateur 2 qui a pour email ${response.email[0]} est : ${response.email[1]}`)
})