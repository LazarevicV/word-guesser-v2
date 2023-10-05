import {motion} from "framer-motion";

type HomePageTitleProps = {
  message: string
}

const HomePageTitle = ({message}: HomePageTitleProps) => {
  return (
    <motion.h1
      initial={{y: -1000}}
      animate={{y: 0}}
      transition={{duration: 1}}
      className="text-6xl font-bold"
    >
      {message}
    </motion.h1>
  )
}

export default HomePageTitle