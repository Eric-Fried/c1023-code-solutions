const $contactForm = document.querySelector('#contact-form');

$contactForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  console.log($contactForm.elements);

  const formElements = {
    name: $contactForm.elements.name.value,
    email: $contactForm.elements.email.value,
    message: $contactForm.elements.message.value,
  };

  console.log(formElements);
  $contactForm.reset();
}
