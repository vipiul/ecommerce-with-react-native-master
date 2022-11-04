import React, { useState } from "react";
import axios from 'axios';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Platform,
  TouchableOpacity,
  KeyboardAvoidingView,
  SafeAreaView,
  Dimensions,
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { IconCrossBig, IconCrossSmall } from '../../assets';
import {
  Button,
  Buttons,
  Header,
  NavHeader,
  Space,
  TextField,
  TextInput,
} from '../../components';
import { Avatar, RadioButton } from "react-native-paper";
import { authRegisterAction } from '../../redux/actions/auth';
import TouchableScale from 'react-native-touchable-scale';
import { KeyboardScrollUpForms, useForm } from '../../utils';
import FlashMessage, { showMessage } from 'react-native-flash-message';

const Register = ({ navigation }) => {
  const dispatch = useDispatch();
  const register = useSelector(state => state.register);
  const [c_password, setC_password] = useState('')

  const [form, setForm] = useForm({
    fullName: '',
    email: '',
    password: '',
    gender: 'male',
    role: '2',
  });
  const [data, setData] = useState();

  const onSubmit = () => {
    // setData({
    //   fullName: form.name,
    //   email: form.email,
    //   gender: form.gender,
    //   password: form.password,
    //   role: form.role
    // });
    console.log("form-----------" , form);
    axios({
      method: 'post',
      url: `http://10.0.2.2:5000/api/v1/signup`,
       data: JSON.stringify(form),
    //   data:{
    //     "fullName":"Ajay jangid",
    //     "email":"vio9299@gmail.com",
    //     "gender":"male",
    //     "password":"Ajay@123",
    //     "role":4
    // }
    }).then((res)=> console.log("res--------",res.data)).catch((e)=> console.log('eee-----',e));
    // if (
    //   form.name.length != 0 &&
    //   form.password.length != 0 &&
    //   form.email.length != 0
    // ) {
    //    dispatch(authRegisterAction(data, navigation));
    // } else {
    //   return showMessage({
    //     message: '⚠️',
    //     description: "Form can't be empty",
    //     style: { backgroundColor: 'orange' },
    //   });
    // }

    //debug
    console.log('FORM_REGISTER:', form);
  };

  const space_height = Dimensions.get('screen').height / 28;

  //debug_all
  console.log('REGISTER:', register);

  return (
    <SafeAreaView style={styles.page}>
      <NavHeader title="" navGoBack={false} borderWidth={0}>
        <TouchableOpacity onPress={() => navigation.navigate('Start Screen')}>
          <IconCrossSmall />
        </TouchableOpacity>
      </NavHeader>
      <KeyboardScrollUpForms
        enabled
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          showsVerticalScrollIndicator={false}>
          <Space height={space_height} />
          <Header title="Register" showDesc={false} />
          <Space height={8} />
          <View style={styles.mainContainer}>
            {/* <View style={styles.avaForm}>
              <View style={styles.avaBorder}>
                <TouchableScale
                  tension={100}
                  onPress={() => console.log('register')}>
                  <View style={styles.addAvaTextContainer}>
                    <Text style={styles.addAvaText}>Add Avatar</Text>
                  </View>
                </TouchableScale>
              </View>
            </View> */}
            <TextInput
              label="Name"
              placeholder="name"
              value={form.fullName}
              onChangeText={e => setForm('fullName', e)}
            />
            <Space height={20} />
            
            <TextInput
              label="Email"
              placeholder="sutanu.vipul@gmail.com"
              value={form.email}
              onChangeText={e => setForm('email', e)}
            />
            <Space height={20} />
            <View
            style={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "row",
              marginLeft: "0%",
              alignSelf: "flex-start",
              alignContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Text>Gender</Text>
            <RadioButton
              value="male"
              status={form.gender === "male" ? "checked" : "unchecked"}
              onPress={() => setForm('gender', "male")}
              color="#0ea5e9"
            />
            <Text style={{color:"grey"}}>Male</Text>

            <RadioButton
              value="female"
              status={form.gender === "female" ? "checked" : "unchecked"}
              onPress={() => setForm('gender', "female")}
              color="#0ea5e9"
            />
            <Text style={{color:"grey"}}>Female</Text>

            <RadioButton
              value="other"
              status={form.gender === "other" ? "checked" : "unchecked"}
              onPress={() => setForm('gender', "other")}
              color="#0ea5e9"
            />
            <Text style={{color:"grey"}}>Others</Text>
          </View>
          <Space height={20} />

            <TextInput
              label="Password"
              placeholder="********"
              value={form.password}
              onChangeText={e => setForm('password', e)}
              secureTextEntry
            />
            <Space height={20} />
            <TextInput
              label="Confirm Password"
              placeholder="********"
              value={c_password}
              onChangeText={e => setC_password(e)}
              secureTextEntry
            />
            <Space height={20} />

          <View
            style={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "row",
              marginLeft: "0%",
              alignSelf: "flex-start",
              alignContent: "flex-start",
              
              alignItems: "center",
              
            }}
          >
            <Text>Role</Text>
            <RadioButton
              value= "2"
              status={form.role === "2" ? "checked" : "unchecked"}
              onPress={() => setForm('role', "2")}
              color="#0ea5e9"
            />
            <Text style={{color:"grey"}}>Customer</Text>

            <RadioButton
              value="3"
              status={form.role === "3" ? "checked" : "unchecked"}
              onPress={() => setForm('role', "3")}
              color="#0ea5e9"
            />
            <Text style={{color:"grey"}}>Provider</Text>

            <RadioButton
              value="4"
              status={form.role === "4" ? "checked" : "unchecked"}
              onPress={() => setForm('role', "4")}
              color="#0ea5e9"
            />
            <Text style={{color:"grey"}}>Both</Text>
          </View>
          <Space height={20} />

            {/* 
            <Button
              label="Register"
              radius={6}
              txtSize={14}
              bgColor="#0030FF"
              padSizeX={20}
              borderWidth={0}
              fontFam="CircularStd-Bold"
              txtDecorationLine="none"
              onPress={onSubmit}
            /> */}
            <Buttons.LG
              isLoading={register.loading}
              onPress={onSubmit}
              label={`Register`}
            />
            <Space height={50} />
          </View>
        </ScrollView>
      </KeyboardScrollUpForms>
      <FlashMessage
        // ref={showMessage}
        hideOnPress={true}
        duration={4000}
        style={{ backgroundColor: 'red' }}
        textStyle={{ fontFamily: 'CircularStd-Bold' }}
      />
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.compose({
  page: {
    flex: 1,
    backgroundColor: '#fff',
    // backgroundColor: 'red',
  },
  mainContainer: {
    backgroundColor: '#fff',
    // backgroundColor: 'red',
    paddingHorizontal: 24,
    paddingBottom: 24,
    paddingTop: 24,
    marginTop: 0,
    flex: 1,
  },
  avaForm: {
    alignItems: 'center',
    marginTop: 0,
    marginBottom: 30,
  },
  avaBorder: {
    borderRadius: 120,
    height: 120,
    width: 120,
    borderStyle: 'solid',
    borderColor: '#0030FF',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addAvaTextContainer: {
    borderRadius: 90,
    height: 100,
    width: 100,
    backgroundColor: '#0030FF',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addAvaText: {
    fontSize: 14,
    fontFamily: 'CircularStd-Bold',
    color: '#fff',
    textAlign: 'center',
    // backgroundColor: 'red',
  },
});
