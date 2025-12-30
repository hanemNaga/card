export default function Skill({ skillObj }) {
  return (
    <span className="skill" style={{ backgroundColor: skillObj.color }}>
      {skillObj.skill}
      {skillObj.level === "advanced"
        ? "💪"
        : skillObj.level === "intermediate"
        ? "👍"
        : "👶🏼"}
    </span>
  );
}
