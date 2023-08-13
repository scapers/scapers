import axios from 'axios';
import {NextApiRequest, NextApiResponse} from 'next';
import {Activities, ResponseError} from '../../../../../interfaces';

const PlayerActivitiesHandler = async (
    req: NextApiRequest,
    res: NextApiResponse<Activities | ResponseError>
) => {
    const { query } = req
    const { name, id, timeperiod, activitytype, skip } = query
    const url = `https://api.runepixels.com/players/${id}/activity?timeperiod=${timeperiod}&activitytype=${activitytype}&skip=${skip}`;
    const r = await axios.get(url);
    if (r && r.data) {
        return res.status(200).json(r.data);
    }

    return res.status(404).json({ message: `User with name: ${name} not found.` });
};

export default PlayerActivitiesHandler;