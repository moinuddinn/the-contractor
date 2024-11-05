require('dotenv').config();

const express = require('express');
const Attendance = require('../models/workers/attendance');
const Workers = require('../models/workers/workers');

const CreateAttendance = async (req, res) => {
    try {
        // Ensure req.body is an array
        const attendanceDataArray = Array.isArray(req.body) ? req.body : [req.body];

        const results = []; // Collect results for all submissions

        for (const data of attendanceDataArray) {
            const { name, fatherName, phone, date, shift, point } = data;

            // Normalize inputs
            const normalizedName = name.toLowerCase();
            const normalizedFatherName = fatherName.toLowerCase();

            // Check if the worker exists
            let worker = await Workers.findOne({ name: normalizedName });

            if (!worker) {
                // Create new worker if not found
                worker = new Workers({
                    name: normalizedName,
                    fatherName: normalizedFatherName,
                    phone
                });
                await worker.save();
                results.push({ message: `New worker created: ${name}` });
            } else {
                results.push({ message: `Worker already exists: ${name}` });
            }

            // Create a new attendance record for the worker
            const normalizedShift = shift.toLowerCase();
            const normalizedPoint = point.toLowerCase();

            const attendance = new Attendance({
                workerId: worker._id,
                date,
                shift: normalizedShift,
                point: normalizedPoint,
            });
            await attendance.save();
            results.push({ message: `Attendance recorded for ${name}`, attendance });
        }

        // Send response after processing all data
        return res.json(results);
    } catch (error) {
        console.log('Error creating attendance:', error);
        return res.status(500).send(error);
    }
};

module.exports = { CreateAttendance };
