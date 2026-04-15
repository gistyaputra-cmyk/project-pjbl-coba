function showSection(section){
    document.getElementById("about").style.display = "none";
    document.getElementById("market").style.display = "none";

    document.getElementById(section).style.display = "block";
}

function logout(){
    window.location.href = "index.html";
}

function goJual(){
    window.location.href = "jual.html";
}

function showProduct(name){
    document.getElementById("popup").style.display = "block";
    document.getElementById("productName").innerText = name;
}

function closePopup(){
    document.getElementById("popup").style.display = "none";
}

function beli(){
    document.getElementById("popup").style.display = "none";
    document.getElementById("buyPopup").style.display = "block";
}

function closeBuy(){
    document.getElementById("buyPopup").style.display = "none";

}
    
function searchProduct(){
    let input = document.getElementById("search").value.toLowerCase();
    let items = document.querySelectorAll(".product");

    items.forEach(item => {
        let name = item.getAttribute("data-name").toLowerCase();
        item.style.display = name.includes(input) ? "block" : "none";
    });
}

function filterKategori(kategori){
    let items = document.querySelectorAll(".product");

    items.forEach(item => {
        if(kategori === "all"){
            item.style.display = "block";
        } else {
            item.style.display =
                item.getAttribute("data-kategori") === kategori
                ? "block" : "none";
        }
    });
}
