import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { MaterialCommunityIcons, AntDesign, Feather } from '@expo/vector-icons';
import Header from './Header'
import { COLORS, SIZES, FONTS, images } from '../constants'
import axios from '../utils/axios';
import requests from '../utils/requests';
import Divider from './Divider';

const MovieBanner = () => {

    const [movie, setMovie] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [genres, setGenres] = React.useState([]);

    const fetchData = async () => {
        if (loading) {
            return;
        }
        setLoading(true);
        const result = await axios.get(requests.fetchNetflixOriginals);
        setMovie(
            result.data.results[
            Math.floor(Math.random() * result.data.results.length - 1)
            ]
        );
        setLoading(false);
        return result;
    }

    React.useEffect(() => {
        fetchData();
    }, [])

    const fetchGenres = async () => {
        if (loading) {
            return;
        }
        setLoading(true);
        const result = await axios.get(requests.fetchGenres);
        setGenres(result.data.genres);
        setLoading(false);
    }

    React.useEffect(() => {
        fetchGenres();
    }, [])

    // get specific genre name from movie id
    const getGenreName = (id) => {
        const genre = genres?.find(genre => genre.id === id);
        return genre ? genre.name : null;
    }


    return (
        <>
            <ImageBackground
                source={{ uri: `https://image.tmdb.org/t/p/original${movie?.poster_path}` }}
                style={{
                    width: SIZES.width,
                    height: SIZES.height > 700 ? SIZES.height * 0.8 : SIZES.height * 0.7,
                    justifyContent: 'space-between'
                }}
                resizeMode="cover"
            >
                <Header />
                <LinearGradient
                    colors={['rgba(0,0,0,0.1)', COLORS.black]}
                    height={50}
                    style={{
                        height: 50
                    }}
                />

            </ImageBackground>
            <View
                style={{
                    marginTop: -SIZES.padding2,
                }}
            >
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    {
                        movie?.genre_ids?.map((id, index) => {
                            const genreName = getGenreName(id);
                            return (
                                <Text key={index} style={{ ...FONTS.body3, color: COLORS.white, marginHorizontal: SIZES.base }}>
                                    {genreName}
                                    {index !== movie?.genre_ids?.length - 1 ? <Divider /> : null}
                                </Text>
                            );
                        })
                    }
                </View>
                <View
                    style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}
                >
                    {/* My List */}
                    <View
                        style={{
                            paddingVertical: SIZES.base,
                            alignItems: 'center'
                        }}
                    >
                        <MaterialCommunityIcons name="plus" size={30} color={COLORS.white} />
                        <Text style={{ color: COLORS.white, ...FONTS.body3 }}>My List</Text>
                    </View>
                    {/* Play */}
                    <View
                        style={{
                            paddingHorizontal: SIZES.padding2 + SIZES.base,
                            paddingVertical: SIZES.base,
                            flexDirection: 'row',
                            alignItems: 'center',
                            backgroundColor: COLORS.white,
                            borderRadius: 5,
                        }}
                    >
                        <AntDesign name="caretright" size={24} color="black" />
                        <Text style={{ color: COLORS.black, ...FONTS.h4, marginLeft: SIZES.base }}>Play</Text>
                    </View>
                    {/* Info */}
                    <View
                        style={{
                            alignItems: 'center',
                            paddingVertical: SIZES.base
                        }}
                    >
                        <Feather name="info" size={24} color={COLORS.white} />
                        <Text style={{ color: COLORS.white, ...FONTS.body3 }}>Info</Text>
                    </View>
                </View>
            </View>
        </>

    )
}

export default MovieBanner