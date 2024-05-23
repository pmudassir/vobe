import { View, Text, ImageBackground, Image, TextInput, Platform, KeyboardAvoidingView } from 'react-native'
import { Typography } from '../../../components/UI/Typography'
import { Button } from '../../../components/UI/Button2'

const Otp = ({ navigation }) => {
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
            OTP sent on 9065811368
          </Typography>
          <View className='flex-row'>
            <TextInput
              placeholder="000000"
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
          <Button
            className='w-full mt-4 mb-8 px-4'
            label='submit otp'
            onPress={() => { navigation.navigate("Home") }}
          />
        </View>
      </KeyboardAvoidingView>
    </View>

  )
}

export default Otp