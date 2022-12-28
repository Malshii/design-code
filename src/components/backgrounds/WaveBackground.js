import React from "react"
import styled from "styled-components"
import wave1 from "../../images/waves/hero-wave1.svg"
import wave2 from "../../images/waves/hero-wave2.svg"
import wave3 from "../../images/waves/hero-wave3.svg"

export default function WaveBackground() {
    return(
        <Wrapper>
            <Background/>            
            <Wave src={wave1} style={{ top: "100px", filter: `blur(60px)` }}/>
            <Wave src={wave2} style={{ top: "350px" }}/>
            <BottomWave src={wave3} style={{ top: "550px" }} />
        </Wrapper>
    )
}

const Wrapper = styled.div`
  position: relative;
`

const Wave = styled.img`
    position: absolute;
    z-index: -1;

    @media (min-width: 1440px) {
        width: 100%;
    }
`
const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 800px;
  background: linear-gradient(180deg, #4316db 0%, #9076e7 100%);
  z-index: -1;
`
const BottomWave = styled(Wave)`
  @media (prefers-color-scheme: dark) {
    content: url("/images/waves/hero-wave3-dark.svg");
  }
`