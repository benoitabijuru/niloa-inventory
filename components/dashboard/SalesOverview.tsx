import { inventorySummary, salesActivity } from '@/constants'
import React from 'react'
import SalesActivityCard from './SalesActivityCard'
import InventorySummaryCard from './InventorySummaryCard'


const SalesOverview = () => {
    
  return (
    <div className="bg-blue-100 border-b border-slate-300 p-8 grid grid-cols-12 gap-4">    
            {/* sales activity */}
           <div className="col-span-8">
            <h2 className="mb-6 text-xl">Sales Activity</h2>
            <div className="border-r border-slate-300 pr-8 grid grid-cols-4 gap-4">
                {/* Card */}
                {
                    salesActivity.map((item,i) =>{
                        return(
                            <SalesActivityCard item={item} key={i}/>
                        )
                    })
                }
                
            </div>
           </div>
            {/* INVENTORY SUMMARY */}

            <div className="col-span-4">
                <h2 className="mb-6 text-xl">Inventory Summary</h2>
                <div className="">
                    {
                        inventorySummary.map((item,i)=>{
                            return(
                               <InventorySummaryCard item={item} key={i}/>
                            )
                        })
                    }
                    
                </div>
            </div>
        
    </div>
  )
}

export default SalesOverview