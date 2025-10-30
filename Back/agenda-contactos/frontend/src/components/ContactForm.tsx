import React, { useState } from 'react';

const ContactForm = ({ onSubmit, initialData }) => {
    const [name, setName] = useState(initialData ? initialData.name : '');
    const [email, setEmail] = useState(initialData ? initialData.email : '');
    const [phone, setPhone] = useState(initialData ? initialData.phone : '');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ name, email, phone });
        setName('');
        setEmail('');
        setPhone('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Phone:</label>
                <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Save Contact</button>
        </form>
    );
};

export default ContactForm;