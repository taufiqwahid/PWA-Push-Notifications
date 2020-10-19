self.addEventListener("notificationclick", function (event) {
  if (!event.action) {
    // pengguna menyentuh area notifikasi diluar action
    console.log("tidak ada OPSI Notification Click");
    return;
  }
  switch (event.action) {
    case "yes-action":
      console.log("Notifikasi yang diklik YES");
      clients.openWindow("https://google.com");
      break;

    case "no-action":
      console.log("Notifikasi yang diklik NO");
      break;

    default:
      console.log(`Action yang diberikan : ${event.action}`);
      break;
  }
  event.notification.close();
});

self.addEventListener("push", function (event) {
  let body = "";
  if (event.data) {
    body = event.data.text();
  } else {
    body = "Push message no playload";
  }

  let options = {
    body: body,
    icon: "/icon-36x36.png",
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1,
    },
  };
  event.waitUntil(
    self.registration.showNotification("Push Notification", options),
  );
});
