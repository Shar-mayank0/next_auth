import nodemailer from 'nodemailer';

export const sendMail = async (to: string, subject: string, html: string) => {
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        const info = await transporter.sendMail({
            from: process.env.SMTP_USER,
            to,
            subject,
            html,
        });

        console.log("Message sent: %s", info.messageId);
    } catch (error) {
        console.error("Error sending email: ", error);
    }
};