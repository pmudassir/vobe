import { Ionicons } from '@expo/vector-icons'
import { View } from 'react-native'
import { Typography } from '../../../UI/Typography'

const Features = ({ features }) => {
  return (
    <View className='m-5'>
      <Typography variant='display-b' className='text-2xl'>Features</Typography>
      <Typography variant='display-m' className='text-brand-40 text-sm'>stay updated with our weekly roster</Typography>
      <View className='flex flex-col gap-4'>
        <View className='flex-row pt-4'>
          {features?.map((feature, index) => (
            <View key={index} className='bg-trans-black-80 justify-center py-3 mr-4 w-1/2 flex-row items-center rounded-xs'>
              <Ionicons name="car-sport-outline" color={'white'} size={20}></Ionicons>
              <Typography variant='display-m' className='ml-2'>{feature.name}</Typography>
            </View>
          ))}
        </View>
        {/* <View className='flex-row'>
          <View className='bg-trans-black-80 justify-center py-3 mr-4 w-1/2 flex-row items-center rounded-xs'>
            <Ionicons name="wifi-outline" color={'white'} size={20}></Ionicons>
            <Typography variant='display-m' className='ml-2'>Wifi</Typography>
          </View>
          <View className='bg-trans-black-80 justify-center mr-4 w-1/2 flex-row items-center rounded-xs'>
            <Ionicons name="car-sport-outline" color={'white'} size={20}></Ionicons>
            <Typography variant='display-m' className='ml-2'>Valet Parking</Typography>
          </View>
        </View> */}
      </View>
    </View>
  )
}

export default Features