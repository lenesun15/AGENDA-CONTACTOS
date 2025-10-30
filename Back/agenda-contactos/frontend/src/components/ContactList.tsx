import React, { useEffect, useState } from 'react';
import apiClient from '../services/apiClient';

const ContactList: React.FC = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await apiClient.get('/contacts');
                setContacts(response.data);
            } catch (error) {
                console.error('Error fetching contacts:', error);
            }
        };

        fetchContacts();
    }, []);

    return (
        <div>
            <h2>Contact List</h2>
            <ul>
                {contacts.map(contact => (
                    <li key={contact.id}>
                        {contact.name} - {contact.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ContactList;