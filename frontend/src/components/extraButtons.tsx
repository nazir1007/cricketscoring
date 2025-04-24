import "../styles/styles.css";

const extras = ["wide", "noball", "bye", "legbye", "overthrow"] as const;
type ExtraType = typeof extras[number];

interface Props {
  active: ExtraType[];
  onToggle: (extra: ExtraType) => void;
}

const ExtraButtons = ({ active, onToggle }: Props) => {
  return (
    <div className="button-grid">
      {extras.map(extra => (
        <button
          key={extra}
          onClick={() => onToggle(extra)}
          className={`btn ${active.includes(extra) ? "active" : ""}`}
        >
          {extra}
        </button>
      ))}
    </div>
  );
};

export default ExtraButtons;
