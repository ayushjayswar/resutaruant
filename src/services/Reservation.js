import emailjs from '@emailjs/browser';

const RESERVATION_SERVICE_ID = 'manu_project2';
const RESERVATION_TEMPLATE_ID = 'manu_project2';
const RESERVATION_PUBLIC_KEY = 'leo2_XGg1E-aR4lBo';

export const sendReservation = (formData) => {
    const templateParams = {
        date: formData.date,
        time: formData.time,
        partySize: formData.partySize,
        tableRef: formData.tableRef,
        fullName: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        feedback: formData.feedback,
        submittedAt: new Date().toLocaleString(),
    };
    return emailjs.send(RESERVATION_SERVICE_ID, RESERVATION_TEMPLATE_ID, templateParams, RESERVATION_PUBLIC_KEY);
};
