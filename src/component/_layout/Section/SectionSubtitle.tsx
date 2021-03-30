import styled from "styled-components/macro";

export const SectionSubtitle = styled.div`
  margin-bottom: 2rem;
  color: ${({theme}) => theme.color.primary.main};

  font-family: ${({theme}) => theme.font.family.montserrat};
  font-size: ${({theme}) => theme.font.size.b1};
  font-weight: 400;
  line-height: 1.5;
`