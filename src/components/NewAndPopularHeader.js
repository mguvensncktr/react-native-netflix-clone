import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, FONTS, icons, SIZES } from '../constants'

const categories = [
    {
        id: 1,
        name: 'Coming Soon',
        image: require('../../assets/icons/popcorn.png')
    },
    {
        id: 2,
        name: 'Everyone is Watching',
        image: require('../../assets/icons/flames.png')
    },
    {
        id: 3,
        name: 'Top 10',
        image: require('../../assets/icons/top10.png')
    }
]

const NewAndPopularHeader = () => {

    const [selected, setSelected] = React.useState(0);

    return (
        <View
            style={{
                marginTop: SIZES.radius,
                paddingHorizontal: SIZES.padding2,
                marginVertical: SIZES.base
            }}
        >
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}
            >
                <Text style={{ color: COLORS.white, ...FONTS.h2 }}>New and Popular</Text>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                >
                    <Image
                        source={icons.streaming}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: COLORS.white,
                            marginRight: SIZES.base
                        }}
                    />
                    <Image
                        source={icons.avatar}
                        resizeMode="contain"
                        style={{
                            width: 25,
                            height: 25,
                        }}
                    />
                </View>
            </View>
            {/* Tabs */}
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={categories}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => setSelected(index)}
                            style={{
                                paddingHorizontal: SIZES.padding2,
                                paddingVertical: SIZES.base - 3,
                                borderRadius: SIZES.radius,
                                borderWidth: 1,
                                borderColor: selected === index ? COLORS.white : COLORS.black,
                                backgroundColor: selected === index ? COLORS.white : COLORS.black,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Image
                                source={item.image}
                                resizeMode="contain"
                                style={{
                                    width: 20,
                                    height: 20,
                                    marginRight: SIZES.base / 2
                                }}
                            />
                            <Text
                                style={{
                                    color: selected === index ? COLORS.black : COLORS.white,
                                    ...FONTS.body6,
                                    fontWeight: selected === index ? 'bold' : 'normal'
                                }}
                            >
                                {item.name}
                            </Text>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

export default NewAndPopularHeader