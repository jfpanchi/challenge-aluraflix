export const deleteCategory = (id) => {
    return fetch(`http://localhost:4000/category/${id}`,{
        method: 'DELETE',
    }).then((res) => res.json())
    .catch((error) => console.log(error));
}
