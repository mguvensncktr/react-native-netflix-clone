import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { images, SIZES } from '../constants'

const MovieCardItem = ({ image }) => {
    return (
        <TouchableOpacity
            style={{
                width: SIZES.width / 3,
                height: SIZES.height / 3 - 50,
                marginRight: SIZES.base
            }}
            onPress={() => console.log('Movie pressed')}
        >
            <Image
                source={{ uri: image }}
                style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: SIZES.base
                }}
                resizeMode="contain"
            />
        </TouchableOpacity>
    )
}

export default MovieCardItem