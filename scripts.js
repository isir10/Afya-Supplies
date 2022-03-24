//buisness logic
function total(robotP, coronaP, screeningP, opthalmicP, electricP, ledP){
  this.robotP = robotP;
  this.coronaP = coronaP;
  this.screeningP = screeningP;
  this.opthalmicP = opthalmicP ;
  this.electricP= electricP;
  this.ledP = ledP;
  
}




//user interface

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
        alert(coronaP)
        
        
    })
    $("#btn3").click(function(event){
      event.preventDefault();
      var value3 = parseInt($("#value3").val());
      var screeningP = 600000 * value3;
      alert(screeningP)

    })

    $("#btn4").click(function(event){
      event.preventDefault();
      var value4 = parseInt($("#value4").val());
      var opthalmicP = 300000 * value4;
        alert(opthalmicP)

    })

    $("#btn5").click(function(event){
      event.preventDefault();
      var value5 = parseInt($("#value5").val());
      var electricP = 200000 * valu5;
        alert(electricP)
    })

    $("#btn6").click(function(event){
      event.preventDefault();
      var value6 = parseInt($("#value6").val());
      var ledP = 100000 * value6;
        alert(ledP)
    })
      
     




// let Total = new total((robotP, + coronaP, + screeningP, + opthalmicP, + electricP, + ledP))

// total.prototype.Fullprice() = function(){
//   return this.robotP + this.coronaP + this.screeningP + this.opthalmicP + this.electricP + this.ledP
// }















})




