import React from "react";

import {
    CgCPlusPlus
  } from "react-icons/cg"
  import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiPython,
    DiGit,
  } from "react-icons/di";
  import {
    SiLinux,
    SiVisualstudiocode,
    SiPostman,
    SiHeroku,
    SiVercel,
    SiDocker,
    SiKubernetes,
    SiDjango,
    SiFlask,
    SiMysql,
    SiPytorch,
    SiFirebase,
    SiNextdotjs
  } from "react-icons/si";
  import { AiOutlineQuestionCircle } from "react-icons/ai";
  const icons = {
    "SiVisualstudiocode":<SiVisualstudiocode />,
    "CgCPlusPlus": <CgCPlusPlus />,
    "SiPostman": <SiPostman />,
    "SiHeroku": <SiHeroku />,
    "SiVercel": <SiVercel />,
    "SiDocker": <SiDocker />,
    "SiDjango": <SiDjango />,
    "SiFlask": <SiFlask />,
    "SiMysql": <SiMysql />,
    "SiKubernetes": <SiKubernetes />,
    "DiJavascript1": <DiJavascript1 />,
    "DiReact": <DiReact />,
    "DiNodejs": <DiNodejs />,
    "DiMongodb": <DiMongodb />,
    "DiPython": <DiPython />,
    "DiGit": <DiGit />,
    "SiPytorch": <SiPytorch />,
    "SiFirebase": <SiFirebase />,
    "SiNextdotjs": <SiNextdotjs />,
    "SiLinux": <SiLinux />,
  };
function IconSearch(iconName){
    return (icons[iconName] || <AiOutlineQuestionCircle />)
}
export default IconSearch;