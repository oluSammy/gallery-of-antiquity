import React, { useEffect, useMemo, useState } from "react";
import { Column, useTable } from "react-table";

type Props<T extends object> = {
  columns: Column<T>[];
  data: T[];
  loading?: boolean;
};

const Table = <T extends object>(props: Props<T>) => {
  const {
    getTableProps, // table props from react-table
    getTableBodyProps, // table body props from react-table
    headerGroups, // headerGroups, if your table has groupings
    rows, // rows for the table based on the data passed
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
  } = useTable({
    columns: props.columns,
    data: props.data,
  });

  return (
    <div className="">
      <table {...getTableProps()} className=" w-full">
        <thead>
          {headerGroups.map((headerGroup, idx) => (
            <tr
              className="bg-[#E2E2E5]"
              {...headerGroup.getHeaderGroupProps()}
              key={idx}
            >
              {headerGroup.headers.map((column, idx) => (
                <th
                  className="text-left py-2 pl-1 text-[#666666] font-semibold text-[15px]"
                  {...column.getHeaderProps()}
                  key={idx}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={i}>
                {row.cells.map((cell, idx) => {
                  return (
                    <td
                      className="py-3 border-b"
                      {...cell.getCellProps()}
                      key={idx}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
