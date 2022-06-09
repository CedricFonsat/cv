
      let more = document.getElementById('button-more');
      let text = document.querySelector('#text-more');
      let dots = document.querySelector('#dots');


function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("text-more");
    var btnText = document.getElementById("button-more");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Voir plus";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Voir moins";
      moreText.style.display = "inline";
    }
  }