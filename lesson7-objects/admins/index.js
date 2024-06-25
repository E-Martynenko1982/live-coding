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

const adminIds = ['1', '3'];
const users = [
  { id: '1', name: 'Bob' },
  { id: '2', name: 'Tom' },
  { id: '3', name: 'Sam' },
  { id: '4', name: 'Tad' },
];

