import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../constants'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const PopularSearchItem = ({ item }) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={{
                marginTop: SIZES.padding,
                marginHorizontal: SIZES.padding2,
            }}
            onPress={() => navigation.navigate('Modal', { movie: item })}
        >
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <View style={{
                    flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap'
                }}>
                    <Image
                        source={{ uri: `https://image.tmdb.org/t/p/original${item?.backdrop_path}` }}
                        resizeMode="cover"
                        style={{
                            width: 125,
                            height: 75,
                            borderRadius: 10,
                        }}
                    />
                    <Text
                        style={{ color: COLORS.white, ...FONTS.body4, marginLeft: SIZES.padding }}
                    >
                        {item?.title.length > 20 ? item?.title.substring(0, 20) + '...' : item?.title}
                    </Text>
                </View>
                <AntDesign name="playcircleo" size={35} color={COLORS.white} />
            </View>
        </TouchableOpacity>
    )
}

export default PopularSearchItem