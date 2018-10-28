/* ----------------- Start JS Document ----------------- */


// sda
$(document).ready(function(){
    $.ajax({
        type: "GET",
        url: "xml/socials.xml",
        dataType: "xml",
        success: loadXMLSocials
    });  
});


function loadXMLSocials(xml){
	console.log("Load social");
    var element;
    $(xml).find("social").each(function(){
        //if($(this).find("year").text() == i){
           switch($(this).find("type").text()){
            case "email":
                element ="#email";
                $(element).append('<a href="mailto:'+$(this).find("email").text()+'"><i class=icon-mail-1"></i>'+$(this).find("email").text()+'</a>');
                break;
            case "social-element":
                element ="#social-elements"; 
                $(element).append('<li><a class="'+$(this).find("aclass").text()+'" data-placement="bottom" title="'+$(this).find("title").text()+'" target="_blank" href="'+$(this).find("url").text()+'"><i class="'+$(this).find("iclass").text()+'"></i></a></li>');
                break;
           } 
           //console.log("T: "+tab);
        //$(element).append('<em>'+$(this).find("title").text() + '</em><br><em>'+$(this).find("authors").text() +'</em><br><em> In </em>'+$(this).find("in").text()+'<br>'+$(this).find("day").text()+' '+$(this).find("month").text()+' '+$(this).find("year").text()+', '+$(this).find("location").text()+'. <a href="'+$(this).find("url").text()+'" target="_blank" ><i class="icon-download"></i></a><br><br>');
    });
}