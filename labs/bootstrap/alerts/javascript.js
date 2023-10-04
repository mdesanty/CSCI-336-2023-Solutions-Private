document.addEventListener('DOMContentLoaded', function() {
  const blueAlertButton = document.getElementById('blue-alert-btn');
  blueAlertButton.addEventListener('click', function(event) {
    const alert = document.createElement('div');
    alert.classList.add('alert', 'alert-primary');
    alert.setAttribute('role', 'alert');
    alert.innerHTML = 'Blue alert added!';

    const alertsElement = document.getElementById('alerts');
    alertsElement.appendChild(alert);
  });

  const greenAlertButton = document.getElementById('green-alert-btn');
  greenAlertButton.addEventListener('click', function(event) {
    const alert = document.createElement('div');
    alert.classList.add('alert', 'alert-success', 'show', 'fade', 'alert-dismissible');
    alert.setAttribute('role', 'alert');
    alert.innerHTML = 'Green alert added!';

    const dismissBtn = document.createElement('button');
    dismissBtn.setAttribute('type', 'button');
    dismissBtn.classList.add('btn-close');
    dismissBtn.setAttribute('data-bs-dismiss', 'alert');
    alert.appendChild(dismissBtn);

    const alertsElement = document.getElementById('alerts');
    alertsElement.appendChild(alert);
  });

  const clearBtn = document.getElementById('clear-alerts-btn');
  clearBtn.addEventListener('click', function() {
    const alertsElement = document.getElementById('alerts');
    alertsElement.innerHTML = '';
  });
});