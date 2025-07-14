function toggleMenu() {
  const menuLinks = document.querySelector(".menu-links");
  const hamburgerIcon = document.querySelector(".hamburger-icon");
  menuLinks.classList.toggle("open");
  hamburgerIcon.classList.toggle("open");
}
function display()
{
    const name=document.getElementById('name').value;
    const email=document.getElementById('email').value;
    const message=document.getElementById('message').value;
    if(name && email && message)
    {
        alert("Thank you, "+name+"! Your message has been submitted.");
    }
    else
    {
        alert("Please fill out all fields.");
    }
}
