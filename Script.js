function hamburgerMenu(x) {
    x.classList.toggle("change");
}

function hamburgerMenuNav() {
    let x = document.getElementById("Nav-bar");
    if (x.className === "nav-bar") {
        x.className += " responsive";    
    } else {
        x.className = "nav-bar";
        
    }
}

//Home page remove text
  function removeIntro() {
    var x = document.getElementById("intro");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

//Music page. Remove album covers
  function removeMusic() {
    let x = document.getElementById("column");
    let y = document.getElementById("row");
    if (x.style.display === "none" && y.style.display === "none") {
        x.style.display = "block";
        y.style.display = "block";
    } else {
        x.style.display = "none";
        y.style.display = "none";
    }
  }

  function alignMusic() {
    let x = document.getElementById("column");
    let y = document.getElementById("row");
    if (screen.width == 600) {
      x.style.display = "block";
      y.style.display = "block"
    }
  }

  //Works page. Remove video and paragraph

  function removeWorks() {
    let x = document.getElementById("video");
    let y = document.getElementById("text");

    if (x.style.display === "none" && y.style.display === "none") {
        x.style.display = "block";
        y.style.display = "block";
    } else {
        x.style.display = "none";
        y.style.display = "none";
    }
  }

  function removeNolan() {
    let x = document.getElementById("nolan");

    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
  }

  function removeContact() {
    let x = document.getElementById("contact-info");
    let y = document.getElementById("vesselphoto");

    if (x.style.display === "none" && y.style.display === "none") {
        x.style.display = "block";
        y.style.display = "block";
    } else {
        x.style.display = "none";
        y.style.display = "none";
    }
  }
