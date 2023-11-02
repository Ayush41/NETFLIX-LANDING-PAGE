// alert("JS is connected");
console.log("JS is connected ");
const langDropdown = document.getElementById("language-btn");


langDropdown.addEventListener("click", ()=>{
    document.getElementById("language-dropdown").classList.toggle("show");
});

