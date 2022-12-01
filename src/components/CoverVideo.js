import styled from "styled-components";
import MainVideo from "../assets/Walking Girl.mp4";
import { motion } from "framer-motion";

const VideoContainer = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.6);
  }
`;

// const DarkOverlay = styled.div`
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   z-index: 1;
//   background-color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.6)`};
// `;
const Title = styled(motion.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${(props) => props.theme.text};

  /* div {
    display: flex;
  } */
  h1 {
    font-family: "Kaushan Script";
    font-size: ${(props) => props.theme.fontBig};
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
    display: inline-block;
  }
  h2 {
    font-family: inherit;
    /* font-family: "Kaushan Script"; */
    font-size: ${(props) => props.theme.fontlg};
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
    text-transform: capitalize;
    font-weight: 300;
  }
`;

const conVariant = {
  hide: { opacity: 0 },
  show: {
    opacity: 1,

    transition: { delayChildren: 2, staggerChildren: 0.3 },
  },
};
const itemVariant = {
  hide: { opacity: 0 },
  show: {
    opacity: 1,
  },
};
const CoverVideo = () => {
  return (
    <VideoContainer>
      <Title variants={conVariant} initial="hide" animate="show">
        <div>
          <motion.h1
            variants={itemVariant}
            data-scroll
            data-scroll-delay="0.2"
            data-scroll-speed="4"
          >
            W
          </motion.h1>
          <motion.h1
            variants={itemVariant}
            data-scroll
            data-scroll-delay="0.15"
            data-scroll-speed="4"
          >
            i
          </motion.h1>
          <motion.h1
            variants={itemVariant}
            data-scroll
            data-scroll-delay="0.1"
            data-scroll-speed="4"
          >
            b
          </motion.h1>
          <motion.h1
            variants={itemVariant}
            data-scroll
            data-scroll-delay="0.05"
            data-scroll-speed="4"
          >
            e
          </motion.h1>
        </div>
        <motion.h2
          variants={conVariant}
          data-scroll
          data-scroll-delay="0.05"
          data-scroll-speed="2"
        >
          Inspire. Create. Belive
        </motion.h2>
      </Title>
      <video src={MainVideo} type="video/mp4" autoPlay muted loop />
    </VideoContainer>
  );
};

export default CoverVideo;
