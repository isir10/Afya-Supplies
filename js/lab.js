

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
  $(".dproduct2").click(function(){
    $(".img").show();
    $(".dproduct2").hide();
  })
//         //<...... >
$("#image3").click(function(){
    $(".img").hide();
     $(".dproduct3").show();
  })
  $(".dproduct3").click(function(){
    $(".img").show();
    $(".dproduct3").hide();
  })
//       //<...... >
$("#image4").click(function(){
    $(".img").hide();
     $(".dproduct4").show();
  })
  $(".dproduct4").click(function(){
    $(".img").show();
    $(".dproduct4").hide();
  })
//        //<...... >
$("#image5").click(function(){
    $(".img").hide();
     $(".dproduct5").show();
  })
  $(".dproduct5").click(function(){
    $(".img").show();
    $(".dproduct5").hide();
  })
//      //<...... >
$("#image6").click(function(){
    $(".img").hide();
     $(".dproduct6").show();
  })
  $(".dproduct6").click(function(){
    $(".img").show();
    $(".dproduct6").hide();
  })
  $("#image7").click(function(){
    $(".img").hide();
     $(".dproduct7").show();
  })
  $(".dproduct7").click(function(){
    $(".img").show();
    $(".dproduct7").hide();
  })
  $("#image8").click(function(){
    $(".img").hide();
     $(".dproduct8").show();
  })
  $(".dproduct8").click(function(){
    $(".img").show();
    $(".dproduct8").hide();
  })

});