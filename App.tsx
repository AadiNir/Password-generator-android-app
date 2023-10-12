import { View, Text } from 'react-native'
import React, { useState } from 'react'
import * as yup from 'yup'



const App = () => {
  const PasswordSchema = yup.object().shape({
    passwordlength:yup.number().min(4,"no sufficent length").max(16,"maximum length is 16").required('length is required')
  }
  )
  const [password,setpassword]=useState('');
  const [passwrodgenerated,setpasswordgenerated]=useState(false);
  const [lowercase,setlowercase]=useState(true);
  const [uppercase,setuppercase]=useState(false);
  const [symbols,setsymbols]=useState(false);
  const [number,setnumber]=useState(false);
  const passwrodgeneratedstr = (passwordlength : number)=>{
    let charorg='';
    const Uppercase ='ABCDEFGIHJKLMNOPQRTSUVWXYZ';
    const Lowecase = 'abcdefghijklmnopqrstuvwxyz';
    const Symbol = '!@#$%^&*';
    const Number = '1234568789';
    if(lowercase){
      charorg+=Lowecase;
    };
    if(uppercase){
      charorg+=Uppercase;
    }
    if(symbols){
      charorg+=Symbol;
    }
    if(number){
      charorg+=Number;
    }
    return charorg;
    console.log("hello")
  }
  const createpassword = (characters:string,passwordlength:number)=>{
    let results='';
    for(let i=0;i<passwordlength;i++){
      let indexval = Math.round(Math.random()*characters.length);
      results+=characters.charAt(indexval);
    }
    return results;

  }
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

export default App
