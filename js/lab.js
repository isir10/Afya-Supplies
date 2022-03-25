$(document).ready(function(){
    $("#image").click(function(){
    $(".img").hide();
     $(".dproduct").show();
  })
  $("#stop").click(function(){
    $(".img").show();
    $(".dproduct").hide();
  })
        //<...... >
  $("#image1").click(function(){
    $(".img").hide();
     $(".dproduct1").show();
  })
  $("#main-image").click(function(){
    $(".img").show();
    $(".dproduct1").hide();

    var mainImg =document.getElementById('main-image');
    var smallImg =document.getElementsByClassName('small-img');

smallImg[0].onclick= function(){
    mainImg.src = smallImg[0].src;
}
smallImg[1].onclick= function(){
    mainImg.src = smallImg[1].src;
}
smallImg[2].onclick= function(){
    mainImg.src = smallImg[2].src;
}
smallImg[2].onclick= function(){
    mainImg.src = smallImg[2].src;
}
  })
//        //<...... >
 $("#image2").click(function(){
    $(".img").hide();
     $(".dproduct2").show();
  })
  $("#stopp").click(function(){
    $(".img").show();
    $(".dproduct2").hide();
  })
//         //<...... >
$("#image3").click(function(){
    $(".img").hide();
     $(".dproduct3").show();
  })
  $("#stopp").click(function(){
    $(".img").show();
    $(".dproduct3").hide();
  })
//       //<...... >
$("#image4").click(function(){
    $(".img").hide();
     $(".dproduct4").show();
  })
  $("#stopp").click(function(){
    $(".img").show();
    $(".dproduct4").hide();
  })
//        //<...... >
$("#image5").click(function(){
    $(".img").hide();
     $(".dproduct5").show();
  })
  $("#stopp").click(function(){
    $(".img").show();
    $(".dproduct5").hide();
  })
//      //<...... >
$("#image6").click(function(){
    $(".img").hide();
     $(".dproduct6").show();
  })
  $("#stopp").click(function(){
    $(".img").show();
    $(".dproduct6").hide();
  })
  $("#image7").click(function(){
    $(".img").hide();
     $(".dproduct7").show();
  })
  $("#stopp").click(function(){
    $(".img").show();
    $(".dproduct7").hide();
  })
  $("#image8").click(function(){
    $(".img").hide();
     $(".dproduct8").show();
  })
  $("#stopp").click(function(){
    $(".img").show();
    $(".dproduct8").hide();
  })

});


let myForm = document.getElementById("new");
myForm.addEventListener("submit", (e) =>{
  e.preventDefault()

  let formData =new FormData(e.target)
  let fullName = document.getElementById("fname").value
  // alert("djddsa")
  let myEmail = document.getElementById("email").value
  // alert(myEmail)
  

});
$(document).ready(function(){
  $(".button").click(function(event){
    event.preventDefault();
    let myProduct = $("#therm").text()
    //  alert(myProduct)
    // console.log(myProduct)
    let myPrice = $(".nine").text();
      // alert(myPrice)
      let myQuantity = $("#input9").val()
        // alert(myQuantity)
        let totalCost = myPrice*myQuantity;
    $(".table").append('<tr id="tab"><td id="item">'+ myProduct + '</td><td id="price">' + myPrice + '</td><td id="quantity">' + myQuantity + '</td><td id="total">' + totalCost + '</td></tr>');
    // alert(totalCost)
    $(".button").hide()
    $("#form").show();
      $("#lab").hide()
  })
})
$(document).ready(function(){
  $(".button").click(function(event){
    event.preventDefault();
    let myProduct = $("#press").text()
    //  alert(myProduct)
    // console.log(myProduct)
    let myPrice = $(".eight").text();
      // alert(myPrice)
      let myQuantity = $("#input8").val()
        // alert(myQuantity)
        let totalCost = myPrice*myQuantity;
    $(".table").append('<tr id="tab"><td id="item">'+ myProduct + '</td><td id="price">' + myPrice + '</td><td id="quantity">' + myQuantity + '</td><td id="total">' + totalCost + '</td></tr>');
    // alert(totalCost)
    $(".button").hide()
    $("#form").show();
      $("#lab").hide()
  })
})
$(document).ready(function(){
  $(".button").click(function(event){
    event.preventDefault();
    let myProduct = $("#micro").text()
    //  alert(myProduct)
    // console.log(myProduct)
    let myPrice = $(".seven").text();
      // alert(myPrice)
      let myQuantity = $("#input7").val()
        // alert(myQuantity)
        let totalCost = myPrice*myQuantity;
    $(".table").append('<tr id="tab"><td id="item">'+ myProduct + '</td><td id="price">' + myPrice + '</td><td id="quantity">' + myQuantity + '</td><td id="total">' + totalCost + '</td></tr>');
    // alert(totalCost)
    $(".button").hide()
    $("#form").show();
      $("#lab").hide()
  })
})
$(document).ready(function(){
  $(".button").click(function(event){
    event.preventDefault();
    let myProduct = $("#watch").text()
    //  alert(myProduct)
    // console.log(myProduct)
    let myPrice = $(".six").text();
      // alert(myPrice)
      let myQuantity = $("#input6").val()
        // alert(myQuantity)
        let totalCost = myPrice*myQuantity;
    $(".table").append('<tr id="tab"><td id="item">'+ myProduct + '</td><td id="price">' + myPrice + '</td><td id="quantity">' + myQuantity + '</td><td id="total">' + totalCost + '</td></tr>');
    // alert(totalCost)
    $(".button").hide()
    $("#form").show();
      $("#lab").hide()
  })
})
$(document).ready(function(){
  $(".button").click(function(event){
    event.preventDefault();
    let myProduct = $("#retort").text()
    //  alert(myProduct)
    // console.log(myProduct)
    let myPrice = $(".five").text();
      // alert(myPrice)
      let myQuantity = $("#input5").val()
        // alert(myQuantity)
        let totalCost = myPrice*myQuantity;
    $(".table").append('<tr id="tab"><td id="item">'+ myProduct + '</td><td id="price">' + myPrice + '</td><td id="quantity">' + myQuantity + '</td><td id="total">' + totalCost + '</td></tr>');
    // alert(totalCost)
    $(".button").hide()
    $("#form").show();
      $("#lab").hide()
  })
})
$(document).ready(function(){
  $(".button").click(function(event){
    event.preventDefault();
    let myProduct = $("#jug").text()
    //  alert(myProduct)
    // console.log(myProduct)
    let myPrice = $(".four").text();
      // alert(myPrice)
      let myQuantity = $("#input4").val()
        // alert(myQuantity)
        let totalCost = myPrice*myQuantity;
    $(".table").append('<tr id="tab"><td id="item">'+ myProduct + '</td><td id="price">' + myPrice + '</td><td id="quantity">' + myQuantity + '</td><td id="total">' + totalCost + '</td></tr>');
    // alert(totalCost)
    $(".button").hide()
    $("#form").show();
      $("#lab").hide()
  })
})
$(document).ready(function(){
  $(".button").click(function(event){
    event.preventDefault();
    let myProduct = $("#burner").text()
    //  alert(myProduct)
    // console.log(myProduct)
    let myPrice = $(".thre").text();
      // alert(myPrice)
      let myQuantity = $("#input3").val()
        // alert(myQuantity)
        let totalCost = myPrice*myQuantity;
    $(".table").append('<tr id="tab"><td id="item">'+ myProduct + '</td><td id="price">' + myPrice + '</td><td id="quantity">' + myQuantity + '</td><td id="total">' + totalCost + '</td></tr>');
    // alert(totalCost)
    $(".button").hide()
    $("#form").show();
      $("#lab").hide()
  })
})
$(document).ready(function(){
  $(".button").click(function(event){
    event.preventDefault();
    let myProduct = $("#ph").text()
    //  alert(myProduct)
    // console.log(myProduct)
    let myPrice = $(".two").text();
      // alert(myPrice)
      let myQuantity = $("#input2").val()
        // alert(myQuantity)
        let totalCost = myPrice*myQuantity;
    $(".table").append('<tr id="tab"><td id="item">'+ myProduct + '</td><td id="price">' + myPrice + '</td><td id="quantity">' + myQuantity + '</td><td id="total">' + totalCost + '</td></tr>');
    // alert(totalCost)
    $(".button").hide()
    $("#form").show();
      $("#lab").hide()
  })
})
$(document).ready(function(){
  $(".button").click(function(event){
    event.preventDefault();
    let myProduct = $("#auto").text()
    //  alert(myProduct)
    // console.log(myProduct)
    let myPrice = $(".one").text();
      // alert(myPrice)
      let myQuantity = $("#input1").val()
        // alert(myQuantity)
        let totalCost = myPrice*myQuantity;
    $(".table").append('<tr id="tab"><td id="item">'+ myProduct + '</td><td id="price">' + myPrice + '</td><td id="quantity">' + myQuantity + '</td><td id="total">' + totalCost + '</td></tr>');
    // alert(totalCost)
    $(".button").hide()
    $("#form").show();
      $("#lab").hide()
  })
})
$(document).ready(function(){
  $("#sub").click(function(){
    
        alert("Your request has been received and is being worked on.Further communications on payment and delivery shall be made through your email address entered above ");
    
    //  else {
    //      alert("Please fill in the details for delivery!");
       
        
      
  })
});