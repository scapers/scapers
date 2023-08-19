import axios from 'axios';
import {NextApiRequest, NextApiResponse} from 'next';
import {ClanHiscores, ResponseError} from '../../../../../../../interfaces';

const ClanHiscoreHandler = async (
    req: NextApiRequest,
    res: NextApiResponse<ClanHiscores | ResponseError>
) => {
    const { query } = req
    const { name, id, playertype, playersubtype, skill } = query

    const r = await axios.get(`https://api.runepixels.com/clans/${id}/players/hiscore`, {
        params: {
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

export default ClanHiscoreHandler;