const express = require('express');
const router = express.Router();

// Retriving Contacts
router.get('/contacts', (req, res, next) => {
    res.send('Retrieving the contact list');
});

// Add Contact
router.post('/contact', (req, res, next) => {
    // Logic to Add Contact
});

// Delete Contact
router.delete('/contact/:id', (req, res, next) => {
    // Logic to Delete Contact
});

module.exports = router;