
import { BaggageClaim, BarChart4, Cable, ChevronLeft, FilePlus2, Home, ShoppingBag, ShoppingBasket, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import SubscriptionCard from './SubscriptionCard'

const Sidebar = () => {
  return (
    <div className="w-60 min-h-screen bg-slate-800 text-slate-50 fixed ">
        {/* Top part */}
        
        <div className="flex flex-col">
         {/* Logo */} 
         <div className="bg-slate-950 flex space-x-2 items-center justify-center py-3 px-2">
            <ShoppingCart/>
            <span className="font-bold">Inventory</span>
         </div>
          {/* Links */} 
          <nav className="flex flex-col gap-4 p-3">
            <Link className="flex items-center space-x-2 bg-blue-600 text-slate-50 p-2 rounded-md " href="#"> 
               <Home className="w-4 h-4"/>
               <span>Home</span>
            </Link>
            <button className="flex items-center space-x-2 p-2"> 
               <BaggageClaim className="w-4 h-4"/>
               <span>Inventory</span>
            </button>
            <button className="flex items-center space-x-2 p-2"> 
               <ShoppingBag className="w-4 h-4"/>
               <span>Sales</span>
            </button>
            <button className="flex items-center space-x-2 p-2"> 
               <ShoppingBasket className="w-4 h-4"/>
               <span>Purchases</span>
            </button>

            <Link className="flex items-center space-x-2 p-2" href="#"> 
               <Cable className="w-4 h-4"/>
               <span>Integrations</span>
            </Link>
            <Link className="flex items-center space-x-2 p-2" href="#"> 
               <BarChart4 className="w-4 h-4"/>
               <span>Reports</span>
            </Link><Link className="flex items-center space-x-2 p-2" href="#"> 
               <FilePlus2 className="w-4 h-4"/>
               <span>Documents</span>
            </Link>
          </nav>
          <SubscriptionCard/>
        </div>
        {/* Bottom */}
        <div className="flex flex-col">
        <button className="bg-slate-950 flex space-x-2 items-center justify-center py-3 px-2">
            <ChevronLeft/>
         </button> 
        </div>
        {/* Subscription Card */}
        {/* Footer Icon */}
    </div>
  )
}

export default Sidebar