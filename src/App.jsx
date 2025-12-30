import Avatar from "./assets/Avatar/Avatar";
import "./App.css";
import Intro from "./assets/Avatar/Intro";
import Skill from "./assets/Avatar/skills";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];
export default function App() {
  // jsx uses javascript expression
  // assign jsx to js variable
  // let el = <h1>hello to expression</h1>;
  // use jsx inside if
  // if (skills.length > 1) {
  //   el = <button>click if</button>;
  // }

  return (
    <div className="card">
      {/* this is a jsx comment */}
      <Avatar />
      <Intro />
      <div className="skills">
        {skills.map((skill) => (
          <Skill skillObj={skill} />
        ))}
      </div>
    </div>
  );
}
