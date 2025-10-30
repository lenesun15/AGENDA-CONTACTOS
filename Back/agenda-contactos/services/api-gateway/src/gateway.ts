import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();
const PORT = process.env.PORT || 3000;

// Define the services to proxy
const services = {
    contacts: 'http://contacts-service:4000',
    auth: 'http://auth-service:5000',
    notifications: 'http://notifications-service:6000',
    search: 'http://search-service:7000',
};

// Create proxy middleware for each service
app.use('/api/contacts', createProxyMiddleware({ target: services.contacts, changeOrigin: true }));
app.use('/api/auth', createProxyMiddleware({ target: services.auth, changeOrigin: true }));
app.use('/api/notifications', createProxyMiddleware({ target: services.notifications, changeOrigin: true }));
app.use('/api/search', createProxyMiddleware({ target: services.search, changeOrigin: true }));

app.listen(PORT, () => {
    console.log(`API Gateway is running on http://localhost:${PORT}`);
});