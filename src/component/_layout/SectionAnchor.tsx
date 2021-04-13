import styled, {StyledComponentProps} from "styled-components/macro";

export const SectionAnchor = styled.section<StyledComponentProps<any, any, any, any>>`
  position: relative;
  top: -${({theme}) => (theme.variable.headerHeight)};
  height: 100%;
`
