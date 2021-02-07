import {StyleSheet} from 'react-native'

const styles=StyleSheet.create({
    container:{
        marginTop:20,
        padding:10,
        // backgroundColor:'#209620',
        borderRadius:7,
        paddingTop:15
    },

    header:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:'center',
        padding:15
    },
    pack:{
        color:"white",
        fontSize:17,
        fontWeight:"bold"

    },
    rupee:{
        color:"white",
        fontSize:20,
        fontWeight:"bold"
    },
    days:{
        color:"#D6DAD6",
    },
    content:{
        padding:15,
        textAlign:"center",
    },
    contentText:{
        color:"white",
        fontWeight:"bold",
        fontSize:16,
        letterSpacing:0.5
    },
    button:{
        backgroundColor:"white",
        padding:12,

        width:"55%",
        alignItems:"center",
        alignSelf:'center',
        borderRadius:50
    },
    buttonText:{
        textAlign:"center",
        color:"black",
        fontSize:16,
        fontWeight:'bold'
    },
    terms:{
        color:"lightgray",
        marginTop:5,
        textAlign:"center",
        fontSize:13
    },
    apply:{
        color:"white"
    }
})

export default styles