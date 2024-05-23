import { View, ImageBackground, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Typography } from '../../../components/UI/Typography'

const BarHeader = ({ navigation, name, address, tags, image }) => {
  return (
    <View className='w-full h-[210]'>
      <ImageBackground source={{ uri: image }} className='w-full h-full'>
        <View className='flex'>
          <View className='flex-row ml-4 pt-12'>
            <TouchableOpacity
              onPress={() => { navigation.goBack() }}
              className='p-1 bg-brand-70 rounded-full border border-trans-white-40'
            >
              <Ionicons
                name="chevron-back-outline"
                size={25}
                color="white"
              >
              </Ionicons>
            </TouchableOpacity>
          </View>
          <View className='ml-4 mt-3'>
            <Typography variant='display-m' className='text-trans-white-90'>{address}</Typography>
            <Typography variant='display-sb' className='text-2xl'>{name}</Typography>
            {/* <Typography variant='display-sb' className='text-2xl font-semibold'>Brewing Company</Typography> */}
            <View className='flex flex-row space-x-2 mb-4'>
              <Typography variant='display-m' className='text-brand-50'>{tags}</Typography>
              {/* <Typography variant='display-m' className='text-brand-50'>· Asian</Typography>
              <Typography variant='display-m' className='text-brand-50'>· North Indian</Typography> */}
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

export default BarHeader

