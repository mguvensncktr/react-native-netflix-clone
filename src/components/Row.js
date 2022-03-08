import { View, Text, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { COLORS, FONTS, SIZES } from '../constants'
import MovieCardItem from './MovieCardItem'
import axios from '../utils/axios';

const Row = ({ title, fetchURL }) => {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchMovies = async () => {
        if (loading) {
            return;
        }
        setLoading(true);
        const { data } = await axios.get(fetchURL);
        setMovies(data.results);
        setLoading(false);
        return data;
    }

    useEffect(() => {
        fetchMovies();
    }, [fetchURL])

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
                    movies?.map((movie, index) => {
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