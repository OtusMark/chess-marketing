import styled from "styled-components/macro";

// Because the mobile browser is ignoring the overflow-x in html and body teg, there is a need to wrap the app in additional wrapper for the html overflow-x to work.
export const OverflowWrapper = styled.div`
  overflow-x: hidden;
`