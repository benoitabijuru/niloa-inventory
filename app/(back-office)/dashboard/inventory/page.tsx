"use client"

import FixedHeader from "@/components/dashboard/FixedHeader"
import OptionCard from "@/components/dashboard/OptionCard"
import { Boxes, Component, ScrollText, Shirt } from "lucide-react"



export default function Inventory()  {
  const optionCards = [
    {
      title:"Items Groups",
      description:"Create standalone items and services that you buy and sell",
      link:"/new",
      linkTitle:"New Item Group",
      enabled:true,
      icon:Boxes,
    },
    {
      title:"Items",
      description:"Create standalone items and services that you buy and sell",
      link:"/new",
      linkTitle:"New Item",
      enabled:true,
      icon:Shirt,
    },
    {
      title:"Composite Items",
      description:"Bundle different kits",
      link:"/new",
      linkTitle:"New Composite",
      enabled:false,
      icon:Component,
    },
    {
      title:"Price Lists",
      description:"Tweak your item prices for specific contacts or transactions ",
      link:"/new",
      linkTitle:"New Composite Item",
      enabled:true,
      icon:ScrollText,
    },
  ]
    return (
      <div>
        <FixedHeader newLink="/dashboard/inventory/items/new"/>
        <div className="grid grid-col-1 lg:grid-cols-2 ">
          {
            optionCards.map((card,i)=> {
              return (
                <OptionCard optionData={card} key={i}/>
              )
            })
          }
          
         </div>
    </div>
    )
  }
  