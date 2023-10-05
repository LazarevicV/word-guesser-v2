import {motion} from "framer-motion";

type HomePageParagraphProps = {
  message: string
}

const HomePageParagraph = ({message}: HomePageParagraphProps) => {
  return (
    <motion.p
      initial={{y: 1000}}
      animate={{y: 0}}
      transition={{duration: 1}}
      className="mt-3 text-2xl"
    >
      {message}
    </motion.p>
  )
}

export default HomePageParagraph