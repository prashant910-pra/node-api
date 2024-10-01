const express = require("express")
const router = express.Router();
const {getContacts,addContacts, getContactyId,updateContactId} = require("../Controllers/contactController")

router.route('/').get(getContacts).post(addContacts)

router.route('/:id').get(getContactyId).put(updateContactId)

module.exports = router;
