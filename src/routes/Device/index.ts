import { Router } from 'express';
import * as DeviceController from '../../controllers/Device';

const router = Router();

// 1. Device Configuration & Auth
// Matches POST /Device/v1/Config
router.get('/Config', DeviceController.getConfig); 

// Matches POST /Device/v1/IssueCertificate (Registration)
router.post('/IssueCertificate', DeviceController.issueCertificate);

// 2. Fiscal Day Management
// Matches POST /Device/v1/OpenDay
router.post('/OpenDay', DeviceController.openDay);

// Matches POST /Device/v1/CloseDay
router.post('/CloseDay', DeviceController.closeDay);

// Matches POST /Device/v1/GetStatus
router.get('/GetStatus', DeviceController.getStatus);

// 3. Receipt Submission
// Matches POST /Device/v1/SubmitReceipt
router.post('/SubmitReceipt', DeviceController.submitReceipt);

export default router;