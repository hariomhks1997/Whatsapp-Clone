import{ useContext ,useEffect,useState} from 'react'
import { Box, styled, Divider } from '@mui/material';
import { getUsers } from '../../service/api';
import { AccountContext } from '../../../context/AccountProvider';
import Conversation from './Conversation';
const Component = styled(Box)`
    overflow: overlay;
    height: 81vh;
`;

const StyledDivider = styled(Divider)`
    margin: 0 0 0 70px;
    background-color: #e9edef;
    opacity: .6;
`;
const Conversations = ({text}) => {
    const [users, setUsers] = useState([]);
    const {account}=useContext(AccountContext);
    useEffect(() => {
        const fetchData = async () => {
            let data = await getUsers();
            let fiteredData = data.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
            setUsers(fiteredData);
        }
        fetchData();
    }, [text]);

  return (
    <Component>
    {
        users.map((user) => (
            user.sub !== account.sub && 
                <>
                    <Conversation user={user} />
                    <StyledDivider />
                </>
        ))
    }
</Component>
  )
}

export default Conversations;