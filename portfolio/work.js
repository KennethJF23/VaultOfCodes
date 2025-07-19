document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  if (!form) {
    console.error('contactForm not found in the DOM!');
    return;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = form.elements['name'].value;
    const email = form.elements['email'].value;
    const message = form.elements['message'].value;

    const templateParams = {
      from_name: name,
      to_name: 'Kenneth',
      from_email: email,
      to_email: 'kennethfernandes113@gmail.com',
      message: message,
    };

    emailjs.send(
      'service_putddvm', 
      'template_u8la2zz', 
      templateParams
    )
    .then(() => {
      alert("Message sent successfully!");
      form.reset();
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      alert("Failed to send message.");
    });
  });
});
