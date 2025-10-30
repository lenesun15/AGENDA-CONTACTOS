import axios from 'axios';

const apiClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Function to get all contacts
export const getContacts = async () => {
    const response = await apiClient.get('/contacts');
    return response.data;
};

// Function to get a contact by ID
export const getContactById = async (id) => {
    const response = await apiClient.get(`/contacts/${id}`);
    return response.data;
};

// Function to create a new contact
export const createContact = async (contact) => {
    const response = await apiClient.post('/contacts', contact);
    return response.data;
};

// Function to update an existing contact
export const updateContact = async (id, contact) => {
    const response = await apiClient.put(`/contacts/${id}`, contact);
    return response.data;
};

// Function to delete a contact
export const deleteContact = async (id) => {
    await apiClient.delete(`/contacts/${id}`);
};