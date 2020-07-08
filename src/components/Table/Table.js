import React from 'react';
import { useTable, useSortBy } from 'react-table'
import './Table-styles.css';

function Table(props) {
	const { columns, data } = props;
	const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data }, useSortBy)


  return (
		<table {...getTableProps()} className='fms-table'>
			<thead>
				{headerGroups.map(headerGroup => (
					<tr {...headerGroup.getHeaderGroupProps()}>
						{headerGroup.headers.map(column => (
							<th
								className={column.className}
								{...column.getHeaderProps(column.getSortByToggleProps())}
							>
								{column.render('Header')}
								<span>
									{column.isSorted
										? column.isSortedDesc
											? ' 🔽'
											: ' 🔼'
										: ''}
								</span>
							</th>
						))}
					</tr>
				))}
			</thead>
			<tbody {...getTableBodyProps()}>
				{rows.map(
					(row, i) => {
						prepareRow(row);
						return (
							<tr {...row.getRowProps()}>
								{row.cells.map(cell => {
									return (
										<td {...cell.getCellProps()} className="text-center">{cell.render('Cell')}</td>
									)
								})}
							</tr>
						)}
				)}
			</tbody>
		</table>
	)
}
export default Table;