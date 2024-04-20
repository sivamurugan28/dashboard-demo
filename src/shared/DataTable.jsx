import * as React from 'react'
import tableStyle from "../styles/table-style.module.scss";

import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table'

const defaultData = [
    {
        id: "#001",
        firstName: 'tanner',
        position: 'Designer',
        firstLevel: "6/10",
        secondLevel: "7/10",
        thirdLevel: "8/10",
        fourthLevel: null,
        totalMarks: "8/10",
        status: "Active",
    },
    {
        id: "#002",
        firstName: 'tanner',
        position: 'Designer',
        firstLevel: "6/10",
        secondLevel: "7/10",
        thirdLevel: "8/10",
        fourthLevel: null,
        totalMarks: "8/10",
        status: "Active",
    },
    {
        id: "#003",
        firstName: 'tanner',
        position: 'Designer',
        firstLevel: "6/10",
        secondLevel: "7/10",
        thirdLevel: "8/10",
        fourthLevel: null,
        totalMarks: "8/10",
        status: "Active",
    },
    {
        id: "#004",
        firstName: 'tanner',
        position: 'Designer',
        firstLevel: "6/10",
        secondLevel: "7/10",
        thirdLevel: "8/10",
        fourthLevel: null,
        totalMarks: "8/10",
        status: "Active",
    },
    {
        id: "#005",
        firstName: 'tanner',
        position: 'Designer',
        firstLevel: "6/10",
        secondLevel: "7/10",
        thirdLevel: "8/10",
        fourthLevel: null,
        totalMarks: "8/10",
        status: "Active",
    },
    {
        id: "#006",
        firstName: 'tanner',
        position: 'Designer',
        firstLevel: "6/10",
        secondLevel: "7/10",
        thirdLevel: "8/10",
        fourthLevel: null,
        totalMarks: "8/10",
        status: "Active",
    },
    {
        id: "#007",
        firstName: 'tanner',
        position: 'Designer',
        firstLevel: "6/10",
        secondLevel: "7/10",
        thirdLevel: "8/10",
        fourthLevel: null,
        totalMarks: "8/10",
        status: "Active",
    },

]

const columnHelper = createColumnHelper()

const columns = [
    columnHelper.accessor('id', {
        header: () => <span>Job ID</span>,
        cell: info =>{
           return info.getValue()
        } ,
    }),
    columnHelper.accessor('firstName', {
        cell: info => info.getValue(),
        header: () => <span>Name</span>,
    }),
    columnHelper.accessor(row => row.position, {
        id: 'position',
        cell: info => <i>{info.getValue()}</i>,
        header: () => <span>Position</span>,
    }),
    columnHelper.accessor('firstLevel', {
        cell: info => info.getValue(),
        header: () => <span>1st Level</span>,
    }),
    columnHelper.accessor('secondLevel', {
        cell: info => info.getValue(),
        header: () => <span>2st Level</span>,
    }),
    columnHelper.accessor('thirdLevel', {
        cell: info => info.getValue(),
        header: () => <span>3st Level</span>,
    }),
    columnHelper.accessor('fourthLevel', {
        cell: info => <span style={info.getValue()?{}:{fontSize:20}}>{info.getValue() || "..."}</span>,
        header: () => <span>4st Level</span>,
    }),
    columnHelper.accessor('totalMarks', {
        cell: info => info.getValue(),
        header: () => <span>Total Marks</span>,
    }),
    columnHelper.accessor('status', {
        cell: info =><span style={{background:"rgba(255, 249, 236, 1)", padding:"4px 7px",borderRadius:5,fontSize:11,color:"rgba(245, 201, 97, 1)"}}>{info.getValue()}</span> ,
        header: () => <span>Status</span>,
    }),
    columnHelper.accessor('action', {
        cell: info => <div style={{fontSize:20}}>👁</div>,
        header: () => <span>Action</span>,
    }),
]

export function DataTable() {
    const [data, _setData] = React.useState(() => [...defaultData])
    const rerender = React.useReducer(() => ({}), {})[1]

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

    return (
        <div className="p-2">
            <table className={tableStyle.tableMain}>
                <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <th key={header.id}>
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map(row => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map(cell => (
                                <td key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="h-4" />
        </div>
    )
}

