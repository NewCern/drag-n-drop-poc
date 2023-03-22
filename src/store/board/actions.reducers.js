const ADD_CARD = "ADD_CARD";
const REMOVE_CARD = "REMOVE_CARD";

// cards on board
const initialState = [
    {
        id: 1,
        text: "I am sample card 1"
    },
    {
        id: 2,
        text: "I am sample card 2"
    }
]

export const addCard = (payload) => {
    return {
        type: ADD_CARD,
        payload,
    }
}
export const removeCard = (payload) => {
    return {
        type: REMOVE_CARD,
        payload,
    }
}

export const boardReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_CARD:
            return [
                ...state,
                {
                    id: state.length + 1,
                    text: action.payload.text,
                }
            ]
            case REMOVE_CARD:
                const updatedState = state.filter((card, index) => card.id !== action.payload.id)
                return [
                    ...updatedState
                ]
            default:
                return state
    }
    
}

