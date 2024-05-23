import { View } from 'react-native'
import { Typography } from '../../UI/Typography'

const About = ({ about }) => {
  return (
    <View className='m-5'>
      <Typography variant='display-b' className='text-2xl font-bold'>About</Typography>
      <View className='flex flex-row space-x-2 mb-4 mt-4'>
        <Typography variant='display-m' className='text-brand-50'>Continental</Typography>
        <Typography variant='display-m' className='text-brand-50'>· Asian</Typography>
        <Typography variant='display-m' className='text-brand-50'>· North Indian</Typography>
      </View>
      <View>
        <Typography variant='display-m' className='text-brand-30 text-sm'>{about}</Typography>
      </View>
    </View>
  )
}

export default About