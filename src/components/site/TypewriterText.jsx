import { Typewriter } from "react-simple-typewriter";

const defaultWords = ["Digital Solutions Engineer & Designer"];

export function TypewriterText({
  words = defaultWords,
  loop = true,
  typeSpeed = 70,
  deleteSpeed = 45,
  delaySpeed = 1800,
}) {
  return (
    <Typewriter
      words={words}
      loop={loop}
      cursor
      cursorStyle="|"
      typeSpeed={typeSpeed}
      deleteSpeed={deleteSpeed}
      delaySpeed={delaySpeed}
    />
  );
}
