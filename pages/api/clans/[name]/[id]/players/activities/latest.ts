import axios from 'axios';
import {NextApiRequest, NextApiResponse} from 'next';
import {Activities, ResponseError} from '../../../../../../../interfaces';

const LatestClanActivityHandler = async (
    req: NextApiRequest,
    res: NextApiResponse<Activities | ResponseError>
) => {
    const { query } = req
    const { name, id, activitytype } = query

    const r = await axios.get(`https://api.runepixels.com/clans/${id}/players/activities/latest`, {
        params: {
            activitytype
        }
    });
    if (r && r.data) {
        return res.status(200).json(r.data);
    }

    return res.status(404).json({ message: `Clan with name: ${name} not found.` });
};

export default LatestClanActivityHandler;