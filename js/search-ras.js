let searchbox = document.getElementById('search-box');
let searchbutton = document.getElementById('search-button');
searchfunction = function()
{
	let searchtext = searchbox.value.trim();
    let modifiedsearchtext = searchtext.replace(/\s+/g, '').toLowerCase();
    let searchElems = document.getElementsByClassName('search-container');
    let teamElem = document.getElementById('rateams');
    if(searchbox.value.length > 0)
    {
        let matchcount = 0;
        let team = '';
	    for(let i = 0; i< searchElems.length; i++)
        {
            if(searchElems[i].textContent.replace(/\s+/g, '').toLowerCase().indexOf(modifiedsearchtext) >= 0)
            {
		        searchElems[i].style.display = "block";
                matchcount = matchcount + 1;
                var teams = teamElem.children;
                var j = 0;
                for(j = 0; j < teams.length; j++)
                {
                    if(teams[j].id === searchElems[i].id)
                    {
                        team = teams[j];
                    }
                }
            }
            else
            {
                searchElems[i].style.display = "none";
            }           
        }

        if(team != '')
        { 
            var i = 0;
            for(i=0; i < team.children.length; i++)
            {
                let memberElem = document.getElementById(team.children[i].innerText);
                memberElem.style.display = "block";
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