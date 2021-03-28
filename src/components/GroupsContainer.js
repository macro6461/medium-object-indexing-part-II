import {useState, useEffect} from 'react';
import Group from './Group'

const GroupsContainer = ({users, groups})=>{

    const [userMap, setUserMap] = useState({})

    useEffect(()=>{
      var newUserMap = {}
      users.forEach(user=>newUserMap[user.id] = user)
      setUserMap(newUserMap)
    }, [])
    
    useEffect(()=>{
        console.log('hit')
    }, [])

    return (<>
        {groups.map(group=>{
            return <Group group={group} userMap={userMap}/>
        })}
    
    </>)

}

export default GroupsContainer;