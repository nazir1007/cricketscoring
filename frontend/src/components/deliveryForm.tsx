import { useState } from "react";
import Dropdowns from "./dropdown";
import ScoreButtons from "./scoreButtons";
import ExtraButtons from "./extraButtons";
import { submitDelivery } from "../services/api";
import type { DeliveryPayload, Extras } from "../types/delivery";

const DeliveryForm = () => {
  const [formData, setFormData] = useState({ matchId: "", batsman: "", bowler: "" });
  const [runs, setRuns] = useState(0);
  const [isWicket, setIsWicket] = useState(false);
  const [extras, setExtras] = useState<Extras>({
    wide: 0,
    noball: 0,
    bye: 0,
    legbye: 0,
    overthrow: 0,
  });

  const toggleExtra = (key: keyof Extras) => {
    setExtras(prev => ({
      ...prev,
      [key]: prev[key] === 0 ? 1 : 0,
    }));
  };

  const handleSubmit = async () => {
    const payload: DeliveryPayload = {
      matchId: formData.matchId,
      batsman: formData.batsman,
      bowler: formData.bowler,
      runs,
      type: extras.wide
        ? "wide"
        : extras.noball
        ? "noball"
        : isWicket
        ? "wicket"
        : "normal",
      extras,
      isWicket,
    };

    try {
      await submitDelivery(payload);
      alert("Submitted successfully!");
      setRuns(0);
      setIsWicket(false);
      setExtras({ wide: 0, noball: 0, bye: 0, legbye: 0, overthrow: 0 });
    } catch (err) {
      console.error(err);
      alert("Submission failed.");
    }
  };

  return (
    <div>
      <Dropdowns onSelect={setFormData} />
      <ScoreButtons onSelect={setRuns} />
      <ExtraButtons active={Object.entries(extras).filter(([_, v]) => v > 0).map(([k]) => k as keyof Extras)} onToggle={toggleExtra} />
      <button onClick={() => setIsWicket(w => !w)} className="btn">{isWicket ? "Wicket ✔" : "Mark Wicket"}</button>
      <button onClick={handleSubmit} className="btn submit">Submit</button>
    </div>
  );
};

export default DeliveryForm;
