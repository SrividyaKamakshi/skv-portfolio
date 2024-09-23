document.addEventListener('DOMContentLoaded', function () {
  /*-------- Light/Dark theme ------------*/
  var icon = document.getElementById("light-dark-icon");
  var logo = document.getElementById("portfolio-logo");
  icon.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
      logo.src = "assets/images/dark-theme-logo.png";
      icon.className = "fa-solid fa-sun";
    } else {
      logo.src = "assets/images/light-theme-logo.png";
      icon.className = "fa-solid fa-moon";
    }
  };

  /*--------------- Scroll to section behavior ---------------*/
  window.addEventListener('scroll', reveal);
  function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {
      var windowheight = window.innerHeight;
      var revealtop = reveals[i].getBoundingClientRect().top;
      var revealpoint = 150;

      if (revealtop < windowheight - revealpoint) {
        reveals[i].classList.add('active');
      } else {
        reveals[i].classList.remove('active');
      }
    }
  }

  /*------------ Side menu handling in smaller screens --------------*/
  var sidemenu = document.getElementById("sidemenu");
  var menuButton = document.getElementById("menuButton");
  var menuCloseButton = document.getElementById("menuCloseButton");
  var isOpen = false;

  function openmenu() {
    isOpen = true;
    sidemenu.style.right = "0";
  }

  function closemenu() {
    isOpen = false;
    sidemenu.style.right = "-200px";
  }
  menuButton.addEventListener('click', openmenu);
  menuCloseButton.addEventListener('click',closemenu);
  document.addEventListener('click', function (event) {
    if (!sidemenu.contains(event.target) && event.target !== menuButton) {
      if (getComputedStyle(sidemenu).right == '0px' && isOpen) {
        sidemenu.style.right = "-200px";
      }
    }
  });

  /*----------- Handling contact form submission ----------------*/
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwZXzGMrZ6WENxLr-M0z7iNrThCzaCS2Z15TomnE9lM-h4GXe6FVw2Vr3ASZmD6QpAS/exec';
  const form = document.forms['submit-to-google-sheet'];
  const toast = document.getElementById('toast');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => {
        console.log('Success!', response);
        toast.textContent = 'Form submitted!';
        toast.classList.add('show');
        setTimeout(function () {
          toast.classList.remove('show');
          form.reset();
        }, 2000);
      })
      .catch(error => {
        console.error('Error!', error.message);
        toast.textContent = 'Error while submitting!';
        toast.classList.add('show');
        setTimeout(function () {
          toast.classList.remove('show');
        }, 2000);
      });
  });

  // Initialize Typed.js
  new Typed('.typed-output', {
    strings: ["A good programmer is someone who always looks both ways before crossing a one-way street",
      "There are only 10 types of people in the world. Those who understand binary and those who don't",
      "How do you comfort a JavaScript bug? You console it",
      "Why did the programmer quit their job? Because they didn’t get arrays (a raise)",
    ],
    typeSpeed: 50,
    loop: true,
    backSpeed: 10,
    backDelay: 7000,
    cursorChar: "|", // Optional: Customize cursor character
  });
});
