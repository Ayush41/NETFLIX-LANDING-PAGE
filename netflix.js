// alert("JS is connected");
console.log("JS is connected ");
const langDropdown = document.getElementById("language-btn");
const faqlist = document.querySelectorAll(".inner-container ul li");

langDropdown.addEventListener("click", ()=>{
    document.getElementById("language-dropdown").classList.toggle("show");
});

faqlist.forEach((item)=>{
    item.addEventListener("click", (e) =>{
        item.classList.toggle("show");
    })
})