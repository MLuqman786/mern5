import nodemailer from "nodemailer";

var transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "ce2f247b15d2b1",
    pass: "96abf17f54eefb",
  },
});

const loginEmail = async ({ from, to, subject, text }) => {
  const info = await transporter.sendMail({
    from: from, // sender address
    to: to, // list of receivers
    subject: subject, // Subject line
    // text: text, // plain text body
    html: `<b>${text}</b>`, // html body
  });

  console.log("Message sent: %s", info.messageId);
};

export default loginEmail;
