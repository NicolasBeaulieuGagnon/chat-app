import styled from "styled-components";
import { useSpring, animated } from "react-spring";

const DropDown = ({ children }: any) => {
  const styles = useSpring({
    from: { transform: "translateX(100px) rotateY(-90deg)" },
    to: { transform: "translateX(0px) rotateY(0deg)" },
    config: {
      tension: 200,
      friction: 10,
    },
  });

  return <Wrapper style={styles}>{children}</Wrapper>;
};

const Wrapper = styled(animated.div)`
  position: absolute;
  top: 55px;
  width: 148px;
  background: white;
  color: black;
  margin: 0;
  padding: 0;
  text-align: center;
  padding: 5px;
  border-radius: 2px;
  right: 15px;
`;

export default DropDown;
