let requestURL = "data/ualbanyawards.json";
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
let awrdsContainer = document.getElementsByClassName('awards-container')[0];
request.onload = function () {
    const awardsjson = request.response;  
    //condition for checking if browser is Internet Explorer
    let awards =  ((false || !!document.documentMode))? JSON.parse(awardsjson).ualbanyawards: awardsjson.ualbanyawards;
    
    let content = '';
    //degree-counter for unique id generation
    let degreelevelcount = 1;
    //finding list of distinct degreelevels
    degreelevels = awards.map(function (award) {
        return award.DegreeLevel
    });

    distinctDegreelevels = degreelevels.filter(function (v, i, a) {
        return a.indexOf(v) === i;
    });

    distinctDegreelevels.sort(function (a, b) {
        if (a < b)
            return 1;
        else
            return -1;
    });

    //Iterating over list of degree levels
    distinctDegreelevels.forEach(function (degreelevel) {

        let accordioncontent = '';
        let awardcontent = '';

        degreelevelawards = awards.filter(function (award) {
            return award.DegreeLevel == degreelevel
        });

        //getting list of stem only awrds
        stemawards =  degreelevelawards.filter(function (award) {
            return award.STEMOnly == "Y"
        });
        stemawards.sort(function (a, b) {
            if (a.AwardName > b.AwardName)
                return 1;
            else
                return -1;
        });

        stemawards.forEach(function(award){
            awardcontent = awardcontent + 
            '<div class="awardinfo search-container">' +
            '   <h4 class="awardname"><a href="'+ award.Website +'" target="_blank">' + award.AwardName + '</a></h4>' +
            '   <div class="left"><i class="fas fa-calendar-day"></i> <strong>Due Date: </strong>' +  award.DueDate + '</div>' +
            '   <div class="right"><i class="fa fa-graduation-cap"></i> <strong>Degree Level: </strong>' + award.DegreeLevel + '</div>' +
            '   <div class="left"><i class="fas fa-dollar-sign"></i> <strong>Funding Level: </strong>' + award.FundingLevel + '</div>' +
            '   <div class="right"> <br> </div>'+
            '   <p class="awarddescription"><strong>Description: </strong>'+ award.Description + ' </p>'+
            '   <p class="awarddescription"><strong>Eligibility Requirements: </strong>' + award.Eligibility + ' </p>' +
            '</div>';
        });
        accordioncontent += '<div class = "accordion-container"><div class = "accordion-header"><h4 class = "content-header-no-margin">STEM-Focused Funding Opportunities</h3></div><div class = "accordion-content">' + awardcontent + '</div></div>';
        
        nonstemawards = degreelevelawards.filter(function (award) {
            return award.STEMOnly == "N"
        });

        nonstemawards.sort(function (a, b) {
            if (a.AwardName > b.AwardName)
                return 1;
            else
                return -1;
        });
        awardcontent = '';
        nonstemawards.forEach(function(award){
            awardcontent = awardcontent + 
            '<div class="awardinfo search-container">' +
            '   <h4 class="awardname"><a href="'+ award.Website +'" target="_blank">' + award.AwardName + '</a></h4>' +
            '   <div class="left"><i class="fas fa-calendar-day"></i> <strong>Due Date: </strong>' +  award.DueDate + '</div>' +
            '   <div class="right"><i class="fa fa-graduation-cap"></i> <strong>Degree Level: </strong>' + award.DegreeLevel + '</div>' +
            '   <div class="left"><i class="fas fa-dollar-sign"></i> <strong>Funding Level: </strong>' + award.FundingLevel + '</div>' +
            '   <div class="right"> <br> </div>'+
            '   <p class="awarddescription"><strong>Description: </strong>'+ award.Description + ' </p>'+
            '   <p class="awarddescription"><strong>Eligibility Requirements: </strong>' + award.Eligibility + ' </p>' +
            '</div>';
        });
        accordioncontent += '<div class = "accordion-container"><div class = "accordion-header"><h4 class = "content-header-no-margin">Non-STEM-Focused Funding Opportunities</h3></div><div class = "accordion-content">' + awardcontent + '</div></div>';
        
        let imgpath ="assets/images";
        switch(degreelevel)
        {
            case "General":
                degreelevel = "Funding Opportunities for All Students";
                imgpath += "/hat-diploma.png"
                break;
            case "Graduate":
                imgpath += "/diploma.png"
                break;
            case "Undergraduate":
                imgpath += "/hat.png"
                break;
        }

        //generating Id for bootstrap accordion
        let degreeId = "collapse" + degreelevelcount;
        let headingId = "heading" + degreelevelcount;
        let accordionElem = '<div class = "card"><div class="card-header" id="' + headingId + '">' +
            '<button class="btn btn-link" type="button" data-toggle="collapse" data-target="#' + degreeId + '" aria-expanded="true" aria-controls="' + degreeId + '">' +
            '<h3 class = "content-header-no-margin">' + degreelevel + '<img class = "degree-level-img" src= "'+imgpath+'"></h2></button></div>'
            + '<div id="' + degreeId + '" class = "collapse" aria-labelledby= "' + headingId + '"data-parent=""> <div class = "card-body">'
            + accordioncontent + '</div></div></div>';
        content = content + accordionElem;
        degreelevelcount++;
    });
    //Appending content to awrdsContainer
    awrdsContainer.classList.add('accordion');
    awrdsContainer.id = 'accordionExample';
    awrdsContainer.innerHTML = content.trim();
}