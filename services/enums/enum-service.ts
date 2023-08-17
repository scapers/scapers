export const activityTypeToString = (i: number) => {
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

export const timeperiodToString = (i: number) => {
    if (i == 0) return 'Today'
    else if (i == 1) return 'Today'
    else if (i == 2) return 'Week'
    else if (i == 3) return 'Month'
    else if (i == 4) return 'Year'
    else if (i == 5) return 'Last Week'
    else if (i == 6) return 'Last Month'
    else if (i == 7) return 'Last Year'
    else return 'Today'
}