import React from 'react';
import { useTable } from 'react-table';
import './Table.css';

const Table = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'No',
        accessor: 'no',
      },
      {
        Header: 'Nama penerima',
        accessor: 'namaPenerima',
      },
      {
        Header: 'NIK',
        accessor: 'nik',
      },
      {
        Header: 'Tahun penerimaan',
        accessor: 'tahunPenerimaan',
      },
      {
        Header: 'Jenis Bantuan',
        accessor: 'jenisBantuan',
      },
      {
        Header: 'Detail',
        accessor: 'detail',
      },
    ],
    []
  );

  const data = React.useMemo(
    () => [
      {
        no: '1',
        namaPenerima: 'Budi Purnomo',
        nik: '01102213874',
        tahunPenerimaan: '2019',
        jenisBantuan: 'PIP',
        detail: '-',
      },
      {
        no: '2',
        namaPenerima: 'Joko Susanto',
        nik: '012185123',
        tahunPenerimaan: '2019',
        jenisBantuan: 'Bimtek',
        detail: 'Sarung',
      },
      {
        no: '3',
        namaPenerima: 'Sari Susanti',
        nik: '011022007423',
        tahunPenerimaan: '2019',
        jenisBantuan: 'KIP',
        detail: '-',
      },
    ],
    []
  );

  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
