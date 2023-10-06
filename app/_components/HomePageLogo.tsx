import { motion } from "framer-motion"

const homePageLogo = () => {
  return (
    <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-4"
      >
      <img
        src="/homepageImage.png"
        alt="Homepage Image"
        className="w-64 h-64 rounded-3xl"
      />
    </motion.div>
  )
}

export default homePageLogo