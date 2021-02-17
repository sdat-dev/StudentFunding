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
    
    pastevents = events.filter(function (event) {
        if(event.When == "Every Thursday , Noon")
            return true;
        if(event.When.indexOf(",") > 0){
            let when = event.When.split(",");
            var month = getmonth(when[1].trim().split(" ")[0]);
            var day = (when[1].trim().split(" ")[1]).trim();
            day = day.length > 2 ? day.substring(0, day.length-2) : day;
            var eventdate = new Date();
            eventdate.setMonth(month);
            eventdate.setDate(day);
            if(when.length > 3){
                var year = when[2].trim();
                eventdate.setFullYear(year);
            }
            var today = new Date();
            return eventdate < today;
        }
        else
        {
            return false;
        }
    });

    pastevents.sort((a, b)=>{
        let when = a.When.split(",");
        var month = getmonth(when[1].trim().split(" ")[0]);
        var day = (when[1].trim().split(" ")[1]).trim();
        day = day.length > 2 ? day.substring(0, day.length-2) : day;
        var eventdate1 = new Date();
        eventdate1.setMonth(month);
        eventdate1.setDate(day);
        if(when.length > 3){
            var year = when[2].trim();
            eventdate1.setFullYear(year);
        }
        // Date 2
        when = b.When.split(",");
        month = getmonth(when[1].trim().split(" ")[0]);
        day = (when[1].trim().split(" ")[1]).trim();
        day = day.length > 2 ? day.substring(0, day.length-2) : day;
        var eventdate2 = new Date();
        eventdate2.setMonth(month);
        eventdate2.setDate(day);
        if(when.length > 3){
            var year = when[2].trim();
            eventdate2.setFullYear(year);
        }
        if(eventdate1 == eventdate2)
            return 0;
        return eventdate1 > eventdate2 ? -1 : 1;
    });

    pastevents.forEach(function(event){
        content = content + 
        '<div class = "col-sm-6 col-md-6 col-lg-6 col-xl-6 no-padding-left">'+
        '   <div class = "event-box">'+
        '       <button class="event-title"><h4 class="title_text"><span class="spanbold">' + event.Title +'</span>';
        if(event.hasOwnProperty("Purpose") && event.Purpose != ""&& event.Purpose != ""){
            content += '<br>('+ event.Purpose + ')';
        }
        content += '</h4>';
        if(event.hasOwnProperty('image'))
        {
            content +='<img class="title_icon" src="assets/images/'+event.image+ '"/>';
        }
        content +='</button><div class="event-info"><p><span class = "spanbold">When: </span>'+ event.When+'</p>'+
        '       <p><span class = "spanbold">Where: </span>'+ event.Where+'</p>';
        if(event.hasOwnProperty('Description'))
        {
            content = content +  '<p><span class = "spanbold">Description: </span>'+ event.Description+'</p>';
        }
        if(event.hasOwnProperty('handout'))
        {
            content += '<p><span class = "spanbold">Handouts:</span></br>'+
                        '<ul class="dot-list"><li><a href="' + event.handout +'" target="_blank">Handout1</a></li>';
            if(event.hasOwnProperty('handout2'))  
            {
                content += '<li><a href="' + event.handout2 +'" target="_blank">Handout2</a></li>';
            }     
            content += '</ul></p>';         
        }
        if(event.hasOwnProperty('recordings'))
        {
            content += '<p><span class = "spanbold">Recording:</span><a href="' + event.recordings +'" target="_blank"> Link </a>';
            if(event.hasOwnProperty('password'))
                content += '<span class="italicfont">(Password:' + event.password + ')</span>';
                content += '</p>';
        }
        content = content + '      </div>'+
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