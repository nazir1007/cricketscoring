import "../styles/styles.css";

const scores = [0, 1, 2, 3, 4, 6];

const ScoreButtons = ({ onSelect }: { onSelect: (score: number) => void }) => {
  return (
    <div className="button-grid">
      {scores.map(score => (
        <button key={score} onClick={() => onSelect(score)} className="btn">
          {score}
        </button>
      ))}
    </div>
  );
};

export default ScoreButtons;
