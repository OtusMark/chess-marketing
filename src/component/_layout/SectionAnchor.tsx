import styled from "styled-components/macro";

export const SectionAnchor = styled.div`
  position: absolute;
   top: -${({theme}) => (theme.variable.headerHeight)};
`
