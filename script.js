document.addEventListener("DOMContentLoaded", function () {

  /* YEAR */
  document.getElementById("year").textContent = new Date().getFullYear();

  /* TYPEWRITER */
  const words = ["Developer", "Student", "Designer", "Freelancer", "Gamer", "Binge Watcher", "Music Lover"];
  let i = 0, j = 0, deleting = false;
  const typed = document.getElementById("typed");

  function type() {
    if (!typed) return;

    const word = words[i];

    if (!deleting) {
      typed.textContent = word.substring(0, j++);
      if (j > word.length) {
        deleting = true;
        setTimeout(type, 1000);
        return;
      }
    } else {
      typed.textContent = word.substring(0, j--);
      if (j === 0) {
        deleting = false;
        i = (i + 1) % words.length;
      }
    }

    setTimeout(type, deleting ? 50 : 90);
  }

  type();

  /* EMAILJS */
  emailjs.init("z6BILhnZQkdC3Yojp");

  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = this.user_name.value;
    const email = this.user_email.value;
    const message = this.message.value;

    emailjs.send("service_vle5u0c", "template_4904dch", {
      from_name: name,
      from_email: email,
      message: message,
      to_email: "locmayonzye@gmail.com"
    });

    emailjs.send("service_vle5u0c", "template_autoreply", {
      from_name: name,
      from_email: email,
      message: message,
      to_email: email
    });

    document.getElementById("status").textContent =
      "Message sent!";

    form.reset();
  });

  /* ACTIVE NAVIGATION SCROLL */
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
      const top = section.offsetTop - 120;
      if (scrollY >= top) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  });

});