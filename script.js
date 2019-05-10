$(".treasure").click(function(){
     $("body").css("background-color","black");
});
$(".treasure").click(function(){
     $("h1").text("Ghosts is following you ");
     $("h1").css("color","white");
});
$(".black").html(function(){
    $(".black").hide();
});
$(".treasure").click(function(){
     $(".black").fadeIn();
});
$(".black").click(function(){
     $(".black").attr("src","https://i.gifer.com/BB1f.gif");
     $("h1").text("he found you run!");
});
$(".final").click(function(){
     $(".black").attr("src","https://i.gifer.com/BB1f.gif");
     $("h1").text("RUN RUN RUN!!!");
});
$(".escape").click(function(){
     $(".black").attr("src","https://media1.tenor.com/images/1d2c43feaea3496143cb03558b65192e/tenor.gif?itemid=12743803");
     $("h1").text("you were too late!");
});
