import emailjs from '@emailjs/browser';

const SERVICE_ID = 'manu_project';
const TEMPLATE_ID = 'manu_project';
const PUBLIC_KEY = 'leo2_XGg1E-aR4lBo';

export const sendContactEmail = (formData) => {
    const templateParams = {
        name: formData.fullname,
        email: formData.email,
        title: formData.subject,
        message: formData.message,
        time: new Date().toLocaleString(),
    };

    return emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
};