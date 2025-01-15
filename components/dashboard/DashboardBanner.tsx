"use client"

import { CreditCard, X } from 'lucide-react'
import React, { useState } from 'react'

const DashboardBanner = () => {
    const [hidden, setHidden] = useState(false)
  return (
    <div className={`${hidden?"hidden":"grid grid-cols-12 items-center py-6 px-16 bg-white gap-4 relative"}`}>
       {/* Icons */}
       <div className="col-span-3">
         <CreditCard className="w-16 h-16"/>
       </div>
       {/* Text */}
       <div className="col-span-6 ">
        <h2 className="font-bold text-lg">Start Accepting online Payments</h2>
        <p>Business are moving towards online payments as they are easy, secure and fast. Try them for your business today.</p>
       </div>
       {/* button */}
       <div className="col-span-3">
       <button className="py-2 px-8 uppoercase text-sm bg-blue-700 text-white rounded-lg">
        Enable
       </button>
       </div>
       
       {/* Close button */}
       <button onClick={()=>setHidden(true)} className="absolute top-4 right-4">
        <X className="text-slate-600"/>
       </button>
    </div>
  )
}

export default DashboardBanner