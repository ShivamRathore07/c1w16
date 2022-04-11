import React, { useState } from "react"
import data from '../data.json'
import GroceryItem from "./GroceryItem"
import './grocerydetails.css'
const GroceryDetails = ()=>{ 
    return(
        <>
        <h1>Groceries</h1>
        <div className="container">
             
            {data.map((ele) =>{
                return <GroceryItem  id = {ele.id} title = {ele.title} imgURL={ele.imgURL} mrp = {ele.mrp}  sellingPrice = {ele.sellingPrice} discount = {ele.discount}/>
            
            })}
            {/* map through the data and display the cards */}
        </div>
        </>
    )
}
export default GroceryDetails