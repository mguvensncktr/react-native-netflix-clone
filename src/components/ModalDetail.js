import { View, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { COLORS, FONTS, icons, SIZES } from '../constants';
import { AntDesign, MaterialCommunityIcons, FontAwesome, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import SimilarCardItem from './SimilarCardItem';
import axios from '../utils/axios';
import { APIKEY } from "@env";

const CustomButton = ({ title, containerStyle, titleStyle, icon, iconStyle, onPress }) => {

    return (
        <TouchableOpacity
            style={{
                marginTop: SIZES.padding,
                ...containerStyle,
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: SIZES.base,
                borderRadius: SIZES.base
            }}
            onPress={onPress}
        >
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}
            >
                <AntDesign name={icon} size={24} color={iconStyle} />
                <Text style={{ marginLeft: SIZES.base, ...titleStyle }}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const ModalDetail = ({ route }) => {

    const [similar, setSimilar] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const { movie } = route.params;
    const navigation = useNavigation();
    //random number between 75 and 100
    const random = Math.floor(Math.random() * (100 - 75 + 1)) + 75;

    const fetchSimilar = async () => {

        const urlForMovies = movie?.media_type != 'tv' ? `https://api.themoviedb.org/3/movie/${movie?.id}/similar?api_key=${APIKEY}&language=en-US&page=1`
            : `https://api.themoviedb.org/3/tv/${movie?.id}/similar?api_key=${APIKEY}&language=en-US&page=1`

        if (loading) {
            return;
        }
        setLoading(true);
        const { data } = await axios.get(urlForMovies);
        setSimilar(data.results);
        setLoading(false);
    }

    React.useEffect(() => {
        fetchSimilar();
    }, [])

    const movieYear = movie?.release_date?.split('-')[0] || movie?.first_air_date?.split('-')[0];

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.black }}>
            <Image
                source={{ uri: `https://image.tmdb.org/t/p/original${movie?.backdrop_path}` }}
                style={{
                    width: '100%',
                    height: 250
                }}
                resizeMode="contain"
            />
            {/* Action Buttons */}
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    position: 'absolute',
                    top: SIZES.height > 700 ? 70 : 20,
                    right: 10,
                }}
            >
                {/* Screen Mirroring */}
                <View
                    style={{
                        width: 40,
                        height: 40,
                        backgroundColor: COLORS.darkGray,
                        borderRadius: SIZES.radius,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <TouchableOpacity
                        style={{
                            width: 30,
                            height: 30,
                        }}
                        onPress={() => console.log("Mirroring pressed")}
                    >
                        <Image
                            source={icons.streaming}
                            style={{
                                width: '100%',
                                height: '100%',
                                tintColor: COLORS.white
                            }}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                </View>
                {/* Close Modal */}
                <View
                    style={{
                        width: 40,
                        height: 40,
                        backgroundColor: COLORS.darkGray,
                        borderRadius: SIZES.radius,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginLeft: SIZES.padding2
                    }}
                >
                    <TouchableOpacity
                        style={{
                            width: 30,
                            height: 30
                        }}
                        onPress={() => navigation.goBack()}
                    >
                        <AntDesign name="close" size={30} color={COLORS.white} />
                    </TouchableOpacity>
                </View>
            </View>
            {/* Similar Section */}

            <FlatList
                data={similar}
                numColumns={3}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        <SimilarCardItem movie={item} />
                    )
                }}
                ListHeaderComponent={
                    <ScrollView
                        style={{
                            marginTop: SIZES.padding2,
                            marginHorizontal: SIZES.padding
                        }}
                    >
                        <View
                            style={{ flexDirection: 'row', alignItems: 'center' }}
                        >
                            <Image
                                source={icons.netflixsmall}
                                resizeMode="contain"
                            />
                            <Text style={{ color: COLORS.gray2, ...FONTS.body4, letterSpacing: 2 }}>Netflix</Text>
                        </View>
                        <View
                            style={{ marginTop: SIZES.base }}
                        >
                            <Text style={{ color: COLORS.white, ...FONTS.h3 }}>{movie?.name || movie?.title}</Text>
                        </View>
                        {/* info section */}
                        <View
                            style={{
                                marginTop: SIZES.base
                            }}
                        >
                            <View
                                style={{ flexDirection: 'row', alignItems: 'center' }}
                            >
                                <Text style={{ color: 'green', ...FONTS.body3 }}>{`${random}% Match`}</Text>
                                <Text style={{ color: COLORS.white, ...FONTS.body3, marginLeft: SIZES.base }}>{movieYear}</Text>
                            </View>
                        </View>
                        {/* Buttons */}
                        <CustomButton title={"Play"} icon={"caretright"} titleStyle={{ color: COLORS.black, ...FONTS.h4 }}
                            containerStyle={{ backgroundColor: COLORS.white }} iconStyle={COLORS.black}
                            onPress={() => console.log("Play pressed")}
                        />
                        <CustomButton title={"Download"} icon={"download"} titleStyle={{ color: COLORS.white, ...FONTS.h4 }}
                            containerStyle={{ backgroundColor: COLORS.darkGray }} iconStyle={COLORS.white}
                            onPress={() => console.log("Download pressed")}
                        />
                        {/* Description */}
                        <View
                            style={{
                                marginTop: SIZES.padding,
                            }}
                        >
                            <Text style={{ color: COLORS.white, ...FONTS.body4 }}>{movie?.overview}</Text>
                        </View>
                        {/* Actions */}
                        <View
                            style={{
                                marginTop: SIZES.padding,
                                marginHorizontal: SIZES.radius,
                            }}
                        >
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-between'
                                }}
                            >
                                {/* MyList */}
                                <TouchableOpacity
                                    style={{ alignItems: 'center' }}
                                    onPress={() => console.log("MyList pressed")}
                                >
                                    <MaterialCommunityIcons name="plus" size={30} color={COLORS.white} />
                                    <Text style={{ color: COLORS.gray2, ...FONTS.body3, marginTop: SIZES.base }}>My List</Text>
                                </TouchableOpacity>
                                {/* Rate */}
                                <TouchableOpacity
                                    style={{ alignItems: 'center' }}
                                    onPress={() => console.log("Rate pressed")}
                                >
                                    <FontAwesome name="thumbs-o-up" size={30} color={COLORS.white} />
                                    <Text style={{ color: COLORS.gray2, ...FONTS.body3, marginTop: SIZES.base }}>Rate</Text>
                                </TouchableOpacity>
                                {/* Share */}
                                <TouchableOpacity
                                    style={{
                                        alignItems: 'center'
                                    }}
                                    onPress={() => console.log("Share pressed")}
                                >
                                    <Feather name="send" size={30} color={COLORS.white} />
                                    <Text style={{ color: COLORS.gray2, ...FONTS.body3, marginTop: SIZES.base }}>Share</Text>
                                </TouchableOpacity>
                                {/* Empty views */}
                                <View />
                                <View />
                            </View>
                        </View>
                        <Text style={{ color: COLORS.white, ...FONTS.h3, marginVertical: SIZES.padding2 }}>Similar</Text>
                    </ScrollView>
                }
            />
        </View >
    )
}

export default ModalDetail