import { Bell, ChevronDown, History, LayoutGrid, Plus, Settings, Users } from 'lucide-react'
import React from 'react'
import Searchinput from './Searchinput'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='bg-gray-100 h-14 flex items-center justify-between px-8 border-b border-slate-300'>
      <div className="flex gap-3">
        {/* recent activities */}
        <button>
          <History className='w-5 h-5'/>
        </button>
         {/* search */}
         <Searchinput/>
      </div>
      <div className="flex items-center gap-3">
        {/* Plus Icon */}
        <div className="pr-2 border-gray-300">
        <button className='p-1 rounded-lg bg-blue-600'><Plus className='text-slate-50 w-4 h-4'/></button>
        </div> 
        {/*  */}
        <div className="flex border-r border-gray-300 space-x-2">
          <button className='p-1 rounded-lg hover:bg-slate-200'><Users className='text-slate-900 w-4 h-4'/></button>
          <button className='p-1 rounded-lg hover:bg-slate-200'><Bell className='text-slate-900 w-4 h-4'/></button>
          <button className='p-1 rounded-lg hover:bg-slate-200'><Settings className='text-slate-900 w-4 h-4'/></button>
        </div>
        {/*  */}
        <div className="flex gap-3">
          <button className="flex items-center">
            <span>ABIJURU</span>
            <ChevronDown className="w-4 h-4"/>
          </button>
          <button>
            <Image 
              alt='user-image'
              width={96} 
              height={96}
              className="w-8 h-8 rounded-full border border-slate-800"
              src="/user.jpg"
              />   
          </button>
          <button>
            <LayoutGrid className='w-6 h-6 text-slate-900'/> 
          </button>
        </div>
      
    </div>
    </div>
  )
}

export default Header