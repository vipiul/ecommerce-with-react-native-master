import React, {useState} from 'react';
import axios from 'axios';
import {
    StyleSheet,
    View,
    ScrollView,
    Platform,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
    Dimensions,
  } from 'react-native';
import {
    Space,
    Header,
    Button,
    TextField,
    TextInput,
    NavHeader,
    Buttons,
  } from '../../components';

import { useDispatch, useSelector } from 'react-redux';
import { IconCrossBig, IconCrossSmall } from '../../assets';
import { DismissKeyboard, KeyboardScrollUpForms, useForm } from '../../utils';



const ForgetPassword = ({ navigation, route }) => {
    const auth = useSelector(state => state.auth_login);
    const [email, setEmail] = useState('');


    const onSubmit =()=>{
        console.log('forget', email);
         axios({
        method: 'post',
        url: `http://10.0.2.2:5000/api/v1/resetPassword`,
        data: {email: email}
        }).then((res)=> console.log("lllrrr----:", res.data)).catch((e)=>console.log("lllleeee-------------:",e));
  
    }
  return (
    <SafeAreaView style={styles.page}>
    <KeyboardScrollUpForms
      enabled
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
      {Platform.OS === 'android' && <StatusBar backgroundColor="#000000" />}

      <NavHeader
          borderWidth={0}
          showSpaceLeft={true}
          navGoBack={false}
          title="">
          {route.params === 'success_register' ? (
            <></>
          ) : (
            <>
              {auth.loading ? (
                <></>
              ) : (
                <TouchableOpacity
                  onPress={() => navigation.navigate('Start Screen')}>
                  <IconCrossSmall />
                </TouchableOpacity>
              )}
            </>
          )}
        </NavHeader>
     
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}>
        <Space height={20} />
        <Header
          title="Foget Password"
          desc="Change your password with email"
        />
         <Space height={100} />
        <View style={styles.container}>
          <TextInput
            label="Your Email"
            placeholder="Vipul@gmal.com"
            onChangeText={value => setEmail(value)}
          />
          <Space height={30} />
        
          <Buttons.LG
            onPress={onSubmit}
            label={`Send`}
            // isLoading={auth.loading}
          />
        </View>
      </ScrollView>
    </KeyboardScrollUpForms>
    {/* <FlashMessage
      // ref={showMessage}
      style={{ backgroundColor: 'red' }}
      textStyle={{ fontFamily: 'CircularStd-Bold' }}
      hideOnPress={true}
      duration={4000}
    /> */}
  </SafeAreaView>
  )
}


export default ForgetPassword;

const styles = StyleSheet.compose({
    page: {
      flex: 1,
      backgroundColor: '#fff',
    },
    container: {
      backgroundColor: '#fff',
      paddingHorizontal: 24,
      paddingVertical: 24,
      marginTop: 0,
      flex: 1,
    },
  });