import RingLoader from "react-spinners/RingLoader";
import { css } from "@emotion/react";

const Loading = () => {
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
    margin-top: 20%
  `;

  return <RingLoader css={override} size={100} color="#B8E986" />;
};

export default Loading;
