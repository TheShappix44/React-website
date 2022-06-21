import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SideBarRoute} from './SidebarElements'




const Sidebar = () => {
  return (
    <SidebarContainer>
        <Icon>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to='about'>About</SidebarLink>
                <SidebarLink to='discover'>Discover</SidebarLink>
                <SidebarLink to='services'>Services</SidebarLink>
                <SidebarLink to='signup'>Sign Up</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SideBarRoute to='/signin'>Sign In</SideBarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
