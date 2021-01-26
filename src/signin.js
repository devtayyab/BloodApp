import React, { useState  } from 'react';
import auth from '@react-native-firebase/auth';
import { Container, Header, Content, Form, Item,Text, Input, Label, Button,Pressable } from 'native-base';
function Signin({navigation}) {
 
  const[ email, setemail] = useState()
  const[password,setpassword] = useState()
const Login=()=>{
  {email || password ? alert("fill value") : 
  auth()
  .signInWithEmailAndPassword(email, password)
  .then(() => {
    console.log('User account created & signed in!');
    navigation.navigate('home')
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
  }
}

    return (
      <Container>
        {/* <Header /> */}
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input placeholder="" onChangeText={(text)=>setemail(text)} required/>
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input placeholder="" caretHidden onChangeText={(text)=>setpassword(text)} required/>
            </Item>
               <Button onPress={()=>Login()}><Text>LOg in</Text></Button>
               <Text style={styles.label,{color:'red'}}>If you don't have account press signup</Text>
            
               <Pressable title="log in" onPress={()=>navigation.navigate('signup')}><Text style={{fontSize:'bold'}}>Signup</Text></Pressable>
            
           
          </Form>
        </Content>
      </Container>
    );
  }
export default Signin