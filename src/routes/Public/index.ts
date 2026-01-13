import { Router } from 'express';
// @ts-ignore
import * as publicController from '../../controllers/Public';

const router = Router();

// Existing routes
router.post('/v1/:deviceID/RegisterDevice', publicController.registerDevice);
router.get('/v1/GetServerCertificate', publicController.getServerCertificate);
router.post('/v1/:deviceID/VerifyTaxpayerInformation', publicController.verifyTaxpayerInformation);

// --- NEW ROUTE: Lookup ID by Serial ---
router.post('/v1/LookupDeviceID', publicController.lookupDeviceID);

export { router as default };