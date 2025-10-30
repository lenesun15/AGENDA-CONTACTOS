import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiClient from '../services/apiClient';

const ContactDetail = () => {
    const { id } = useParams();
    const [contact, setContact] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchContact = async () => {
            try {
                const response = await apiClient.get(`/contacts/${id}`);
                setContact(response.data);
            } catch (err) {
                setError('Error fetching contact details');
            } finally {
                setLoading(false);
            }
        };

        fetchContact();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>Contact Detail</h1>
            {contact ? (
                <div>
                    <h2>{contact.name}</h2>
                    <p>Email: {contact.email}</p>
                    <p>Phone: {contact.phone}</p>
                    <p>Address: {contact.address}</p>
                </div>
            ) : (
                <p>No contact found</p>
            )}
        </div>
    );
};

export default ContactDetail;