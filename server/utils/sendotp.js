import Mailgun from "mailgun-js";

function sendotp(email, otp_code) {
  const DOMAIN = "hygieioraapp.com";
  const mg = Mailgun({ apiKey: process.env.MAILGUN_API_KEY, domain: DOMAIN });
  const data = {
    from: "Hygieioraapp <support@hygieioraapp.com>",
    to: email,
    subject: "verify your email address(hygieioraapp)",
    template: "verify your email address(hygieioraapp)",
    "h:X-Mailgun-Variables": JSON.stringify({
      otp_code: otp_code,
    }),
  };
  mg.messages().send(data, function (error, body) {
    console.log(body);
    if (error)
    console.log(error);
  });
}


export default sendotp;