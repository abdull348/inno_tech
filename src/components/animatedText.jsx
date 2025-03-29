import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const AnimatedText = ({ children, className }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 1, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 1.5, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

AnimatedText.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default AnimatedText;
