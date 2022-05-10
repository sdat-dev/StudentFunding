//getting search-button Element
let searchbutton = document.getElementById('search-button');
//getting search-box Element
let searchbox = document.getElementById('search-box');

let searchfunction = function () {
    //getting search-box Element
    let searchbox = document.getElementById('search-box');
    let searchtext = searchbox.value.trim();
    //getting individual content withing sub-accordions to toggle display
    let fundingopps = document.getElementById("accordionExample");
    console.log("fundingopps", fundingopps);
    let searchElems = document.getElementsByClassName('search-container');
    let panels = fundingopps.getElementsByClassName("panel");
    clearsearch();
    if (panels.length > 0) {
        for (let i = 0; i < panels.length; i++) {
            panels[i].style.display = "none";
        }
    }

    if (searchElems.length > 0) {
        for (let i = 0; i < searchElems.length; i++) {
            searchElems[i].style.display = "none";
        }
    }

    if(searchtext.length > 0)
    {
        let modifiedsearchtext = searchtext.replace(/\s+/g, '').toLowerCase();

        
        for(let i=0; i< panels.length; i++){
            let count = 0;
            let searchElems = panels[i].getElementsByClassName('search-container');
            for (let j = 0; j < searchElems.length; j++) {
                if (searchElems[j].textContent.replace(/\s+/g, '').toLowerCase().indexOf(modifiedsearchtext) >= 0) {
                    count++;
                    searchElems[j].style.display = "block";
                }
            }
            if(count > 0)
            {
                let solicount = panels[i].getElementsByClassName("noofsolis");
                solicount[0].innerText = ""+count+"";
                panels[i].style.display = "block";
            }
        }
    }
    else{

        clearsearch();
    } 
}

let clearsearch = function(){
    let panels = document.getElementsByClassName('panel');
    if (panels.length > 0) {
        for (let i = 0; i < panels.length; i++) {
            let searchElems = panels[i].getElementsByClassName('search-container');
            if (searchElems.length > 0) {
                for (let i = 0; i < searchElems.length; i++) {
                    searchElems[i].style.display = "block";
                }
            }
            let solicount = panels[i].getElementsByClassName("noofsolis");
            solicount[0].innerText = ""+searchElems.length+"";
            panels[i].style.display = "block";
        }
    }
}

searchbox.onkeyup = searchfunction;
searchbutton.onclick = searchfunction;