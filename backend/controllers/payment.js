require('dotenv').config();

const express = require('express');
const Advance = require('../models/payment/advance');
const Prevadvance = require('../models/payment/prevadvance');
const Salary = require('../models/payment/salary');
const Workers = require('../models/workers/workers');

// Utility function to handle payment creation
const createPaymentRecord = async (req, res, PaymentModel) => {
    try {
        const workerId = req.params.workerId;
        const { amount, paymentDate, type } = req.body;

        // Validate required fields
        if (!workerId || !amount || !paymentDate || !type) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        // Ensure valid workerId (optional, but recommended)
        const workerExists = await Workers.findById(workerId);
        if (!workerExists) {
            return res.status(404).json({ message: 'Worker not found' });
        }

        // Create the payment record
        const newPaymentRecord = new PaymentModel({
            workerId,
            amount,
            paymentDate: new Date(paymentDate), // Convert string to Date
            type,
        });

        // Save the payment record
        const savedPaymentRecord = await newPaymentRecord.save();

        // Send response with the saved payment record
        res.status(200).json({
            message: `${PaymentModel.modelName} added successfully`,
            savedPaymentRecord,
        });
    } catch (error) {
        console.error('Error creating payment record:', error);

        // Send specific error responses
        if (error.name === 'ValidationError') {
            return res.status(400).json({ message: error.message });
        }
        res.status(500).send({ message: 'Internal Server Error', error });
    }
};

// Wrapper functions for specific payment types
const CreateNewAdvance = (req, res) => {
    return createPaymentRecord(req, res, Advance);
};

const CreatePrevAdvance = (req, res) => {
    return createPaymentRecord(req, res, Prevadvance);
};

const Createsalary = (req, res) => {
    return createPaymentRecord(req, res, Salary);
};

module.exports = { CreateNewAdvance, CreatePrevAdvance, Createsalary };
