import axios from 'axios';
import {NextApiRequest, NextApiResponse} from 'next';
import {ClanMeta, ResponseError} from '../../../../interfaces';

const ClanHandler = async (
    req: NextApiRequest,
    res: NextApiResponse<ClanMeta | ResponseError>
) => {
    const { query } = req
    const { name } = query

    const r = await axios.get(`${process.env.RUNEPIXELS_API}/clans/${name}`);
    if (r && r.data) {
        return res.status(200).json(r.data);
    }

    return res.status(404).json({ message: `Clan with name: ${name} not found.` });
};

export default ClanHandler;