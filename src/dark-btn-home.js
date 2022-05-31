function darkMode() {
    var navbar = document.getElementById('navbar');
    var button = document.getElementById('button');
    if(button.classList.contains('btn-light')){
        button.classList.replace('btn-light', 'btn-dark');
        navbar.classList.replace('navbar-light', 'navbar-dark');
        document.getElementById("span").textContent="Light Mode";
    }
    else{
        button.classList.replace('btn-dark', 'btn-light');
        navbar.classList.replace('navbar-dark', 'navbar-light');
        document.getElementById("span").textContent="Dark Mode";
    }
    var element = document.body;
    element.classList.toggle("dark-mode");
  }