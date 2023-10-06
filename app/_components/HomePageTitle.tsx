// import { motion } from "framer-motion";
//
// type HomePageTitleProps = {
//   message: string;
// };
//
// const HomePageTitle = ({ message }: HomePageTitleProps) => {
//   return (
//     <motion.h1
//       initial={{ y: -1000 }}
//       animate={{ y: [0, -20, 0] }} // Animate y from 0 to -10 (upward) and back to 0
//       transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }} // Repeat the animation in reverse
//       className="text-6xl font-bold"
//     >
//       {message}
//     </motion.h1>
//   );
// };
//
// export default HomePageTitle;

import {motion} from "framer-motion";
import {useEffect, useState} from "react";

type HomePageTitleProps = {
  message: string;
};

const HomePageTitle = ({message}: HomePageTitleProps) => {
  const [displayedMessage, setDisplayedMessage] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const typeMessage = (index: number) => {
      if (index <= message.length) {
        setDisplayedMessage(message.slice(0, index));
        timeoutId = setTimeout(() => typeMessage(index + 1), 100); // Adjust the typing speed
      } else {
        timeoutId = setTimeout(() => deleteMessage(index), 1000); // Wait for a second before deleting
      }
    };

    const deleteMessage = (index: number) => {
      if (index >= 0) {
        setDisplayedMessage(message.slice(0, index));
        timeoutId = setTimeout(() => deleteMessage(index - 1), 100); // Adjust the deleting speed
      } else {
        timeoutId = setTimeout(() => typeMessage(1), 500); // Start typing again
      }
    };

    typeMessage(1);

    // Set a blinking cursor every 500ms
    const cursorIntervalId = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(cursorIntervalId);
    };
  }, [message]);

  return (
    <div className="dark:bg-slate-900 bg-slate-50">
      <motion.h1
        initial={{y: -1000}}
        animate={{y: 0}}
        transition={{duration: 1}}
        className="text-6xl font-bold"

      >
        {displayedMessage}
        <span style={{opacity: cursorVisible ? 1 : 0}}>|</span>
      </motion.h1>
    </div>
  );
};

export default HomePageTitle;


