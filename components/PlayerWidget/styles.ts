import {StyleSheet} from 'react-native'

const styles=StyleSheet.create({
    container: {
        position: 'absolute',
        bottom:"7.6%",
        backgroundColor: '#131313',
        width: '100%',
        borderWidth: 1,
        borderColor: 'black',
      },
      progress: {
        height: 3,
        backgroundColor: '#bcbcbc'
      },
      row: {
        flexDirection: 'row',
      },
      image: {
        width: 60,
        height: 60,
        marginRight: 10,
      },
      rightContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      nameContainer: {
        marginLeft:5,
        justifyContent:"center",
        width:"60%"
      },
      iconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 100,
        justifyContent: 'space-around'
      },
      title: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        
      },
      artist: {
        color: 'lightgray',
        fontSize: 16,
      }
   
})

export default styles