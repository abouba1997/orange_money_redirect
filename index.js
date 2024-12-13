const express = require("express");

const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("About route 🎉 ");
});

app.get("/payment-success", (req, res) => {
  const redirectUrl = "myapp://(payment)/success";
  res.redirect(redirectUrl);
});

app.get("/payment-cancelled", (req, res) => {
  const redirectUrl = "myapp://(payment)/cancelled";
  res.redirect(redirectUrl);
});

app.get("/payment-notif", (req, res) => {
  console.log({ req });
  const redirectUrl = "myapp://(payment)/failed";
  res.redirect(redirectUrl);
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
