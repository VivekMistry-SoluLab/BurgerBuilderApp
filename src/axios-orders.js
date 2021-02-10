import axios from 'axios';

const Instance = axios.create({
    baseURL: 'https://react-my-burger-builder-d6294-default-rtdb.firebaseio.com/'
});

export default Instance