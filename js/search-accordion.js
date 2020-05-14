//getting search-box Element
let searchbox = document.getElementById('search-box');
let searchbutton = document.getElementById('search-button');

//getting sub-accordions within accordions to toggle display
let accordionContainers = document.getElementsByClassName('accordion-container');
//getting accordionElems to toggle display
let cardElems = document.getElementsByClassName('card');
//getting individual content withing sub-accordions to toggle display
let accordionContent = document.getElementsByClassName('accordion-content');
searchfunction = function()
{   
    //Setting display to none for all accordion and sub-accordionElems
    if(cardElems.length >0)
    {
        for(let i = 0; i< accordionContainers.length; i++)
        {
            accordionContainers[i].style.display = "none";
        }
    
        for(let i = 0; i< cardElems.length; i++)
        {
            cardElems[i].style.display = "none";
        }
    }

    //extracting search-text and trimming text to ignore additional-spaces
	let searchtext = searchbox.value.trim();
    let modifiedsearchtext = searchtext.replace(/\s+/g, '').toLowerCase();
    let searchElems = document.getElementsByClassName('search-container');

    //If search keyword length is greater than zero ie. User has typed something
    if(searchbox.value.length > 0)
    {
        //Storing total number of matches
        let matchcount = 0;
        //Iterating through each content and validating if keyword is substring or not
	    for(let i = 0; i< searchElems.length; i++)
        {
            if(searchElems[i].textContent.replace(/\s+/g, '').toLowerCase().indexOf(modifiedsearchtext) >= 0)
            {
                //toggling display to block to show content
                searchElems[i].style.display = "block";
                //logic for search-box when accordion/sub-accordions are present to group content
                //Toggles visibility if the content within accordion/subaccordion contains substring
                if(cardElems.length >0)
                {
                    searchElems[i].parentElement.style.display = "block";
                    // Accessing accordion-container class containeing content of sub-accordion
                    subaccordionElem = searchElems[i].parentElement.parentElement;
                    subaccordionElem.style.display = "block";
                    //Adding class show if main-accordion is in collapsed mode
                    subaccordionElem.parentElement.parentElement.classList.add('show');
                    subaccordionElem.parentElement.parentElement.parentElement.style.display = "block";
                }
                matchcount = matchcount + 1;
                //Updating search results
            }
            else
            {
                //If text doesn't match searchElement's display is toggled to none
                searchElems[i].style.display = "none";
            }           
        }
        document.getElementById('search-box-results').innerText = "Showing "+ matchcount+ " results for: "+ searchtext;
    }
    else{
            document.getElementById('search-box-results').innerText = '';
            //When user clears search, toggling state of each subAccordionElems
            if(cardElems.length > 0)
            {
                for(let i = 0; i< accordionContainers.length; i++)
                {
                    accordionContainers[i].style.display = "block";
                    accordionContainers[i].parentElement.parentElement.classList.remove('show');
                }
                //When user clears search, toggling state of each AccordionElems
                for(let i = 0; i< cardElems.length; i++)
                {
                    cardElems[i].style.display = "block";
                }
                //When user clears search, toggling state of each individual group content
                for(let i = 0; i< accordionContent.length; i++)
                {
                    accordionContent[i].style.display = "none";
                }
            }
             //When user clears search, toggling state of each individual content
             for(let i = 0; i< searchElems.length; i++)
             {
                 searchElems[i].style.display = "block";
             }
        }
}
searchbox.onkeyup = searchfunction;
searchbutton.onclick = searchfunction;