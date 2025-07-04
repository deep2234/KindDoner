// Handle "Add More" functionality for the donation section
const addMoreButton = document.getElementById('add-more');
const donationItemsContainer = document.getElementById('donation-items');

addMoreButton.addEventListener('click', () => {
    const newDonationItem = document.createElement('div');
    newDonationItem.className = 'donation-item';
    newDonationItem.innerHTML = `
        <input type="text" name="donationType[]" placeholder="Donation Type (e.g., Books)">
        <input type="number" name="donationCount[]" placeholder="Number of Items" min="1">
        <button type="button" class="remove-item">Remove</button>
    `;
    donationItemsContainer.appendChild(newDonationItem);
});

// Handle "Remove" functionality for donation sections
donationItemsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-item')) {
        const donationItem = e.target.closest('.donation-item');
        donationItemsContainer.removeChild(donationItem);
    }
});




document.getElementById("donation_details").addEventListener("submit", async function (e) {
  e.preventDefault();

  const form = e.target;

  const items = [];
  const donationTypes = form.querySelectorAll('input[name="donationType[]"]');
  const donationCounts = form.querySelectorAll('input[name="donationCount[]"]');

  for (let i = 0; i < donationTypes.length; i++) {
    items.push({
      donation_type: donationTypes[i].value,
      item_count: donationCounts[i].value
    });
  }

  const formData = {
    first_name: form["first-name"].value,
    last_name: form["last-name"].value,
    phone_number: form["phone-no"].value,
    email: form["email"].value,
    address: {
      street: form["street"].value,
      landmark: form["landmark"].value,
      city: form["city"].value,
      state: form["state"].value,
      pincode: form["pincode"].value
    },
    items: items
  };

  const response = await fetch("https://pks2tgas9j.execute-api.us-east-1.amazonaws.com/submit-donation", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData)
  });

  const result = await response.json();
  alert(result.message);
});


