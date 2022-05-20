const sgMail = require("@sendgrid/mail")

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: "ivanbratan46@gmail.com",
        subject: "Thanks for joining in!",
        text: `Welcome to the app, ${name}. Let me know how is your experience!`
    });
};

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: "ivanbratan46@gmail.com",
        subject: "Sorry to see you go!",
        text: `It sad that you're leaving, ${name}. Let me know how is your experience!`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}