const express = require("express");
const nm = require("nodemailer");
const app = express();

// for form data
app.use(express.urlencoded({ extended: true }));

const trans = nm.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "sainiaryan2020@gmail.com",
    pass: "ankr npee vkoz nute"
  }
});

function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000);
}

app.post("/send-otp", async (req, res) => {
  const email = req.body.email;
  const otp = generateOTP();

  try {
    await trans.sendMail({
      from: "sainiaryan2020@gmail.com",
      to: 'www.aryan.saini6@gmail.com',
      subject: "OTP",
      text: `Your OTP is: ${otp}`
    });

    console.log("OTP:", otp);
    res.send("OTP sent successfully ");

  } catch (err) {
    res.send("Error sending OTP ");
  }
});

app.listen(5678, () => console.log("Server running"));