fetch("../php/getIndexImages.php").then(response => response.json()).then(data => {
    document.querySelector(".movies-btn img").src = data[0].image;
    document.querySelector(".series-btn img").src = data[1].image; 
})