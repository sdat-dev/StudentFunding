let mainContent = document.getElementsByClassName('main-content')[0];
mainContent.addEventListener('click', function(e){
    if(e.target && e.target.parentElement.className == 'accordion-header'){
            let currentaccordion = e.target.parentElement;
            let accordions = document.getElementsByClassName('accordion-header');
            
            if(currentaccordion.nextElementSibling.style.display != "block")
	        {
                //setting current content display to block to show content
                currentaccordion.nextElementSibling.style.display = "block";
            }      
            //If content is not hidden, changing the display property to none to hide content
            else if(currentaccordion.nextElementSibling.style.display == "block")
            {
                currentaccordion.nextElementSibling.style.display = "none";
            }
    }
 })