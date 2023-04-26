const dateControl = document.querySelector('input[type="date"]');
const dateNow = new Date()
const date = dateNow.toISOString().split('T')[0]
dateControl.value = date
dateControl.max = date