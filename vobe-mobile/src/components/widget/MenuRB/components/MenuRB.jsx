import { ImageBackground, ScrollView, View } from 'react-native'
import { Typography } from '../../../UI/Typography';

const MenuRB = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} className='m-2 flex-1 justify-content'>
      <View>
        <View className='flex flex-row ml-5 mb-5 items-center'>
          <Typography variant='display-sb' className='text-xl'>Book a table</Typography>
          <Typography variant='display-m' className='ml-4 text-brand-50'>Bar Tender Night</Typography>
        </View>
      </View>
    </ScrollView>
  )
}

export default MenuRB