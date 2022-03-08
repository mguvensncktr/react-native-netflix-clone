import { View, Text } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../constants'

const Divider = () => {
    return (
        <View
            style={{
                width: 6,
                height: 6,
                backgroundColor: COLORS.white,
                borderRadius: 5,
                marginHorizontal: SIZES.base,
            }}
        />
    )
}

export default Divider