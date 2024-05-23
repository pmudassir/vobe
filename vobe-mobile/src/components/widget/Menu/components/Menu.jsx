import { ImageBackground, TouchableOpacity, View } from 'react-native'
import { Typography } from '../../../UI/Typography'
import { LinearGradient } from 'expo-linear-gradient'
import RBSheet from 'react-native-raw-bottom-sheet'
import MenuRB from '../../MenuRB/components/MenuRB'
import { useRef } from 'react'

const Menu = () => {
  const refRBSheet = useRef();

  return (
    <View className='m-5'>
      <Typography variant='display-b' className='text-2xl'>Menu</Typography>
      <Typography variant='display-m' className='text-brand-40 text-sm'>stay updated with our weekly roster</Typography>
      <View className='flex flex-row gap-8 pt-6'>
        <TouchableOpacity onPress={() => refRBSheet.current.open()}>
          <View className='w-[170] h-[200] rounded-sm'>
            <ImageBackground source={require('../assets/menu.png')} className="w-full h-full" imageStyle={{ borderRadius: 20 }}>
              <LinearGradient
                colors={['transparent', 'rgba(0,0,0,1)']}
                className="w-full h-full"
              >
                <View className='flex-1 justify-end items-center'>
                  <Typography variant='display-m' className='mb-1'>Food menu</Typography>
                  <Typography variant='display-m'>13 pages</Typography>
                </View>
              </LinearGradient>
            </ImageBackground>
          </View>
        </TouchableOpacity>
        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={false}
          height={700}
          customStyles={{
            wrapper: {
              backgroundColor: "rgba(0,0,0,0.4)"
            },
            draggableIcon: {
              backgroundColor: "#6D6D6D"
            },
            container: {
              backgroundColor: "#121212"
            }
          }}
          dragFromTopOnly={true}
          animationType="fade"
        >
          <MenuRB />
        </RBSheet>
        <TouchableOpacity>
          <View className='w-[170] h-[200] rounded-sm'>
            <ImageBackground source={require('../assets/menu.png')} className="w-full h-full" imageStyle={{ borderRadius: 20 }}>
              <LinearGradient
                colors={['transparent', 'rgba(0,0,0,1)']}
                className="w-full h-full"
              >
                <View className='flex-1 justify-end items-center'>
                  <Typography variant='display-m' className='mb-1'>Bar menu</Typography>
                  <Typography variant='display-m'>8 pages</Typography>
                </View>
              </LinearGradient>
            </ImageBackground>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Menu