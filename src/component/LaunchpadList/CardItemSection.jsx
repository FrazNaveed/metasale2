import React, { useState } from 'react'
import Affiliate from './Affiliate/Affiliate'
import CardItem from './cards/CardItem'
import { Input, Select } from 'antd';
const CardItemSection = () => {
    const { Option } = Select;
    const [active, setActive] = useState(1)
    const hendleActive = (val) => {
      setActive(val)
    }
    function handleChange(value) {
        console.log(`selected ${value}`);
      }
  return (
    <>
      <div className='main_input_box'>
       
            
          <div className='main_input_box-left-col'>
            <Input placeholder="Enter token name and token symbol" />
          </div>
       
          <div className='fillterVal'>
            <div className='subFillterVal'>
              <label>Filter By</label>
              <Select defaultValue="No Filter" onChange={handleChange}>
                <Option value="No Filter">No Filter</Option>
                <Option value="No Filter">No Filter</Option>
                <Option value="No Filter">No Filter</Option>
              </Select>
            </div>
            <div className='subFillterVal'>
              <label>Pool Type</label>
              <Select defaultValue="No Filter" onChange={handleChange}>
                <Option value="No Filter">No Filter</Option>
                <Option value="No Filter">No Filter</Option>
                <Option value="No Filter">No Filter</Option>
              </Select>
            </div>
            <div className='subFillterVal'>
              <label>Sort By</label>
              <Select defaultValue="No Filter" onChange={handleChange}>
                <Option value="No Filter">No Filter</Option>
                <Option value="No Filter">No Filter</Option>
                <Option value="No Filter">No Filter</Option>
              </Select>
            </div>
            <div className='subFillterVal'>
              <label>Chain</label>
              <Select defaultValue="No Filter" onChange={handleChange}>
                <Option value="No Filter">No Filter</Option>
                <Option value="No Filter">No Filter</Option>
                <Option value="No Filter">No Filter</Option>
              </Select>
            </div>
          </div>
        </div>
    <div className='card_Item'>
    <Affiliate/>
    {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21].map((curElm,index)=>{
        return <React.Fragment key={curElm+index}>
    <CardItem/>
        </React.Fragment>
    })}
   
    <Affiliate/>
    </div> 
    </>
  )
}

export default CardItemSection