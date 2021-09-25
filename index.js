let timer;
$(document).ready(function(){
    $("#resume").hide();
})
function startcount(){
    if($("#hr").val() == ""){
        $("#hr").val(0);
    }
    if($("#min").val() == ""){
        $("#min").val(0);
    }
    if($("#min").val() > 59 || $("#sec").val() > 59){
        alert("Please Enter an appropriate time");
    }
    else{
        timer = setInterval(myTimer,1000);
    }
}
function myTimer(){
    let hour = $("#hr").val();
    let min = $("#min").val();
    let sec = $("#sec").val();
    if(hour == 0 && min == 0 && sec == 0){
        alert("Time's Up");
        clearInterval(timer);
    }
    if(sec > 0){
        sec -= 1;
        $("#hr").val(hour);
        $("#min").val(min);
        $("#sec").val(sec);
    }
    else if(sec == 0 && min == 0 && hour == 0){
        clearInterval();
        $("#hr").val(hour);
        $("#min").val(min);
        $("#sec").val(sec);
    }
    else{
        sec = 59;
        if(min > 0){
            min -= 1;
            $("#hr").val(hour);
            $("#min").val(min);
            $("#sec").val(sec);
        }
        else if(min == 0 && hour == 0){
            clearInterval();
            $("#hr").val(hour);
            $("#min").val(min);
            $("#sec").val(sec);
        }
        else{
            min = 59;
            if(hour > 0){
                hour -= 1;
                $("#hr").val(hour);
                $("#min").val(min);
                $("#sec").val(sec);
            }
            else{
                clearInterval();
                $("#hr").val(hour);
                $("#min").val(min);
                $("#sec").val(sec);
            }
        }
    }
}
function resetcount(){
    clearInterval(timer);
    let time = 0;
    $("#hr").val(time);
    $("#min").val(time);
    $("#sec").val(time);
}
function pausecount(){
    let hour = $("#hr").val();
    let min = $("#min").val();
    let sec = $("#sec").val();
    if(hour != 0 || min != 0 || sec != 0){
        $("#pause").hide();
        $("#resume").show();
        clearInterval(timer);
    }
}
function resumecount(){
    $("#pause").show();
    $("#resume").hide();
    startcount();
}