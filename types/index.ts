export type Picks = 'paper' | 'scissors' | 'rock';

export type Result = 'win' | 'lose' | 'draw';

export type onPick = (pick: Picks) => void;
