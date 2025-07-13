/* 
 Using Gmail SMTP to send emails because it's free and easy to use
*/

import nodemailer from 'nodemailer';

async function sendEmails() {
    const receiverAddress = 'put the email you want to prank';
    const senderAddress = 'sender email address';
    const message = 'Message you want to send here.';

    // Create transporter object using Gmail SMTP configuration
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587, // SMTP Port
        secure: false, // use TLS (not SSL)
        auth: {
            user: 'sender email address',
            pass: 'app password'
        }
    });

    try {
      // Loop to send 10,000 emails (beware, your email can be suspended!)
        for (let i = 0; i < 10000; i++) {
            // Send mail with defined transporter
            const info = await transporter.sendMail({
                from: senderAddress,
                to: receiverAddress,
                subject: 'Message',
                text: message
            });

            console.log(`Message ${i} sent: ${info.messageId}`);
        }
    } catch (error) {
      // Log any errors that occur during sending.
        console.error('Error occurred:', error);
    }
}

sendEmails().catch(console.error);