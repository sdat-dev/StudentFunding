let searchbox = document.getElementById('search-box');
let searchbutton = document.getElementById('search-button');
searchfunction = function()
{
	let searchtext = searchbox.value.trim();
    let modifiedsearchtext = searchtext.replace(/\s+/g, '').toLowerCase();
    let searchElems = document.getElementsByClassName('search-container');
    if(searchbox.value.length > 0)
    {
	    let matchcount = 0;
	    for(let i = 0; i< searchElems.length; i++)
        {
            if(searchElems[i].textContent.replace(/\s+/g, '').toLowerCase().indexOf(modifiedsearchtext) >= 0)
            {
		        searchElems[i].style.display = "block";
                matchcount = matchcount + 1;
            }
            else
            {
                searchElems[i].style.display = "none";
            }           
        }
        document.getElementById('search-box-results').innerText = "Showing "+ matchcount+ " results for: "+ searchtext;
    }
    else{
            document.getElementById('search-box-results').innerText = '';
             for(let i = 0; i< searchElems.length; i++)
            {
                searchElems[i].style.display = "block";
            }
        }
}
searchbox.onkeyup = searchfunction;
searchbutton.onclick = searchfunction;