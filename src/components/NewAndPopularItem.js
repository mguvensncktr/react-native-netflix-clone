import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../constants'
import { Feather } from '@expo/vector-icons';
import axios from '../utils/axios';
import requests from '../utils/requests';
import { useNavigation } from '@react-navigation/native';

const NewAndPopularItem = ({ movie }) => {

    const navigation = useNavigation();
    const releaseDate = new Date(movie?.release_date);
    const month = releaseDate.toLocaleString('default', { month: 'short' });
    const day = releaseDate.getDate();
    const [genres, setGenres] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

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

    const getGenreName = (id) => {
        const genre = genres?.find(genre => genre.id === id);
        return genre ? genre.name : null;
    }

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('Modal', { movie: movie })}
            style={{
                flexDirection: 'row',
                paddingHorizontal: SIZES.base,
                marginTop: SIZES.padding2
            }}
        >
            <View
                style={{
                    marginRight: SIZES.base / 2
                }}
            >
                <Text style={{
                    color: COLORS.gray,
                    ...FONTS.body3
                }}>{month}</Text>
                <Text style={{ color: COLORS.white, ...FONTS.h2 }}>
                    {day}
                </Text>
            </View>
            <View
                style={{ flex: 1 }}
            >
                <Image
                    source={{ uri: `https://image.tmdb.org/t/p/original${movie?.backdrop_path}` }}
                    resizeMode="cover"
                    style={{
                        width: '100%',
                        height: 200,
                        borderRadius: SIZES.radius
                    }}
                />
                <View
                    style={{
                        marginTop: SIZES.padding2,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        paddingHorizontal: SIZES.padding2 * 2.5
                    }}
                >
                    <View
                        style={{ alignItems: 'center', marginRight: SIZES.padding2 * 2 }}
                    >
                        <Feather name="bell" size={24} color={COLORS.white} />
                        <Text style={{ color: COLORS.gray2, ...FONTS.body4 }}>Remind Me</Text>
                    </View>
                    <View
                        style={{ alignItems: 'center' }}
                    >
                        <Feather name="info" size={24} color={COLORS.white} />
                        <Text style={{ color: COLORS.gray2, ...FONTS.body4 }}>Info</Text>
                    </View>
                </View>
                <View
                    style={{
                        marginTop: SIZES.padding2
                    }}
                >
                    <Text style={{ color: COLORS.white, ...FONTS.h4 }} >{movie?.title}</Text>
                    <Text style={{ color: COLORS.gray2, ...FONTS.body4 }} numberOfLines={6} ellipsizeMode="tail" >{movie?.overview}</Text>
                    <View
                        style={{ flexDirection: 'row', alignItems: 'center' }}
                    >
                        {
                            movie?.genre_ids?.map((id, index) => {
                                const genreName = getGenreName(id);
                                return (
                                    <Text key={index} style={{ ...FONTS.body5, color: COLORS.white, marginHorizontal: SIZES.base }}>
                                        {genreName}
                                    </Text>
                                );
                            })
                        }
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default NewAndPopularItem