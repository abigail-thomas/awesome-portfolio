document.addEventListener("DOMContentLoaded", () => {
    console.log("JS is working!");

    // Example: Change the header text color on hover
    const header = document.getElementById("header");
    header.addEventListener("mouseover", () => {
        header.style.color = "#f39c12";
    });
    header.addEventListener("mouseout", () => {
        header.style.color = "";
    });
});
