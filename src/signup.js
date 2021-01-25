import React ,{useState}from 'react';
import auth from '@react-native-firebase/auth';
import {ScrollView} from 'react-native'
import {  Header,  Form, Item,
     Input, Label,Icon,Text, Button,} from 'native-base';
import database from '@react-native-firebase/database';
  function Signup({navigation}) {
 
  const[ name, setname] = useState()
  const[ email, setemail] = useState()
  const[ age, setage] = useState("")
  const[ password, setpassword] = useState("")
  const[ location, setlocation] = useState("")
    const Savedata=()=>{
      var intial = {
      name : name,
        email:email,
        age :age,
        location:location,
        password: password,
       
        
    }
      console.log("tayyab")



  auth()
  .createUserWithEmailAndPassword(intial.email, intial.password)
  .then(() => {
    console.log('User account created & signed in!');
    const newReference = database()
  .ref('/users')
  .push();

console.log('Auto generated key: ', newReference.key);

newReference
  .set({
    intial
  })
  .then(() => console.log('Data updated.'));
  navigation.navigate('login')

  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      alert('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      alert('That email address is invalid!');
    }

    console.error(error);
  });
  setname("")
  setage("")
  setemail("")
  setlocation("")
  setpassword("")
  }

  
    return (
      
        
          <Form>
            <ScrollView>
              <Header><Text style={{color : "white"}}>Signup</Text></Header>
            <Item stackedLabel>
              <Label>Username</Label>
              <Input placeholder="" value={name} onChangeText={(text)=>setname(text)} required/>
            </Item>
            <Item stackedLabel>
              <Label>Email</Label>
              <Input placeholder=""  value={email} onChangeText={(text)=>setemail(text)} required/>

            </Item>
            <Item stackedLabel>
              <Label>Age</Label>
              <Input placeholder=""  value={age} onChangeText={(text)=>setage(text)} required/>
            </Item>
            <Item stackedLabel>
              <Label>password</Label>
              <Input placeholder=""  value={password} onChangeText={(text)=>setpassword(text)} required/>
            </Item>
            <Item stackedLabel>
              <Label>confirm Password</Label>
              <Input placeholder="" value={password} required />
            </Item>
          {/* <PickerInput></PickerInput> */}
              
            
            <Item stackedLabel>
              <Label>Location</Label>
              <Input placeholder="" value={location} onChangeText={(text)=>setlocation(text)}/>
            </Item> 
           
            <Item>
              <Button onPress={()=>Savedata()} typeof="submit"><Text>Sign Up</Text></Button>
            </Item>
            <Text>if you have account</Text>
            <Button title="log in" onPress={()=>navigation.navigate('login')}><Text>log in</Text></Button>
            </ScrollView>
          </Form>
       
     
    );
  }
export default Signup
