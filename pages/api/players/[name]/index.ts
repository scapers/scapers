import axios from 'axios';
import {NextApiRequest, NextApiResponse} from 'next';
import {Player, ResponseError} from '../../../../interfaces';

const PlayerHandler = async (
    req: NextApiRequest,
    res: NextApiResponse<Player | ResponseError>
) => {
    const { query } = req
    const { name } = query

    const r = await axios.get(`https://api.runepixels.com/players/${name}`);
    if (r && r.data) {
        return res.status(200).json(r.data);
    }

    return res.status(404).json({ message: `User with name: ${name} not found.` });
};

export default PlayerHandler;