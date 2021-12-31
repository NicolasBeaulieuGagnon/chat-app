import styled from "styled-components";
import { useTransition, animated } from "react-spring";

interface Props {
  children: any;
  state: boolean;
}

const DropOut = ({ children, state }: Props) => {
  const transition = useTransition(state, {
    from: { opacity: 0, transform: "translateY(-200%)" },
    enter: { opacity: 1, transform: "translateY(0%)" },
    leave: { opacity: 0, transform: "translateY(100%)" },
  });
  return transition(
    (style, item) => item && <Wrapper style={style}>{children}</Wrapper>
  );
};

const Wrapper = styled(animated.div)`
  position: absolute;
`;

export default DropOut;
