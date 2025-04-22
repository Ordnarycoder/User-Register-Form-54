// Elements
const form      = document.getElementById('registerForm');
const username  = document.getElementById('username');
const email     = document.getElementById('email');
const password  = document.getElementById('password');
const confirm   = document.getElementById('confirm');
const messageEl = document.getElementById('message');

const fields = [
  { el: username, err: document.getElementById('usernameError') },
  { el: email,    err: document.getElementById('emailError')    },
  { el: password, err: document.getElementById('passwordError') },
  { el: confirm,  err: document.getElementById('confirmError')  },
];

// Helper: show field error
function showFieldError(field, msg) {
  field.el.classList.add('invalid');
  field.err.textContent = msg;
}

// Helper: clear field error
function clearFieldError(field) {
  field.el.classList.remove('invalid');
  field.err.textContent = '';
}

// Validate a single field using constraint API
function validateField(field) {
  const el = field.el;
  if (!el.checkValidity()) {
    showFieldError(field, el.title || el.validationMessage);
    return false;
  }
  clearFieldError(field);
  return true;
}

// Special check: confirm password
function validateConfirm() {
  if (confirm.value !== password.value) {
    showFieldError(
      fields.find(f => f.el === confirm),
      'Passwords do not match.'
    );
    return false;
  }
  clearFieldError(fields.find(f => f.el === confirm));
  return true;
}

// Real‑time validation on blur
fields.forEach(field => {
  field.el.addEventListener('blur', () => {
    validateField(field);
    if (field.el === confirm) validateConfirm();
  });
});

form.addEventListener('submit', e => {
  e.preventDefault();
  let valid = true;

  // Validate all fields
  fields.forEach(field => {
    if (!validateField(field)) valid = false;
  });
  if (!validateConfirm()) valid = false;

  if (!valid) {
    showMessage('Please fix errors and try again.', 'red');
    return;
  }

  // Build user object
  const newUser = {
    username: username.value.trim(),
    email:    email.value.trim(),
    password: password.value  // in real apps, hash this!
  };

  // Load existing users
  const users = JSON.parse(localStorage.getItem('users') || '[]');

  // Check duplicate email
  if (users.some(u => u.email === newUser.email)) {
    showMessage('Email already registered!', 'red');
    return;
  }

  // Save
  users.push(newUser);
  localStorage.setItem('users', JSON.stringify(users));

  showMessage('Registration successful!', 'green');
  form.reset();
  fields.forEach(clearFieldError);
});

function showMessage(msg, color) {
  messageEl.textContent = msg;
  messageEl.style.color = color;
  setTimeout(() => messageEl.textContent = '', 3000);
}
