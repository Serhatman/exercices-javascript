const resetButton = document.getElementById('resetButton');

resetButton.addEventListener('click', function() {
  const inputFields = document.querySelectorAll('input[type="text"]');
  inputFields.forEach(function(inputField) {
    inputField.value = '';
  });
});