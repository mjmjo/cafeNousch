function togglePassword(button){
  const input = button.previousElementSibling;
  const isPassword = input.type === 'password';
  input.type = isPassword ? 'text' : 'password';
  button.textContent = isPassword ? 'Hide' : 'Show';
}

function validateEmail(value){
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function showError(field, message){
  field.classList.add('error');
  const node = field.querySelector('.error-msg');
  if(node) node.textContent = message;
}

function clearErrors(form){
  form.querySelectorAll('.field').forEach(field => field.classList.remove('error'));
  form.querySelectorAll('.toast').forEach(toast => toast.classList.remove('show'));
}

function handleLogin(event){
  event.preventDefault();
  const form = event.currentTarget;
  clearErrors(form);
  const emailField = form.querySelector('[data-field="email"]');
  const passwordField = form.querySelector('[data-field="password"]');
  const email = form.email.value.trim();
  const password = form.password.value;
  let valid = true;

  if(!validateEmail(email)) { showError(emailField, 'Please enter a valid email address.'); valid = false; }
  if(password.length < 8) { showError(passwordField, 'Password must be at least 8 characters.'); valid = false; }
  if(!valid) return;

  form.querySelector('.toast').textContent = 'Welcome back — login validation passed.';
  form.querySelector('.toast').classList.add('show');
}

function handleRegister(event){
  event.preventDefault();
  const form = event.currentTarget;
  clearErrors(form);
  const firstNameField = form.querySelector('[data-field="firstName"]');
  const lastNameField = form.querySelector('[data-field="lastName"]');
  const emailField = form.querySelector('[data-field="email"]');
  const passwordField = form.querySelector('[data-field="password"]');
  const confirmField = form.querySelector('[data-field="confirmPassword"]');
  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const password = form.password.value;
  const confirmPassword = form.confirmPassword.value;
  let valid = true;

  if(firstName.length < 2) { showError(firstNameField, 'Please enter your first name.'); valid = false; }
  if(lastName.length < 2) { showError(lastNameField, 'Please enter your last name.'); valid = false; }
  if(!validateEmail(email)) { showError(emailField, 'Please enter a valid email address.'); valid = false; }
  if(password.length < 8) { showError(passwordField, 'Use at least 8 characters.'); valid = false; }
  if(password !== confirmPassword) { showError(confirmField, 'Passwords do not match.'); valid = false; }
  if(!valid) return;

  form.querySelector('.toast').textContent = 'Account details validated — ready to connect to backend.';
  form.querySelector('.toast').classList.add('show');
}
