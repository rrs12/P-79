var menu = [
    "Paneer Tikka Pizza",
    "Veg Supreme Pizza",
    "Exotic Pizza",
    "Chef Special Pizza",
    "Deluxe Veggie Pizza"
];

function getmenu() {
    var htmldata;
    htmldata = "<ol class='menulist'>"
        menu.sort();
    for (var i = 0; i < menu.length; i++) {
        htmldata = htmldata + "<li>" + menu[i] + "</li>"
    }
    htmldata = htmldata + "</ol>"
    document.getElementById("display_menu").innerHTML = htmldata;
}

function add_item() {
    console.log("I am inside add item")
    var htmldata;
    var item = document.getElementById("add_item").value;
    menu.push(item);
    menu.sort();

    htmldata = "<section class='cards'>"
    for (var j = 0; j < menu.length; j++) {
        htmldata = htmldata + "<div class='card'>" + "<img src=pizzaImg.png>" + menu[j] + "</div>"
    }

    htmldata = htmldata + "</section>"
    document.getElementById("display_addmenu").innerHTML = htmldata;
}