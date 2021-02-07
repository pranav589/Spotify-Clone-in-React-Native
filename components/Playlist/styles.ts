import {StyleSheet} from 'react-native'

const styles=StyleSheet.create({
    container:{

        marginTop:10,

    },
    create:{
        flexDirection:"row",
        alignItems:"center"
    },
    text:{
        color:"white",
        marginLeft:10,
        fontSize:16,
        fontWeight:'bold'
    },
    liked:{
        flexDirection:"row",
        alignItems:"center",
        marginTop:10,
        marginBottom:10
    },
    heart:{
        padding:10,
        backgroundColor:"#987DD1",
        marginLeft:3,
        marginRight:4,
        width:45
    }
})


export default styles