 

class Timer {
    constructor (mins) {
        this.mins = mins;
        this.secs = mins * 60;
    } // END CONSTRUCTOR

    countdown() { 
        setTimeout('Decrement()', 60); 
    } 
 

// Fonction décrémenter qui décrémente la valeur.
    Decrement() { 
    if (document.getElementById) { 
        this.minutes = document.getElementById("minutes"); 
        this.seconds = document.getElementById("seconds"); 
        this.minutes.style.textAlign = "center";
        this.seconds.style.textAlign = "center";
        // Si il reste moins d une minute on affiche que la valeur en secondes
        
        if (this.seconds < 59) { 
            this.seconds.value = this.secs; 
        } 

        //Afficher les minutes et les secondes getminutes et getseconds sont utilisés pour obtenir : minutes et secondes
    
        else { 
            this.minutes.value = this.getminutes(); 
            this.seconds.value = this.getseconds(); 
        } 
        //Quand il reste moins d une minute, la couleur des minutes et des secondes seront rouges
        
        if (this.mins < 1) { 
            this.minutes.style.color = "red"; 
            
            this.seconds.style.color = "red"; 
        } 
        // si les secondes sont égales à 0, la page affiche une alerte pour le dire
    
        if (this.mins < 0) { 
            //   METRE SESSION ECOULEE
            this.minutes.value = 0; 
            this.seconds.value = 0; 
            alert('votre session a expiré');
            
        } 
        //si les secondes sont supérieures à zéro, on les décérementes
        else { 
            this.secs--; 
            setTimeout('Decrement()', 1000); 
        } 
        console.log('ici !');
    } 
  
} 



    getminutes() { 
    
    //L'instruction return met fin à l'exécution d'une fonction et définit une valeur à renvoyer à la fonction appelante.
        //  minutes est égal à secondes divisé par 60, arrondi
        this.mins = Math.floor(this.secs / 60); 
            return this.mins; 
        } 


        getseconds() { 
        //L'instruction return met fin à l'exécution d'une fonction et définit une valeur à renvoyer à la fonction appelante.
    // prendre des minutes restantes (en secondes) du nombre total de secondes restantes
            
            return this.secs - Math.round(this.mins * 60); 
        } 


} // End CLASS

let MonTimer = new Timer (20);

MonTimer.Decrement();

