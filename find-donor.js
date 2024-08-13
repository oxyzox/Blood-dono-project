document.addEventListener('DOMContentLoaded', () => {
  displayUserInfo();
  displayDonorsList();
});

function displayUserInfo() {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const loggedInUserEmail = localStorage.getItem('loggedInUser');
  const user = users.find(user => user.email === loggedInUserEmail);

  if (user && user.donorInfo) {
    const yourInfoDiv = document.getElementById('your-info');
    yourInfoDiv.innerHTML = `
      <p><strong>Email:</strong> ${loggedInUserEmail}</p>
      <p><strong>Blood Group:</strong> ${user.donorInfo.bloodGroup}</p>
      <p><strong>Contact Number:</strong> ${user.donorInfo.contactNumber}</p>
      <p><strong>Location:</strong> ${user.donorInfo.locationName}</p>
    `;
  } else {
    document.getElementById('your-info').innerText = 'No donor information found for you.';
  }
}

function displayDonorsList() {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const donorsListDiv = document.getElementById('donors-list');
  donorsListDiv.innerHTML = '';

  users.forEach(user => {
    if (user.donorInfo && user.email !== localStorage.getItem('loggedInUser')) {
      donorsListDiv.innerHTML += `
        <div class="border p-4 rounded-md shadow-sm">
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Blood Group:</strong> ${user.donorInfo.bloodGroup}</p>
          <p><strong>Contact Number:</strong> ${user.donorInfo.contactNumber}</p>
          <p><strong>Location:</strong> ${user.donorInfo.locationName}</p>
        </div>
      `;
    }
  });

  if (!donorsListDiv.innerHTML) {
    donorsListDiv.innerText = 'No other donors found.';
  }
}
