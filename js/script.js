(function(){
emailjs.init("Xc1iOfGYOBfShOrn8"); // replace
})();

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

e.preventDefault();

emailjs.sendForm(
"service_nm7tt9x",   // replace
"template_ukb4iql",  // replace
this
)
.then(function(){
alert("Message sent successfully!");
const lead = {
name: form.querySelector("input[type='text']").value,
email: form.querySelector("input[type='email']").value,
message: form.querySelector("textarea").value,
date: new Date().toISOString()
};

let leads = JSON.parse(localStorage.getItem("leads")) || [];
leads.push(lead);
localStorage.setItem("leads", JSON.stringify(leads));
form.reset();
},
function(error){
alert("Failed to send. Try again.");
});

});

document.querySelectorAll("a[href^='#']").forEach(anchor => {
anchor.addEventListener("click", function(e) {
e.preventDefault();
document.querySelector(this.getAttribute("href"))
.scrollIntoView({ behavior: "smooth" });
});
});


const faders = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
if(entry.isIntersecting){
entry.target.classList.add("visible");
}
});
});

faders.forEach(el => {
el.classList.add("fade-in");
observer.observe(el);
});