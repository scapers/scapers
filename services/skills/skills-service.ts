const stats: string[] = [
    'attack', 'defence', 'strength', 'hitpoints', 'ranged', 'prayer', 'magic', 'cooking', 'woodcutting',
    'fletching', 'fishing', 'firemaking', 'crafting', 'smithing', 'mining', 'herblore', 'agility', 'thieving',
    'slayer', 'farming', 'runecrafting', 'hunter', 'construction', 'summoning', 'dungeoneering', 'divination',
    'invention', 'archaeology', 'necromancy'
];

export const getSkillNameById = (id: number) => {
    return stats[id];
}