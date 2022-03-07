import React from 'react'
import { View, Text, TouchableOpacity, Image, StatusBar } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';

import { SIZES, FONTS, icons, COLORS } from '../constants'

const Header = () => {
    return (
        <View style={{ marginTop: StatusBar.currentHeight }}>
            {/* Gradient Header */}
            <LinearGradient
                colors={['rgba(0,0,0,1)', 'transparent']}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingHorizontal: SIZES.padding,
                        paddingTop: SIZES.padding2
                    }}
                >
                    {/* Netflix Logo */}
                    <TouchableOpacity
                        style={{
                            width: 60,
                            height: 60,
                        }}
                        onPress={() => console.log("Logo pressed")}
                    >
                        <Image
                            source={icons.netflixbig}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                    {/* Screen mirroring and avatar */}
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity
                            style={{
                                marginRight: SIZES.padding2,
                                width: 42,
                                height: 42
                            }}
                            onPress={() => console.log("Streaming pressed")}
                        >
                            <Image
                                source={icons.streaming}
                                resizeMode="contain"
                                style={{
                                    tintColor: COLORS.white,
                                    width: 40,
                                    height: 40
                                }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                width: 35,
                                height: 35
                            }}
                            onPress={() => console.log('Avatar Pressed')}
                        >
                            <Image
                                source={icons.avatar}
                                style={{
                                    width: 32,
                                    height: 32,
                                    borderRadius: SIZES.base
                                }}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </LinearGradient>
            {/* Categories */}
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    paddingTop: SIZES.padding
                }}
            >
                {/* Series */}
                <TouchableOpacity
                    onPress={() => console.log('Series Pressed')}
                    activeOpacity={0.5}
                >
                    <Text style={{ color: COLORS.white, ...FONTS.body3 }}>Series</Text>
                </TouchableOpacity>
                {/* Movies */}
                <TouchableOpacity
                    onPress={() => console.log('Movies Pressed')}
                    activeOpacity={0.5}
                >
                    <Text style={{ color: COLORS.white, ...FONTS.body3 }}>Movies</Text>
                </TouchableOpacity>
                {/* Categories */}
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}
                    onPress={() => console.log('Categories Pressed')}
                    activeOpacity={0.5}
                >
                    <Text style={{ color: COLORS.white, ...FONTS.body3, marginRight: 5 }}>Categories</Text>
                    <AntDesign name="caretdown" size={16} color={COLORS.white} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header