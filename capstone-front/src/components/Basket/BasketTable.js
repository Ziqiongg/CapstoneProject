

import React, { useEffect } from 'react';
import { useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useNavigate } from 'react-router-dom';
import { Chip } from '@mui/material';
import { getBasket, deleteItem} from './Axios/BasketAPI';


const BasketTable = ({basketItem}) => {

  const columns = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'category', label: 'Category', minWidth: 100 },
    { id: 'price', label: 'Price', minWidth: 100 },
    { id: 'deleteButton', minWidth: 100},
    {id: 'PurchaseButton', minWidth: 100}
    // {id: 'subtotal', label: 'Subtotal', minWidth:100}
  ];

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  }
  const [basket, setBasket] = useState([]);
  const [product, setProduct] = useState({});

  const deleteFromBasket = () => {
    deleteItem(setBasket, product.id)
  }

  const navigate = useNavigate();

  function goToIte(id) {
    navigate("/products/id/" + id)
  }

  function createData(id, name, category, price, deleteButton, purchaseButton) {
    return { id, name, category, price, deleteButton,purchaseButton};
  }

  /* function subtotal(basketItem) {
 return basketItem.map(({ price }) => price).reduce((sum, i) => sum + i, 0);} */

  const rows = basketItem.map(product => createData(product.id,
    product.name,
    product.category,
    product.price,
    <Chip label="Remove" variant="soft" onDelete={()=>deleteFromBasket(product.id)} />
     
    ))

  return (
    <>
    <section>
    <Paper sx={{ width: '100%', overflow: 'hidden'}}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows

              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow onClick={() => goToIte(row['id'])} hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </section>
    </>
  )

}
export default BasketTable;