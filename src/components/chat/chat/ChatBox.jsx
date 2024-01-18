import React from 'react'
import ChatHeader from './ChatHeader'
import Messages from './Messages'
import { Box } from '@mui/material'
import { useContext } from 'react'
import { AccountContext } from '../../../context/AccountProvider'

const ChatBox = () => {
    const { person } = useContext(AccountContext);
  return (
    <Box style={{height:"75%"}}>
    <ChatHeader person={person}></ChatHeader>
   <Messages person={person}></Messages>
    </Box>
   
  )
}

export default ChatBox