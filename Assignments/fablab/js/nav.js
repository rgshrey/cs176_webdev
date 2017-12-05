function expand(){
  var nav = document.getElementsByClassName("nav");
  if (nav[0].style.display == "block"){
    for (var i = 0; i < nav.length; i++) {
      nav[i].style.display = "none";
    }
    document.getElementsByTagName("h3")[0].style.display = "block";
    var content = document.getElementsByClassName("gridItem");
    for (var i = 0; i < content.length; i++) {
      content[i].style.display = "visible";
    }
  }
  else{
    for (var i = 0; i < nav.length; i++) {
      nav[i].style.display = "block";
    }
    document.getElementsByTagName("h3")[0].style.display = "none";
    var content = document.getElementsByClassName("gridItem");
    for (var i = 0; i < content.length; i++) {
      content[i].style.display = "none";
    }
  }
}
