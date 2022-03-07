import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { MaterialCommunityIcons, AntDesign, Feather } from '@expo/vector-icons';
import Header from './Header'
import { COLORS, SIZES, FONTS, images, icons } from '../constants'

const MovieBanner = () => {
    return (
        <>
            <ImageBackground
                source={images.banner}
                style={{
                    width: SIZES.width,
                    height: SIZES.height > 500 ? SIZES.height * 0.8 : SIZES.height * 0.7,
                    justifyContent: 'space-between'
                }}
                resizeMode="cover"
            >
                <Header />
                <LinearGradient
                    colors={['rgba(0,0,0,0.1)', COLORS.black]}
                    height={60}
                />
            </ImageBackground>
            <View
                style={{
                    marginTop: -SIZES.padding2,
                }}
            >
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: COLORS.white, ...FONTS.body2 }}>Drama</Text>
                    <Text style={{ color: COLORS.white, ...FONTS.h2, paddingHorizontal: SIZES.base }}>.</Text>
                    <Text style={{ color: COLORS.white, ...FONTS.body2 }}>Love</Text>
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