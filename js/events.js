let requestURL = "data/events.json";
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
let eventsContainer = document.getElementsByClassName('event-container')[0];
request.onload = function () {
    const eventsjson = request.response;  
    //condition for checking if browser is Internet Explorer
    let events =  ((false || !!document.documentMode))? JSON.parse(eventsjson): eventsjson;
    
    let content = '';
    upcommingevents = events.filter(function (event) {
        let when = event.When.split(",")[1];
        var month = getmonth(when.trim().split('\s')[0]);
        var day = (when.trim().split('\s')[1]);
        day = day.substring(0, day.length - 2);
        var eventdate = new Date();
        eventdate.setMonth(month);
        eventdate.setDate(day);
        var today = new Date();
        return eventdate >= today;
    });

    upcommingevents.forEach(function(event){
        content = content + 
        '<div class = "col-sm-6 col-md-6 col-lg-6 col-xl-6 no-padding-left">'+
        '   <div class = "event-box">'+
        '       <button class="event-title"><h4 class="title_text"><span class="spanbold">' + event.Title +'</span><br>('+
        event.Purpose +
        '       )</h4><img class="title_icon" src="assets/images/'+event.image+ '"/></button>' +
        '       <div class="event-info"><p><span class = "spanbold">When: </span>'+ event.When+'</p>'+
        '       <p><span class = "spanbold">Where: </span>'+ event.Where+'</p>';
        if(event.hasOwnProperty('Description'))
        {
            content = content +  '<p><span class = "spanbold">Description: </span>'+ event.Description+'</p>';
        }
        content = content + '       <div class = "register-button"><a href="'+ event.Link +'" target="_blank">Register</a></div></div>'+
        '   </div>' +
        '</div>';
    }); 
    eventsContainer.innerHTML = content.trim();
}

function getmonth(calendarMonth){

    var months = ['January','February','March','April','May','June','July','August',
                'September','October','November','December'];
    return months.indexOf(calendarMonth);
}

let mainContent = document.getElementsByClassName('main-content')[0];
mainContent.addEventListener('click', function(e){
    if(e.target && e.target.parentElement.className == 'event-title'||
       e.target && e.target.parentElement.parentElement.className == 'event-title'){

            let eventinfo = e.target.parentElement.nextElementSibling;
            if(e.target.parentElement.parentElement.className == 'event-title')
            {
                eventinfo = e.target.parentElement.parentElement.nextElementSibling;
            }

            if(eventinfo.style.display == "block" || eventinfo.style.display == "")
	        {
                //setting current content display to block to show content
                eventinfo.style.display = "none";
            }      
            //If content is not hidden, changing the display property to none to hide content
            else 
            {
                eventinfo.style.display = "block";
            }
    }
 })