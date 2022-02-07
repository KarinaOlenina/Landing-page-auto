let slideIndex = 1;
showDivs(slideIndex);

function plusDivsFirst(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    let i;
    const x = document.getElementsByClassName("w3-content__item");
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}

let slideIndexSecond = 1;
showDivsSecond(slideIndexSecond);

function plusDivsSecond(n) {
    showDivsSecond(slideIndexSecond += n);
}

function showDivsSecond(n) {
    let i;
    const x = document.getElementsByClassName("w3-content__item2");
    if (n > x.length) {
        slideIndexSecond = 1;
    }
    if (n < 1) {
        slideIndexSecond = x.length;
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndexSecond - 1].style.display = "block";
}
