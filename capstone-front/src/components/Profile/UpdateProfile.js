

const UpdateProfile = async(firstName, lastName, userName, email, password) => {
    if(firstName) await updateSpecific(firstName, "firstName")
    if(lastName) updateSpecific(lastName, "lastname")
    if(email) updateSpecific(email, "email")
    if(password) updateSpecific(password, "password")
}

const updateSpecific = (item, type) => {
    const token = sessionStorage.getItem("jwt");
    fetch(`http://localhost:8080/users/patch/${type}`, {
    method: 'PATCH',
    headers: {'Content-Type': 'application/json',
              'Authorization': token},
    body: item,
}).catch((error) => {console.error(error)});}

export default UpdateProfile