import React,{useState}  from 'react';
import {ScrollView,TouchableOpacity,Image, ImageBackground} from 'react-native'
import database from '@react-native-firebase/database';
import { Container, Header, Content, Form, Item, Input, Label,Button,Text,Thumbnail } from 'native-base';
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
        <Header style={{justifyContent:'space-between'}} transparent>
        <TouchableOpacity onPress={(()=>{navigation.toggleDrawer()})}>
       <Thumbnail source={require('../../img/menu.png')}></Thumbnail>
       </TouchableOpacity>
         
          <Text></Text></Header>
          <ImageBackground source={require('../../img/logo.jpg')} style={{justifyContent:'center'}}>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label style={{color:'black'}}>Patient Name</Label>
              <Input placeholder="" value={name} onChangeText={(text)=>setname(text)} required/>
            </Item>
            <Item floatingLabel last>
              <Label style={{color:'black'}}>Blood Group</Label>
              <Input placeholder="" value={Blood} onChangeText={(text)=>setBlood(text)} required/>
            </Item>
            <Item floatingLabel last>
              <Label style={{color:'black'}}>Location</Label>
              <Input placeholder="" value={Location} onChangeText={(text)=>setlocation(text)} required/>
            </Item>
            <Item floatingLabel last>
              <Label style={{color:'black'}}>Reason of Request</Label>
              <Input placeholder="" value={Reason} onChangeText={(text)=>setReason(text)} required/>
            </Item>
            <Item floatingLabel last>
              <Label style={{color:'black'}}>Phone Number</Label>
              <Input placeholder="" value={Number} onChangeText={(text)=>setnumer(text)} required/>
            </Item>
            <Item floatingLabel last>
              <Label style={{color:'black'}}>Message</Label>
              <Input placeholder="" value={Message} multiline={true} onChangeText={(text)=>setMessage(text)} required/>
            </Item>
            <Button style={{backgroundColor:'red'}} onPress={()=>Submit()}><Text>Submit</Text></Button>
                 </Form>
        </Content>
        </ImageBackground>
        </ScrollView>
      </Container>
    );
  }
export default Requestform