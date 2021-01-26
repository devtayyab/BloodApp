import React, {useEffect,useState} from "react";
import database from '@react-native-firebase/database';
import { Container, Header, Content, Card, CardItem, Text, Body,Button, View } from "native-base";
import { ScrollView } from "react-native-gesture-handler";
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
        
        <Content padder>
            <Button onPress={()=>navigation.navigate('Requestform')} ><Text>Request</Text></Button>
            {values.map((v,i)=>
            <ScrollView key={i}>
          <Card key={i} >
           <CardItem header bordered>
              <Text>{`Patient Name:     ${v.name}`}</Text>
              
              {/* <Text style={{alignSelf:'baseline'}}>{v.blood}</Text> */}
            </CardItem>
            <CardItem bordered>
              <Body>
                <View>
                <Text>
                  {`Blood group:   ${v.blood}`}
                  {"\n"}
                 {v.message}
                </Text>
                </View>
              </Body>
            </CardItem>
            <CardItem footer bordered>

              <Text>{`Location:   ${v.location}`} {`${"\n"} Contact:   ${v.number}`}</Text>
            </CardItem>
           
          </Card>
          </ScrollView>
          )}
        </Content>
        
      </Container>
    );
  }
export default Request