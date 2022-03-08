import { TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SIZES } from '../constants'
import { useNavigation } from '@react-navigation/native';

const MovieCardItem = ({ movie }) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={{
                width: SIZES.width / 3,
                height: SIZES.height / 3 - 50,
                marginRight: SIZES.base
            }}
            onPress={() => navigation.navigate('Modal', { movie: movie })}
        >
            <Image
                source={{ uri: `https://image.tmdb.org/t/p/original${movie?.poster_path}` }}
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