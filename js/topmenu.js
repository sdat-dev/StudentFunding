let addTopMenu = function(){
    let navheader = document.getElementById('navbar-header');
    let headerContent = '<div class="ualbany-logo-wrapper">'+
                            '<span class="helper">'+
                            '</span>'+
                            '<a href="https://www.albany.edu/">'+
                                '<img class="ualbany-logo" src="assets/logos/logo.png" />'+
                            '</a>'+
                            '<div class="topnav-right">' +
                                '<a href="https://www.albany.edu/myualbany">MYUALBANY</a>'+
                                '<a href="https://www.albany.edu/apply-now">APPLY</a>'+
                                '<a href="https://www.alumni.albany.edu/s/1642/18-giving/landing.aspx?sid=1642&gid=2&pgid=2040&appealcode=uahome">'+
                                '   GIVE</a>'+ 
                                '<button type="button" style="padding-left:25px;padding-right:15px;" class="btn1" id="search-toggle">'+
                                '<span class="fa fa-search"></i>'+
                                '</button>'+
    
                       
                                '<span class="mainSearch" style="margin-right:-307px; display:inline-block;">'+
                                '<button type="button" style="padding-left:25px;padding-right:15px;" class="btn1" id="times-button">'+
                                '<span class="fa fa-times"></i>'+
                                '</button>'+
                               
                                '<input  style="vertical-align:middle;" class="searchInput" id="textInput" type="text"><input class="submitButton" value="Search" type="submit" onclick="getValue()">'+
                                '</span>'   +
                            '</div>'+

                            
                        '</div>';
    navheader.innerHTML = headerContent;

    let megamenu = document.getElementById('mega-menu');
    let megemenuContent = '<div class="hh collapse" id="navbarSupportedContent">' +
                                '<div class="row fo">' +
                                    '<div class="col-md-3 coll">'+
                                        '<div class="bor align-self-right">'+
                                            '<ul>'+
                                                '<li class="headingList">INFORMATION FOR</li>'+
                                                '<li id="test_list" class="listSub"><a class="linkforlist" href="https://www.albany.edu/current-students">Current Students </a></li>'+
                                                '<li class="listSub"><a class="linkforlist" href="https://www.albany.edu/faculty-and-staff">Faculty & Staff</a></li>'+
                                                '<li class="listSub"><a class="linkforlist" href="https://www.albany.edu/admissions">Future/Prospective Students</a></li>'+
                                                '<li class="listSub"><a class="linkforlist" href="https://www.albany.edu/parents-visitors">Parents & Visitors</a></li>'+
                                                '<li class="listSub"><a class="linkforlist" href="https://www.alumni.albany.edu/s/1642/bp19/home.aspx?gid=2&pgid=61">Alumini</a></li>'+
                                                '<li class="listSub"><a class="linkforlist" href="https://www.albany.edu/giving">Donors</a></li>'+
                                                '<li class="listSub"><a class="linkforlist" href="https://www.albany.edu/puerto-rico-usvi-admissions/">Students from Puerto Rico/USVI</a></li>'+
                                                '<li class="listSub"><a class="linkforlist" href="https://www.albany.edu/corporate-engagement">Corporate, Nonprofit and Public-Sector <br />Partners</a></li>'+
                                            '</ul>'+
                                        '</div>'+
                                    '</div>'+
                                    '<div class="col-md-2.5 col2" style="padding-right: 0px;">'+
                                        '<ul>'+
                                            '<li class="headingList">TOPICS</li>'+
                                            '<li class="listSub"><a class="linkforlist" href="https://www.albany.edu/about-ualbany">About UAlbany</a></li>'+
                                            '<li class="listSub"><a class="linkforlist" href="https://www.albany.edu/academics"> Academics</a></li>'+
                                            '<li class="listSub"><a class="linkforlist" href="https://www.albany.edu/admissions"> Admissions</a></li>'+
                                            '<li class="listSub"><a class="linkforlist" href="https://www.albany.edu/publicengagement/">Public Engagement</a></li>'+ 
                                            '<li class="listSub"><a class="linkforlist" href="https://www.albany.edu/research-ualbany">Research</a></li>'+
                                            '<li class="listSub"><a class="linkforlist" href="https://www.albany.edu/schools-colleges-affiliations">Schools, Colleges & Affiliations</a></li>'+
                                            '<li class="listSub"><a class="linkforlist" href="https://www.albany.edu/financialaid/">Financial Aid</a></li>'+
                                        '</ul>'+
                                    '</div>'+
                                    '<div class="col-md-2 col1" style="margin-top: 1em; margin-left: 4%;">'+
                                        '<div class="bor ">'+
                                            '<ul>'+
                                                '<li class="headingList"></li>'+
                                                '<li class="listSub"><a class="linkforlist" href="https://www.albany.edu/international/"> International Education</a></li>'+
                                                '<li class="listSub"><a class="linkforlist" href="https://library.albany.edu/"> Libraries</a></li>'+
                                                '<li class="listSub"><a class="linkforlist" href="https://www.albany.edu/president">Office of the President</a></li>'+
                                                '<li class="listSub"><a class="linkforlist" href="https://www.albany.edu/arts">Arts</a></li>'+
                                                '<li class="listSub"><a class="linkforlist" href="https://ualbanysports.com/">Athletics</a></li>'+
                                                '<li class="listSub"><a class="linkforlist" href="https://www.albany.edu/student-life">Student Life</a></li>'+
                                            '</ul>'+
                                        '</div>'+
                                    '</div>'+
                                    '<div class="col-md-2 col2">'+
                                        '<ul>'+
                                            '<li class="headingList">RESOURCES</li>'+
                                            '<li class="listSub" style="margin-top: -5px;"><a class="linkforlist" href="https://www.albany.edu/calendars-and-schedules">Calendars</a></li>'+
                                            '<li class="listSub" style="margin-top: -5px;"><a class="linkforlist" href="https://www.albany.edu/admissions#virtualtour"> Virtual Tour</a></li>'+
                                            '<li class="listSub" style="margin-top: -5px;"><a class="linkforlist" href="https://www.albany.edu/about/directories.php">People</a></li>'+
                                            '<li class="listSub" style="margin-top: -5px;"><a class="linkforlist" href="https://www.albany.edu/pmts">Parking & Transit</a></li>'+
                                            '<li class="listSub" style="margin-top: -5px;"><a class="linkforlist" href="https://www.albany.edu/its/">IT Services</a></li>'+
                                        '</ul>'+
                                    '</div>'+
                                    '<div class="col-md-1.5 " style="margin-top: 2em;">'+
                                        '<ul>'+
                                            '<li class="headingList"></li>'+
                                            '<li class="listSub" style="margin-top: -5px;"><a class="linkforlist" href="https://events.albany.edu/cal/main/showEventList.rdo;jsessionid=npziD_rxShBzkDjVTJfRzRIX5wtUC5BC3yieI27B.bede-svc-p101">Events</a></li>'+
                                            '<li class="listSub" style="margin-top: -5px;"><a class="linkforlist" href="https://www.albany.edu/map/">Maps</a></li>'+
                                            '<li class="listSub" style="margin-top: -5px;"><a class="linkforlist" href="https://www.albany.edu/a-z-index"> A-Z Index</a></li>'+
                                            '<li class="listSub" style="margin-top: -5px;"><a class="linkforlist" href="https://www.albany.edu/news/">News Center</a></li>'+
                                            '<li class="listSub" style="margin-top: -5px;"><a class="linkforlist" href="https://www.albany.edu/career/">Career Services</a></li>'+
                                        '</ul>'+
                                    '</div>'+
                                '</div>'+
                                '<div class="d-flex justify-content-center">'+
                                    '<div class=" p-2">'+ 
                                        '<a  href="https://www.albany.edu/main/facebook.shtml">'+
                                            '<span class="fab fa-facebook-f" style="font-size:24px; color:white"></span>'+
                                        '</a>'+
                                    '</div>'+
                                    '<div class="p-2">'+ 
                                        '<a href="https://www.albany.edu/main/twitter.shtml">'+
                                            '<i class="fab fa-twitter" style="font-size:24px;color:white"></i>'+
                                        '</a>'+
                                    '</div>'+
                                    '<div class="p-2">'+ 
                                        '<a href="https://www.instagram.com/ualbany/">'+
                                            '<i class="fab fa-instagram" style="font-size:24px; color:white"></i>'+
                                        '</a>'+
                                    '</div>'+
                                    '<div class="p-2">'+ 
                                        '<a href="https://www.snapchat.com/add/ualbany">'+
                                            '<i class=" fab fa-snapchat" style="font-size:24px; color:white"></i>'+
                                        '</a>'+
                                    '</div>'+
                                    '<div class="p-2">'+ 
                                        '<a href="https://www.albany.edu/main/youtube.shtml">'+
                                            '<i class=" fab fa-youtube"  style="font-size:24px; color:white"></i>'+
                                        '</a>'+
                                    '</div>'+
                                    '<div class="p-2">'+ 
                                        '<a href="https://www.albany.edu/main/linkedin.shtml">'+
                                            '<i class="  fab fa-linkedin" style="font-size:24px; color:white"></i>'+
                                        '</a>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                            '<div class="test">'+
                                '<button id="buttonatag" data-toggle="collapse" data-target=".hh" aria-expanded="false"'+
                                    'aria-controls=".hh" aria-label="Toggle navigation" class="collapsed">'+
                                    'MENU<br><i class="fa fa-bars"></i>'+
                                '</button>'+
                            '</div>';
    megamenu.innerHTML = megemenuContent;
}

addTopMenu();

$('#buttonatag').click(function (e) {


    e.preventDefault(); // Prevent default Browser anchor-click behavior   
    if($(e.target).hasClass("fa") ){ 
        flag_fa=true;
        $("#buttonatag").trigger('click'); 
       
    }
    else{

       
            let innerHTML = this.innerHTML;
            if (innerHTML.includes('MENU') == true) {
                this.innerHTML = 'CLOSE<br><i  class="fa fa-times"></i>';
            }
            else {
                this.innerHTML = 'MENU<br><i  class="fa fa-bars"></i>';
            }
        
    }
    

   
});

$(document).ready(function () {
    $(document).click(function (event) {
        var click = $(event.target);
        var _open = $(".hh").hasClass("show");
        if (_open === true && !click.hasClass("collapsed")) {
            $("#buttonatag").click();
        }
    });


var flag=false;
   /*  $('#search-toggle').click(function() {
       //$('.mainSearch').removeClass('hidden');
        $('.mainSearch').addClass('inlineDisplay');
        $('.search-button').addClass('hidden');
        $('#search-toggle').addClass('hidden');


       //$('.mainSearch').toggle("slide", { direction: "left" }, 5000);


        $('.mainSearch').show('slow');   
            
  
      });
     
  
      $('#times-button').click(function() {
      //  $('.mainSearch').addClass('hidden');
        //$('.mainSearch').removeClass('inlineDisplay');
        $('.search-button').removeClass('hidden');
        $('#search-toggle').removeClass('hidden');

      //  $('.mainSearch').toggle("slide", { direction: "right" }, 1000);

        $('.mainSearch').hide('slow');   

      });
 */


$('#search-toggle').one('click', function() {

    $(".mainSearch").animate({ "margin-right":  "0px" },500);    
    flag=true;
});




$('#search-toggle').click(function() {
   //$('.mainSearch').removeClass('hidden');
   if(flag){
    $('.mainSearch').addClass('inlineDisplay');
    // $('.search-button').addClass('hidden');
     $('#search-toggle').addClass('hidden');


    //$('.mainSearch').toggle("slide", { direction: "left" }, 5000);

   // $(".mainSearch").animate({marginRight: "-300px"}, 500 );
   //  $('.mainSearch').toggle("slide");   
     
   $(".mainSearch").animate({ "margin-right":  "0px" },500); 
   }
   
   });
  

   $('#times-button').click(function() {
   //  $('.mainSearch').addClass('hidden');
     //$('.mainSearch').removeClass('inlineDisplay');
    // $('.search-button').removeClass('hidden');
$('#search-toggle').removeClass('hidden');

   //  $('.mainSearch').toggle("slide", { direction: "right" }, 1000);


   $(".mainSearch").animate({ "margin-right":  "-307px" },500); 
   

   // $('.mainSearch').hide('slow');   

   });




     
  
     


});
$('#navbarSupportedContent').collapse('hide');



function getValue() {
    var text_input = document.getElementById('textInput').value;
    console.log(text_input);
  
  
  
  
  if(text_input === ""){
      window.open("https://www.albany.edu/search/search_results.php?cx=009452333206896616693%3Aabbjmkl5yry&cof=FORID%3A11&ie=UTF-8&sa.x=0&sa.y=0&sa=Search&siteurl=www.albany.edu%2F&ref=www.google.com%2F&ss=233j24671j6&q=");
  
  }else{
    window.open("https://www.albany.edu/search/search_results.php?cx=009452333206896616693%3Aabbjmkl5yry&cof=FORID%3A11&ie=UTF-8&sa.x=0&sa.y=0&sa=Search&siteurl=www.albany.edu%2F&ref=www.google.com%2F&ss=233j24671j6&q="+text_input);
  }
  }
  