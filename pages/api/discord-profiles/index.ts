import {NextApiRequest, NextApiResponse} from 'next';
import {ResponseError} from '../../../interfaces';
import {createClient} from '@supabase/supabase-js';
import {Database} from '../../../interfaces/database.types';

const PlayerHandler = async (
    req: NextApiRequest,
    res: NextApiResponse<any | ResponseError>
) => {
    if (req.method === 'POST') {
        const {body} = req;

        const supabase = createClient<Database>(process.env.SUPABASE_URL, process.env.SUPABASE_SECRET);
        const {data: profile, error} = await supabase
            .from('discord_profiles')
            .upsert({discord_id: body.discordId, display_name: body.displayName})
            .select();

        if (!error && profile) {
            return res.status(201).json(profile);
        }

        return res.status(500).json({message: `Error inserting record`});
    } else {
        return res.status(404).json({message: `Not found`});
    }

};

export default PlayerHandler;