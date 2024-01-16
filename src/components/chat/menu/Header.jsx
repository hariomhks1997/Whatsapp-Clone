import { useContext} from 'react';

import { Box, styled } from '@mui/material';
import { Chat as MessageIcon} from '@mui/icons-material';

import { AccountContext } from '../../../context/AccountProvider';

//components
import HeaderMenu from './HeaderMenuu';
// import InfoDrawer from '../../drawer/Drawer';

const Component = styled(Box)`
    height: 44px;
    background: #ededed;
    display: flex;
    padding: 8px 16px;
    align-items: center;
`;

const Wrapper = styled(Box) `
    margin-left: auto;
    & > * {
        margin-left: 2px;
        padding: 8px;
        color: #000;
    };
    & :first-child {
        font-size: 22px;
        margin-right: 8px;
        margin-top: 3px;
    }
`;
    
const Image = styled('img') ({
    height: 40,
    width: 40,
    borderRadius: '50%'
})

const Header = () => {
    
    

    const { account } = useContext(AccountContext);
    
    

    return (
        <>
            <Component>
                <Image src={account.picture}  />
                <Wrapper>
                    <MessageIcon />
                 <HeaderMenu></HeaderMenu>
                </Wrapper>
            </Component>
            
        </>
    )
}

export default Header;