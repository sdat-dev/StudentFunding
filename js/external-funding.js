window.onload = function () {
    let datarequestURL = "data/externalawards.json";
    axios.get(datarequestURL).then(responses => {
        let solicitations = responses.data;
        // addfooter();
        // addSpinData();
        parseData(solicitations);
        clearsearch();
    })
}
var parseData = function (p) {
    data = p;
    if(getAccordiationData(p))
        $('#waiter').hide();
};

function getAccordiationData(funding_data) {

    //getting content Element to append grants information 
    let distinctCategories = ['Undergraduate','Graduate','Doctoral or Terminal Degree'];
    let content = '<div class="panel-group" id = "accordion-ops" role="tablist" aria-multiselectable="true">';
    let counter = 1;

    var Undergraduate_arr = [];
    var Graduate_arr = [];
    var Doctoral_arr = [];

    for (var j = 0; j < funding_data.length; j++) {
        var programs_value = funding_data[j] , ug = false , ms = false , doc = false;
        for(var l = 0 ; l < programs_value.applicant_type.length; l++){
            if(programs_value.applicant_type[l] == "Undergraduate Student"){
                if(!ug){
                    Undergraduate_arr.push(programs_value);
                    ug=true;
                }
            }
            if(programs_value.applicant_type[l] == "Masters Student"){
                if(!ms){
                    Graduate_arr.push(programs_value);
                    ms=true;
                }
            }
            if(programs_value.applicant_type[l] == "Doctoral or Terminal Degree Student"){
                if(!doc){
                    Doctoral_arr.push(programs_value);
                    doc=true;
                }
            }
        }

    }


    
    for (var k = 0; k < distinctCategories.length; k++) {
        
        var length = 0;
        var img_url = "";
        var arr = [];
        

        if (distinctCategories[k] == 'Undergraduate') {
            length = setNoOfSoils(Undergraduate_arr);
            arr = Undergraduate_arr;
        }

        if (distinctCategories[k] == 'Graduate') {
            length = setNoOfSoils(Graduate_arr)
            arr = Graduate_arr;
        }

        if (distinctCategories[k] == 'Doctoral or Terminal Degree') {
            length = setNoOfSoils(Doctoral_arr);
            arr = Doctoral_arr;
        }

        let categoryHeader = distinctCategories[k] + ' (<span class="noofsolis">' + length + '</span> Opportunities)';
        // console.log("categoryHeader", categoryHeader);
        let accordionContent = generateFederalAccordionContent(arr); 
        let collapseId = "collapse" + counter;
        let headerId = "heading" + counter;
        let childId = "child" + counter;
        let accordionElem = generateAccordionElem(1, collapseId, headerId, "accordion-ops", childId, categoryHeader, accordionContent);
        content = content + accordionElem;
        counter++;
    }
    content += '</div>';

    let accordionElement = document.getElementsByClassName('awards-container')[0];
    accordionElement.classList.add('accordion');
    accordionElement.id = 'accordionExample';
    accordionElement.innerHTML = content.trim();
    result = true;
    return result;
}

function setNoOfSoils(arr) {
    let a = [{day: 'numeric'}, {month: 'short'}, {year: 'numeric'}];
    var today = join(new Date, a, '-');
    var count = 0;
    var dueDate = "";
    var deadlineDate = "";
    for(i=0;i<=arr.length;i++){
        if (arr[i] != undefined && arr[i].NextDeadlineDate != null){
            if (arr[i].NextDeadlineDate.length <= 11) {
                dueDate = arr[i].NextDeadlineDate;
                deadlineDate = new Date(arr[i].NextDeadlineDate).toLocaleDateString();
            }
            else {
                var dateArr = arr[i].NextDeadlineDate.split(" ");
                dueDate = arr[i].NextDeadlineDate.substring(1, 11);
                deadlineDate = new Date(dateArr[0]).toLocaleDateString();
            }
        }
        else if(arr[i] != undefined){
            dueDate = "Continuous Submission/Contact the Program Officer";
            count++;
        }
        if (dueDate != "Continuous Submission/Contact the Program Officer") {
            if (dueDate!="" && Date.parse(dueDate) > Date.parse(today) || dueDate == "Continuous Submission/Contact the Program Officer") {
                count++;
            }
        }
    }
    return count;
}

function join(t, a, s) {
    function format(m) {
       let f = new Intl.DateTimeFormat('en', m);
       return f.format(t);
    }
    return a.map(format).join(s);
}

let generateFederalAccordionContent = function (arr){ 
    let content = '';
    var today = new Date();
    var flag = false;
    var flag_defunct = true;

    arr.sort(function(a, b) {
        var deadlineDate_a = new Date();
        var deadlineDate_b = new Date();
        if (a.NextDeadlineDate != null) {
    
            if (a.NextDeadlineDate.length <= 11) {
                deadlineDate_a = new Date(a.NextDeadlineDate);
            }
            else {
                var dateArr = a.NextDeadlineDate.split(" ");
                deadlineDate_a = new Date(dateArr[0]);
            }
        }
    
        if (b.NextDeadlineDate != null) {
    
            if (b.NextDeadlineDate.length <= 11) {
                deadlineDate_b = new Date(b.NextDeadlineDate);
            }
            else {
                var dateArr = b.NextDeadlineDate.split(" ");
                deadlineDate_b = new Date(dateArr[0]);
            }
        }   
        return deadlineDate_a-deadlineDate_b;
    });

    arr.sort(function( a, b ){
        a_duedate = getDueDate(a);
        b_duedate = getDueDate(b);
        if(a_duedate.length <=11 && b_duedate.length <= 11){
            if ( Date.parse(a_duedate) < Date.parse(b_duedate)){
                return -1;
            }
            if ( Date.parse(a_duedate) > Date.parse(b_duedate)){
                return 1;
            }
        }else{
            if(b_duedate.length >11){
                return -1;
            }
        }
        return 0;
    });

    for (let i = 0; i < arr.length; i++) {
        flag = false;
        var dueDate = "";
        var deadlineDate = "";
        var Estimated_Funding = "";
        if (arr[i].NextDeadlineDate != null) {
            if (arr[i].NextDeadlineDate.length <= 11) {
                dueDate = arr[i].NextDeadlineDate;
                deadlineDate = new Date(arr[i].NextDeadlineDate).toLocaleDateString();
            }
            else {
                var dateArr = arr[i].NextDeadlineDate.split(" ");
                dueDate = arr[i].NextDeadlineDate.substring(1, 11);
                deadlineDate = new Date(dateArr[0]).toLocaleDateString();

            }
        } else {
            dueDate = "Continuous Submission/Contact the Program Officer"
            flag = true;
        }
        var formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        });
        if (arr[i].total_funding_limit === 0) {
            Estimated_Funding = "N/A";
        } else {
            Estimated_Funding = formatter.format(arr[i].total_funding_limit);
        }

        var description = '';
        if(arr[i].synopsis != null){
            var description = arr[i].synopsis.replace(/<[^>]*>/g, '');
        }
        if (dueDate != "Continuous Submission/Contact the Program Officer") {
            if (Date.parse(dueDate) > Date.parse(today)) {
                flag = true;
                dueDate = deadlineDate;
            }
        }

        if (checkFileExists(arr[i].img_url)) {
            img_url = arr[i].img_url;
        }
        else {
            img_url = "https://sdat-dev.github.io/resources/healthequity/assets/logos-funding-opportunities/SPIN_logo.png";
        }

        if(flag){
            let imageElement = (arr[i].logo == '') ? '' : '<div class = "col-xl-2 col-lg-3"><img class = "agency-logo" src = "' + img_url + '" style="max-width: -webkit-fill-available;" /></div>';
            content += '<div class = "display-flex opportunity-container search-container">' + imageElement +
                '<div class = "col-xl-10 col-lg-9">' + '<h4 class = "opp-header black-content-header-no-margin"><b style="font-size: 2.4rem; line-height: 2.9rem;">' + arr[i].prog_title + '</b></h4><br>' + '<div class = "opp-details display-flex">' +
    
                '<div class = "col-sm-12 col-md-12 col-lg-12 col-xl-6">' +
                '<i class="fas fa-flag"></i> <strong>Agency Name: </strong>' + arr[i].spon_name +
                '<br>' +
                '<i class="fas fa-dollar-sign"></i> <strong>Estimated Funding: </strong>' + Estimated_Funding +
                '<br>' +
                '</div><div class = "col-sm-12 col-md-12 col-lg-12 col-xl-6">' +
                '<i class="fas fa-calendar-day"></i> <strong>Date: </strong>' + dueDate +
                '<br></div></div></div>' +
                '<br><br><br><br><br><br><br><br><br><p class = "opp-description">' + description + '</p>';
            if (arr[i].deadline_note != null && arr[i].deadline_note != "") {
                content += buildduedatenote(arr[i].deadline_note);
            }
            if(arr[i].programurl != null){
                content += '<br><p class="width100"><button type = "button" class = "details-button" onclick = "window.open(\'' + arr[i].programurl + '\',\'_blank\')">View Details</button></p>';
            }else{
                content += '<br><p class="width100"><button type = "button" class = "details-button" onclick = "window.open(\'https://spin.infoedglobal.com/Program.html?' + arr[i].id + '\',\'_blank\')">View Details</button></p>';
            }
            content += '<hr class="solid" style="border-top: 1.5px solid #bbb; width: 100%"></hr></div>';
        }
    }
    return content;
}

function getDueDate(arr) {
    var dueDate = "";
    if (arr.NextDeadlineDate != null) {
        if (arr.NextDeadlineDate.length <= 11) {
            dueDate = arr.NextDeadlineDate;
            deadlineDate = new Date(arr.NextDeadlineDate).toLocaleDateString();
        }
        else {
            dueDate = arr.NextDeadlineDate.substring(1, 11);
        }
    } else {
        dueDate = "Continuous Submission/Contact the Program Officer";
    }
    return dueDate;
}

let counter = 1;
let buildduedatenote = function (deadlinenote) {
    let content = "";
    content = '<p class="mav-header width100">' +
        '<button class="btn btn-mav details-button collapsed" type="button" data-toggle="collapse" data-target="#deadlinenote' + counter + '" aria-expanded="false" aria-controls="deadlinenote' + counter + '">Due Date Note ' +
        '<i class="fas fa-chevron-up"></i></button>' +
        '</p>' +
        '<div class="collapse width100" id="deadlinenote' + counter + '">' +
        '<div class="card card-body">' +
        deadlinenote +
        '</div>' +
        '</div>';
    counter++;
    return content;
}

let generateAccordionElem = function (level, collapseId, headerId, parentId, childId, header, accordionContent) {
    var headerno = level + 2;
    
    let accordionElem = '<div class="panel panel-default">'+
                          '<div class="panel-heading level' + level + '" role="tab" id="'+ headerId +'">' +
                             '<h' + headerno + ' class = "panel-title">' +
                                 '<button class="btn btn-link collapsed" type="button" data-toggle="collapse"  data-parent="#'+ parentId + '" data-target="#'+ collapseId + '" aria-expanded="false" aria-controls="'+collapseId+'">' +
                                    header + '<i class="fas fa-chevron-up"></i>'+
                                  '</button>'+
                             '</h' + headerno + '>'+
                          '</div>'
                        + '<div id="' + collapseId + '" class="panel-collapse collapse" role="tabpanel" aria-labelledby="'+headerId+'">'+
                            '<div class="panel-body" id="' + childId + '">'
                              + accordionContent + 
                            '</div>'+
                           '</div>'+
                        '</div>';
    return accordionElem;
}

let checkFileExists = function (url) {
    var xhr = new XMLHttpRequest();
    xhr.open('HEAD', url, false);
    xhr.send();

    if (xhr.status == "404") {
        return false;
    } else {
        return true;
    }
}