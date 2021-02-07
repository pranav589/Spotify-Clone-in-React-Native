import {StyleSheet} from 'react-native'

const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        margin:15
        
    },
    container2:{
        flexDirection:'row',
        justifyContent:"space-between",
        flex:1
    },
    rightContainer:{
        justifyContent:"space-around",
        marginLeft:15,
        width:"85%"
    },
    title:{
        color:"white",
        fontSize:18,
    },
    artist:{
        color:"lightgray",
        fontSize:16,
    },
    image:{
        width:50,
        height:50
    },

})

export default styles