function Mot(){
    let word = document.getElementById("mot").value;
    let result = "";
    console.log(word)
    for(n = 0; n <= word.length; n++) {
        
        result += word.charAt(n) + "\n"; 
    
        
    
    
    } alert(result);
    }