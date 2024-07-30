document.getElementById('panForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var panCardNumber = document.getElementById('panInput').value;
    var pattern = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/; 
    if (pattern.test(panCardNumber)) {
      document.getElementById('errorMessage').innerHTML = 'Valid PAN Card Number';
    } else {
      document.getElementById('errorMessage').innerHTML = 'Invalid PAN Card Number';
    }
  });
