import React, { useState } from 'react'
import { Text, View, ScrollView, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/customButton'
import { Link } from 'expo-router'

const SignUp = () => {
  const[form, setForm] = useState({
    username: '',
    email:'',
    password: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = () => {

  }

  return (
    <SafeAreaView className='bg-black h-full'>
      <ScrollView>
        <View className='w-full justify-center min-h-[85vh] px-4 my-6'>
          <Image
            source={images.logo} 
            className='w-[115px] h-[35px] mt-10'
            resizeMode='contain'
          />

          <Text className='text-white text-2xl text-semibold mt-10 font-psemibold'>Signup to Aora</Text>

          <FormField 
            title='Username'
            value = {form.username}
            handleChangeText= {(e) => setForm({...form, username:e})}
            otherStyles='mt-10'
          />
          <FormField 
            title='Email'
            value = {form.email}
            handleChangeText= {(e) => setForm({...form, email:e})}
            otherStyles='mt-7'
            keyboardType= 'email-address'
          />
          <FormField 
            title='Password'
            value = {form.password}
            handleChangeText= {(e) => setForm({...form, password:e})}
            otherStyles='mt-7'
          />

          <CustomButton
            title='Sign Up'
            handlePress={submit}
            containerStyles='mt-7'
            isLoading={isSubmitting}
          />

          <View className='justify-center gap-2 pt-5 flex-row'>
            <Text className='text-lg text-gray-100 font-pregular'>
              Already Have an Account?
            </Text>
            <Link href='signIn' className='text-lg font-psemibold text-[#FFA001]'>Sign In</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp
