function DateFunc(){
    var d = new Date();
    var week_day; 
    var month;
    if(d.getDay()==0){
        week_day="Κυριακή";
    }
    else if(d.getDay()==1){
        week_day="Δευτέρα";
    }
    else if(d.getDay()==2){
        week_day="Τρίτη";
    }
    else if(d.getDay()==3){
        week_day="Τετάρτη";
    }
    else if(d.getDay()==4){
        week_day="Πέμπτη";
    }
    else if(d.getDay()==5){
        week_day="Παρασκευή";
    }
    else if(d.getDay()==6){
        week_day="Σάββατο";
    }

    if(d.getMonth()==0){
        month="Ιανουαρίου";
    }
    else if(d.getMonth()==1){
        month="Φεβρουαρίου";
    }
    else if(d.getMonth()==2){
        month="Μαρτίου";
    }
    else if(d.getMonth()==3){
        month="Απριλίου";
    }
    else if(d.getMonth()==4){
        month="Μαϊου";
    }
    else if(d.getMonth()==5){
        month="Ιουνίου";
    }
    else if(d.getMonth()==6){
        month="Ιουλίου";
    }
    else if(d.getMonth()==7){
        month="Αυγούστου";
    }
    else if(d.getMonth()==8){
        month="Σεπτεμβρίου";
    }
    else if(d.getMonth()==9){
        month="Οκτωβρίου";
    }
    else if(d.getMonth()==10){
        month="Νοεμβρίου";
    }
    else if(d.getMonth()==11){
        month="Δεκεμβρίου";
    }
    document.getElementById("MyDatee").innerHTML = week_day+ ", " +d.getDate()+ " " +month+ " " +d.getFullYear();
}

function DarkMode(){
    document.querySelector("header").style.backgroundColor = "#333333";
    document.querySelector("header").style.color = "white";
    document.body.style.background = "rgb(202, 202, 202)";
}

function MintMode(){
    document.querySelector("header").style.backgroundColor = "rgb(56, 161, 126)";
    document.querySelector("header").style.color = "black";
    document.body.style.background = "rgb(179, 253, 228)";
}

function FireMode(){
    document.querySelector("header").style.backgroundColor = "rgb(255, 146, 57)";
    document.querySelector("header").style.color = "black";
    document.body.style.background = "rgb(252, 227, 174)";
}

