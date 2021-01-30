import React, {useEffect,useState} from "react";
import database from '@react-native-firebase/database';
import {Pressable,Image} from 'react-native'
import { Container, Header, Content, Card, CardItem,Icon, Text, Body,Button, View, Thumbnail, Fab, Right } from "native-base";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
function Request({navigation}) {

  const [values, setvalue]= useState([])
   useEffect(()=>  {
  
    database().ref("request/").once("value", snapshot => {
          let allNotes = [];
      snapshot.forEach(snap => {
          allNotes.push(snap.val());
        
        }); 
       
       
        
        var value=allNotes
        setvalue(value) 
     
      
      },
      )
         
    },[])
    console.log("outside value",values)
     
    return (
      <Container>
       {/* <TouchableOpacity onPress={(()=>{navigation.toggleDrawer()})}>
       <Thumbnail source={require('../../img/menu.png')}></Thumbnail>
       </TouchableOpacity> */}
         
        <Content padder>
           <Text style={{fontSize:40,fontFamily:'serif'}}>Blood Request</Text>
            {values.map((v,i)=>
            <ScrollView key={i}>
          <Card key={i} >
           <CardItem header bordered style={{justifyContent:'space-between'}}>
              <Text>{`Patient Name:     ${v.name}`}</Text>
              <Text>{`${v.location}`}</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <View>
                <Text>
                  {`Blood group:   ${v.blood}`}
                  {"\n"}
                  {`Reason:   ${v.reason}`}
                  {"\n"}
                 {v.message}
                </Text>
                </View>
              </Body>
            </CardItem>
            <CardItem footer bordered style={{justifyContent:"space-between"}}>

              <Text style={{position:'relative'}}>{`Contact:${v.number } `}{"\n"}{"\n"}</Text>
              
              <Text>{`${v.date}`}</Text>
            </CardItem>
           
          </Card>
          </ScrollView>
          )}
        </Content>
       
        <TouchableOpacity style={{alignItems:'center'}}  onPress={()=>navigation.navigate('Requestform')} >
       <Image   source={require('../../img/Add.png')} style={{width:40,height:40}}></Image>
       <Text>Add your Request</Text>
       </TouchableOpacity>
      
      </Container>
    );
  }
export default Request