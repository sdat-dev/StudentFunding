let requestURL = "data/past-awardees.json";
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
let awardeescontent = document.getElementById('content-awardees');
request.onload = function () {
    const pastawardeesjson = request.response;  
    //condition for checking if browser is Internet Explorer
    let pastawardees =  ((false || !!document.documentMode))? JSON.parse(pastawardeesjson): pastawardeesjson;
    
    let content = '';

    //Iterating over list of agencies
    pastawardees.forEach(function (awardee) {
        
        content += '<div class="display-flex awardee-info">' +
                  '<div class="col-xl-2 col-lg-3 ml-0 pl-0">' +
                  '<img class="awardee-photo" src="assets/images/' + awardee.Photo +'.jpg"></div>'+
                  '<div class="col-xl-10 col-lg-9 p-0">' +
                  '     <h4 class="name">'+ awardee.FirstName + ' '+ awardee.LastName +'</h4>'+
                  '     <div class="award-details display-flex">'+
                  '         <div class="col-sm-12 col-md-12 col-lg-12 col-xl-6 pl-0">'+
                  '             <span class="content-line"><i class="fas fa-medal"></i><strong>Award: </strong>'+ awardee.Award +'</span><br>'+
                  '             <span class="content-line"><i class="fas fa-dollar-sign"></i> <strong>Funding Amount: </strong>'+ awardee.FundingAmount +'</span><br>'+
                  '             <span class="content-line"><i class="fas fa-calendar-alt"></i> <strong>Award Received Year: </strong>'+ awardee.ReceivedYear+'</span><br>'+
                  '         </div>'+
                  '         <div class="col-sm-12 col-md-12 col-lg-12 col-xl-6">'+
                  '             <span class="content-line"><i class="fas fa-book"></i> <strong>Field of Study: </strong>'+ awardee.FieldofStudy +'</span><br>'+
                  '             <span class="content-line"><i class="far fa-envelope"></i> <strong>Email: </strong><a class="email" href="mailto:'+ awardee.Email+'" target="_blank">'+ awardee.Email +'</a></span><br>'+
                  '         </div>'+
                  '         <div>';
        if( awardee.hasOwnProperty('Testimony')){
            content += '         <i class="fas fa-comment"></i> <strong>Testimony: </strong><q class="testimony">'+ awardee.Testimony +'</q><br>';
        }
        content += '         </div>'+
                  '     </div>'+
                  '</div></div>'; 
    });
    awardeescontent.innerHTML = content.trim();
}
