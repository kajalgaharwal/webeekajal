//email
function sendMsg() {
  var email = $('#Sender').val();
  var message = $('#Message').val();
  var body = $('#body').val();
  Email.send({
    SecureToken: '6a91da28-40dd-47e1-942c-fb3e66624a76',
    To: 'webeekajal@gmail.com',
    From: 'kajal.gaharwal@gmail.com',
    Subject: 'New message on contact from',
    Body: email + '           ' + message,
  }).then(message => {
    if (message == 'OK') {
      alert('Your mail has been sent. Thank you for connecting.');
    } else {
      console.error(message);
      alert('There is error at sending message. ');
    }
  });
}
//smooth scroll
window.addEventListener('DOMContentLoaded', setup);
function setup() {
  const options = {
    rootMargin: '0px 0px -200px 0px',
  };
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      } else {
        return;
      }
    });
  }, options);
  const about_data = document.querySelector('.about_data');
  const about_images = document.querySelector('.about_images');
  const box = document.querySelectorAll('.box');
  const detailed_info = document.querySelectorAll('.detailed_info');
  const mail = document.querySelector('.mail');
  const section_head = document.querySelectorAll('.section_head');
  observer.observe(about_data);
  observer.observe(about_images);
  observer.observe(mail);
  box.forEach(p => observer.observe(p));
  detailed_info.forEach(p => observer.observe(p));
  section_head.forEach(p => observer.observe(p));
}
//dark mode
var about = document.getElementById('about');
document.getElementById('myToggle').addEventListener('click', function () {
  about.classList.toggle('dark'), services.classList.toggle('dark');
});

//scroll to top
var scrolltotop = document.getElementById('scrolltotop');
scrolltotop.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
});

//image blinking
var obs3 = new IntersectionObserver(
  entries => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      entry.target.classList.add('blinking');
      obs3.unobserve(entry.target);
    }
  },
  {
    threshold: 0.1,
  }
);
// var box_tag = document.querySelectorAll('.box_tag');
// box_tag.forEach(ps => obs3.observe(ps));
var box_icon = document.querySelectorAll('.box_icon');
box_icon.forEach(ps => obs3.observe(ps));

//about typewriter
var text2 = 'Do you want to know me? Here you go';
var about_type = document.querySelector('#about_type');
var obs2 = new IntersectionObserver(
  entries => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      for (let i = 0; i < text2.length; i++) {
        setTimeout(() => {
          about_type.innerHTML += text2[i];
        }, i * 100);
      }
      obs2.unobserve(about_type);
    }
  },
  {
    threshold: 0.1,
  }
);
obs2.observe(about_type);

//services typewriter
var text1 = 'Services that I specialize in';
var services_type = document.querySelector('#services_type');
var obs1 = new IntersectionObserver(
  entries => {
    const entry = entries[0];

    if (entry.isIntersecting) {
      for (let i = 0; i < text1.length; i++) {
        setTimeout(() => {
          services_type.innerHTML += text1[i];
        }, i * 100);
      }
      obs1.unobserve(services_type);
    }
  },
  {
    threshold: 0.1,
  }
);
obs1.observe(services_type);

//contact typewriter
var text = 'Wanna team up?? Lets create identity together';
var contact_type = document.querySelector('#contact_type');
var obs = new IntersectionObserver(
  entries => {
    const entry = entries[0];

    if (entry.isIntersecting) {
      for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
          contact_type.innerHTML += text[i];
        }, i * 100);
      }
      obs.unobserve(contact_type);
    }
  },
  {
    threshold: 0.1,
  }
);
obs.observe(contact_type);
