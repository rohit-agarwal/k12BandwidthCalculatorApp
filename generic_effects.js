$(document).ready(function(){
    $(".socialIcon").mouseenter(function(){
        var childRen = $(this).children().children();
        //alert("Child: "+childRen.attr("src"));
        if(childRen.attr("src").indexOf("_grey") >=0){
            $(this).children().children().attr("src",childRen.attr("src").replace("_grey", ""));
        }
    });
    
    $(".socialIcon").mouseleave(function(){
        var child = $(this).children().children();
        $(this).children().children().attr("src", child.attr("src").replace("icon", "icon_grey"));
    });
    
    $("a").hover(function(){
        var content = $(this).text();
        if(content.indexOf("Bandwidth Calculator") == 0){
            $(this).css("color","#5CE62E");
        }else if(content.indexOf("Login") == 0){
            $(this).css("color","#00CCFF");
        }else if(content.indexOf("Contact Us") == 0){
            $(this).css("color","#FFB2B2");
        }else if(content.indexOf("About Us") == 0){
            $(this).css("color","#DECEBD");
        }
    });
    $("a").mouseout(function(){
        $(this).css("color", "white" );
    });
});