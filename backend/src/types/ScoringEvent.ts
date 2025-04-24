export interface Extras {
    noball: number;
    wide: number;
    legbye: number;
    bye: number;
    overthrow: number;
  }
  
  export interface WicketDetails {
    kind: string;
    playerOut: string;
    fielder?: string;
  }
  
  export interface ScoringEvent {
    matchId: string;
    innings: number;
    over: number;
    ball: number;
    batsman: string;
    bowler: string;
    runs: number;
    type: "normal" | "noball" | "wide" | "legbye" | "bye" | "wicket";
    subtype?: string;
    extras: Extras;
    isWicket: boolean;
    wicketDetails?: WicketDetails | null;
  }
  