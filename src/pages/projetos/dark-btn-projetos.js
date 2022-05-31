function darkMode() {
    var navbar = document.getElementById('navbar');
    var button = document.getElementById('button');
    var itemlist = document.getElementsByTagName('li');
    if(button.classList.contains('btn-light')){
        button.classList.replace('btn-light', 'btn-dark');
        navbar.classList.replace('navbar-light', 'navbar-dark');
        document.getElementById("span").textContent="Light Mode";
       for(let i = 0; i < itemlist.length ; i++){
           itemlist.item(i).classList.replace('list-group-item-light', 'list-group-item-dark');
       }
    }
    else{
        button.classList.replace('btn-dark', 'btn-light');
        navbar.classList.replace('navbar-dark', 'navbar-light');
        document.getElementById("span").textContent="Dark Mode";
        for(let i = 0; i < itemlist.length ; i++){
            itemlist.item(i).classList.replace('list-group-item-dark', 'list-group-item-light');
        }
    }
    var element = document.body;
    element.classList.toggle("dark-mode");
  }