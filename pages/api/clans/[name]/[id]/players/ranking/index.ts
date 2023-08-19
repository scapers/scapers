import axios from 'axios';
import {NextApiRequest, NextApiResponse} from 'next';
import {ClanRankings, ResponseError} from '../../../../../../../interfaces';

const ClanRankingHandler = async (
    req: NextApiRequest,
    res: NextApiResponse<ClanRankings | ResponseError>
) => {
    const { query } = req
    const { name, id, timeperiod, playertype, playersubtype, skill } = query

    const r = await axios.get(`https://api.runepixels.com/clans/${id}/players/ranking`, {
        params: {
            timeperiod,
            playertype,
            playersubtype,
            skill
        }
    });
    if (r && r.data) {
        return res.status(200).json(r.data);
    }

    return res.status(404).json({ message: `Clan with name: ${name} not found.` });
};

export default ClanRankingHandler;