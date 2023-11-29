


(function () {
    emailjs.init("9BUXo4lOiyMyA0RKb");
})();




// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}

// scroll sections
let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            });
            //active sections for animation on scroll
            sec.classList.add('show-animate');
        }

    })
    //sticky header
    let header = document.querySelector("header");
    header.classList.toggle('sticky', window.scrollY > 100);
    //  remove toggle icon and navbar when click navbar links (scroll) 
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
    // animation for footer on scroll
    let footer = document.querySelector('footer');
    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}


(function () {
    emailjs.init("9BUXo4lOiyMyA0RKb");
})();


function sendMail(e) {
    e.preventDefault();
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const number = document.getElementById('number').value
    const subject = document.getElementById('subject').value
    const message = document.getElementById('message').value

    const mailMessage = `Name: ${name}, Email: ${email} , Contact Number: ${number} `
    let templateParams = {
        subject: subject,
        from_name: name,
        to_name: "Sonal Rakheja",
        message: `${message}
         Here are my details : 
          ${mailMessage} `
    }

    emailjs.send("service_kxnaqwg", "template_3jtk4kn", templateParams, "9BUXo4lOiyMyA0RKb").then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
        window.scrollTo(0, 0)
        document.getElementById('name').value = ""
        document.getElementById('email').value = ""
        document.getElementById('number').value = ""
        document.getElementById('subject').value = ""
        document.getElementById('message').value = ""
    }, function (error) {
        console.log('FAILED...', error);
    });
}




