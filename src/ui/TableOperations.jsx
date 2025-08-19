import styled from "styled-components";
import { device } from "../styles/breakpoints";

const TableOperations = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  @media${device.tablet} {
    flex-direction: column;
  }
`;

export default TableOperations;
