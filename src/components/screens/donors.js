import React, {useEffect,useState} from "react";
import database from '@react-native-firebase/database';
import { Container, Header, Content, Card, CardItem, Text, Body,Button,Thumbnail, View, Right } from "native-base";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
function Donors({navigation}) {

  const [values, setvalue]= useState([])
   useEffect(()=>  {
  
    database().ref("users/").once("value", snapshot => {
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
       <Text style={{fontSize:40,fontFamily:'serif',position:'relative'}}>Donors</Text>
       </TouchableOpacity> */}
         
        <Content padder>
       
            {values.map((v,i)=>
            
            <ScrollView key={i}>
            
          <Card key={i} >
           
           <CardItem header bordered>
              <Text>{` Name:     ${v.name}`}</Text>
              
              {/* <Text style={{alignSelf:'baseline'}}>{v.blood}</Text> */}
            </CardItem>
            <CardItem bordered>
              <Body>
                <View>
                <Text>
                  {`Blood group:   ${v.blood}`}
                  {"\n"}
                 {v.email}
                 
                </Text>

                </View>
              </Body>
            </CardItem>
            <CardItem footer bordered style={{justifyContent:'space-between'}}>

              <Text>{`Location:   ${v.location}`}</Text>
              
             
            </CardItem>
          </Card>
         
          </ScrollView>
          )}
        </Content>
       </Container>
       
    );
  }
export default Donors