import { Worker, Job } from 'worker_threads';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

const sendNotification = async (job: Job) => {
    const { email, subject, message } = job.data;

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: subject,
        text: message,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(`Notification sent to ${email}`);
    } catch (error) {
        console.error(`Failed to send notification to ${email}:`, error);
    }
};

const worker = new Worker('./worker.ts');

worker.on('message', (job: Job) => {
    sendNotification(job);
});

worker.on('error', (error) => {
    console.error('Worker error:', error);
});

worker.on('exit', (code) => {
    if (code !== 0) {
        console.error(`Worker stopped with exit code ${code}`);
    }
});