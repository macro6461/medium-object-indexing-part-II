import User from './User'

const Group = ({userMap, group}) =>{

  const {isPrivate} = group

    return (
    <div key={group.id} style={{borderBottom: 'solid black 1px'}}>
        <h3>{group.name} <span style={{color: isPrivate ? 'red' : 'green' }}>{isPrivate ? 'Private' : 'Public'}</span></h3>
        {group.users.map(user=>{
          if (userMap[user]){
            return <User user={userMap[user]}/>
          }
        })}
    </div>
    );
    
};

export default Group;