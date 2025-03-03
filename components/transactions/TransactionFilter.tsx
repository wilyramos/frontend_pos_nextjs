"use client";

import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import { format } from "date-fns";
import { useQuery } from "@tanstack/react-query";
import { getSalesByDate } from "@/src/api";
import TransactionSummary from "./TransactionSummary";
import { formatCurrency } from "@/src/utils";
import dynamic from "next/dynamic";

const Calendar = dynamic(() => import ("react-calendar"), { ssr: false }) // solucion de rendering que cargar 100% en el cliente

type ValuePiece = Date | null
type Value = ValuePiece | [ValuePiece, ValuePiece]

export default function TransactionFilter() {

    const [date, setDate] = useState<Value>(new Date());
    const formattedDate = format((date?.toString() ?? ''), "yyyy-MM-dd");
    console.log(formattedDate);
    const { data, isLoading } = useQuery({
        queryKey: ["sales", formattedDate],
        queryFn: () => getSalesByDate(formattedDate)
    })

    const total = data?.reduce((acc, transaction) => acc + +transaction.total, 0) ?? 0

    
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5 relative items-start">
            <div className="lg:sticky top-8">
                <Calendar
                    onChange={setDate}
                    value={date}
                    className="shadow-lg"
                    locale="es-ES" // solucion de rendering
                />

            </div>

            <div>
                {isLoading && 'cargando ...'}
                {data ? data.length ? data.map(transaction => (
                    <TransactionSummary
                        key={transaction.id}
                        transaction={transaction}
                    />
                )) : <p>No hay ventas para esta fecha</p> : null}

                <p>
                    <span className="font-bold">Total: {formatCurrency(total)} </span>
                </p>
            </div>
        </div>
    )
}
