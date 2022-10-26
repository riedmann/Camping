//netlify functions:invoke send-contact-email --no-identity
require("dotenv").config();
const Recipient = require("mailersend").Recipient;
const EmailParams = require("mailersend").EmailParams;
const MailerSend = require("mailersend");

exports.handler = async function (event, context, callback) {
  let key = process.env.SENDMAIL_API_KEY;

  console.log(key);

  const mailersend = new MailerSend({
    api_key: key,
  });

  const recipients = [
    new Recipient("andreas.riedmann@gmail.com", "Your Client"),
  ];

  const emailParams = new EmailParams()
    .setFrom("andreas@riedmann.rocks")
    .setFromName("Anderl")
    .setRecipients(recipients)
    .setReplyTo("reply@riedmann.rocks")
    .setReplyToName("Reply to name")
    .setSubject("Subject")
    .setHtml("This is the HTML content")
    .setText("This is the text content");

    try {
      mailersend.send(emailParams);
      return {
        statusCode:200,
        body:"dddd"
      }
    } catch (error) {
      console.log("error:" + error.msg);
    }
 
   
  console.log("send");
};
