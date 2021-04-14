import styled, {StyledComponentProps} from "styled-components/macro";
import React from "react";
import {MontB4Bold} from "./_typography/MontB4Bold";

export const Case: React.FC<PropsType> = (props) => {

    const {
        companyLogoUrl,
        backgroundUrl,
        improvement_1,
        improvement_1_description,
        improvement_2,
        improvement_2_description,
    } = props

    return (
        <CaseWrapper backgroundUrl={backgroundUrl}>
            <Logo src={companyLogoUrl}/>
            <ImprovementsBlock>
                <div>
                    <Improvement>{improvement_1}</Improvement>
                    <span>{improvement_1_description}</span>
                </div>
                <div>
                    <Improvement>{improvement_2}</Improvement>
                    <span>{improvement_2_description}</span>
                </div>
            </ImprovementsBlock>
        </CaseWrapper>
    )
}

// Styles
const CaseWrapper = styled.div<StyledComponentProps<any, any, any, any>>`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  
  margin: 0 auto;
  padding: 2rem;

  width: 80%;
  height: 90%;

  border: 2px solid ${({theme}) => theme.color.secondary.main};

  background: url(${({backgroundUrl}) => backgroundUrl}) no-repeat;
  background-size: cover;
`

const Logo = styled.img`
  height: 20%;
  filter: drop-shadow(.5px .5px 1px ${({theme}) => theme.color.white});
`

const ImprovementsBlock = styled.div`
    & div:first-child {
      padding-bottom: 1rem;
    }
`

const Improvement = styled(MontB4Bold)`
  color: ${({theme}) => theme.color.secondary.main};
`
// Types
type PropsType = {
    companyName: string
    companyLogoUrl: string
    backgroundUrl: string
    improvement_1: string
    improvement_1_description: string
    improvement_2: string
    improvement_2_description: string
}
