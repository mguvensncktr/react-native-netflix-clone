import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../constants'
import MovieCardItem from './MovieCardItem'

const Row = ({ title, image }) => {
    return (
        <View
            style={{
                marginTop: SIZES.padding2,
                marginHorizontal: SIZES.padding
            }}
        >
            <Text style={{ color: COLORS.white, ...FONTS.h2 }}>{title}</Text>
            <ScrollView
                horizontal showsHorizontalScrollIndicator={false}
            >
                <MovieCardItem image={image} />
                <MovieCardItem image={image} />
                <MovieCardItem image={image} />
            </ScrollView>
        </View>
    )
}

export default Row