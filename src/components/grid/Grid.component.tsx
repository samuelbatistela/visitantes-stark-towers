/* eslint-disable  @typescript-eslint/no-explicit-any */
import React, { FC, useState, ChangeEvent, useEffect } from "react";

import {
  Container,
  GridContainer,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  Actions,
  Footer,
  SelectPage,
  ButtonIcon,
  ButtonNavigation,
  WrapperCount,
  CountItemsText,
  CountItems,
  LinesPageText,
} from "./Grid.styles";

interface GridProps {
  onCheckout?: (item: any) => void;
  headers: string[];
  data: any[];
  history?: boolean;
}

const Grid: FC<GridProps> = ({ onCheckout, headers, data, history }) => {
  const [allData, setAllData] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(50);
  const [currentData, setCurrentData] = useState(data.slice(0, itemsPerPage));

  useEffect(() => {
    setAllData(data);
    setCurrentData(data.slice(0, itemsPerPage));
  }, [data, itemsPerPage]);

  const handlePageChange = (page: number) => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setCurrentData(allData.slice(startIndex, endIndex));
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newItemsPerPage = Number(event.target.value);
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1);
    setCurrentData(allData.slice(0, newItemsPerPage));
  };

  return (
    <Container>
      <GridContainer>
        <Table>
          <TableHead>
            <TableRow>
              {headers.map((header, index) => (
                <TableHeader key={index}>{header}</TableHeader>
              ))}
            </TableRow>
          </TableHead>
          <tbody>
            {currentData.map((item, index) => (
              <TableRow key={index}>
                <TableCell>
                  {(currentPage - 1) * itemsPerPage + index + 1}
                </TableCell>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.cpf}</TableCell>
                <TableCell>{item.room}</TableCell>
                <TableCell>{item.birthDate}</TableCell>
                <TableCell>{item.startDateTime}</TableCell>
                {!history ? (
                  <TableCell>
                    <Actions>
                      <ButtonIcon
                        onClick={() => onCheckout && onCheckout(item)}
                      >
                        Registrar Saída
                      </ButtonIcon>
                    </Actions>
                  </TableCell>
                ) : (
                  <TableCell>{item.endDateTime}</TableCell>
                )}
              </TableRow>
            ))}
          </tbody>
        </Table>
      </GridContainer>
      <Footer>
        <WrapperCount>
          <CountItemsText>Total de Itens:</CountItemsText>
          <CountItems>{data.length}</CountItems>
        </WrapperCount>
        <div>
          <LinesPageText>Linhas por página:</LinesPageText>
          <SelectPage value={itemsPerPage} onChange={handleItemsPerPageChange}>
            <option value={50}>50</option>
            <option value={100}>100</option>
            <option value={200}>200</option>
            <option value={300}>300</option>
          </SelectPage>
          <LinesPageText>{`${(currentPage - 1) * itemsPerPage + 1}-${Math.min(
            currentPage * itemsPerPage,
            data.length
          )}`}</LinesPageText>
          <ButtonNavigation
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            {"<"}
          </ButtonNavigation>
          <ButtonNavigation
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage * itemsPerPage >= data.length}
          >
            {">"}
          </ButtonNavigation>
        </div>
      </Footer>
    </Container>
  );
};

export default Grid;
