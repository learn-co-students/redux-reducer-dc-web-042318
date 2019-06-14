export function manageFriends(state, action) {
  switch (action.type) {
    case 'ADD_FRIEND':
      return {
        friends: [...state.friends, action.friend],
      };
    case 'REMOVE_FRIEND':
      const oldFriends = state.friends.slice();
      const friendToRemove = state.friends.findIndex(friend => friend.id === action.id);
      const newFriends = oldFriends.splice(friendToRemove, 1);
      return { friends: oldFriends };
    default:
      return state;
  }
}
