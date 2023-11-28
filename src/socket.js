import { io } from 'socket.io-client';
import { SERVER_URL } from './constants/environments';
const URL = SERVER_URL
console.log(URL)
export const socket = io(URL);
