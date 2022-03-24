//busines logic
function total(funK, ultraK , linearM, leadS, interveR, ctscanC){
    this.funK = funK;
    this.ultraK = ultraK;
    this.linearM = linearM;
    this.leadS = leadS;
    this.interveR = interveR;
    this.ctscanC = ctscanC;
    
  }

  //user interface logic 

  $(document).ready(function(){
    $("#btn1").click(function(event){
        event.preventDefault();
        var value1 = parseInt($("#value1").val());
        var funK =  12500000 * value1;
        alert(funK)
    })
    $("#btn2").click(function(event){
        event.preventDefault();
        var value2 = parseInt($("#value2").val());
        var ultraK = 100000 * value2;
        alert(ultraK)
    })
    $("#btn3").click(function(event){
      event.preventDefault();
      var value3 = parseInt($("#value3").val());
      var linearM = 2000000 * value3;
      alert(linearM)
    })
    $("#btn4").click(function(event){
      event.preventDefault();
      var value4 = parseInt($("#value4").val());
      var leadS = 80000 * value4;
        alert(leadS)
    })
    $("#btn5").click(function(event){
      event.preventDefault();
      var value5 = parseInt($("#value5").val());
      var interveR = 3000000 * valu5;
        alert(interveR)
    })
    $("#btn6").click(function(event){
      event.preventDefault();
      var value6 = parseInt($("#value6").val());
      var ctscanC = 150000000 * value6;
        alert(ctscanC)
    })
  })