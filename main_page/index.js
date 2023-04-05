// navbar animation
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("nav-bar").style.top = "0";
  } else {
    document.getElementById("nav-bar").style.top = "-50px";
  }
}

/*$(document).on("ready", function () {
  setTimeout(function () {
    $(".letter").addClass("loaded");
    $(".reg-text").addClass("loaded");
  }, 1000);
});*/
