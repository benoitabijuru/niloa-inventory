"use client"

import FixedHeader from "@/components/dashboard/FixedHeader"
import OptionCard from "@/components/dashboard/OptionCard"
import { Boxes, Component, ScrollText, Shirt } from "lucide-react"



export default function Inventory()  {
  const optionCards = [
    {
      title:"Items",
      description:"Create standalone items and services that you buy and sell",
      link:"/dashboard/inventory/items/new",
      linkTitle:"New Item",
      enabled:true,
      icon:Shirt,
    },
    {
      title:"Categories",
      description:"Bundle different kits",
      link:"/dashboard/inventory/categories/new",
      linkTitle:"New Category",
      enabled:true,
      icon:Boxes,
    },
    {
      title:"Brands",
      description:"Tweak your item prices for specific contacts or transactions ",
      link:"/dashboard/inventory/brands/new",
      linkTitle:"New Brands",
      enabled:true,
      icon:ScrollText,
    },
    {
      title:"Warehouse",
      description:"Tweak your item prices for specific contacts or transactions ",
      link:"/dashboard/inventory/warehouses/new",
      linkTitle:"New Warehouse",
      enabled:true,
      icon:ScrollText,
    },
    {
      title:"Units",
      description:"Tweak your item prices for specific contacts or transactions ",
      link:"/dashboard/inventory/units/new",
      linkTitle:"New Units",
      enabled:true,
      icon:Component,
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
  