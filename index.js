$(document).ready(function () {
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $("header").toggleClass("toggle");
  });
  $(window).on("scroll load", function () {
    $("#menu").removeClass("fa-times");
    $("header").removeClass("toggle");
  });
  if ($(window).scrollTop() > 0) {
    $(".top").show();
  } else {
    $(".top").hide();
  }
  //smooth scrolling
  $('a[href*="#"]').on("click", function (e) {
    e.prevenDefault();
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      500,
      "linear"
    );
  });
});
//preloader
$(document).ready(function () {
  setTimeout(function () {
    $("#container").addClass("loaded");
    // Once the container has finished, the scroll appears
    if ($("#container").hasClass("loaded")) {
      // It is so that once the container is gone, the entire preloader section is deleted
      $("#preloader")
        .delay(9000)
        .queue(function () {
          $(this).remove();
        });
    }
  }, 3000);
});

let btnc = document.getElementById("btnc");
btnc.onclick.body.classList.toggle("white-theme");
var left_position = $("body").width() / 2 - $("#popup").width() / 2;
$("#gray-panel").fadeIn("slow");
$("#popup").css("left", left_position).fadeIn("slow");

$("#popup").click(function () {
  $("#gray-panel").fadeOut("slow");
  $("#popup").fadeOut("slow");
});

var typing = new Typed(".auto-type", {
  strings:[
    "Full stack developer",
    "Graphics Designer",
    "Web Designer",
    "Web Developer",
  ],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});

//star rating
var stars = document.querySelectorAll(".star span");
stars.forEach((item, index1) => {
  item.addEventListener("click", () => {
    stars.forEach((star, index2) => {
      index1 >= index2
        ? star.classList.add("active")
        : star.classList.remove("active");
    });
  });
});

$("#formSubmitBtn").click(function (event) {
  event.prevenDefault();
  sendMail();
});

// send email data
function sendMail() {
  var data = {
    service_id: "service_q0z70qp",
    template_id: "template_5e3pnbh",
    user_id: "AcJpIETwnj30BEsz1",
    template_params: {
      from_name: "Pooja",
      to_name: "Pooja Rawat",
      message: "This is test email.",
    },
  };

  $.ajax("https://api.emailjs.com/api/v1.0/email/send", {
    type: "POST",
    data: JSON.stringify(data),
    contentType: "application/json",
  })
    .done(function () {
      debugger;
      alert("Your mail is sent!");
    })
    .fail(function (error) {
      debugger;
      alert("Oops... " + JSON.stringify(error));
    });
}
