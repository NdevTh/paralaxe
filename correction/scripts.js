var parallax_elements = document.querySelectorAll(".parallax");

window.onscroll = function(){
    
    var scrollY = window.scrollY; // Le nombre de pixels dont on a fait défiler la fenêtre
    
    parallax_elements.forEach( // On traite tous les éléments concernés
        function(this_parallax_element){ // this_parallax_element sera notre manière de désigner à chaque fois l'élément de classe "parallax" à traiter
            
            var factor = 2; // Valeur par défaut pour le facteur de ralentissement
            
            // Test : l'élément traité a-t-il un attribut personnalisé en place ?
            if (this_parallax_element.hasAttribute("data-parallax-factor")) {
                // Si oui on utilisera plutôt cette valeur
                factor = this_parallax_element.getAttribute("data-parallax-factor");
            }
            
            var parent_section = this_parallax_element.parentElement;
    
            var parent_position = parent_section.offsetTop;

            // Appliquer un mouvement sur l'élément, dans le sens inverse du scroll
            this_parallax_element.style.marginTop = Math.round((scrollY - parent_position) / factor) + "px";
        }
    );
    
    
    
}