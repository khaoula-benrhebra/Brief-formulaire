function sectionSuivante() {
  let inputs=document.getElementsByClassName("input1") ;
   for(let i =0 ;i<inputs.length;i++){
    if(inputs[i].value != ''){
      document.getElementById('first-section').style.display = 'none';
      document.getElementById('second-section').style.display = 'block';
      document.getElementById("erreur").innerHTML = "";
    }
    else{
      document.getElementById('first-section').style.display = 'block';
      document.getElementById('second-section').style.display = 'none';
      document.getElementById("erreur").innerHTML="Veuillez rensgigner tous les champs";
    }
   }
}


function sectionSuivante2() {
  let inputs=document.getElementsByClassName("input2") ;
   for(let i =0 ;i<inputs.length;i++){
    if(inputs[i].value != ""){
      document.getElementById('second-section').style.display = 'none';
      document.getElementById('third-section').style.display = 'block';
    }else{
      document.getElementById('second-section').style.display = 'block';
      document.getElementById('third-section').style.display = 'none';
      document.getElementById("erreur").innerHTML="Veuillez rensgigner tous les champs";
    }
   }
}


 function sectionPrécédente() {
   document.getElementById('first-section').style.display = 'block';
   document.getElementById('second-section').style.display = 'none';
 }
 function sectionPrécédente2() {
    document.getElementById('second-section').style.display = 'block';
    document.getElementById('third-section').style.display = 'none';
  }


  let dataArray=[];
  function onSubmit(){
    let nom = document.getElementById('f-name').value ;
    let prenom = document.getElementById('s-name').value ;
    let age = document.getElementById('age').value ;
    let adresse = document.getElementById('adres').value ;
    let poste = document.getElementById('poste').value;
    let email = document.getElementById('email').value;
    let telephone = document.getElementById('numero').value;

    dataArray.push({nom,prenom,age,adresse},{poste,email,telephone});
    console.log('dataArray',dataArray);
    document.getElementById("result").innerHTML =
    "<strong>Nom:</strong> " + dataArray[0].nom + "<br>" +
    "<strong>Prénom:</strong> " + dataArray[0].prenom + "<br>" +
    "<strong>Âge:</strong> " + dataArray[0].age + "<br>" +
    "<strong>Adresse:</strong> " + dataArray[0].adresse + "<br>" +
    "<strong>Poste:</strong> " +dataArray[1].poste + "<br>" +
    "<strong>Email:</strong> " + dataArray[1].email + "<br>" +
    "<strong>Téléphone:</strong> " + dataArray[1].telephone;
     document.getElementById('formulaire').style.display = "none";
     document.getElementById('result')[0].style.display = "block";
    
  }




