import { StyleSheet } from 'react-native'
import { Colors } from '../constants';

const styles = StyleSheet.create({
   container: {
      margin: 10,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: Colors.white,
      marginVertical: 8,
      borderRadius: 16,
      minHeight: 200,
      elevation: 20,
      shadowColor: '#52006A',
      padding: 16,
      shadowColor: '#171717',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 5,

   },
   img: {
      flex: 1,

      height: 'auto',
      backgroundColor: 'red',
      overflow: 'hidden',
      borderRadius: 8,
      marginBottom: 8
   },
   progress: {
      flex: 1,
      position: 'absolute',
      bottom: -10,
      alignSelf: 'center'

   },
   originalTitle: {
      fontWeight: 'bold',
      marginVertical: 4
   },
   title: {
      fontStyle: 'italic',
      color: "#808080",
      fontWeight: 'bold',
      marginVertical: 4
   },
   details: {
      flexDirection: 'row',
      marginVertical: 4,
      alignItems: 'center'
   },
   adult: {
      color: "#808080",
      padding: 2,
      borderColor: '#999',
      borderWidth: 1,
      borderStyle: 'solid',
      borderRadius: 2,
      fontSize: 12
   },
   normalFont: {
      color: "#808080",
      fontSize: 12
   },
   adultContainer: {
      flexDirection: 'row',
      alignItems: 'center'
   }
})
export default styles;