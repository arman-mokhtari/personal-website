import { useState, useEffect } from "react";
import { Skill } from "./";
import { devSkills } from "../../constants/skills";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const Skills = () => {
  const [javaScript, setJavaScript] = useState(0);
  const [html, setHtml] = useState(0);
  const [css, setCss] = useState(0);
  const [bootstrap, setBootstrap] = useState(0);
  const [tailwind, setTailwind] = useState(0);
  const [react, setReact] = useState(0);
  const [node, setNode] = useState(0);
  const [mui, setMui] = useState(0);

  useEffect(() => {
    const skillData = [
      {
        id: 1,
        setSkill: setJavaScript,
        number: 65,
      },
      {
        id: 2,
        setSkill: setHtml,
        number: 92,
      },
      {
        id: 3,
        setSkill: setCss,
        number: 82,
      },
      {
        id: 4,
        setSkill: setBootstrap,
        number: 95,
      },
      {
        id: 1,
        setSkill: setTailwind,
        number: 95,
      },
      {
        id: 5,
        setSkill: setReact,
        number: 82,
      },
      {
        id: 6,
        setSkill: setNode,
        number: 75,
      },
      {
        id: 7,
        setSkill: setMui,
        number: 88,
      },
    ];
    const timer = setInterval(() => {
      skillData.map(({ setSkill, number }) => {
        setSkill((oldProgress) => {
          const diff = Math.random() * 3;
          return Math.min(oldProgress + diff, number);
        });
      });
    }, 40);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const {
    htmlSkill,
    cssSkill,
    jsSkill,
    reactSkill,
    BootstrapSkill,
    TailwindsSkill,
    nodeSkill,
    muiSkill,
  } = devSkills;

  return (
    <>
      <Grid2
        xs={11}
        sm={11}
        md={11}
        lg={6}
        sx={{
          width: 1,
          justifyContent: "center",
          alignItem: "center",
        }}
      >
        <Skill
          name={htmlSkill.name}
          icon={htmlSkill.icon}
          color={htmlSkill.color}
          value={html}
        />
        <Skill
          name={cssSkill.name}
          icon={cssSkill.icon}
          color={cssSkill.color}
          value={css}
        />
        <Skill
          name={BootstrapSkill.name}
          icon={BootstrapSkill.icon}
          color={BootstrapSkill.color}
          value={bootstrap}
        />
        <Skill
          name={muiSkill.name}
          icon={muiSkill.icon}
          color={muiSkill.color}
          value={mui}
        />
      </Grid2>
      <Grid2
        xs={11}
        sm={11}
        md={11}
        lg={6}
        sx={{
          width: 1,
          justifyContent: "center",
          alignItem: "center",
        }}
      >
        <Skill
          name={TailwindsSkill.name}
          icon={TailwindsSkill.icon}
          color={TailwindsSkill.color}
          value={tailwind}
        />
        <Skill
          name={jsSkill.name}
          icon={jsSkill.icon}
          color={jsSkill.color}
          value={javaScript}
        />
        <Skill
          name={reactSkill.name}
          icon={reactSkill.icon}
          color={reactSkill.color}
          value={react}
        />

        <Skill
          name={nodeSkill.name}
          icon={nodeSkill.icon}
          color={nodeSkill.color}
          value={node}
        />
      </Grid2>
    </>
  );
};

export default Skills;
