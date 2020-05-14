let requestURL = "data/other-awards.json";
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
let contentbody = document.getElementById('content-body');
request.onload = function () {
    const awardsjson = request.response;  
    //condition for checking if browser is Internet Explorer
    let awards =  ((false || !!document.documentMode))? JSON.parse(awardsjson).otherawards: awardsjson.otherawards;
    
    let content = '';

    //Iterating over list of agencies
    awards.forEach(function (award) {
        content +=  '<div class="display-flex awardinfo search-container">' +
                    '<div class="col-xl-2 col-lg-3 ml-0 pl-0">';
                    if(award.hasOwnProperty('Logo')){
                        content += '<img class="award-logo" src="assets/logos/' + award.Logo +'.png">';
                    }
        content +=  '</div>'+
                    '<div class="col-xl-10 col-lg-9 p-0">' +
                    '<h4 class="awardname"><a href="' + award.Website + '"'+
                    '   target="_blank">'+ award.AwardName+'</a></h4>'+
                    '<div class="left"><i class="fas fa-calendar-day"></i> <strong>Due Date: </strong>'+ award.DueDate +'</div>'+
                    '<div class="right"><i class="fa fa-graduation-cap"></i> <strong>Degree Level: </strong>'+ award.DegreeLevel +'</div>'+
                    '<div class="left"><i class="fas fa-dollar-sign"></i> <strong>Funding Level: </strong>'; 
        if(award.hasOwnProperty('FundingLevel')){
            content += award.FundingLevel;
        }
        content +=  '</div>'+
                    '<div class="right"> <br> </div>' +
                    '<p class="awarddescription"><strong>Description: </strong>'+ award.Description + '</p>';
        if(award.hasOwnProperty("DetailedRequirementsonEligibility"))
        {
            var requirements = award.DetailedRequirementsonEligibility;
            content += '<p class="awardeligibility"><strong>Eligibility Requirements: </strong>';
            if(Array.isArray(requirements)){
                content += '<ul class="num-list">';
                requirements.forEach(function(requirement){
                    content += '<li>'+ requirement + '</li>';
                });
            }
            else{
                content += requirements;
            }
            content += '</p>';
        }
        content +='</div></div>';
    });
    contentbody.innerHTML = content.trim();
}
