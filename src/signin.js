import React, { useState  } from 'react';
import auth from '@react-native-firebase/auth';
import {Pressable, StyleSheet,Image} from 'react-native'
import { Container, Header, Content, Form, Item,Text, Input, Label, Button, Card} from 'native-base';
function Signin({navigation}) {
 
  const[ email, setemail] = useState()
  const[password,setpassword] = useState()
const Login=()=>{
  {email && password ? 
  auth()
  .signInWithEmailAndPassword(email, password)
  .then(() => {
    console.log('User account created & signed in!');
    navigation.navigate('Home')
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      alert('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      alert('That email address is invalid!');
    }
    if (error.code === 'auth/user-not-found') {
      alert('Email address is not registerd firstly sign up ');
    }

    console.error(error);
  })
  :alert("fill all value") }
  
}

    return (
      <Container>
        {/* <Header /> */}
        <Content >
          <Card style={styles.display}>         
          {/* <Image source={{uri:'https://cdn3.vectorstock.com/i/thumb-large/74/07/donate-blood-and-save-life-isolated-icon-vector-26547407.jpg'}}></Image> */}
        <Image style={styles.img} source={require('./img/logo.jpg')}></Image>
             <Form >
            <Item floatingLabel>
              <Label>Email</Label>
              <Input placeholder="Enter your email" onChangeText={(text)=>setemail(text)} required/>
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input placeholder="Enter password" caretHidden onChangeText={(text)=>setpassword(text)} required/>
            </Item>
               <Button style={{backgroundColor:'red'}} onPress={()=>Login()}><Text>LOg in</Text></Button>
               <Text>If you don't have account press</Text>
            
               <Pressable  onPress={()=>navigation.navigate('Signup')}><Text style={{fontFamily:'serif',color:'red'}}>Signup</Text></Pressable>
            </Form>
            </Card>
             </Content>
      </Container>
    );
  }
  const styles= StyleSheet.create({
    display:{
    marginTop:4,
      justifyContent:'center',
       color:'green',
       backgroundColor:'#fff0f5' ,
       borderColor: 'red',
       borderEndWidth:6,
       borderTopWidth:0,
       borderBottomEndRadius:10
    },
img:{
      width:300,
      position:'relative',
      alignSelf:'center'
  }   
  })

export default Signin