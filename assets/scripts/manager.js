$(document).ready(function(){
    $("#Home").click(function(){
    $("#edu").fadeOut();
    $("#skills").fadeOut();
    $("#contact").fadeOut();
    $("#top").fadeIn();


});
    $("#Edu").click(function(){
    $("#edu").fadeIn();
    $("#skills").fadeOut();
    $("#contact").fadeOut();
    $("#top").fadeOut();


});
    $("#Gear").click(function(){
    $("#edu").fadeOut();
    $("#skills").fadeIn();
    $("#contact").fadeOut();
    $("#top").fadeOut();


});
    $("#Email").click(function(){
    $("#edu").fadeOut();
    $("#skills").fadeOut();
    $("#contact").fadeIn();
    $("#top").fadeOut();


});
});

var i = 1;
function logos(number) { 
                i=number;
    if(i==1){
        document.getElementById('homeSel').style.display='block'
        document.getElementById('home').style.display='none'
        document.getElementById('edui').style.display='block'
        document.getElementById('eduiSel').style.display='none'
        document.getElementById('gear').style.display='block'
        document.getElementById('gearSel').style.display='none'
        document.getElementById('email').style.display='block'
        document.getElementById('emailSel').style.display='none'
    }

    if(i==2){
        document.getElementById('homeSel').style.display='none'
        document.getElementById('home').style.display='block'
        document.getElementById('edui').style.display='none'
        document.getElementById('eduiSel').style.display='block'
        document.getElementById('gear').style.display='block'
        document.getElementById('gearSel').style.display='none'
        document.getElementById('email').style.display='block'
        document.getElementById('emailSel').style.display='none'
    }

    if(i==3){
        document.getElementById('homeSel').style.display='none'
        document.getElementById('home').style.display='block'
        document.getElementById('edui').style.display='block'
        document.getElementById('eduiSel').style.display='none'
        document.getElementById('gear').style.display='none'
        document.getElementById('gearSel').style.display='block'
        document.getElementById('email').style.display='block'
        document.getElementById('emailSel').style.display='none'
    }

    if(i==4){
        document.getElementById('homeSel').style.display='none'
        document.getElementById('home').style.display='block'
        document.getElementById('edui').style.display='block'
        document.getElementById('eduiSel').style.display='none'
        document.getElementById('gear').style.display='block'
        document.getElementById('gearSel').style.display='none'
        document.getElementById('email').style.display='none'
        document.getElementById('emailSel').style.display='block'
    }
    
    function changediv(){
        
    }
}