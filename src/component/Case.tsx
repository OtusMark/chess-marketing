import styled from "styled-components/macro";

export const Case = () => {
    return (
        <CaseWrapper>
            case
        </CaseWrapper>
    )
}

// Styles
const CaseWrapper = styled.div`
  border: 2px solid ${({theme}) => theme.color.secondary.main};
  
  margin: 0 auto;
  
  width: 80%;
  height: 100%;
`