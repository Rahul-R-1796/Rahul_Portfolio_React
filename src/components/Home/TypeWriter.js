import React from "react";
import Typewriter from "typewriter-effect";

function TypeWriter() {
  return (
    <Typewriter
      options={{
        strings: [
          "Aspiring MERN Stack Developer",
          "Newbie in Web Development",
          "Eager to Learn MERN",
          "Entry-Level Developer",
          "Ready to Code with MERN",
          "JavaScript Enthusiast",
          "Starting My Dev Journey",
          "Passionate About Web Tech"
        ],
        
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default TypeWriter;
