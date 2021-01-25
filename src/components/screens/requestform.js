import React,{useState}  from 'react';
import {ScrollView} from 'react-native'
import database from '@react-native-firebase/database';
import { Container, Header, Content, Form, Item, Input, Label,Button,Text } from 'native-base';
function Requestform({navigation}) {

const[ name, setname] = useState()
  const[ Blood, setBlood] = useState()
  const[ Location, setlocation] = useState()
  const[ Reason, setReason] = useState()
  const[ Message, setMessage] = useState("")
  const[ Number, setnumer] = useState("")
    
  const Submit=()=>{
    var requestinfo ={
name:name,
location:Location,
blood:Blood,
reason:Reason,
message:Message,
number : Number

    }



    const newReference = database()
  .ref('/request')
  .push();

console.log('Auto generated key: ', newReference.key);

newReference
  .set({
    name:name,
location:Location,
blood:Blood,
reason:Reason,
message:Message,
number : Number
  })
  .then(() => console.log('Data updated.'));
navigation.navigate('Request')
}
    return (
      <Container>
          <ScrollView>
        <Header><Text>Enter Detail</Text></Header>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Patient Name</Label>
              <Input placeholder="" value={name} onChangeText={(text)=>setname(text)} required/>
            </Item>
            <Item floatingLabel last>
              <Label>Blood Group</Label>
              <Input placeholder="" value={Blood} onChangeText={(text)=>setBlood(text)} required/>
            </Item>
            <Item floatingLabel last>
              <Label>Location</Label>
              <Input placeholder="" value={Location} onChangeText={(text)=>setlocation(text)} required/>
            </Item>
            <Item floatingLabel last>
              <Label>Reason of Request</Label>
              <Input placeholder="" value={Reason} onChangeText={(text)=>setReason(text)} required/>
            </Item>
            <Item floatingLabel last>
              <Label>Phone Number</Label>
              <Input placeholder="" value={Number} onChangeText={(text)=>setnumer(text)} required/>
            </Item>
            <Item floatingLabel last>
              <Label>Message</Label>
              <Input placeholder="" value={Message} multiline={true} onChangeText={(text)=>setMessage(text)} required/>
            </Item>
            <Button onPress={()=>Submit()}><Text>Submit</Text></Button>
                 </Form>
        </Content>
        </ScrollView>
      </Container>
    );
  }
export default Requestform