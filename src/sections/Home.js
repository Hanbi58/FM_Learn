import styled from "styled-components";
import CoverVideo from "../components/CoverVideo";

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  background-color: red;
`;

const Home = () => {
  return (
    <Section>
      <CoverVideo />
      <h1>Video</h1>
      <h1>Navbar</h1>
    </Section>
  );
};

export default Home;
