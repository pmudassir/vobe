import { View, ScrollView, TouchableOpacity, Image } from 'react-native'
import { Typography } from '../../../UI/Typography'
import { Ionicons } from '@expo/vector-icons'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { useEffect, useState } from 'react'

const BarsSlider = ({ navigation }) => {
  const [pubData, setPubData] = useState([])
  const auth = useSelector((state) => state.auth)

  const getPubs = async () => {
    try {
      const res = await axios.get("http://172.20.10.2:3000/pub", {
        headers: {
          Authorization: `Bearer ${auth.accessToken}`
        }
      })
      setPubData(res.data)
    } catch (error) {
      console.log(error, 'error fetching pubs');
    }
  }

  useEffect(() => {
    getPubs()
  }, [])

  return (
    <View className='ml-5 mr-5 mt-14'>
      <Typography variant='display-b' className='text-2xl font-semibold'>Bars</Typography>
      <Typography variant='display-m' className='text-brand-50 mt-3 mb-6'>Our cherry picked premium experience</Typography>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className='gap-4'
      >
        {pubData.map((pub, index) => (
          <View key={index} className='w-[350] h-[550] border border-ntrl-80 rounded-sm'>
            <Image
              source={{ uri: pub.profileImage }}
              resizeMode="center"
              className="h-[240] w-full rounded-sm"
            />
            <View className='flex-1 justify-center pt-4 '>
              <View className='pl-8 gap-1'>
                <View className='flex flex-row justify-between'>
                  <Typography variant='display-m' className='text-brand-50'>
                    {pub.address}
                  </Typography>
                  <Typography variant='display-m' className='text-brand-50 mr-2'>
                    {pub.active === true ? "Open" : "Closed"}
                  </Typography>
                </View>
                <Typography variant='display-b' className='font-bold text-xl'>{pub.name}</Typography>
                <View className='flex flex-row space-x-2 mb-4'>
                  <Typography variant='display-m' className='text-brand-50'>{pub.tags}</Typography>
                  {/* <Typography variant='display-m' className='text-brand-50'>· Asian</Typography>
                  <Typography variant='display-m' className='text-brand-50'>· North Indian</Typography> */}
                </View>
                <View className='mb-8'>
                  <Typography variant='display-m' className='text-brand-50'>{pub.about}</Typography>
                  {/* <Typography variant='display-m' className='text-brand-50'>consectetur adipiscing elit, sed d...</Typography> */}
                </View>
              </View>
              <View className='mb-6 gap-y-2 backdrop-blur-md bg-[#D9D9D90A]/10 w-full py-3 items-center'>
                {pub.Features.map((feature, index) => (
                  <View key={index} className='flex flex-row space-x-2'>
                    <Typography variant='display-m' className='text-brand-50'>{feature.icon} {feature.name}</Typography>
                  </View>
                ))}
                {/* <View className='flex flex-row space-x-2'>
                  <Typography variant='display-m' className='text-brand-50'> <Ionicons name="wifi-outline"></Ionicons>  Wifi</Typography>
                  <Typography variant='display-m' className='text-brand-50'> <Ionicons name="car-sport-outline"></Ionicons> Valet Parking</Typography>
                  <Typography variant='display-m' className='text-brand-50'> <Ionicons name="wifi-outline"></Ionicons>  Wifi</Typography>
                </View>
                <View className='flex flex-row space-x-2'>
                  <Typography variant='display-m' className='text-brand-50'> <Ionicons name="car-sport-outline"></Ionicons> Valet Parking</Typography>
                  <Typography variant='display-m' className='text-brand-50'> <Ionicons name="wifi-outline"></Ionicons>  Wifi</Typography>
                  <Typography variant='display-m' className='text-brand-50'> <Ionicons name="car-sport-outline"></Ionicons> Valet Parking</Typography>
                </View> */}
              </View>
            </View>
            <View className='items-center'>
              <TouchableOpacity
                className='bg-ntrl-black p-2 rounded-md'
                onPress={() => { navigation.navigate('Description', { pubId: pub.id }) }}
              >
                <Typography variant='display-m' className='text-[#F5B53C] px-2 py-1'>
                  EXPLORE
                </Typography>
              </TouchableOpacity>
            </View>
          </View>
        ))}
        {/* 
        <View className='w-[350] h-[550] border border-ntrl-80 rounded-sm'>
          <Image
            source={require('../assets/bar2.png')}
            resizeMode="center"
            className="h-[240] w-full rounded-sm"
          />
          <View className='flex-1 justify-center pt-4 '>
            <View className='pl-8 gap-1'>
              <View className='flex flex-row justify-between'>
                <Typography variant='display-m' className='text-brand-50'>
                  SARAJPUR
                </Typography>
                <Typography variant='display-m' className='text-brand-50 mr-2'>
                  closed now
                </Typography>
              </View>
              <Typography variant='display-b' className='font-bold text-xl'>BLR Brewing</Typography>
              <View className='flex flex-row space-x-2 mb-4'>
                <Typography variant='display-m' className='text-brand-50'>Continental</Typography>
                <Typography variant='display-m' className='text-brand-50'>· Asian</Typography>
                <Typography variant='display-m' className='text-brand-50'>· North Indian</Typography>
              </View>
              <View className='mb-8'>
                <Typography variant='display-m' className='text-brand-50'>Lorem ipsum dolor si amet,</Typography>
                <Typography variant='display-m' className='text-brand-50'>consectetur adipiscing elit, sed d...</Typography>
              </View>
            </View>
            <View className='mb-6 gap-y-2 backdrop-blur-md bg-[#D9D9D90A]/10 w-full py-3 items-center'>
              <View className='flex flex-row space-x-2'>
                <Typography variant='display-m' className='text-brand-50'> <Ionicons name="wifi-outline"></Ionicons>  Wifi</Typography>
                <Typography variant='display-m' className='text-brand-50'> <Ionicons name="car-sport-outline"></Ionicons> Valet Parking</Typography>
                <Typography variant='display-m' className='text-brand-50'> <Ionicons name="wifi-outline"></Ionicons>  Wifi</Typography>
              </View>
              <View className='flex flex-row space-x-2'>
                <Typography variant='display-m' className='text-brand-50'> <Ionicons name="car-sport-outline"></Ionicons> Valet Parking</Typography>
                <Typography variant='display-m' className='text-brand-50'> <Ionicons name="wifi-outline"></Ionicons>  Wifi</Typography>
                <Typography variant='display-m' className='text-brand-50'> <Ionicons name="car-sport-outline"></Ionicons> Valet Parking</Typography>
              </View>
            </View>
          </View>
          <View className='items-center'>
            <TouchableOpacity
              className='bg-ntrl-black p-2 rounded-md'>
              <Typography variant='display-m' className='text-[#F5B53C] px-2 py-1'>
                EXPLORE
              </Typography>
            </TouchableOpacity>
          </View>
        </View>

        <View className='w-[350] h-[550] border border-ntrl-80 rounded-sm'>
          <Image
            source={require('../assets/bar3.png')}
            resizeMode="cover"
            className="h-[240] w-full rounded-sm"
          />
          <View className='flex-1 justify-center pt-4 '>
            <View className='pl-8 gap-1'>
              <View className='flex flex-row justify-between'>
                <Typography variant='display-m' className='text-brand-50'>
                  SARAJPUR
                </Typography>
                <Typography variant='display-m' className='text-brand-50 mr-2'>
                  closed now
                </Typography>
              </View>
              <Typography variant='display-b' className='font-bold text-xl'>BLR Brewing</Typography>
              <View className='flex flex-row space-x-2 mb-4'>
                <Typography variant='display-m' className='text-brand-50'>Continental</Typography>
                <Typography variant='display-m' className='text-brand-50'>· Asian</Typography>
                <Typography variant='display-m' className='text-brand-50'>· North Indian</Typography>
              </View>
              <View className='mb-8'>
                <Typography variant='display-m' className='text-brand-50'>Lorem ipsum dolor si amet,</Typography>
                <Typography variant='display-m' className='text-brand-50'>consectetur adipiscing elit, sed d...</Typography>
              </View>
            </View>
            <View className='mb-6 gap-y-2 backdrop-blur-md bg-[#D9D9D90A]/10 w-full py-3 items-center'>
              <View className='flex flex-row space-x-2'>
                <Typography variant='display-m' className='text-brand-50'> <Ionicons name="wifi-outline"></Ionicons>  Wifi</Typography>
                <Typography variant='display-m' className='text-brand-50'> <Ionicons name="car-sport-outline"></Ionicons> Valet Parking</Typography>
                <Typography variant='display-m' className='text-brand-50'> <Ionicons name="wifi-outline"></Ionicons>  Wifi</Typography>
              </View>
              <View className='flex flex-row space-x-2'>
                <Typography variant='display-m' className='text-brand-50'> <Ionicons name="car-sport-outline"></Ionicons> Valet Parking</Typography>
                <Typography variant='display-m' className='text-brand-50'> <Ionicons name="wifi-outline"></Ionicons>  Wifi</Typography>
                <Typography variant='display-m' className='text-brand-50'> <Ionicons name="car-sport-outline"></Ionicons> Valet Parking</Typography>
              </View>
            </View>
          </View>
          <View className='items-center'>
            <TouchableOpacity
              className='bg-ntrl-black p-2 rounded-md'>
              <Typography variant='display-m' className='text-[#F5B53C] px-2 py-1'>
                EXPLORE
              </Typography>
            </TouchableOpacity>
          </View>
        </View> */}
      </ScrollView>
    </View>
  )
}

export default BarsSlider