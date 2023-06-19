'use client';

import { ColumnDef } from "@tanstack/react-table";

export type Attendance = {
    id: number;
    name: string;
    matricNo: string;
    department: string;
    date: string;
    time: string;
}

export const columns: ColumnDef<Attendance>[] = [
    {
        accessorKey: 'id',
        header: () => <div className="text-right">Amount</div>,
        cell: ({ row }) => {
        const amount = parseFloat(row.getValue("amount"))
        const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        }).format(amount)
 
        return <div className="text-right font-medium">{formatted}</div>
    },
    },
    {
        accessorKey: 'name',
        header: 'Name',
    },
    {
        accessorKey: 'matricNo',
        header: 'Matric No',
    },
    {
        accessorKey: 'department',
        header: 'Department',
    },
    {
        accessorKey: 'date',
        header: 'Date',
    },
    {
        accessorKey: 'time',
        header: 'Time',
    }

]
