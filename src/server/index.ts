import app from './app';
import logger from '../utils/logger';

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    logger.info(`Zimra FDMS Mock Server is running on port ${PORT}`);
});
