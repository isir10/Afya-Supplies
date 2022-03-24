let myArray = []




$(document).ready(function(){
    $("#btn1").click(function(event){
        event.preventDefault();

        var value1 = parseInt($("#value1").val());
        var robotP =  900000 * value1;
        alert(robotP)

        
    })
    $("#btn2").click(function(event){
        event.preventDefault();
        var value2 = parseInt($("#value2").val());
        var coronaP = 400000 * value2;
        
        
        

    })
    $("#btn3").click(function(event){
      event.preventDefault();
      var value3 = parseInt($("#value3").val());
      var coronaP = 600000 * value3;

    })

    $("#btn4").click(function(event){
      event.preventDefault();
      var value4 = parseInt($("#value4").val());
      var coronaP = 300000 * value4;

    })

    $("#btn5").click(function(event){
      event.preventDefault();
      var value5 = parseInt($("#value5").val());
      var coronaP = 200000 * valu5;

    })

    $("#btn6").click(function(event){
      event.preventDefault();
      var value6 = parseInt($("#value6").val());
      var coronaP = 100000 * value6;

    })
      
      // var robot = 900000
      // var value1 = parseInt($("#value1").val());
      //   var robotAmount = robot * value1 

      //   var corona = 400000
      //   var value2 = parseInt($("#value2").val());
      //     var coronaAmount = robot * value1 
  

      //     var screening = 600000
      //     var value3 = parseInt($("#value3").val());
      //       var screeningAmount = robot * value1 
    

      //       var opthalmic = 300000
      //       var value4 = parseInt($("#value4").val());
      //         var opthalmicAmount = robot * value1 
      

      //         var electric = 200000
      //         var value5 = parseInt($("#value5").val());
      //           var electricAmount = robot * value1 
        
      //           var led = 100000
      //           var value6 = parseInt($("#value6").val());
      //             var ledAmount = robot * value1 
          





















})




