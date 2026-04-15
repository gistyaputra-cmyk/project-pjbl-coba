function showSection(section){
    let about = document.getElementById("about");
    let market = document.getElementById("market");
    let target = document.getElementById(section);

    if(about) about.style.display = "none";
    if(market) market.style.display = "none";
    if(target) target.style.display = "block";
}

function logout(){
    window.location.href = "index.html";
}

function goJual(){
    window.location.href = "jual.html";
}

function showProduct(name){
    let popup = document.getElementById("popup");
    let productName = document.getElementById("productName");

    if(popup && productName){
        popup.style.display = "block";
        productName.innerText = name;
    }
}

function closePopup(){
    let popup = document.getElementById("popup");
    if(popup) popup.style.display = "none";
}

function beli(){
    let popup = document.getElementById("popup");
    let buyPopup = document.getElementById("buyPopup");

    if(popup) popup.style.display = "none";
    if(buyPopup) buyPopup.style.display = "block";
}

function closeBuy(){
    let buyPopup = document.getElementById("buyPopup");
    if(buyPopup) buyPopup.style.display = "none";
}

function searchProduct(){
    let input = document.getElementById("search");
    if(!input) return;

    let keyword = input.value.toLowerCase();
    let items = document.querySelectorAll(".product");

    items.forEach(item => {
        let name = item.getAttribute("data-name");
        if(name){
            item.style.display = name.toLowerCase().includes(keyword) ? "block" : "none";
        }
    });
}

function filterKategori(kategori){
    let items = document.querySelectorAll(".product");

    items.forEach(item => {
        let kat = item.getAttribute("data-kategori");

        if(kategori === "all"){
            item.style.display = "block";
        } else if(kat){
            item.style.display = kat === kategori ? "block" : "none";
        }
    });
}
