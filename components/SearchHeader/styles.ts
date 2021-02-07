import {StyleSheet} from 'react-native'

const styles=StyleSheet.create({
    container:{
        padding:10,
        marginTop:"10%",
    },
    title:{
        color:"white",
        fontSize:24,
        fontWeight:'bold',
        marginBottom:'5%'
        
    },
    input:{
        borderWidth:1,
        backgroundColor:'white',
        height:40,
        borderRadius:5,
        fontSize:16,
        position:"absolute",
        width:'100%',
        textAlign:"center",
        fontWeight:"bold"
    },
    searchIcon:{
        position:"absolute",
        zIndex:100,
        marginLeft:"3%",
        marginTop:"2.5%",
        padding:1
    }
})

export default styles