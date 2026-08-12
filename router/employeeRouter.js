const express = require('express');
const supabase = require('../config/db');

const router = express.Router();

// Get all employees
router.get('/', async (request, response) => {
    try {
        const { data, error } = await supabase
            .from('employee')
            .select('*');

        if (error) throw error;

        response.status(200).json(data);

    } catch (error) {
        response.status(500).json({ message: error.message });
    }
});


// Get employee by ID
router.get('/:id', async (request, response) => {
    try {
        const { data, error } = await supabase
            .from('employee')
            .select('*')
            .eq('id', request.params.id)
            .single();

        if (error) {
            return response.status(404).json({
                message: 'Employee not found'
            });
        }

        response.status(200).json(data);

    } catch (error) {
        response.status(500).json({ message: error.message });
    }
});


// Create employee
router.post('/', async (request, response) => {
    try {
        const {
            name,
            username,
            email,
            password,
            department,
            role,
            salary
        } = request.body;

        if (!name) return response.status(400).json({ message: 'Name is required' });
        if (!username) return response.status(400).json({ message: 'Username is required' });
        if (!email) return response.status(400).json({ message: 'Email is required' });
        if (!password) return response.status(400).json({ message: 'Password is required' });
        if (!department) return response.status(400).json({ message: 'Department is required' });
        if (!role) return response.status(400).json({ message: 'Role is required' });
        if (salary === undefined || salary === null) {
            return response.status(400).json({ message: 'Salary is required' });
        }

        const { data, error } = await supabase
            .from('employee')
            .insert([{
                name,
                username,
                email,
                password,
                department,
                role,
                salary
            }])
            .select()
            .single();

        if (error) throw error;

        response.status(201).json({
            message: 'Employee created successfully',
            createdEmployee: data
        });

    } catch (error) {
        response.status(500).json({ message: error.message });
    }
});


// Update employee
router.put('/:id', async (request, response) => {
    try {
        const {
            name,
            username,
            email,
            password,
            department,
            role,
            salary
        } = request.body;

        if (!name) return response.status(400).json({ message: 'Name is required' });
        if (!username) return response.status(400).json({ message: 'Username is required' });
        if (!email) return response.status(400).json({ message: 'Email is required' });
        if (!password) return response.status(400).json({ message: 'Password is required' });
        if (!department) return response.status(400).json({ message: 'Department is required' });
        if (!role) return response.status(400).json({ message: 'Role is required' });
        if (salary === undefined || salary === null) {
            return response.status(400).json({ message: 'Salary is required' });
        }

        const { data, error } = await supabase
            .from('employee')
            .update({
                name,
                username,
                email,
                password,
                department,
                role,
                salary
            })
            .eq('id', request.params.id)
            .select()
            .single();

        if (error) {
            return response.status(404).json({
                message: 'Employee not found'
            });
        }

        response.status(200).json({
            message: 'Employee updated successfully',
            employee: data
        });

    } catch (error) {
        response.status(500).json({ message: error.message });
    }
});


// Delete employee
router.delete('/:id', async (request, response) => {
    try {
        const { data, error } = await supabase
            .from('employee')
            .delete()
            .eq('id', request.params.id)
            .select()
            .single();

        if (error) {
            return response.status(404).json({
                message: 'Employee not found'
            });
        }

        response.status(200).json({
            message: 'Employee deleted successfully',
            deletedEmployee: data
        });

    } catch (error) {
        response.status(500).json({ message: error.message });
    }
});


module.exports = router;