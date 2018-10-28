/* ----------------- Start JS Document ----------------- */


// sda
$(document).ready(function(){
    $.ajax({
        type: "GET",
        url: "xml/publications.xml",
        dataType: "xml",
        success: loadXMLPapers
    }); 
});

function loadXMLPapers(xml){
    var tab;
    $(xml).find("publication").each(function(){
        //if($(this).find("year").text() == i){
           switch($(this).find("type").text()){
            case "journal":
                tab ="#tab1";
                break;
            case "conference":
                tab ="#tab2"; 
                break;
            case "poster":
                tab ="#tab3";
                break;
            case "book":
                tab ="#tab4";
                break;
           } 
           console.log("T: "+tab);
        $(tab).append('<em>'+$(this).find("title").text() + '</em><br><em>'+$(this).find("authors").text() +'</em><br><em> In </em>'+$(this).find("in").text()+'<br>'+$(this).find("day").text()+' '+$(this).find("month").text()+' '+$(this).find("year").text()+', '+$(this).find("location").text()+'. <a href="'+$(this).find("url").text()+'" target="_blank" ><i class="icon-download"></i></a><br><br>');
    });
}