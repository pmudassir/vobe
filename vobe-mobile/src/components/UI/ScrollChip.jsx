import { useState } from 'react'
import { ScrollView, TouchableOpacity } from 'react-native'
import { SelectChip } from './Chip'

const ScrollChip = ({ data }) => {
  const [selected, setSelected] = useState(1)

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className='gap-2'
    >
      {data.map((data) => (
        <TouchableOpacity
          key={data.id}
          onPress={() => { setSelected(data.id) }}
        >
          <SelectChip label={data.name} selected={selected === data.id} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}

export default ScrollChip