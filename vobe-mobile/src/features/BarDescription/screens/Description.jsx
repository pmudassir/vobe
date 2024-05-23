import { ScrollView } from 'react-native'
import BarsSlider from '../../../components/widget/BarsSlider/components/BarsSlider'
import EventSlider from '../../../components/widget/EventsSlider/components/EventSlider'
import Features from '../../../components/widget/Features/components/Features'
import Menu from '../../../components/widget/Menu/components/Menu'
import Story from '../../../components/widget/Story/story'
import About from '../../../components/widget/About/About'
import BarHeader from '../components/BarHeader'
import BarInfo from '../components/BarInfo'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useRoute } from '@react-navigation/native'

const Description = ({ navigation }) => {
    const [currentPub, setCurrentPub] = useState([])

    const auth = useSelector((state) => state.auth)
    const route = useRoute();
    const { pubId } = route.params;

    const getPub = async () => {
        try {
            const res = await axios.get(`http://172.20.10.2:3000/pub/${pubId}`, {
                headers: {
                    Authorization: `Bearer ${auth.accessToken}`
                }
            })
            setCurrentPub(res.data)
        } catch (error) {
            console.log(error, "error fetching pub");
        }
    }

    useEffect(() => {
        getPub()
    }, [])

    return (
        <ScrollView className='pb-4'>
            <BarHeader name={currentPub.name} address={currentPub.address} tags={currentPub.tags} image={currentPub.profileImage} navigation={navigation} />
            <BarInfo openTime={currentPub.openTime} closeTime={currentPub.closeTime} />
            <Story pubId={pubId} navigation={navigation} />
            <EventSlider />
            <About about={currentPub.about} />
            <Menu foodMenu={currentPub.FoodMenu} barMenu={currentPub.BarMenu} />
            <Features features={currentPub.Features} />
            <BarsSlider />
        </ScrollView>
    )
}

export default Description