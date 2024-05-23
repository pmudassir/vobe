import { View, Image } from 'react-native'
import { useSelector } from 'react-redux'
import { Avatar } from '../../../components/UI/Avatar'
import { Typography } from '../../../components/UI/Typography'

const HomeHeader = () => {
    const authState = useSelector((state) => state.auth)

    return (
        <View className='flex px-4 py-2 bg-[#141414B2]'>
            <View className='w-full flex-row justify-between'>
                <View>
                    <Image className='w-14 h-14' source={require('../../../../assets/logo.png')} />
                </View>
                <View className='flex-row items-center gap-4'>
                    <View className='items-end gap-1'>
                        <Typography variant='display-sb' className='text-brand-40 text-[12px] font-normal'>welcome</Typography>
                        <Typography variant='display-sb' className='text-brand-10 text-[14px] font-normal'>{authState.firstName} {authState.lastName}</Typography>
                    </View>
                    <View><Avatar size='medium' image='https://s3-alpha-sig.figma.com/img/1f9b/7984/dfac7d8210d97ba751c30c3f1f85f9ee?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SQWZYdDmAnsCPfECutpfsiONXEKxgQqQMZu83kxr-brIdD8YcDUmQ3lEdAujz2m2LHvKXTx0c8psVjr39hGyoC~LwCHyHBxDw6kQNXG~MFOb9~cP~tRyAmdX0z4S0mHuk47pFGlVaBKxC4HeV5h8s8S4a4qkxc0whEO3tdKe-~SDZ7elhYGMWELqJeHr3KfcgW6o7Qi~BIQReE0ZXA~DDY61unNtQQa65HuwJ5D5QH~CxudFTbcTiiKlIWSX5h2eB6PN3A1h6G9nkh6f5WNvgT2Cti0IAU55ozZbVq2Pf0xH7rnP725~Tavpp5LZjVn5KCcd0t7f-ROfKFgPWO5VOw__' /></View>
                </View>
            </View>
        </View>
    )
}

export default HomeHeader