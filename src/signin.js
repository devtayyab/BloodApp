import React, { useState  } from 'react';
import auth from '@react-native-firebase/auth';
import { Container, Header, Content, Form, Item,Text, Input, Label, Button } from 'native-base';
function Signin({navigation}) {
 
  const[ email, setemail] = useState()
  const[password,setpassword] = useState()
const Login=()=>{
 const intial={
   email:email,
   password:password
 }
  auth()
  .signInWithEmailAndPassword(intial.email, intial.password)
  .then(() => {
    console.log('User account created & signed in!');
    navigation.navigate('home')
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });

}

    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item fixedLabel>
              <Label>Username</Label>
              <Input placeholder="" onChangeText={(text)=>setemail(text)} required/>
            </Item>
            <Item fixedLabel last>
              <Label>Password</Label>
              <Input placeholder="" onChangeText={(text)=>setpassword(text)} required/>
            </Item>
            <Item>
              <Button onPress={()=>Login()}><Text>LOg in</Text></Button>
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
export default Signin