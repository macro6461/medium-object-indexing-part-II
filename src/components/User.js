
const User = ({user}) =>{

    const {img, username, id, email } = user
    
    return (
        <div key={id}>
            <img src={img}/>
            <p>{username}</p>
            <p>{email}</p>
        </div>
    )
}

export default User;