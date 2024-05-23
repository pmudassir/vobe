import { SafeAreaView, TextInput, TouchableOpacity, View } from 'react-native'
import { Divider } from '../../../UI/Divider'
import { Typography } from '../../../UI/Typography'
import { Slider } from '@react-native-assets/slider'
import { useState } from 'react'
import { CheckBox } from "react-native-btr";
import axios from 'axios'
import { useSelector } from 'react-redux'

const BookingRB = ({ pubId, navigation }) => {
  const [value, setValue] = useState(0)
  const [checked, setChecked] = useState(false)
  const [isChecked, setIsChecked] = useState(false)
  const [carNumber, setCarNumber] = useState("")
  const [timeSlot, setTimeSlot] = useState("")

  const auth = useSelector(state => state.auth)

  const handleBooking = async () => {
    try {
      await axios.post(`http://172.20.10.2:3000/pub/${pubId}/booking`, {
        timeSlot,
        peopleCount: value,
        needValet: isChecked,
        carNumber
      }, {
        headers: {
          Authorization: `Bearer ${auth.accessToken}`
        },
      })

      setCarNumber("")
      setTimeSlot("")
      setValue(0)
      setChecked(false)
      setIsChecked(false)
      navigation.navigate("BookingConfirmation")
    } catch (error) {
      console.log(error, "booking");
    }
  }

  const handleCheckBox = () => {
    setChecked(!checked)
    setIsChecked(!isChecked)
  }
  return (
    <SafeAreaView className='m-2 flex-1 justify-between'>
      <View>
        <View className='flex flex-row ml-5 mb-5 items-center'>
          <Typography variant='display-sb' className='text-xl'>Book a table</Typography>
          <Typography variant='display-m' className='ml-4 text-brand-50'>Bar Tender Night</Typography>
        </View>
        <Divider />
        <View className='py-4 px-4'>
          <Typography variant='display-sb' className='mb-1 text-lg'>Guests</Typography>
          <View className='w-full flex-row'>
            <Slider
              thumbImage={require('../assets/thumb.png')}
              thumbSize={50}
              thumbTintColor='transparent'
              value={value}
              minimumValue={1}
              maximumValue={20}
              step={1}
              minimumTrackTintColor='white'
              maximumTrackTintColor='#323230'
              onValueChange={setValue}
              style={{ width: '75%' }}
            />
            <View className='py-3 px-8 ml-5 border border-brand-70 rounded-xs'>
              <Typography>{value}</Typography>
            </View>
          </View>
        </View>
        <View className='py-4 px-4'>
          <Typography variant='display-sb' className='text-lg'>Time</Typography>
          <View className='flex-row mt-5 justify-between'>
            <View className='border border-brand-70 px-4 py-3 rounded-xs items-center'>
              <Typography variant='display-m' onPress={() => setTimeSlot("TIME_6_00_PM")} className='text-brand-50'>6:00 pm</Typography>
            </View>
            <View className='border border-brand-70 px-4 py-3 rounded-xs items-center'>
              <Typography variant='display-m' className='text-brand-50'>6:30 pm</Typography>
            </View>
            <View className='border border-brand-70 px-4 py-3 rounded-xs items-center'>
              <Typography variant='display-m' className='text-brand-50'>7:00 pm</Typography>
            </View>
            <View className='border border-brand-70 px-4 py-3 rounded-xs items-center'>
              <Typography variant='display-m' className='text-brand-50'>7:30 pm</Typography>
            </View>
          </View>
          <View className='flex-row mt-5 justify-between'>
            <View className='border border-brand-70 px-4 py-3 rounded-xs items-center'>
              <Typography variant='display-m' className='text-brand-50'>6:00 pm</Typography>
            </View>
            <View className='border border-brand-70 px-4 py-3 rounded-xs items-center'>
              <Typography variant='display-m' className='text-brand-50'>6:30 pm</Typography>
            </View>
            <View className='border border-brand-70 px-4 py-3 rounded-xs items-center'>
              <Typography variant='display-m' className='text-brand-50'>7:00 pm</Typography>
            </View>
            <View className='border border-brand-70 px-4 py-3 rounded-xs items-center'>
              <Typography variant='display-m' className='text-brand-50'>7:30 pm</Typography>
            </View>
          </View>
        </View>
        <View className='p-5 ml-3 rounded-xs mr-3 bg-brand-80'>
          <View className='flex-row'>
            <TouchableOpacity className='items-start mr-3'>
              <CheckBox color='#323230' borderRadius={5} borderWidth={3} checked={checked} onPress={handleCheckBox} />
            </TouchableOpacity>
            <View>
              <Typography variant='display-sb' className='text-lg'>I need a valet</Typography>
              <Typography variant='display-m'>Lorem ipsum dolor sit amet, consectetur adipis</Typography>
              <Typography variant='display-m'>Lorem ipsum dolor sit amet, consectetur adipis</Typography>
            </View>
          </View>
          {isChecked && (
            <View className='mt-3'>
              <Divider />
              <View className='mt-3'>
                <TextInput
                  keyboardAppearance='dark'
                  keyboardType='phone-pad'
                  placeholder='enter vehicle number'
                  className='border border-brand-50 py-4 px-5 w-full rounded-xs text-brand-50 text-label-md'
                  style={{
                    color: "white",
                    fontSize: 15
                  }}
                  value={carNumber}
                  onChangeText={setCarNumber}
                />
              </View>
            </View>
          )}
        </View>
      </View>
      <View className='ml-4 mr-4'>
        <TouchableOpacity
          className='w-full px-4 py-5 items-center bg-[#F5B53C] rounded-xs'
          onPress={handleBooking}
        >
          <Typography variant='display-sb' className='text-brand-80'>confirm booking</Typography>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default BookingRB