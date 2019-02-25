export function manageFriends(state, action){
    let friends = [Object.assign({}, ...state)]

    switch (action.type) {
        case 'ADD_FRIEND':
          friends = {friends: [...state.friends, action.friend] }
          return friends
        case 'REMOVE_FRIEND':
            let newState = [{friends: [...state.friends]}]
            let remove = newState[0].friends.filter((friend)=>{
                if (friend.id !== action.id){
                    return friend
                }
            })
            return {friends: remove}
        default:
          return state;
      }
}
