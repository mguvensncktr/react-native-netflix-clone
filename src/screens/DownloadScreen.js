import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, icons } from '../constants'
import { FontAwesome } from '@expo/vector-icons';

const DownloadScreen = () => {

    function renderHeader() {
        return (
            <View
                style={{
                    marginTop: SIZES.radius,
                    marginHorizontal: SIZES.padding2
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}
                >
                    <Text style={{ color: COLORS.white, ...FONTS.h3 }}>My Downloads</Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}
                    >
                        <TouchableOpacity
                            onPress={() => console.log("Streaming pressed")}
                        >
                            <Image
                                source={icons.streaming}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30,
                                    tintColor: COLORS.white
                                }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => console.log("Avatar pressed")}
                        >
                            <Image
                                source={icons.avatar}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    marginLeft: SIZES.padding
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity
                    style={{
                        marginTop: SIZES.padding,
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}
                    onPress={() => console.log("Smart download pressed")}
                >
                    <FontAwesome name="gear" size={24} color={COLORS.white} />
                    <Text style={{ color: COLORS.white, ...FONTS.body6, marginLeft: SIZES.base }}>Smart Download</Text>
                </TouchableOpacity>
            </View>
        )
    }

    function renderContent() {
        return (
            <ScrollView
                style={{
                    marginTop: SIZES.radius,
                    marginHorizontal: SIZES.padding2,
                }}
                contentContainerStyle={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingBottom: 50
                }}
                showsVerticalScrollIndicator={false}
            >
                <Text style={{ color: COLORS.white, ...FONTS.h2 }}>Download Settings For You</Text>
                <Text style={{ color: COLORS.gray2, ...FONTS.body5, marginTop: SIZES.padding, paddingHorizontal: SIZES.radius, textAlign: 'center' }}>
                    We will download some content that we have chosen specially for you from TV shows and movies so that you always have something to watch on your device.
                </Text>
                <View
                    style={{
                        backgroundColor: COLORS.darkGray,
                        width: 200,
                        height: 200,
                        borderRadius: 100,
                        marginTop: SIZES.padding2,
                    }}
                />
                <Image
                    source={{ uri: 'https://image.tmdb.org/t/p/original/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg' }}
                    resizeMode="cover"
                    style={{
                        width: 100,
                        height: 150,
                        borderRadius: 10,
                        position: 'absolute',
                        top: 180,
                        left: 125,
                        zIndex: 1
                    }}
                />
                <Image
                    source={{ uri: 'https://image.tmdb.org/t/p/original/74xTEgt7R36Fpooo50r9T25onhq.jpg' }}
                    resizeMode="cover"
                    style={{
                        width: 100,
                        height: 150,
                        borderRadius: 10,
                        position: 'absolute',
                        top: 200,
                        left: 60,
                        transform: [{ rotate: '-20deg' }],
                    }}
                />
                <Image
                    source={{ uri: 'https://image.tmdb.org/t/p/original/sqLowacltbZLoCa4KYye64RvvdQ.jpg' }}
                    resizeMode="cover"
                    style={{
                        width: 100,
                        height: 150,
                        borderRadius: 10,
                        position: 'absolute',
                        top: 200,
                        right: 60,
                        transform: [{ rotate: '20deg' }],
                    }}
                />
                <TouchableOpacity
                    style={{
                        marginHorizontal: SIZES.radius,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#4267B2',
                        width: '100%',
                        marginTop: SIZES.radius * 1.75,
                        paddingVertical: SIZES.padding2 / 1.85,
                        borderRadius: 5
                    }}
                    onPress={() => console.log('Adjust pressed')}
                >
                    <Text style={{ color: COLORS.white, ...FONTS.h4 }}>Adjust</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        marginHorizontal: SIZES.radius,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: COLORS.white,
                        marginTop: SIZES.padding2,
                        paddingVertical: SIZES.padding2 / 1.85,
                        borderRadius: 5,
                        paddingHorizontal: SIZES.padding2
                    }}
                    onPress={() => console.log("See downloads pressed")}
                >
                    <Text style={{ color: COLORS.black, ...FONTS.body6 }}>See What You Can Download</Text>
                </TouchableOpacity>
            </ScrollView>
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.black }}>
            {renderHeader()}
            {renderContent()}
        </View>
    )
}

export default DownloadScreen