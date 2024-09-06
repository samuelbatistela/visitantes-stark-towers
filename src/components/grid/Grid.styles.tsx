import { BasetypographyCSS } from "@/components/typography/Typography.component";
import SharedButton from "@/components/button/Button.component";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 240px);
  overflow: hidden;
`;

export const GridContainer = styled.div`
  overflow-y: auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  background-color: ${({ theme }) => theme.background.color.primary};
`;

export const TableRow = styled.tr`
  ${BasetypographyCSS}
  font-size: ${({ theme }) => theme.font.size.small}px;
  line-height: 16.34px;
  &:last-child {
    border-bottom: none;
  }
`;

export const TableHeader = styled.th`
  padding: 8px 16px;
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  border: 1px solid ${({ theme }) => theme.color.backgroundLighter};
  text-align: left;
`;

export const TableCell = styled.td`
  font-weight: ${({ theme }) => theme.font.weight.regular};
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.background.color.primary};
  border: 1px solid ${({ theme }) => theme.color.backgroundLighter};
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Footer = styled.div`
  flex-shrink: 0;
  height: 42px;
  padding: 0px 8px;
  background-color: ${({ theme }) => theme.background.color.primary};
  border-top: 1px solid ${({ theme }) => theme.background.color.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SelectPage = styled.select`
  ${BasetypographyCSS}
  line-height: 12px;
  margin: 0px 8px;
  background: ${({ theme }) =>
    theme.theme === "light" ? theme.color.white : theme.color.black};
`;

export const ButtonIcon = styled(SharedButton)`
  width: 130px;
  font-size: ${({ theme }) => theme.font.size.small}px;
`;

export const ButtonNavigation = styled(ButtonIcon)`
  ${BasetypographyCSS}
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: ${({ theme }) => theme.font.size.xbig}px;
  color: ${({ theme }) => theme.background.color.primary};
  line-height: 24px;
  width: 24px;
  height: 24px;
  margin: 0px 4px;
`;

export const WrapperCount = styled.div`
  background: ${({ theme }) => theme.background.color.primary};
  border: 1px solid ${({ theme }) => theme.background.color.primary};
  padding: 4px;
`;

export const Text = styled.label`
  ${BasetypographyCSS}
  font-size: ${({ theme }) => theme.font.size.small}px;
  line-height: 18px;
  color: ${({ theme }) => theme.font.color.primary};
`;

export const CountItemsText = styled(Text)`
  font-weight: ${({ theme }) => theme.font.weight.regular};
  color: ${({ theme }) => theme.font.color.primary};
`;

export const CountItems = styled(CountItemsText)`
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  color: ${({ theme }) => theme.font.color.primary};
  margin-left: 8px;
`;

export const LinesPageText = styled(CountItemsText)`
  font-weight: ${({ theme }) => theme.font.weight.regular};
  line-height: 16.34px;
`;
