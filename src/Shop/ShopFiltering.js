import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AppsIcon from '@mui/icons-material/Apps';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import './ShopFiltering.css';

const ShopFiltering = ()  => {
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
    <div className='filtering-inputs'>
    <FormControl sx={{ m: 1, minWidth:'13rem', backgroundColor:'rgb(192 149 88)'}} size="small">
      <InputLabel id="demo-select-small-label"  sx={{fontSize:'15px'}}>Sort by Default Order</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={age}
        label="Sort by Default Order"
        sx={{color:'white',backgroundColor:'rgb(192 149 88)', height:'2.5rem',fontSize:'14px'}}
        onChange={handleChange}
        
      >
        <MenuItem value={10} sx={{color:'white', backgroundColor:'rgb(192 149 88)', fontSize:'12px'}}>Ten</MenuItem>
        <MenuItem value={20} sx={{color:'white', backgroundColor:'rgb(192 149 88)', fontSize:'12px'}}>Sort By Price</MenuItem>
        <MenuItem value={30} sx={{color:'white', backgroundColor:'rgb(192 149 88)', fontSize:'12px'}}>Thirty</MenuItem>
      </Select>
    </FormControl>
    <button className='sort-btn'><ArrowDownwardIcon sx={{fontSize:'17px'}} /></button>
    <FormControl sx={{ m: 1, minWidth:'13rem', backgroundColor:'rgb(192 149 88)'}} size="small">
      <InputLabel id="demo-select-small-label" sx={{fontSize:'15px',}}>Show Products</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={age}
        label="Age"
        onChange={handleChange}
        sx={{color:'white',backgroundColor:'rgb(192 149 88)', height:'2.5rem',fontSize:'14px'}}
        
      >
        <MenuItem sx={{color:'white', backgroundColor:'rgb(192 149 88)', fontSize:'12px'}} value={10}>Ten</MenuItem>
        <MenuItem  sx={{color:'white', backgroundColor:'rgb(192 149 88)',fontSize:'12px'}}value={20}>Twenty</MenuItem>
        <MenuItem  sx={{color:'white', backgroundColor:'rgb(192 149 88)', fontSize:'12px'}}value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
    <div className='box-sort'>
        <AppsIcon sx={{fontSize:'18px',color:'white'}} />
        <FormatListBulletedIcon sx={{fontSize:'18px',color:'white', }} />
    </div>
    </div>
   
    </>

  );
}

export default ShopFiltering;