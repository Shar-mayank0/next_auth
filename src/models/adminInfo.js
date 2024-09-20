import { verify } from 'crypto';
import mongoose from 'mongoose';

const adminInfoSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please provide an email'],
        unique: true,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    verifyToken: string,
    verifyExpires: Date,
});

const admin = mongoose.model.adminInfo || mongoose.model('adminInfo', adminInfoSchema);

export default admin;