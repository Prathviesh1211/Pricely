"use client"

import React, { useState } from 'react'
import { Input } from './ui/input'
import { Loader } from 'lucide-react';
import { Button } from './ui/button';


const AddProductForm = ({user}) => {

  const[url,setUrl]=useState("");
  const[loading,setLoading]=useState(false);

  const handleSubmit=async (e)=>{
    e.preventDefault();

  }

  return (
    <form onSubmit={handleSubmit} className='w-full mx-auto max-w-2xl' >
      <div className='flex flex-col sm:flex-row gap-2'>
        <Input type="url" 
        className="text-base h-12"
        value={url}
        onChange={(e)=>setUrl(e.target.value)}
        placeholder="Paste Product URL (Amazon, Flipkart, etc.)"
        required
        disabled={loading}
        />

      <Button className="h-10 sm:h-12 px-8 bg-orange-500 hover:bg-orange-600">
        {loading?
        (
          <>
            <Loader className='w-4 h-4 animate-spin mr-2'/>
            Adding...
          </>
        ):("Track Price")}
      </Button>
      </div>
    </form>
  )
}

export default AddProductForm
