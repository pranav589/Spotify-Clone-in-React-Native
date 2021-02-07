import {StyleSheet} from 'react-native'


const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:'center'
    },
    text:{
        color:"white",
        fontSize:20,
        fontWeight:'bold'
    },
    input:{
        borderBottomWidth:0.2,
        borderColor:'white',
        width:"75%",
        marginTop:50,
        fontSize:35,
        marginBottom:5,
        color:"white"
    },
    buttons:{
        flexDirection:"row",
        marginTop:20
    },
    cancel:{
        color:"white",
        fontSize:15,
        letterSpacing:1
    },
    skip:{
        color:"green",
        fontSize:16,
        letterSpacing:1,
        marginLeft:20
    },

})


export default styles