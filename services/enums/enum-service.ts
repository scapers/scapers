export const activityTypeToString = (i: number) => {
    console.log('i', i);
    if (i == -1) return 'All';
    else if (i == 0) return 'Achievement';
    else if (i == 1) return 'Skill';
    else if (i == 2) return 'Pet';
    else if (i == 3) return 'Drop';
    else if (i == 4) return 'Kill';
    else if (i == 5) return 'Quest';
    else if (i == 6) return 'Clue Scroll';
    else if (i == 7) return 'Misc';
    else return 'Misc';
}