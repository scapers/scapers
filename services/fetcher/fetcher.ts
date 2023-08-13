import axios from 'axios';

export const get = async (url: string) => {
    console.log('url', url);
    const r = await axios.get(url);
    if (r && r.data) {
        return r.data;
    }

    return null;
}