export default function OptionCard({
  groupName,
  title,
  sub,
  checked,
  onChange,
}: {
  groupName: number;
  title: string;
  sub?: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className={`optCard ${checked ? "isActive" : ""}`}>
      <input
        className="optRadio"
        type="radio"
        name={String(groupName)}
        value={title}
        checked={checked}
        onChange={onChange}
      />
      <div className="optMeta">
        <div className="optTitle">{title}</div>
        {sub && <div className="optSub">{sub}</div>}
      </div>
    </label>
  );
}
