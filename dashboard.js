document.getElementById('donor-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const bloodGroup = document.getElementById('blood-group').value;
  const contactNumber = document.getElementById('contact-number').value;
  const locationName = document.getElementById('location-name').value;

  saveDonorInfo(bloodGroup, contactNumber, locationName);
});

function saveDonorInfo(bloodGroup, contactNumber, locationName) {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const loggedInUserEmail = localStorage.getItem('loggedInUser');

  const user = users.find(user => user.email === loggedInUserEmail);

  if (user) {
    user.donorInfo = { bloodGroup, contactNumber, locationName };
    localStorage.setItem('users', JSON.stringify(users));
    alert('Donor info saved successfully!');
  } else {
    alert('User not found. Please log in again.');
  }
}
