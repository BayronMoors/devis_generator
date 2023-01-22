import React from 'react'
import AsideBar from '../AsideBar/AsideBar'
import NavBar from '../NavBar/NavBar'

type Props = {
    children : JSX.Element
}

export default function Layout({children}: Props) {
  return (
    <main className="relative h-screen overflow-hidden bg-gray-100 dark:bg-gray-800">
    <div className="flex items-start justify-between">
      <AsideBar />
      <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
        <NavBar />
        <div className="h-screen pt-2 pb-24 pl-2 pr-2 overflow-auto md:pt-0 md:pr-0 md:pl-0 relative">
            {children}
        </div>
        </div>
      </div>
    </main>
  )
}