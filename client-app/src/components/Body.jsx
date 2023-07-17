import React, {useState} from 'react'
import { Navbar, Button, Text, Link, Tooltip, Input, Loading, Image } from '@nextui-org/react'
import SignupPopupLG from './SignupPopupLG'


export default function Body({onToggleTheme}) {
  
  const[isDark, setIsDark] = useState(false)

  return (
    <div>
      <Navbar isBordered variant='sticky'>
        <Navbar.Brand>
          <Image width={200} src='/moviemaven-logo.png' />
        </Navbar.Brand>
        <Navbar.Content hideIn="xs">
          <Navbar.Link href="#">Home</Navbar.Link>
          <Navbar.Link isActive={false} href="#" >Trending</Navbar.Link>
          <Navbar.Link href="#">Browse Movie</Navbar.Link>
          <Navbar.Link href="#">Request Movie</Navbar.Link>
          <Navbar.Link href="#">How to Download</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Input
            placeholder="Quick Search"
            labelLeft={<i class="fa-solid fa-magnifying-glass"></i>}
          /><i class="fa-solid fa-magnifying-glass"></i>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link onClick={onToggleTheme}>
            {isDark &&
              <Tooltip content={'Light Mode'} rounded placement='bottom' >
                <Text size={25} onClick={()=>{setIsDark(!isDark)}}>
                <iconify-icon icon="ep:sunny"></iconify-icon>
                </Text>
              </Tooltip>
            }
            {!isDark &&
              <Tooltip content={'Dark Mode'} rounded placement='bottom'>
                <Text size={25} onClick={()=>{setIsDark(!isDark)}}>
                  <i class="fa-solid fa-moon"></i>
                </Text>
              </Tooltip>
            }
          </Navbar.Link>
          <Navbar.Link color="inherit" href="#">
            Login
          </Navbar.Link>
          <Navbar.Item>
            <SignupPopupLG/>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
    </div>
  )
}
