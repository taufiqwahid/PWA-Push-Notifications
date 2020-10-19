var webPush = require("web-push");
const vapidKeys = {
  publicKey:
    "BBrw7FBcxYY4aBvq2nk1HE9H4KBwDLjQnpwPUAXjoebnn5rOiiLrmpt37J3K7TtcRMgeA1FKmvRwzR3DEFqAqGI",
  privateKey: "khXIlHkYnZWlYTfm5vUXqA0gUe66WukG1sPyMYJqYQY",
};

webPush.setVapidDetails(
  "mailto:example@yourdomain.org",
  vapidKeys.publicKey,
  vapidKeys.privateKey,
);
var pushSubscription = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/cTh1SZIbXZ4:APA91bGX3WnKfM4dxzV725bjVYg51Sd6jMQv1-mvKfvuANorYybmzxCXIW1CbqrT8GS_wn-FGukSf1FTtKrA4RZdRwaSEF6zLr1VSsNz5cRd--JuRDrNxSflwpgWeTHPfmqYuiCICsAE",
  keys: {
    p256dh:
      "BJvR6Wm7px7Xw642B/CbvJM/VUUfruL+j1Iiz2FtEa+rAImNucyQywa1wolso79/ETIrXTNxCzEM0O91pmq0Qx4=",
    auth: "+/ph7zrBgJnJtZcafzVdOw==",
  },
};
var payload = "Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!";
var options = {
  gcmAPIKey: "606998233508",
  TTL: 60,
};
webPush.sendNotification(pushSubscription, payload, options);
