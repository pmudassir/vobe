import { View, ScrollView, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Typography } from '../../../UI/Typography'
import { LinearGradient } from 'expo-linear-gradient'
import { timings } from '../../../../features/HomeScreen/data'
import ScrollChip from '../../../UI/ScrollChip'
import axios from 'axios'
import { useSelector } from 'react-redux'

const EventSlider = () => {
  const [events, setEvents] = useState([])

  const auth = useSelector((state) => state.auth)

  const getEvents = async () => {
    try {
      const res = await axios.get("http://172.20.10.2:3000/pub/events", {
        headers: {
          Authorization: `Bearer ${auth.accessToken}`
        }
      })
      setEvents(res.data)
    } catch (error) {
      console.log(error, 'error fetching events');
    }
  }

  useEffect(() => {
    getEvents()
  }, [])

  return (
    <View className='gap-4 ml-0'>
      <View className='gap-1'>
        <Typography variant='display-b' className='text-xl font-bold'>Upcoming</Typography>
        <Typography className='text-brand-50'>stay updated with our weekly roster</Typography>
      </View>

      <View className='gap-y-2 py-4 m-3 mt-0'>
        <ScrollChip data={timings} />
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className='gap-x-2'
      >
        {events.map((event, index) => (
          <View key={index} className='w-[350] h-[200] border border-[#BC842FB2] rounded-sm'>
            <ImageBackground
              imageStyle={{ borderRadius: 15 }}
              source={{ uri: event.imageUrl }}
              resizeMode="cover"
            >
              <LinearGradient
                colors={['rgba(0,0,0,1)', 'transparent']}
                className="w-full h-full rounded-sm"
              >
                <View className='flex-1 justify-center pt-8 pl-8 gap-1'>
                  <Typography className='text-brand-50'>
                    {event.Pub.name}
                  </Typography>
                  <Typography className='font-bold text-xl'>{event.title}</Typography>
                  <View>
                    <Typography className='text-brand-50'>{event.description}</Typography>
                    {/* <Typography className='text-brand-50'>consectetur adipiscing elit, sed d...</Typography> */}
                  </View>
                </View>
                <View className='items-center'>
                  <TouchableOpacity
                    className='bg-ntrl-black p-2 rounded-md'
                  >
                    <Typography variant='display-m' className='text-[#F5B53C] px-2 py-1'>
                      KNOW MORE
                    </Typography>
                  </TouchableOpacity>
                </View>
              </LinearGradient>
            </ImageBackground>
          </View>
        ))}

        <View className='w-[350] h-[200] border border-[#BC842FB2] rounded-sm'>
          <ImageBackground
            source={require('../assets/slider-img2.png')}
            resizeMode="cover"
            imageStyle={{ borderRadius: 15 }}
          >
            <LinearGradient
              colors={['rgba(0,0,0,1)', 'transparent']}
              className="w-full h-full rounded-sm"
            >
              <View className='flex-1 justify-center pt-8 pl-8 gap-1'>
                <Typography className='text-brand-50'>
                  Byg Brewski
                </Typography>
                <Typography className='font-bold text-xl'>Bar Tender Night</Typography>
                <View>
                  <Typography className='text-brand-50'>Lorem ipsum dolor si amet,</Typography>
                  <Typography className='text-brand-50'>consectetur adipiscing elit, sed d...</Typography>
                </View>
              </View>
              <View className='items-center'>
                <TouchableOpacity className='bg-ntrl-black p-2 rounded-md'>
                  <Typography variant='display-m' className='text-[#F5B53C] px-2 py-1' style={{}}>
                    KNOW MORE
                  </Typography>
                </TouchableOpacity>
              </View>
            </LinearGradient>
          </ImageBackground>
        </View>

        <View className='w-[350] h-[200] border border-[#BC842FB2] rounded-sm'>
          <ImageBackground
            source={require('../assets/slider-img1.png')}
            resizeMode="cover"
            imageStyle={{ borderRadius: 15 }}
          >
            <LinearGradient
              colors={['rgba(0,0,0,1)', 'transparent']}
              className="w-full h-full rounded-sm"
            >
              <View className='flex-1 justify-center pt-8 pl-8 gap-1'>
                <Typography className='text-brand-50'>
                  Byg Brewski
                </Typography>
                <Typography className='font-bold text-xl'>Bar Tender Night</Typography>
                <View>
                  <Typography className='text-brand-50'>Lorem ipsum dolor si amet,</Typography>
                  <Typography className='text-brand-50'>consectetur adipiscing elit, sed d...</Typography>
                </View>
              </View>
              <View className='items-center'>
                <TouchableOpacity className='bg-ntrl-black p-2 rounded-md'>
                  <Typography variant='display-m' className='text-[#F5B53C] px-2 py-1' style={{}}>
                    KNOW MORE
                  </Typography>
                </TouchableOpacity>
              </View>
            </LinearGradient>
          </ImageBackground>
        </View>
      </ScrollView>
    </View>
  )
}

export default EventSlider