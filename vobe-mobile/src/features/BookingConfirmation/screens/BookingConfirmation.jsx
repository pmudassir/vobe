import { View, Text, Image } from 'react-native'
import { Typography } from '../../../components/UI/Typography'
import { Button } from '../../../components/UI/Button2'

const BookingConfirmation = () => {
  return (
    <View className='flex-1 items-center justify-center'>
      <Image
        source={{
          uri: "https://ik.imagekit.io/ajcgv08p8/app_assets/confirmation/hero.png?updatedAt=1707717644490"
        }}
        className='w-[330] h-[330]'
      />

      <Typography
        className='mb-6'
      >
        Booking Confirmed
      </Typography>
      <Image
        source={{
          uri: "https://ik.imagekit.io/ajcgv08p8/app_assets/confirmation/Line.png?updatedAt=1707717716938"
        }}
        className='w-full h-[50]'
      />
      <Typography>
        Bar Tender Night
      </Typography>
      <Typography className='mt-2'>
        Byg Brewski, Indiranagar
      </Typography>

      <View className='items-center'>
        <View className='flex-row mt-2 mb-2'>
          <Image
            source={{
              uri: "https://ik.imagekit.io/ajcgv08p8/app_assets/confirmation/guest.png?updatedAt=1707718309923"
            }}
            className='w-[28] h-[28] mr-1'
          />

          <Typography>
            15 guests
          </Typography>

          <Image
            source={{
              uri: "https://ik.imagekit.io/ajcgv08p8/app_assets/confirmation/cal.png?updatedAt=1707718309807"
            }}
            className='w-[28] h-[28] ml-6 mr-1'
          />
          <Typography>
            Fri, 10 Jan | 6:15 pm
          </Typography>
        </View>
        <Typography>
          Valet service added
        </Typography>
      </View>

      <Button
        className='w-full'
        label='done'
      />
    </View>
  )
}

export default BookingConfirmation