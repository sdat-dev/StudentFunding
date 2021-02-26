let sidemenuItems = [{"item":"Home","link":"home.html"},{"item":"Message from Event Chair","link":"messagefromeventchair.html"},{"item":"Multi-campus Conversations","link":"multi-campusconversations.html","subItems":[{"item":"January 8","link":"january8.html"},{"item":"January 15","link":"january15.html"},{"item":"January 22","link":"january22.html"}]},{"item":"Researchers","link":"researchers.html"},{"item":"Community Partners","link":"communitypartners.html"},{"item":"Planning Committee","link":"planningcommittee.html"},{"item":"Funding Opportunities","link":"fundingopportunities.html"},{"item":"Questions","link":"questions.html"}]
//SideMenu Start
//What evet written  before '//SideMenu Start' will be relace with sidemenuItems in automation scripts

let addsidemenu = function (page, markactive = true, extraindirection = false) {
    let sidemenu = document.getElementById('side-menu');

    for (let i = 0; i < sidemenuItems.length; i++) {
        let item = sidemenuItems[i];
        var addsubmenu = false;
        if (item.hasOwnProperty('subItems')) {
            if (item.item == page) {
                addsubmenu = true;
            }
            else {
                let subitems = item.subItems;
                subitems.forEach(element => {
                    if (element.item == page) {
                        addsubmenu = true;
                        return;
                    }
                });
            }
        }

        if (addsubmenu == false) {
            let link = '';
            if (item.hasOwnProperty('subItems') && item.link == '#') {
                link = item.subItems[0].link;
            }
            else {
                link = item.link;
            }
            if(extraindirection)
                link = '../'+ link;
            let menuItem = document.createElement("div");
            let menuItemContent = '<a href="' + link + '">' + item.item + '</a>';
            menuItem.innerHTML = menuItemContent;
            menuItem.classList.add('navigation-items');
            menuItem.classList.add('hover-highlight');
            if (page == item.item) {
                menuItem.setAttribute("id", "active-page");
            }
            sidemenu.appendChild(menuItem);
        }
        else {
            let menuItem = document.createElement("div");
            let menuItemContent = '<a href="';
            if(extraindirection)
                menuItemContent += '../';
            menuItemContent += (item.link != '#' ? item.link : subitems[0].link) + '">' + item.item + '</a>';
            menuItem.innerHTML = menuItemContent;
            menuItem.classList.add('navigation-items');
            menuItem.classList.add('hover-highlight');
            if (page == item.item) {
                menuItem.setAttribute("id", "active-page");
            }
            sidemenu.appendChild(menuItem);
            menuItem = document.createElement("div");
            menuItem.classList.add('expanded-navigation-item');
            let submenu = buildsubmenu(item.subItems, page, markactive, extraindirection);
            menuItemContent = submenu;
            menuItem.innerHTML = menuItemContent;
            sidemenu.appendChild(menuItem);
        }
    }
}

let buildsubmenu = function (subitems, page, markactive, extraindirection) {
    let submenu = '<div id="sub-navigation-bar">';
    for (var j = 0; j < subitems.length; j++) {
        let link =subitems[j].link;
        if(extraindirection)
                link = '../'+ link;
        if (j == 0) {
            submenu += '<div class="first-sub-navigation-item hover-highlight"';
            if (page == subitems[j].item && markactive) {
                submenu += ' id = "active-page"';
            }
            submenu += '><a href="' + link + '">' + subitems[j].item + '</a></div>';
        }
        else if (j == subitems.length - 1) {
            submenu += '<div class="last-sub-navigation-item hover-highlight"';
            if (page == subitems[j].item && markactive) {
                submenu += ' id = "active-page"';
            }
            submenu += '><a href="' + link + '">' + subitems[j].item + '</a></div>';
        }
        else {
            submenu += '<div class="sub-navigation-items hover-highlight"';
            if (page == subitems[j].item && markactive) {
                submenu += ' id = "active-page"';
            }
            submenu += '><a href="' + link + '">' + subitems[j].item + '</a></div>';
        }
    }

    return submenu;
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
                            '<div div class="panel-body" id="' + childId + '">'
                              + accordionContent + 
                            '</div>'+
                           '</div>'+
                        '</div>';
    return accordionElem;
}

let createTabNavigation = function (distincttabs, tabname) {
    let navigationContent = '<ul class="nav nav-pills" id="pills-tab" role="tablist">';
    for (let i = 0; i < distincttabs.length; i++) {
        let linkElement = '';
        let tabId = tabname + i.toString();
        if (i == 0) {
            linkElement = '<li role="presentation" class="active"><a href="#pills-' + tabId + '" id="#pills-'+ tabId + '" aria-controls="pills-'+ tabId +'" role="tab" data-toggle="pill">' + distincttabs[i] + '</a></li>';
        }
        else {
            linkElement = '<li role="presentation"><a href="#pills-' + tabId + '" id="#pills-'+ tabId +'" aria-controls="pills-'+ tabId + '" role="tab" data-toggle="pill">' + distincttabs[i] + '</a></li>';
        }
        navigationContent = navigationContent + linkElement;
    }
    navigationContent += '</ul>';
    return navigationContent;
}

let buildTabContent = function (distincttabs, tabname, tabContent) {
    let content = '<div class="tab-content" id="pills-tabContent">';

    for (let i = 0; i < distincttabs.length; i++) {
        let tabId = tabname + i.toString();
        if (i == 0) {
            content += '<div class="tab-pane fade in active" id="pills-' + tabId + '" role="tabpanel">';
        }
        else {
            content += '<div class="tab-pane fade" id="pills-' + tabId + '" role="tabpanel">';
        }
        content += tabContent[i];
        content += '</div>';
    }
    content += '</div>';
    return content;
}

function getDate(serial) {
    let utc_days = Math.floor(serial - 25569);
    let utc_value = utc_days * 86400;
    let date_info = new Date(utc_value * 1000);
    return (parseInt(date_info.getMonth(), 10) + 1) + '/' + (parseInt(date_info.getDate(), 10) + 1) + '/' + date_info.getFullYear();//, 0, minutes, seconds);
}

addfooter = function (relativepath = ".") {
    let footer = document.getElementById("footer");
    let content = "";
    content += 
            '<footer class="footer container-fluid">'+
                '<div class="region region-footer" >'+
                    '<section id="block-footer2020-2" data-block-plugin-id="block_content:58324575-ecf1-412b-b839-09d0cf593aef"'+
                        'class="block block-block-content block-block-content58324575-ecf1-412b-b839-09d0cf593aef clearfix">'+

                        '<div class="field field--name-body field--type-text-with-summary field--label-hidden field--item">'+
                            '<div class="footer-new">'+
                                '<div class="col-sm-12 col-sm-offset-0 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">'+
                                    '<a target="_blank" href="https://www.albany.edu/">'+
                                        '<img alt="University at Albany Logo" class=" img-responsive footer-logo" height="39"'+
                                        'src="'+relativepath+'/assets/images/UAlbany-logo.png" typeof="Image" />'+
                                    '</a>'+
                                    '<p>'+
                                        '<a target="_blank" href="https://www.facebook.com/universityatalbany"><span class="fab fa-facebook-f footer-icon" role="img"'+
                                                'aria-label="Facebook Icon"></span><span class="sr-only">facebook</span></a>'+
                                            '<a target="_blank" href="https://twitter.com/ualbany/"><span class="fab fa-twitter footer-icon" role="img"'+
                                                'aria-label="Twitter Icon"></span><span class="sr-only">twitter</span></a>'+
                                            '<a target="_blank" href="https://www.instagram.com/ualbany/"><span class="fab fa-instagram footer-icon" role="img"'+
                                                'aria-label= "Instagram Icon"></span><span class="sr-only">instagram</span></a>'+
                                            '<a target="_blank" href="https://www.snapchat.com/add/ualbany"><span class="fab fa-snapchat-ghost footer-icon" role="img"'+
                                                'aria-label="Snapchat Icon"></span><span class="sr-only">snapchat</span></a>'+
                                            '<a target="_blank" href="https://www.youtube.com/c/ualbany"><span class="fab fa-youtube footer-icon" role="img"'+
                                                'aria-label="YouTube Icon"></span><span class="sr-only">youtube</span></a>'+
                                            '<a target="_blank" href="https://www.linkedin.com/school/university-at-albany/"><span class="fab fa-linkedin-in footer-icon" role="img"'+
                                                'aria-label="LinkedIn Icon"></span><span class="sr-only">linkedin</span></a>'+
                                    '</p>'+
                                '</div>'+
                            '</div>'+
                            '<div class="footer-end">'+
                            '<div class="col-sm-12 col-md-6 address-phone">'+
                            '<a target="_blank" href="https://www.google.com/maps/place/1400+Washington+Ave,+Albany,+NY+12222/@42.6859115,-73.8287166,17z/data=!3m1!4b1!4m5!3m4!1s0x89de0b3ce5c93e45:0x4cdbe8d7b52fa412!8m2!3d42.6859115!4d-73.8265279"'+
                                        'target="_blank">1400 Washington Avenue, Albany, NY 12222</a> | Phone: <a'+
                                        'target="_blank" href="tel:5184423300">518-442-3300</a>'+
                                '</div>'+
                                '<div class="col-sm-12 col-md-6 copyright" style="align:center;">'+
                                '©2021 University at Albany |'+
                                '<a target="_blank" href="https://www.albany.edu/web-services"> Accessibility</a> |'+
                                '<a target="_blank" href="https://wiki.albany.edu/display/public/askit/Internet+Privacy+Policy"> Privacy Policy</a> |'+
                                '<a target="_blank" href="http://www.albany.edu/equity-compliance/"> Title IX</a>'+
                            '</div> '+

                            '</div>'+
                        '</div>'+
                    '</section>'+
                '</div>'+
            '</footer >';


        // '<section id="copyright-content">'+
        //     '<p>© 2020&nbsp;University at Albany</p>'+
        // '</section>';
        footer.innerHTML = content;
}

let getDistinctAttributes = function (objects, attribute) {
    if(objects == null)
        return [];
    let mappedAttributes = objects.map(function (object) {
        return object[attribute];
    });
    let distinctAttributes = mappedAttributes.filter(function (v, i, a) {
        return a.indexOf(v) === i;
    });

    return distinctAttributes;
}

let appendMainContent = function (maincontentContainer, content) {
    let mainContentElement = document.createElement('div');
    mainContentElement.classList.add('accordion');
    mainContentElement.id = 'accordionExample';
    mainContentElement.innerHTML = content.trim();
    maincontentContainer.appendChild(mainContentElement);
}

let formatPara = function(text){
    let result = '';
    if(typeof text === "undefined" || isNaN(text) == false){
        return text;
    }
    else{
    let paras = text.split("\n\n");
    for(var i=0; i< paras.length; i++){
        let para = paras[i];

            let lines = para.split(/(\n(?=\d |\d.\t|[1-9]\d([0-9]\d){0,2}| \d.\t|\r\n|•\t|i\.|ii\.|iii\.|iv\.|v\.))|\r\n/);
          
           
                for(var j =0; j< lines.length; j++)
                {
                    if(lines[j] == '' || typeof lines[j] === "undefined") continue;
                    result += '<p>'+lines[j]+'</p>'; 
                }
            
        }        
    }
    return result;
}