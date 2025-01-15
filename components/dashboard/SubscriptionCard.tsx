import Link from 'next/link'
import React from 'react'

const SubscriptionCard = () => {
  return (
   <div className="px-1 py-3">
    <div className="rounded-lg p-3 mt-6 bg-slate-900">
      <div className="border-b border-slate-300 pb-3">
      <p className='text-xs border-l-2 border-orange-400 pl-2'>
        Your Premium plans trial exprires in {""}
       <span className="text-orange-400">13 days</span>.
      </p>
      </div>
    </div>
    <div className="flex">
        <button className="mr-2 border-r border-slate-600 p-2">Change Plan</button>
        <Link href="#" className="p-2">Upgrade</Link>
    </div>
   </div>
  )
}

export default SubscriptionCard