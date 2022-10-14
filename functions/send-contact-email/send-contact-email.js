const sgMail = require("@sendgrid/mail");

exports.handler = async function (event, context, callback) {
  let key = "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";
  console.log("inside: " + event);
  //const { message, senderEmail, senderName } = JSON.parse(event.body);
  sgMail.setApiKey(key);
  console.log(key);
  const msg = {
    to: "andreas.riedmann@gmail.com", // Change to your recipient
    from: "andreas.riedmann@riedmann.rocks", // Change to your verified sender
    subject: "Sending with SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };

  console.log("sending...");

  try {
    await sgMail.send(msg);
    return {
      statusCode: 200,
      body: 'Message sent',
    };
  } catch (err) {
    console.log(err);
    return {
      statusCode: 200,
      body: JSON.stringify({ msg: err.message, err:err }),
    };
  }

  
};
