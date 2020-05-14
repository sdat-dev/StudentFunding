let ellipsemenu = document.getElementById('ellipse-menu');
let pic = ellipsemenu.getElementsByTagName("image")[0];
let button1 = document.getElementById("embutton1");
let button2 = document.getElementById("embutton2");
let button3 = document.getElementById("embutton3");
let button4 = document.getElementById("embutton4");
let button5 = document.getElementById("embutton5");
let button6 = document.getElementById("embutton6");
let desc = document.getElementById("ellipse-item-desc");

function clickHandler(button)
{
    unclickPrevious(button.id);
    if(button.classList.toggle("clicked"))
    {
        pic.style.visibility = "hidden";
        switch(button.id){
            case "embutton1":
                desc.innerHTML = "Fellowships provide unique opportunities to conduct novel research,"+
                                 "teach in a classroom, provide community service, or even work in "+
                                 "a public or private sector organization positioning you for future success";
                                 desc.classList.add("embutton1");
                break;
            case "embutton2":
                desc.innerHTML = "Mentorship will provide important opportunities strengthen your" + 
                                 "skills and knowledge, while providing  professional socialization and networking"+
                                 " and personal support";
                                 desc.classList.add("embutton2");
                break;
            case "embutton3":
                desc.innerHTML = "These awards shine a light on your talents and abilities, while"+
                                 " enabling you to establish new connections, build confidence, and create new "+
                                 "opportunities for future growth";
                                 desc.classList.add("embutton3");
                break;
            case "embutton4":
                desc.innerHTML = "Opportunity to acquire new knowledge and skills to enhance your transition"+
                                 " from to further your education or to pursue a future profession";
                                 desc.classList.add("embutton4");
                break;
            case "embutton5":
                desc.innerHTML = "Fellowships/assistantships provide opportunities for first-hand experience "+
                                 "in research, training, service or work in a real-life setting";
                                 desc.classList.add("embutton5");
                break;
            case "embutton6":
                 desc.innerHTML = "Winning an award provides significant financial benefit including "+
                                  "stipends, tuition, travel support and more.";
                                  desc.classList.add("embutton6");
                 break;
            default:
                desc.innerHTML = "";
        }
    }
    else
    {
        clear();
    }
}

function clear()
{
    desc.className = "";
    desc.innerHTML = "";
    pic.style.visibility = "visible";
}

function unclickPrevious(id){
    var prev_id = desc.className;
    if(prev_id  != "" && id != prev_id )
    {
        document.getElementById(prev_id).classList.remove("clicked");
        desc.className = "";
    }
}

button1.onclick = function() {clickHandler(this)};
button2.onclick = function() {clickHandler(this)};
button3.onclick = function() {clickHandler(this)};
button4.onclick = function() {clickHandler(this)};
button5.onclick = function() {clickHandler(this)};
button6.onclick = function() {clickHandler(this)};