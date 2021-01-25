import React, {useEffect} from "react";
import database from '@react-native-firebase/database';
import { Container, Header, Content, Card, CardItem, Text, Body,Button } from "native-base";
function Request({navigation}) {
    useEffect(() => {
        database()
        .ref('/')
        .on('value')
        .then(snapshot => {
          console.log('User data: ', snapshot.val());
          console.log('keys: ', snapshot.key);
        });

        })


    return (
      <Container>
       
        <Content padder>
            <Button onPress={()=>navigation.navigate('Requestform')} ><Text>Request</Text></Button>
          <Card>
            <CardItem header bordered>
              <Text>NativeBase</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  NativeBase is a free and open source framework that enable
                  developers to build
                  high-quality mobile apps using React Native iOS and Android
                  apps
                  with a fusion of ES6.
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Text>GeekyAnts</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
export default Request