// Map method: Apply the map method to the usersList array to create a new array of objects.(in - argument of each element of arr, out - new arr)
// Extension operator (...): For each user, we create a new object using the extension operator (...user), which copies all the properties of the current user object
// Adding the isAdmin field: Add the isAdmin field, which is set to true if the user ID is contained in the adminIds array, and false otherwise.
function markAdmins(usersList, adminIds) {
  return usersList.map(users => (
    {
      ...users,
      isAdmin: adminIds.includes(users.id),
    }
  ))
}


let obj = { foo: "bar", baz: 42 };
console.log(Object.entries(obj).flat()); // [ ['foo', 'bar'], ['baz', 42] ]

