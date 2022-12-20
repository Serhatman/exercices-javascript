function afficherMasquer() {
    
    const divTexte = document.getElementById("text");
  
    
    if (divTexte.style.display === "none") {
      divTexte.style.display = "block";
    }
   
    else {
      divTexte.style.display = "none";
    }
  }