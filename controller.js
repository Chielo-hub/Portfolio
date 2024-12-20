window.onload = () => {
  const navMenu = document.querySelector('.nav-menu');
  const navItems = document.querySelectorAll('.nav-item');
  const hamburger = document.querySelector('.nav-toggle');
  
  const toggle = e => e.classList.toggle('is-active');
  const toggleNav = ({ target }) => Array.from(navMenu.classList).includes('is-active') ? toggle(navMenu) : null;

  hamburger.addEventListener('click', () => toggle(navMenu, 'is-active'));
  Array.from(navItems).forEach(e => e.addEventListener('click', toggleNav));
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); 


  document.getElementById('nameError').textContent = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('messageError').textContent = '';


  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  let isValid = true;

 
  if (!name) {
      document.getElementById('nameError').textContent = 'Name is required.';
      isValid = false;
  }


  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
      document.getElementById('emailError').textContent = 'Email is required.';
      isValid = false;
  } else if (!emailRegex.test(email)) {
      document.getElementById('emailError').textContent = 'Please enter a valid email address.';
      isValid = false;
  }

 
  if (!message) {
      document.getElementById('messageError').textContent = 'Message is required.';
      isValid = false;
  }


  if (isValid) {
      alert('Form submitted successfully!');
  
      document.getElementById('contactForm').reset();
  }
});
