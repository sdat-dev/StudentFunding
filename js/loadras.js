let requestURL = "data/ralist.json";
let request = new XMLHttpRequest();
//getting content Element to append grants information
let maincontentContainer = document.getElementsByClassName('main-content')[0];
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function(){
    let content = '';
    const rasresourcejson = request.response;
    //condition for checking if browser is Internet Explorer
    let rasresource =  ((false || !!document.documentMode))? JSON.parse(rasresourcejson): rasresourcejson; 
    let ralist = rasresource.departmentRecords;
    let teams = rasresource.rateams;
    let distinctadmins = getDistinctAdmins(ralist);
    content += '<div class="display-flex">';
    distinctadmins.forEach(function(admin){
        let departments = ralist.filter(function(rarecord){ 	
            return rarecord.ra.name == admin;
        });
        content += createadminelement(departments);
    });
    content += '</div>';
    content += createteamelement(teams);
    let mainContentElement = document.createElement('div');
    mainContentElement.id = 'accordionExample';
    mainContentElement.innerHTML = content.trim();
    maincontentContainer.appendChild(mainContentElement);
}

let getDistinctAdmins = function(ralist){
    let raadminlist = ralist.map(function(rarecord){
        return rarecord.ra['name'];
    });
    let distinctAdmins = raadminlist.filter(function(v, i, a){
        return a.indexOf(v) === i;
     });

     distinctAdmins.sort();
    return distinctAdmins;
}

let getDistinctAttributes = function(objects, attribute){
    let mappedAttributes = objects.map(function(object){
        return object[attribute];
    });
    let distinctAttributes = mappedAttributes.filter(function(v, i, a){
        return a.indexOf(v) === i;
     });

    distinctAttributes.sort();
    return distinctAttributes;
}

let createadminelement = function(departments){
    let content = '';
    let adminrecord = departments[0];
    content +=  '<div class= "col-lg-4 col-md-4 col-sm-6 search-container" id="'+ adminrecord.ra.name.replace(/ /g, '') +'">' +
                '   <p class="admin-info"><img class="admin-img" src="assets/images/ras/' + adminrecord.ra.photo + '" alt="">' +       
                '   <br><span class="title"><strong>' + adminrecord.ra.name + '</strong>' +
                '   <br><span class="email"><a href="mailto:'+ adminrecord.ra.email + '">&nbsp;'+ adminrecord.ra.email+ '</a></span></span>' +
                '   <br><span class="departments"><strong>Departments:</strong><br>';
    departments.forEach(function(department){
        content += department.name + '<br>'
    });
    content +=  '       </span>'+ 
                '   </p>' +
                '</div>';
    return content;
} 

let createteamelement = function(teams){
    let distinctteams = getDistinctAttributes(teams, 'team');
    let content = '<div id = "rateams">';
    distinctteams.forEach(function(team){
        let members = teams.filter(function(record){
            return record.team == team;
        })
        content += '<ul id='+ team.replace(/ /g, '') +'>';
        members.forEach(function(member){
            content += '<li>' + member.member.replace(/ /g, '') +'</li>';
        })
        content += '</ul>';
    });
    content += '</div>';
    return content;
} 