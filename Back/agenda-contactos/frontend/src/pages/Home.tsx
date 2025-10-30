import React, { useEffect, useState } from 'react';
import ContactList from '../components/ContactList';
import ContactForm from '../components/ContactForm';
import { fetchContacts } from '../services/apiClient';

const Home: React.FC = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const loadContacts = async () => {
            const data = await fetchContacts();
            setContacts(data);
        };

        loadContacts();
    }, []);

    return (
        <div>
            <h1>Agenda de Contactos</h1>
            <ContactForm onContactAdded={(newContact) => setContacts([...contacts, newContact])} />
            <ContactList contacts={contacts} />
        </div>
    );
};

export default Home;