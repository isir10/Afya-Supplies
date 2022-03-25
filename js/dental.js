$(document).ready(function(){
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
    smallImg[3].onclick= function(){
        mainImg.src = smallImg[3].src;
    }
});
$(document).ready(function(){
    var mainI =document.getElementById('main');
    var smallI =document.getElementsByClassName('small');
    
    smallI[0].onclick= function(){
        mainI.src = smallI[0].src;
    }
    smallI[1].onclick= function(){
        mainI.src = smallI[1].src;
    }
    smallI[2].onclick= function(){
        mainI.src = smallI[2].src;
    }
    smallI[3].onclick= function(){
        mainI.src = smallI[3].src;
    }
});

$(document).ready(function(){
    $("#image1").click(function(){
        $(".img").hide();
         $(".dproduct1").show();
      })
      $("#main").click(function(){
        $(".img").show();
        $(".dproduct1").hide();
      })
            //<...... >
      $("#image2").click(function(){
        $(".img").hide();
         $(".dproduct2").show();
      })
      $("#main-image").click(function(){
        $(".img").show();
        $(".dproduct2").hide();
    })
    //        //<...... >
 $("#image3").click(function(){
    $(".img").hide();
     $(".dproduct3").show();
  })
  $("#stop").click(function(){
    $(".img").show();
    $(".dproduct3").hide();
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
    let myProductName = $("#chair").text()
   
    let myPrice = $(".three").text();

    // console.log(parseInt(myPrice)+1)
    // alert(myPrice)
    // console.log(myProduct)
    let myQuantity = $("#input").val()
    // alert(myQuantity)
    let totalCost = myPrice*myQuantity;
    $(".table").append('<tr id="tab"><td id="item">'+ myProductName + '</td><td id="price">' + myPrice + '</td><td id="quantity">' + myQuantity + '</td><td id="total">' + totalCost + '</td></tr>');
    // alert(totalCost)
    $(".button").hide()
    $("#form").show();
      $("#dental").hide()
  })
})
$(document).ready(function(){
    $(".button").click(function(event){
      event.preventDefault();
      let myProductName = $("#white").text()
     
      let myPrice = $(".four").text();
      
      // console.log(parseInt(myPrice)+1)
      // alert(myPrice)
      // console.log(myProduct)
      let myQuantity = $("#input1").val()
      // alert(myQuantity)
      let totalCost = myPrice*myQuantity;
      $(".table").append('<tr id="tab"><td id="item">'+ myProductName + '</td><td id="price">' + myPrice + '</td><td id="quantity">' + myQuantity + '</td><td id="total">' + totalCost + '</td></tr>')
      // alert(totalCost)
      $(".button").hide()
      $("#form").show();
      $("#dental").hide()
    })
  })
  $(document).ready(function(){
    $(".button").click(function(event){
      event.preventDefault();
      let myProductName = $("#pouch").text()
     
      let myPrice = $(".five").text();
      
      // console.log(parseInt(myPrice)+1)
      alert(myPrice)
      // console.log(myProduct)
      let myQuantity = $("#input2").val()
      // alert(myQuantity)
      let totalCost = myPrice*myQuantity;
      $(".table").append('<tr id="tab"><td id="item">'+ myProductName + '</td><td id="price">' + myPrice + '</td><td id="quantity">' + myQuantity + '</td><td id="total">' + totalCost + '</td></tr>')
      // alert(totalCost)
      $(".button").hide()
      $("#form").show();
      $("#dental").hide()
    })
  })
  $(document).ready(function(){
      $("#sub").click(function(){
        // if ($("input#fname").val() && $("input#phone").val() && $("input#email").val()!=""){}
            alert("Your request has been received and is being worked on.Further communications on payment and delivery shall be through your email address entered above ")
        
        // else {
        //     alert("Please fill in the details for delivery!");
        //     
            
        //   }
      })
  });