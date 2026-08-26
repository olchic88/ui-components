import TeamSectionReact from "./TeamSectionReact";
import joe from "./joe.webp";
import ash from "./ash.webp";
import farias from "./farias.webp";
import sarah from "./sarah.webp";

const members = [
  {
    id: 1,
    img: joe,
    name: "Joe Jackson",
    designation: "Founder & CEO",
    description:
      "Joe leads with a strategic vision for innovation and growth. With a passion for combining artistry with technology, he drives our mission to deliver cutting-edge solutions.",
  },
  {
    id: 2,
    img: ash,
    name: "Ash Karter",
    designation: "Founder & CFO",
    description:
      "Ash brings financial acumen and a keen eye for detail to our operations. Her leadership ensures sustainable growth and operational excellence.",
  },
  {
    id: 3,
    img: farias,
    name: "Farias Amed",
    designation: "Front End AI Engineer",
    description:
      "Farias is at the forefront of AI-driven design, developing interfaces that blend intuitive usability with advanced functionality.",
  },
  {
    id: 4,
    img: sarah,
    name: "Sarah Haust",
    designation: "Dev Ops",
    description:
      "Sarah orchestrates our development pipelines with precision, ensuring seamless deployment cycles and system reliability.",
  },
];

export default function TeamSectionReactShowcase() {
  return (
    <div className="container-section">
      <div className="team-section-showcase">
        <TeamSectionReact members={members} />
      </div>
    </div>
  );
}
