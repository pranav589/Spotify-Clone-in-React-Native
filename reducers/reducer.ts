const initialState=null

export const reducer=(state=initialState,action)=>{
    if(action.type=="SONG_LOAD"){
        return action.payload
    }
    return state
}