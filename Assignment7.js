function savePreference(key, value) {
    localStorage.setItem(key, value);
}


function getPreference(key) {
    return localStorage.getItem(key)

document.getElementById("animateBtn").addEventListener("click", function() {
    const box = document.getElementById("animatedBox");
    box.classList.add("animated");


    savePreference("animationPlayed", "true");
});


window.onload = function() {
    if (getPreference("animationPlayed") === "true") {
        document.getElementById("animatedBox").classList.add("animated");
    }
};
