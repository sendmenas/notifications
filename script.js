// request permission on page load
document.addEventListener('DOMContentLoaded', function () {
  if (!Notification) {
    alert('Desktop notifications not available in your browser. Try Chromium.'); 
    return;
  }

  if (Notification.permission !== "granted")
    Notification.requestPermission();
});

function notifyMe() {
  if (Notification.permission !== "granted")
    Notification.requestPermission();
  else {
		var message = document.getElementById("notification");
		var notification = new Notification('Dukascopy', {
		icon: 'http://www.lesolstice.ch/wp-content/uploads/2016/06/Swiss-flag.png',
		body: message.value,
	});
	setTimeout(notification.close.bind(notification), 3000);

    //notification.onclick = function () {
      //window.open("https://www.dukascopy.com/");      
    //};
  }
}
