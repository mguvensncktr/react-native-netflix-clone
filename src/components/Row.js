import { View, Text, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { COLORS, FONTS, SIZES } from '../constants'
import MovieCardItem from './MovieCardItem'

const Row = ({ title, data }) => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        setMovies(data);
    }, [])

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
                {
                    movies.map((movie, index) => {
                        return (
                            <MovieCardItem key={index} movie={movie} />
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

export default Row