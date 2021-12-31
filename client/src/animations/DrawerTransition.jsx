import styled from "styled-components";
import { useTransition, animated } from "react-spring";

const DrawerTransition = ({ children, state, delay, side }) => {
  const transition = useTransition(state, {
    from: {
      opacity: side === "right" ? 0 : 1,
      transform: side === "right" ? "translate(100%)" : "translate(-100%)",
    },
    enter: {
      opacity: 1,
      transform: side === "right" ? "translate(0%)" : "translate(0%)",
    },
    leave: {
      opacity: side === "right" ? 0 : 1,
      transform: side === "right" ? "translate(100%)" : "translate(-100%)",
    },
    delay: delay,
  });

  return transition(
    (style, item) =>
      item && (
        <Wrapper side={side} style={style}>
          {children}
        </Wrapper>
      )
  );
};

const Wrapper = styled(animated.div)`
  background: none;
  position: absolute;
  right: ${({ side }) => (side === "right" ? "0px" : "none")};
  left: ${({ side }) => (side === "left" ? "0px" : "none")};
  z-index: 2;
  height: 100%;
`;

export default DrawerTransition;
