"use client"

import { navLinks } from '@/constants'
import { Building2 } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const HomeNavbar = () => {
    const pathname = usePathname();
 return (
    <div className="h-32 bg-green-300 p-5">
        <div className="flex space-x-3">
            <div className="flex w-12 h-12 rounded-lg bg-white items-center justify-center">
                <Building2/>
            </div>
            <div className="flex flex-col"> 
                <p className="text-slate-700 font-semibold">Welcome, ABIJURU</p>
                <span className="text-sm">Niloa</span>
            </div>
        </div>
        <nav className="sticky mt-6 space-x-3">
           {navLinks.map((item,i) =>{
                return(
                    <Link key={i} href={item.href} className={`${pathname===item.href?"py-1 border-b-2  border-blue-600":"py-1"}`}>
                      {item.title}
                    </Link>
                )
            })
           }
          
        </nav>

    </div>
  )
}

export default HomeNavbar