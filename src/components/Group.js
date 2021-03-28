import User from './User'

const Group = ({userMap, group}) =>{

    return (
    <div key={group.id} style={{borderBottom: 'solid black 1px'}}>
        <h3>{group.name}</h3>
        {group.users.map(user=>{
          if (userMap[user]){
            return <User user={userMap[user]}/>
          }
        })}
    </div>
    );
    
};

export default Group;