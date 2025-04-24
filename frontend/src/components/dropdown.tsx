import React, { useEffect, useState } from "react";
import { fetchMatches, fetchPlayers } from "../services/api";

interface Props {
  onSelect: (data: { matchId: string; batsman: string; bowler: string }) => void;
}

const Dropdowns: React.FC<Props> = ({ onSelect }) => {
  const [matches, setMatches] = useState<any[]>([]);
  const [players, setPlayers] = useState<any[]>([]);
  const [matchId, setMatchId] = useState("");
  const [batsman, setBatsman] = useState("");
  const [bowler, setBowler] = useState("");

  useEffect(() => {
    fetchMatches().then(res => setMatches(res.data));
    fetchPlayers().then(res => setPlayers(res.data));
  }, []);

  useEffect(() => {
    if (matchId && batsman && bowler) {
      onSelect({ matchId, batsman, bowler });
    }
  }, [matchId, batsman, bowler]);

  return (
    <div>
      <label>Match:</label>
      <select onChange={e => setMatchId(e.target.value)}>
        <option value="">Select Match</option>
        {matches.map(m => (
          <option key={m._id} value={m._id}>{m.name || m._id}</option>
        ))}
      </select>

      <label>Batsman:</label>
      <select onChange={e => setBatsman(e.target.value)}>
        <option value="">Select Batsman</option>
        {players.map(p => (
          <option key={p._id} value={p._id}>{p.name}</option>
        ))}
      </select>

      <label>Bowler:</label>
      <select onChange={e => setBowler(e.target.value)}>
        <option value="">Select Bowler</option>
        {players.map(p => (
          <option key={p._id} value={p._id}>{p.name}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdowns;
