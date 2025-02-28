import React from "react";
import FastAPIIcon from "../../Assets/fastapi.svg";

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
  DiSqllite,
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
  SiRedis,
  SiPytorch,
  SiFirebase,
  SiNextdotjs
} from "react-icons/si";
import { AiOutlineQuestionCircle } from "react-icons/ai";
const icons = {
  "visualstudiocode": <SiVisualstudiocode />,
  "vscode": <SiVisualstudiocode />,
  "cplusplus": <CgCPlusPlus />,
  "c++": <CgCPlusPlus />,
  "postman": <SiPostman />,
  "heroku": <SiHeroku />,
  "vercel": <SiVercel />,
  "docker": <SiDocker />,
  "django": <SiDjango />,
  "flask": <SiFlask />,
  "mysql": <SiMysql />,
  "sql": <DiSqllite />,
  "kubernetes": <SiKubernetes />,
  "javascript": <DiJavascript1 />,
  "react": <DiReact />,
  "nodejs": <DiNodejs />,
  "mongodb": <DiMongodb />,
  "python": <DiPython />,
  "git": <DiGit />,
  "pytorch": <SiPytorch />,
  "firebase": <SiFirebase />,
  "nextdotjs": <SiNextdotjs />,
  "linux": <SiLinux />,
  "redis": <SiRedis />,
  fastapi: <img src={FastAPIIcon} alt="FastAPI" width="40" />
};

function IconSearch(iconName) {
  // Check if the icon exists
  if (icons[iconName.toLowerCase()]) {
    return icons[iconName.toLowerCase()];
  }

  // Return a styled fallback with the first letter
  return (
    <div style={{
      width: "100%",  // Full width of the parent container
      height: "100%", // Full height of the parent container
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#ddd",
      borderRadius: "8px",
      fontSize: "2vw",  // Responsive font size
      fontWeight: "bold",
      color: "#333",
      textTransform: "capitalize",
      textAlign: "center",
      padding: "5px",
      flexDirection: "column"  // Vertical alignment
    }}>
      {iconName}
    </div>
  );
};

export default IconSearch;