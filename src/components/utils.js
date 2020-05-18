export const getSelectedUsers = () => JSON.parse(localStorage.getItem('selectedUsers')) || [];
export const setSelectedUsers = arr => localStorage.setItem('selectedUsers', JSON.stringify(arr));