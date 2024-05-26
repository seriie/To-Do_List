// My Alerts
function myAlerts(error) {
    const alert = document.querySelector(".alert");
    const alertMsg = document.querySelector(".alert-msg");
  
    if (alert && alertMsg) {
      alert.style.top = "30px";
      alertMsg.innerHTML = error;
  
      setTimeout(() => {
        alert.style.top = "-150px";
      }, 2000);
    } else {
      console.error("Element .alert or .alert-msg not found!");
    }
}