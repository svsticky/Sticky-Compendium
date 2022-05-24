import * as React from "react";
import styled from "styled-components";
import GoogleLogo from "./GoogleLogo";
import MicrosoftLogo from "./MicrosoftLogo";
import SlackLogo from "./SlackLogo";
import KoalaLogo from "./KoalaLogo"

type Props = {
  providerName: string;
  size?: number;
};

function AuthLogo({ providerName, size = 16 }: Props) {
  return (<Logo>
    <KoalaLogo size={size} />
  </Logo>
  );

}

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
`;

export default AuthLogo;
