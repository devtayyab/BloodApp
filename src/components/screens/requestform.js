import React,{useState}  from 'react';
import {ScrollView,TouchableOpacity,Image, ImageBackground,Picker} from 'react-native'
import database from '@react-native-firebase/database';
import { Container, Header, Content, Form, Item, Input, Label,Button,Text,Thumbnail } from 'native-base';
function Requestform({navigation}) {

const[ name, setname] = useState()
const [selectedValue, setSelectedValue] = useState("A+");
const [selectedReason, setSelectedReason] = useState("Hepatits");
  const[ Location, setlocation] = useState()
  const[ Reason, setReason] = useState()
  const[ Message, setMessage] = useState("")
  const[ Number, setnumer] = useState("")
    
  const Submit=()=>{

   
      var date=new Date().toLocaleString()
      console.log(date)


    const newReference = database()
  .ref('/request')
  .push();

console.log('Auto generated key: ', newReference.key);

newReference
  .set({
    name:name,
location:Location,
blood:selectedValue,
reason:selectedReason,
message:Message, 
number : Number,
date:date
  })
  .then(() => console.log('Data updated.'));
navigation.navigate('Request')
 
}

    return (
      <Container>
          <ScrollView>
        <Header style={{justifyContent:'space-between'}} transparent>
        {/* <TouchableOpacity onPress={(()=>{navigation.toggleDrawer()})}>
       <Thumbnail source={require('../../img/menu.png')}></Thumbnail>
       </TouchableOpacity> */}
         
          <Text></Text></Header>
          <ImageBackground source={require('../../img/logo.jpg')} style={{justifyContent:'center'}}>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label style={{color:'black'}}>Patient Name</Label>
              <Input placeholder="" value={name} onChangeText={(text)=>setname(text)} required/>
            </Item>
            <Item stackedLabel>
              <Label style={{color:'black'}}>Blood Group</Label>
              
        <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="A+" value="A+" />
        <Picker.Item label="A-" value="A-" />
        <Picker.Item label="AB+" value="AB+" />
        <Picker.Item label="AB-" value="AB-" />
        <Picker.Item label="B+" value="B+" />
        <Picker.Item label="B-" value="B-" />
        <Picker.Item label="O+" value="O+" />
        <Picker.Item label="O-" value="O-" />
      </Picker>
            </Item>
            <Item floatingLabel last>
              <Label style={{color:'black'}}>Location</Label>
              <Input placeholder="" value={Location} onChangeText={(text)=>setlocation(text)} required/>
            </Item>
            <Item stackedLabel>
              <Label style={{color:'black'}}>Reason</Label>
              
        <Picker
        selectedValue={selectedReason}
        style={{ height: 50, width: 250 }}
        onValueChange={(itemValue, itemIndex) => setSelectedReason(itemValue)}
      >
        <Picker.Item label="Hepatits" value="Hepatits" />
        <Picker.Item label="Accident" value="Accident" />
        <Picker.Item label="Pergnancy" value="Pergnancy" />
        <Picker.Item label="Cancer" value="Cancer" />
        <Picker.Item label="Other" value="Other" />
        
      </Picker>
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