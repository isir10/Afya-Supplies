$(document).ready(function(){
    $("#btn1").click(function(event){
        event.preventDefault();

        var value1 = parseInt($("#value1").val());
        
    })
    $("#btn2").click(function(event){
        event.preventDefault();
        var value2 = parseInt($("#value2").val());
        

    })
      var robot = 900000
      var value1 = parseInt($("#value1").val());
        var robotAmount = robot * value1 

        var corona = 400000
        var value2 = parseInt($("#value2").val());
          var coronaAmount = robot * value1 
  

          var screening = 600000
          var value3 = parseInt($("#value3").val());
            var screeningAmount = robot * value1 
    

            var opthalmic = 300000
            var value4 = parseInt($("#value4").val());
              var opthalmicAmount = robot * value1 
      

              var electric = 200000
              var value5 = parseInt($("#value5").val());
                var electricAmount = robot * value1 
        
                var led = 100000
                var value6 = parseInt($("#value6").val());
                  var ledAmount = robot * value1 
          





















})