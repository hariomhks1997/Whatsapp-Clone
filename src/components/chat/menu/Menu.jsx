 import { useState } from 'react'
 import { Box } from '@mui/material'
import React from 'react'
import Header from './Header'
import Search from './Search'
import Conversations from './Conversations'

const Menu = () => {
  const [text,setText]=useState("")
  return (
    <Box>
        <Header></Header>
        <Search setText={setText}></Search>
        <Conversations text={text}></Conversations>
    </Box>
  )
}

export default Menu