
  function dark(){
      console.log("test");
      document.body.style.background = "url('assets/image/background.png')";
      let hOne = document.querySelector("h1");
      let p = document.querySelectorAll("p");
    
    
      document.querySelector(".contact-dark").setAttribute('style','background-color : black !important');  
    
      hOne.style.color = 'black';
    
      for (let i = 0; i < p.length; i++) {
        p[i].style.color = 'black';
      }
      let darkmode = document.querySelector("#darkmode").classList.add("d-none");
      let lightmode = document.querySelector(".lightmode").classList.remove("d-none");
       document.querySelector(".lightmode").classList.add("night");

    }

/*
    function dark2(){
      dark2 = false
      if (dark2 == true) {
        document.querySelector("link").href("assets/css/style-dark.css")
      }else{
        document.querySelector("link").href("assets/css/style.css")
      }
      dark2 = !dark2
    }
    */
/*
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
  */





