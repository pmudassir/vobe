import { View, SafeAreaView, ScrollView } from 'react-native'
import HomeHeader from '../components/HomeHeader'
import Story from '../../../components/widget/Story/story'
import UpcomingBooking from '../components/UpcomingBooking'
import ScrollChip from '../../../components/UI/ScrollChip'
import { bars } from '../data'
import EventSlider from '../../../components/widget/EventsSlider/components/EventSlider'
import VobeLife from '../components/VobeLife'
import BarsSlider from '../../../components/widget/BarsSlider/components/BarsSlider'
import HomeFooter from '../components/HomeFooter'
import { Typography } from '../../../components/UI/Typography'

const Home = ({ navigation }) => {
  return (
    <SafeAreaView className='flex-1'>
      <ScrollView>
        <HomeHeader />
        <View className='gap-y-2 py-4 m-3 mt-0'>
          <Typography
            variant='display-b'
            className='text-[22px]'
          >
            Today
          </Typography>
          <Typography variant='display-m' className='text-[#FFFFFF99] text-[14px] font-normal'>seek our distinguished venues</Typography>
        </View>
        <View className='gap-y-2 ml-2'>
          <ScrollChip data={bars} />
        </View>
        <Story />
        <UpcomingBooking />
        <View className='mt-5'>
          <EventSlider />
        </View>
        <VobeLife />
        <BarsSlider navigation={navigation} />
        <HomeFooter />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home