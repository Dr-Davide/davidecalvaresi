/* ----------------- Start JS Document ----------------- */


// sda
$(document).ready(function(){
    $.ajax({
        type: "GET",
        url: "xml/menu.xml",
        dataType: "xml",
        success: loadXMLMenu
    });  
});



function getActivePage(){
    var activePage;
    activePage = window.location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
    return activePage;
}

function isCurrentPage(){
    var x;
}

function loadXMLMenu(xml){
    var activePage = getActivePage();
	var element = "#menu";
    var curr_item_url;
    var curr_item_title;
    var content = "";
    
    console.log("ACT_PAGE: "+getActivePage());

    $(xml).find("button").each(function(){
        curr_item_url = $(this).find("url").text();
        switch($(this).find("type").text()){
            case "single-item":
                if(curr_item_url == getActivePage()){
                    //console.log("btn: "+$(this).find("title").text()+" active");
                    content += '<li><a class="active" href="'+$(this).find("url").text()+'">'+$(this).find("title").text()+'</a></li>';
                    //$(element).append('<li><a class="active" href="'+$(this).find("url").text()+'">'+$(this).find("title").text()+'</a></li>');    
                } else{
                    //console.log("btn: "+$(this).find("title").text()+" NON active");
                    content += '<li><a href="'+$(this).find("url").text()+'">'+$(this).find("title").text()+'</a></li>';
                    //$(element).append('<li><a href="'+$(this).find("url").text()+'">'+$(this).find("title").text()+'</a></li>');    
                  }
                break;

            case "parent-item":
                curr_item_title = $(this).find("title").text();
                console.log("got item:__"+curr_item_title);
                content += '<li class="drop"><a>'+$(this).find("title").text()+'</a><ul class="dropdown">';
                
                $(xml).find("button").each(function(){
                    if($(this).find("parent-item").text() == curr_item_title){
                        curr_child_url = $(this).find("url").text();
                        if(curr_child_url == getActivePage()){
                        content += '<li><a href="'+$(this).find("url").text()+'" class="active">'+$(this).find("title").text()+'</a></li>';
                        }else{
                            content += '<li><a href="'+$(this).find("url").text()+'">'+$(this).find("title").text()+'</a></li>';
                        }
                    }
                });
                content += '</ul></li>';
                
                
            break;
        }

           
    });
    //console.log("concat finale: "+content);
    //console.log("concat finale: "+element);
    $(element).append(content); 
}