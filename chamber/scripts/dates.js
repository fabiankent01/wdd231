
let oLastModif = new Date(document.lastModified)
    
 document.getElementById("lastModified").textContent = "Last Modification: " + oLastModif;
 let year = new Date();
 let fullYear = year.getFullYear();
 document.getElementById("currentYear").textContent = fullYear;
