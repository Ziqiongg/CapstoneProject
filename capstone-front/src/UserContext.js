import { createContext, useContext, useState } from "react";

// const [isAuthenticated, setAuthenticate] = useState(false);
//     const [open, setOpen] = useState(false);

export const UserInfo = createContext({
    user: null, setUser: () =>{},
    isAuthenticated: false, setAuthenticate: () => {},
    open: false, setOpen: () => {},
    users: null, setUsers: () => {},
    userId: null, setUserId: () => {},
    numItems: null, setNumItems: () => {}
});
