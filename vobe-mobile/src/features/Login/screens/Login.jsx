import { View, ImageBackground, Image, TextInput, Platform, KeyboardAvoidingView } from 'react-native'
import { Typography } from '../../../components/UI/Typography'
import { Button } from '../../../components/UI/Button2'
import { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { login } from '../../auth/slice/authSlice'

const Login = ({ navigation }) => {
  const [username, setUserName] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://172.20.10.2:3000/auth/login", {
        username,
        password
      })
      dispatch(login(res.data))
      navigation.navigate("Home")
    } catch (error) {
      console.log(error, 'error while login');
    }
  }

  return (
    <View className='flex-1 justify-between'>
      {/* TOP CONTAINER */}
      <View>
        <View>
          <ImageBackground
            className='h-[250] w-full items-center justify-center'
            source={{
              uri: "https://ik.imagekit.io/ajcgv08p8/app_assets/login/login.jpg?updatedAt=1707530590103"
            }}
          >
            <Image
              className='w-[90] h-[90]'
              source={{
                uri: "https://ik.imagekit.io/ajcgv08p8/app_assets/logo.png?updatedAt=1707531281208"
              }}
            />
          </ImageBackground>
        </View>
        {/* INPUT VIEW */}
        <View className='ml-4'>
          <Typography className='mb-3 mt-3' style={{ color: "white" }}>
            Enter mobile number
          </Typography>
          <View className='flex-row'>
            <Typography style={{ color: "#FFFFFF73", fontSize: 30 }}>
              +91
            </Typography>

            <TextInput
              placeholder="9999999999"
              placeholderTextColor="#FFFFFF73"
              className='ml-2'
              inputMode='tel'
              maxLength={10}
              keyboardType='phone-pad'
              keyboardAppearance='dark'
              style={{
                color: "white",
                fontSize: 30
              }}
              onChangeText={setUserName}
            />
          </View>
          <View>
            <TextInput
              placeholder='password'
              placeholderTextColor="#FFFFFF73"
              className='ml-2 mt-5'
              keyboardAppearance='dark'
              style={{
                color: "white",
                fontSize: 20
              }}
              secureTextEntry
              onChangeText={setPassword}
            />
          </View>
        </View>
      </View>


      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      // style={styles.container}
      >
        {/* BOTTOM CONTAINER */}
        <View className='items-center mb-2'>
          <Typography className='text-brand-50'>
            by continuing, you agree to our
          </Typography>
          <View className='flex-row mt-1'>
            <Typography>
              terms & conditions
            </Typography>
            <Typography className='text-brand-50'> and </Typography>
            <Typography>
              privacy policy
            </Typography>
          </View>
          <Button
            className='w-full mt-4 mb-8 px-4'
            label='proceed'
            onPress={() => {
              handleLogin()
            }}
          />
        </View>
      </KeyboardAvoidingView>
    </View>

  )
}

export default Login