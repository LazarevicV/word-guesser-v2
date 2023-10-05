import Link from "next/link";
import {motion} from "framer-motion";

type startGameDivProps = {
  path: string
  message: string
}

const StartGameDiv = ({path, message}: startGameDivProps) => {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 1, delay: 1.5}} // Add a 2-second delay
      className="mt-4"
    >
      <Link
        href={path}
        className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
      >
        {message}
      </Link>
    </motion.div>
  )
}

export default StartGameDiv