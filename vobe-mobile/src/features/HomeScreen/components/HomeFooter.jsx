import { View, Text, Image } from 'react-native'
import { Typography } from '../../../components/UI/Typography'

const HomeFooter = () => {
  return (
    <View className='ml-5 mr-5 mt-28 pt-20 flex-1 items-center justify-center'>
      <Typography variant='display-b' className='text-5xl font-semibold'>VOBE</Typography>
      <Image source={require('../assets/throne.png')} />
    </View>
  )
}

export default HomeFooter