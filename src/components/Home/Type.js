import React from "react";
import Typewriter from "typewriter-effect";
import conf from "../../config.json" 
function Type() {
  return (
    <Typewriter
      options={{
        strings: conf.tags,
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
