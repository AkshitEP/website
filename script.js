const container = document.querySelector(".container");
const promButton = document.getElementById("promButton");
const proposalDiv = document.getElementById("proposal");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

function SensMail(){
    var params{
    message: "yes"
    }
emailjs.send("service_2isq83a", "template_6jf7mof",params).then(function (res){
    alert("Success! = " + res.status);
})
}
function SensMail1(){
    var params{
    message: "no"
    }
emailjs.send("service_2isq83a", "template_6jf7mof",params).then(function (res){
    alert("Success! = " + res.status);
})
}

// Event listener for the "Click Me" button
promButton.addEventListener("click", function () {
    container.style.transform = "scale(0.8)";
    setTimeout(() => {
        container.style.display = "none"; // Hide the initial content
        proposalDiv.style.display = "block"; // Show the proposal
        proposalDiv.style.transform = "scale(1)";
    }, 300);
});

// Event listeners for Yes and No buttons
yesBtn.addEventListener("click", function () {
    alert("Great! I can't wait for prom!");
});

noBtn.addEventListener("click", function () {
    alert("No worries, thanks for considering it!");
});

