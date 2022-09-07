import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
   globalMargin:{
    marginHorizontal: 20
    },
   title: {
    fontSize: 30
   } ,
   botonGrande: {
    width: 100,
    height: 100,
    backgroundColor:'red',
    borderRadius:20,
    alignItems:'center',
    justifyContent:'center', 
    marginRight: 10 ,
    marginTop: 10
   },
   textoBotonGrande: {
    fontWeight:'bold',
    fontSize:18,
    color: 'white' 
   },
   containerPicture:{
    marginTop: 30,
    alignItems:'center'
   },
   avatarPicture:{
    width: 130,
    height: 130,
    borderRadius: 100
   },
   btnMenu:{
    marginTop: 30,
   
   },
   textoMenu: {
    fontSize: 20,
    textAlign:"center"
   }
})