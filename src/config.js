import {config} from 'dotenv';

config();

export const PORT = process.env.PORT || 3000;
export const DB_USER = process.env.DB_USER || 'root';
export const DB_PASSWROD = process.env.DB_PASSWROD || '1712@fll';
export const DB_HOST = process.env.DB_HOST || 'localhost';
export const DB_DATABASE = process.env.DB_DATABASE || 'mycompany';
export const DB_PORT = process.env.DB_Port || 3306;

