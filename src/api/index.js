import axios from 'axios'

const url = 'http://localhost:8000/register';

export const postRegister = () => axios.post(url);