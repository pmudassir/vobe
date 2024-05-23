import { Image, View } from 'react-native'
import { Typography } from '../../../components/UI/Typography'

const VobeLife = () => {
  return (
    <View className="mt-24 ml-5 mr-5 border border-[#F5B53C] rounded-md p-6">
      <Typography variant='display-m' className='text-brand-50 text-3xl'>the</Typography>
      <Typography variant='display-sb' className='text-brand-20 text-[45px]'>VOBE Life</Typography>

      <View className='mt-10'>

        <View className='flex flex-row items-center justify-between'>
          <View>
            <Typography variant='display-sb' className='font-bold text-base'>Tailored Personal Services</Typography>
            <Typography variant='display-m' className='text-brand-60 ml-1 text-sm'> · dedicated valet service</Typography>
            <Typography variant='display-m' className='text-brand-60 ml-1 text-sm'> · personalised drinks menu</Typography>
            <Typography variant='display-m' className='text-brand-60 ml-1 text-sm'> · bottle storage facility</Typography>
          </View>
          <View className=''><Image className='w-[90px] h-20' source={require('../assets/star.png')} /></View>
        </View>

        <View className='flex flex-row items-center justify-between mt-20 mb-20'>
          <View>
            <Typography variant='display-sb' className='font-bold text-base'>Elite Accessibility Concierge</Typography>
            <Typography variant='display-m' className='text-brand-60 ml-1 text-sm'> · real-time content from bar</Typography>
            <Typography variant='display-m' className='text-brand-60 ml-1 text-sm'> · instant access & bookings</Typography>
            <Typography variant='display-m' className='text-brand-60 ml-1 text-sm'> · resident experience expert</Typography>
          </View>
          <View className=''><Image className='w-[90px] h-20' source={require('../assets/crown.png')} /></View>
        </View>

        <View className='flex flex-row items-center mb-5'>
          <View>
            <Typography variant='display-sb' className='font-bold text-base'>Opulent Privileges & Exclusivity</Typography>
            <Typography variant='display-m' className='text-brand-60 ml-1 text-sm'> · invites to bar launches</Typography>
            <Typography variant='display-m' className='text-brand-60 ml-1 text-sm'> · Treasure Trove Rewards</Typography>
            <Typography variant='display-m' className='text-brand-60 ml-1 text-sm'> · access to VOBE Events</Typography>
          </View>
          <View className=''><Image className='w-[90px] h-20' source={require('../assets/balloon.png')} /></View>
        </View>

      </View>
    </View>
  )
}

export default VobeLife