import React from 'react'
import Calendar from '../../components/Calendar/Calendar'
import Quotes from '../../components/Quotes/Quotes'
import Tasks from '../../components/Tasks/Tasks'

type Props = {}

export default function Dashboard({ }: Props) {
    return (
        <div className="flex flex-col flex-wrap sm:flex-row">
            <section className="w-full  sm:pr-4 sm:w-1/2 xl:w-2/3 mb-4">
                <Quotes />
            </section>
            <section className="hidden sm:block sticky top-0 h-full w-full sm:w-1/2 xl:w-1/3">
                <Calendar />
                <Tasks />
            </section>
        </div>
    )
}