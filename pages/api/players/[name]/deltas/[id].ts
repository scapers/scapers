import axios from 'axios';
import {NextApiRequest, NextApiResponse} from 'next';
import {Deltas, ResponseError} from '../../../../../interfaces';

const PlayerDeltasHandler = async (
    req: NextApiRequest,
    res: NextApiResponse<Deltas | ResponseError>
) => {
    const { query } = req
    const { name, id, timeperiod } = query

    const r = await axios.get(`https://api.runepixels.com/players/${id}/xp`, {
        params: {
            timeperiod
        }
    });
    if (r && r.data) {
        return res.status(200).json(r.data);
    }

    return res.status(404).json({ message: `User with name: ${name} not found.` });
};

export default PlayerDeltasHandler;