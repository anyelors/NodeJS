fetch('http://localhost:3000/time', {
  method: 'GET',
  headers: {
    'x-api-key': '12345'
  }
})
  .then(response => response.text())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
