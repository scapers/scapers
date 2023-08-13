import {Activity} from '../../interfaces';
import Image from 'next/image';

const DropImage = ({text, skill, type}: Activity) => {
    switch (type) {
        // general achievement
        case 0:
        // skill level up
        case 1:
            skill = skill.replace(/\./g, '');
            return <Image src={`/assets/img/skills/${skill.toLowerCase()}.png`} alt="Activity" height={20} width={20}/>;
        // pets
        case 2:
            skill = skill.replace('I found', '').replace(/ /g, '').replace(/,/g, '');
            return (<img
                src={`https://runescape.wiki/images/${skill}_pet_detail.png`}
                height={20} width={20}/>)
        // drop
        case 3:
            if (text.includes('triskelion')) {
                text += ' 1'
            }
            return (<img
                src={`https://runescape.wiki/images/${text.charAt(0).toUpperCase() + text.substring(1).toLowerCase().replace(/ /g, '_')}_detail.png`}
                height={20} width={20}/>)
        // kill
        case 4:
            return <Image src={`/assets/img/misc/skull.png`} alt="Activity" height={20} width={20} />
        // quests
        case 5:
            return <Image src={`/assets/img/skills/quest_points.png`} alt="Activity" height={20} width={20} />
        // clues
        case 6:
            return <Image src={`/assets/img/misc/clue_scroll.png`} alt="Activity"  height={20} width={20} />
        default:
            return <Image src="/assets/img/misc/task_icon.png" alt="Activity" height={20} width={20}/>;
    }
};

export default DropImage;