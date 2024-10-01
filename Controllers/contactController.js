const asyncHandler = require("express-async-handler")
const Contact=require("../models/ContactModel");
const getContacts = asyncHandler(async(req,res) =>{
    const contacts = await Contact.find();
    res.status(200).json(contacts);
})

const addContacts = asyncHandler(async(req,res) =>{
    const {name,email,phone} = req.body
    if(!name || !email || !phone)
    {
        res.status(400)
        throw new Error("All fields are mandatory");
    }

    const  contact = await Contact.create({
        name,email,phone
    });
    res.status(201).json(contact);
})

const getContactyId = asyncHandler(async(req,res) =>{
    const id = req.params.id
    const contacts = await Contact.findById(id);
    console.log(contacts)
    if(!contacts)
    {
        res.status(404)
        throw new Error("No records found");
    }
    res.status(200).json(contacts);
})

const updateContactId = asyncHandler(async(req,res) =>{
    const id = req.params.id
    const contacts = await Contact.findById(id);
    console.log(contacts)
    if(!contacts)
    {
        res.status(404)
        throw new Error("No records found");
    }
    const contact = await Contact.findByIdAndUpdate(id,req.body,{new:true});
    res.status(200).json(contact);
})

module.exports = {getContacts,addContacts,getContactyId,updateContactId}