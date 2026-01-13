import express, { Application } from 'express';
import cors from 'cors'; // Import CORS for connection safety
import deviceRoutes from '../routes/Device';
import publicRoutes from '../routes/Public';
import userRoutes from '../routes/User';
import productsStockRoutes from '../routes/ProductsStock';
import logger from '../utils/logger';

class App {
    public app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    private config(): void {
        // 1. Add CORS Middleware
        this.app.use(cors());

        // Log all requests
        this.app.use((req, res, next) => {
            logger.info({
                method: req.method,
                url: req.url,
                query: req.query,
                body: req.body,
            }, 'Incoming request');
            next();
        });

        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    private routes(): void {
        // 2. CRITICAL CHANGE: Add '/v1' to match ZIMRA's real API structure
        // The Python backend sends requests to .../Device/v1/...
        this.app.use('/Device/v1', deviceRoutes);
        
        // Keep these as they are or comment out if not used yet
        this.app.use('/Public/v1', publicRoutes);
        this.app.use('/User/v1', userRoutes);
        this.app.use('/ProductsStock/v1', productsStockRoutes);

        // 3. Health Check Route (Good for testing)
        this.app.get('/', (req, res) => {
            res.json({ status: 'Online', service: 'ZIMRA FDMS Mock Server' });
        });
    }
}

export default new App().app;