import bcrypt from 'bcryptjs';

const users = [
    {
        name: "Admin User",
        email: "admin@email.com",
        password: bcrypt.hashSync('12345', 10),
        isAdmin:true,
    },
    {
        name: "User1",
        email: "user1@email.com",
        password: bcrypt.hashSync('12345', 10),
        isAdmin:false,
    },
    {
        name: "User2",
        email: "user2@email.com",
        password: bcrypt.hashSync('12345', 10),
        isAdmin:false,
    }
]

export default users;