import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const UpcomingBooking = () => {
  return (
    <View className='flex-1 items-start justify-center mt-8 h-[120] w-full border-y-0.5 border-[#F5B53C]'>
      <ImageBackground
        source={require('../assets/bartender-bg.png')}
        resizeMode="cover"
        className="h-full w-[100%]"
      >
        <View className='flex flex-row items-center gap-6 pt-6 pl-5'>
          <Image className='w-[60] h-[60]' source={require('../assets/bell.png')} />
          <View className='space-y-1'>
            <Text className='text-ntrl-white text-[14px] font-normal'>Bartender Night</Text>
            <Text className='text-trans-white-50'>you have an upcoming booking</Text>
          </View>
          <TouchableOpacity className='pl-10'>
            <Ionicons name="chevron-forward-outline" size={25} color="gray"></Ionicons>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  )
}

export default UpcomingBooking