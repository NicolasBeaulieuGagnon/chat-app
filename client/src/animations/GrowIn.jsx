import styled from "styled-components";
import { useTransition, animated } from "react-spring";

const GrowIn = ({ state, children }) => {
  const transition = useTransition(state, {
    from: { transform: "translate(-60%) scale(0)" },
    enter: { transform: "translate(-60%) scale(1)" },
    leave: { transform: "translate(-60%) scale(0)" },
  });

  return transition(
    (style, item) => item && <Wrapper style={style}>{children}</Wrapper>
  );
};

const Wrapper = styled(animated.div)`
  background: none;
  position: absolute;
  right: 0px;
  top: 14px;
`;

export default GrowIn;
