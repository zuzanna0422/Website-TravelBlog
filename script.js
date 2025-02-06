document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("changing-header");
    const texts = ["OPEN YOUR HEART","EXPLORE","TO TRAVEL IS TO LIVE"];
    let index = 0;

    setInterval(() => {
        index = (index + 1) % texts.length;
        header.textContent = texts[index];
    }, 3000); // Change text every 3 seconds
});