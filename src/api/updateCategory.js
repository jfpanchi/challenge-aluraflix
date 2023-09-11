export const updateCategory = (name, description, color, id) => {
    return fetch(`http://localhost:4000/category/${id}`,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({name, description, color, id})
    })
}
