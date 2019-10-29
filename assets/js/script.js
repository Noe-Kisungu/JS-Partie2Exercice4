	var button = document.querySelector('button'); //querySelector permet d'appeler des classes CSS
function resetForm(){
  var fields = document.querySelectorAll('input');
  for (let i=0; i<fields.length;i++){   //boucle for qui permet de récupérer les données dans un tableau
    fields[i].value='';                 //affiche les 'champs vides'
  }
}
button.onclick = function(){            //appelle la fonction
  resetForm()
};
//getEllementbyID permet de sellectioner des ellement de 'arbre du DOM
//querySelector via son ID en met # devant
//boucle {} : 1) j'initialise ma boucle 
//incrementer x decrementer = comme dans PHP.doc
//ma boucle va permetre de generer de indice
//