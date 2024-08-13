document.getElementById('toggle-link').addEventListener('click', (e) => {
  e.preventDefault();
  
  const loginForm = document.getElementById('login-form');
  const signupForm = document.getElementById('signup-form');
  const formTitle = document.getElementById('form-title');
  const toggleText = document.getElementById('toggle-text');
  const toggleLink = document.getElementById('toggle-link');

  if (signupForm.classList.contains('hidden')) {
    loginForm.classList.add('hidden');
    signupForm.classList.remove('hidden');
    formTitle.innerText = 'Create a new account';
    toggleText.innerText = 'Already have an account?';
    toggleLink.innerText = 'Sign In';
  } else {
    signupForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
    formTitle.innerText = 'Sign in to your account';
    toggleText.innerText = 'Not registered?';
    toggleLink.innerText = 'Sign Up now';
  }
});

const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  loginUser(email, password);
});

const signupForm = document.getElementById('signup-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;

  signUpUser(email, password);
});

function loginUser(email, password) {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find(user => user.email === email && user.password === password);

  if (user) {
    localStorage.setItem('loggedInUser', email);
    alert('Login successful!');
    window.location.href = 'dashboard.html'; 
  } else {
    alert('Invalid email or password!');
  }
}

function signUpUser(email, password) {
  const users = JSON.parse(localStorage.getItem('users')) || [];

  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    alert('User already exists! Please sign in.');
  } else {
    users.push({ email, password, donorInfo: null });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Sign-up successful! You can now log in.');
    
    // Switch to login form after successful sign-up
    document.getElementById('toggle-link').click();
  }
}
