export interface Extras {
    wide: number;
    noball: number;
    legbye: number;
    bye: number;
    overthrow: number;
  }
  
  export interface DeliveryPayload {
    matchId: string;
    batsman: string;
    bowler: string;
    runs: number;
    type: string;
    extras: Extras;
    isWicket: boolean;
  }
  