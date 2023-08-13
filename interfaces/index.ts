export type Player = {
  id?: number;
  name?: string;
  type?: number;
  title?: string;
  combatLevel?: number;
  questPoints?: number;
  overall?: Skill;
  clan?: Clan;
  skills?: Skill[];
  minigames?: Minigame[];
  activity?: Activity[];
  lastFulLTrack?: Date;
  lastActivity?: Date;
}

export type Skill = {
  id: number;
  rank: number;
  level: number;
  xp: number;
  virtualLevel: number;
  rankDelta: number;
  levelDelta: number;
  xpDelta: number;
  xpRate: number;
}

export type Clan = {
  playerId: number;
  name: string;
  type: 0;
  rank: number;
  xp: number;
  kills: number;
  joinDate: Date;
}

export type Minigame = {
  rank: number;
  total: number;
}

export type Activities = Activity[];

export type Activity = {
  type?: number;
  text?: string;
  skill?: string;
  npc?: string;
  date?: Date;
}

export type Deltas = Delta[];

export type Delta = {
  rank: number;
  level: number;
  xp: number;
}

export type ResponseError = {
  message: string
}
