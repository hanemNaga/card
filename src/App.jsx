import Avatar from "./assets/Avatar/Avatar";
import "./App.css";
import Intro from "./assets/Avatar/Intro";
import Skill from "./assets/Avatar/skills";

const skills = ["html💪", "css💪", "js💪", "git💪", "github💪", "react💪"];

export default function App() {
  return (
    <div className="card">
      <Avatar />
      <Intro />
      <div>
        {skills.map((skill) => (
          <Skill name={skill} />
        ))}
      </div>
    </div>
  );
}
