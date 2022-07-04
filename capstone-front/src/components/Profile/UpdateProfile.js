

const UpdateProfile = (firstName, lastName, userName, email, password) => {
    if(firstName) updateSpecific(firstName)
    if(lastName) updateSpecific(lastName)
    if(userName) updateSpecific(userName)
    if(email) updateSpecific(email)
    if(password) updateSpecific(password)
}

const updateSpecific = (item) => fetch(`http://localhost:8080/users/patch/${item}/${userId}`, {
    method: 'PATCH',
    body: item
}).catch((error) => {console.error(error)});