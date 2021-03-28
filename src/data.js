const users = [
  {
    id: 43562, 
    username: 'mattman', 
    email: 'mattman@mattman.com', 
    img: '../profile-pics/43562.png'
  }, 
  {
    id: 10453, 
    username: 'chester_cheetuh', 
    email: 'thuh_cheetuh@chester.com', 
    img: '../profile-pics/10453.png'
  }
]

const groups = [
  {
    id: 234, 
    name: 'WestCoastDoges', 
    isPrivate: false,
    users: [43562, 10453]
   }, 
   {
    id: 738, 
    name: 'EastCoastFloofs', 
    isPrivate: false,
    users: [10453]
   }
]

export {users, groups};