import h from "react-hyperscript";
import styles from "./Projects.style";

const Projects = () =>
  h(
    ".flex.width-100.height-100.justify-content-center.align-items-center",
    { ...styles() },
    [
      h(
        "h1",
        { className: "display-title display-title-xl" },
        "This Is My Projects Page"
      ),
    ]
  );

export default Projects;
