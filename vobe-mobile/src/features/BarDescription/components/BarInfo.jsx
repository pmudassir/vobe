import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity, View } from 'react-native'
import { Typography } from '../../../components/UI/Typography'

const BarInfo = ({openTime, closeTime}) => {
  return (
    <View className='w-full bg-[#141414B2] p-3'>
      <View className='flex flex-row justify-between'>
        <View className='flex-row pr-3 border-r border-ntrl-80'>
          <TouchableOpacity className='flex-row items-center gap-1'>
            <Typography variant='display-m'>open {openTime} - {closeTime}</Typography>
            <Ionicons name="chevron-forward-outline" color={'white'} size={15} ></Ionicons>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <View className='pr-11 border-r border-ntrl-80'>
            <Typography> <Ionicons name="location-outline" size={20}></Ionicons> </Typography>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <Typography className='pr-6'> <Ionicons name="call-outline" size={20}></Ionicons> </Typography>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default BarInfo