import React, { useEffect } from "react";
import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    RowSelectionState,
    useReactTable,
} from "@tanstack/react-table";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "./table";
import { cn } from "@/lib/utils";
interface DataTableProps<TData> {
    columns: ColumnDef<TData>[];
    data: TData[];
    setSelectedRows?: React.Dispatch<React.SetStateAction<TData[]>>;
    moreButton?: boolean;
    handleClickOnTable?: (original?: TData) => void;
}

export function DataTable<TData>({
    setSelectedRows,
    columns,
    data,
    handleClickOnTable,
    moreButton = true,
}: DataTableProps<TData>) {
    const [rowSelection, setRowSelection] = React.useState<RowSelectionState>(
        {},
    );

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        state: {
            rowSelection,
        },
        onRowSelectionChange: setRowSelection,
    });

    useEffect(() => {
        const selectedRowsData = table
            .getSelectedRowModel()
            .rows.map(row => row.original);
        setSelectedRows?.(selectedRowsData);
    }, [rowSelection, setSelectedRows, table]);

    return (
        <div className=" ">
            <Table>
                {/* Table Header */}
                <TableHeader>
                    {table.getHeaderGroups().map(headerGroup => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header, index) => (
                                <TableHead
                                    className={cn(" ", {
                                        " w-[36px]": index === 0,
                                    })}
                                    key={header.id}
                                >
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                              header.column.columnDef.header,
                                              header.getContext(),
                                          )}
                                </TableHead>
                            ))}
                        </TableRow>
                    ))}
                </TableHeader>

                {/* Table Body */}
                <TableBody>
                    {table.getRowModel().rows.length ? (
                        table.getRowModel().rows.map((row, index) => {
                            const original = row.original;
                            return (
                                <TableRow
                                    style={{
                                        animationDelay: `${index * 0.1}s`,
                                    }}
                                    onClick={() =>
                                        handleClickOnTable &&
                                        handleClickOnTable(original)
                                    }
                                    className={cn(
                                        "data-[state=selected]:bg-muted relative   hover:bg-muted transition-all duration-300 !cursor-pointer animate-fade-up ",
                                        {
                                            "z-10": handleClickOnTable,
                                        },
                                    )}
                                    key={row.id + index}
                                    data-state={
                                        row.getIsSelected()
                                            ? "selected"
                                            : undefined
                                    }
                                >
                                    {row
                                        .getVisibleCells()
                                        .map((cell, index) => (
                                            <TableCell
                                                key={cell.id}
                                                className={cn("", {
                                                    " text-end":
                                                        index ===
                                                        table.options.columns
                                                            .length +
                                                            1,
                                                    "!cursor-pointer":
                                                        handleClickOnTable,
                                                })}
                                            >
                                                {index ===
                                                    table.options.columns
                                                        .length -
                                                        1 && moreButton ? (
                                                    <div className="flex justify-end">
                                                        {flexRender(
                                                            cell.column
                                                                .columnDef.cell,
                                                            cell.getContext(),
                                                        )}
                                                    </div>
                                                ) : (
                                                    flexRender(
                                                        cell.column.columnDef
                                                            .cell,
                                                        cell.getContext(),
                                                    )
                                                )}
                                            </TableCell>
                                        ))}
                                </TableRow>
                            );
                        })
                    ) : (
                        <TableRow>
                            <TableCell
                                colSpan={columns.length}
                                className="h-24 text-center"
                            >
                                No results.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
}
