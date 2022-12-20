function promptExo7(){
    let shoe = document.getElementById("shoeSize").value;
    let birth = document.getElementById("yearOfBirth").value;

    let rslt1 = ((shoe * 2 + 5) * 50 - birth) + 1766 

    alert(rslt1);

}