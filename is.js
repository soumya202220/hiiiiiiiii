$(document).ready(function(){
$("#height-px").on("input",function(){
        var a = $(this).val() +"px"
        $("#bg").attr("height",a);
        })
    $("#height-per").on("input",function(){
        var b =$(this).val()+"%"
        $("#bg").attr("height",b)
     })
     $("#width-px").on("input",function(){
     var c =$(this).val()+"px"
      $("#bg").attr("width",c)});
$("#width-per").on('input', function(){
        var d= $(this).val() + "%";
        $("#bg").attr("width",d);});
$("#link").on("input",function(){
    var link =$(this).val()
    $("a#id2").attr("href",link)

    })
    
    });