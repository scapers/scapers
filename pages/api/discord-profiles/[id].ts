import {NextApiRequest, NextApiResponse} from 'next';
import {ResponseError} from '../../../interfaces';
import {createClient} from '@supabase/supabase-js';
import {Database} from '../../../interfaces/database.types';

const PlayerHandler = async (
    req: NextApiRequest,
    res: NextApiResponse<any | ResponseError>
) => {
    const {query, body} = req;
    const {id} = query;

    const supabase = createClient<Database>(process.env.SUPABASE_URL, process.env.SUPABASE_SECRET);
    const {data: profile, error} = await supabase
        .from('discord_profiles')
        .select()
        .eq('discord_id', id)

    if (!error && profile) {
        return res.status(200).json(profile);
    }

    return res.status(404).json({message: `No record found for ${name}`});

};

export default PlayerHandler;