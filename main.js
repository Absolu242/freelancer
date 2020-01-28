$(function(){

    $(".toggle").on("click", function(){
        if($(".list-items").hasClass("active")){
            $(".list-items").removeClass("active");
        }
        else{
            $(".list-items").addClass("active");
        }
    })
});