import styled from "styled-components";
import MainVideo from "../assets/Walking Girl.mp4";

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
const Title = styled.div`
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

const CoverVideo = () => {
  return (
    <VideoContainer>
      <Title>
        <div>
          <h1 data-scroll data-scroll-delay="0.2" data-scroll-speed="4">
            W
          </h1>
          <h1 data-scroll data-scroll-delay="0.15" data-scroll-speed="4">
            i
          </h1>
          <h1 data-scroll data-scroll-delay="0.1" data-scroll-speed="4">
            b
          </h1>
          <h1 data-scroll data-scroll-delay="0.05" data-scroll-speed="4">
            e
          </h1>
        </div>
        <h2 data-scroll data-scroll-delay="0.05" data-scroll-speed="2">
          Inspire. Create. Belive
        </h2>
      </Title>
      <video src={MainVideo} type="video/mp4" autoPlay muted loop />
    </VideoContainer>
  );
};

export default CoverVideo;
