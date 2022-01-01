import moment from "moment";
import { Time } from "./StyledComponents";

interface Props {
  time: string;
}

const TimeSent = ({ time }: Props) => {
  return <Time>{moment(time).startOf("hours").fromNow()}</Time>;
};

export default TimeSent;
