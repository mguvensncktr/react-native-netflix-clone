import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SIZES } from '../constants'
import { useNavigation } from '@react-navigation/native';

const SimilarCardItem = ({ movie }) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={{
                width: SIZES.width / 3 - 12,
                height: SIZES.height / 3 - 40,
                marginRight: SIZES.base
            }}
            onPress={() => navigation.push('Modal', { movie: movie })}
        >
            <Image
                source={{ uri: movie?.image }}
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

export default SimilarCardItem