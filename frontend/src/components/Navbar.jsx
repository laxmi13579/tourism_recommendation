import { AppBar, Toolbar, Typography, TextField, Badge, Avatar, Box, Menu, MenuItem, Button } from '@mui/material'
import React, { useState } from 'react'
import TerrainIcon from '@mui/icons-material/Terrain';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import styled from '@emotion/styled';

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
});

const Icons = styled(Box)(({ theme }) => ({
    display:'none', 
    alignItems:'center', 
    gap:'20px',
    [theme.breakpoints.up('sm')]: {
        display: 'flex'
    }
}));

const UserBox = styled(Box)(({ theme }) => ({
    display:'flex', 
    alignItems:'center', 
    gap:'20px',
    [theme.breakpoints.up('sm')]: {
        display: 'none'
    }
}));

const Navbar = () => {
    const [open, setOpen] = useState(false);
  return (
    <AppBar position='sticky'>
        <StyledToolbar>
            <Box onClick={()=>{}}>
                <Typography variant='h6'>Rating</Typography>
            </Box>
            <Box onClick={()=>{}}>
                <Typography variant='h6'>Review Count</Typography>
            </Box>
            <Box onClick={()=>{}}>
                <Typography variant='h6'>Rating and Review Count</Typography>
            </Box>
            <Box onClick={()=>{}}>
                <Typography variant='h6'>Fee</Typography>
            </Box>
            <Box onClick={()=>{}}>
                <Typography variant='h6'>Location</Typography>
            </Box>
            <Box onClick={()=>{}}>
                <Typography variant='h6'>Fee and Location</Typography>
            </Box>
        </StyledToolbar>    
    </AppBar>
  )
}

export default Navbar
