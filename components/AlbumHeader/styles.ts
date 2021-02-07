import {StyleSheet} from 'react-native'

const styles=StyleSheet.create({
    container:{
        alignItems:"center",
   
    },
    image:{
        width:200,
        height:200,
        margin:15
    },
    name:{
        color:"white",
        fontSize:27,
        fontWeight:"bold"
    },
    creatorContainer:{
        flexDirection:"row",
        margin:10
        
    },
    creator:{
        color:"lightgray",
        margin:5,
        fontSize:18,
        marginRight:0
    },
    likes:{
        color:"lightgray",
        margin:5,
        fontSize:18
    },
    button:{
        backgroundColor:"#1cd05d",
        padding:18,
        borderRadius:50,
        justifyContent:"center",
        alignItems:"center"
    },
    buttonText:{
        color:'white',
        fontSize:20,
        fontWeight:"bold"
    },
    header: {
        width: '100%',
        height: 500
      },
})

export default styles