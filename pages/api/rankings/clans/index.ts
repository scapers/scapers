import axios from 'axios';
import {NextApiRequest, NextApiResponse} from 'next';
import {Rankings, ResponseError} from '../../../../interfaces';

const ClansRankingHandler = async (
    req: NextApiRequest,
    res: NextApiResponse<Rankings | ResponseError>
) => {
    const { query } = req
    const { timeperiod, playertype, playersubtype, skill, limit } = query

    const r = await axios.get(`https://api.runepixels.com/clans/ranking`, {
        params: {
            timeperiod,
            playertype,
            playersubtype,
            skill,
            limit
        }
    });
    if (r && r.data) {
        return res.status(200).json(r.data);
    }

    return res.status(404).json({ message: `Clans rankings not found.` });
};

export default ClansRankingHandler;