import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Modal from "react-native-modal";
import { COLORS, FONTS, icons, SIZES } from '../constants';
import { AntDesign, MaterialCommunityIcons, FontAwesome, Feather } from '@expo/vector-icons';

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

const ModalDetail = ({ isModalVisible, setModalVisible, movie }) => {

    return (
        <Modal isVisible={isModalVisible}
            onSwipeComplete={() => setModalVisible(false)}
            swipeDirection="down"
            deviceWidth={SIZES.width}
            deviceHeight={SIZES.height}
            style={{
                margin: 0
            }}
            propagateSwipe
        >
            <View style={{ flex: 1, backgroundColor: COLORS.black }}>
                <Image
                    source={{ uri: movie?.image }}
                    style={{
                        width: '100%',
                        height: 300
                    }}
                    resizeMode="cover"
                />
                {/* Action Buttons */}
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        position: 'absolute',
                        top: 25,
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
                            onPress={() => setModalVisible(false)}
                        >
                            <AntDesign name="close" size={30} color={COLORS.white} />
                        </TouchableOpacity>
                    </View>
                </View>
                {/* Movie Title */}
                <ScrollView
                    style={{
                        marginTop: SIZES.padding2,
                        marginHorizontal: SIZES.padding
                    }}
                    showsVerticalScrollIndicator={false}
                >
                    <View
                        style={{ flexDirection: 'row', alignItems: 'center' }}
                    >
                        <Image
                            source={icons.netflixsmall}
                            resizeMode="contain"
                        />
                        <Text style={{ color: COLORS.gray2, ...FONTS.body4, letterSpacing: 2 }}>MOVIE</Text>
                    </View>
                    <View
                        style={{ marginTop: SIZES.base }}
                    >
                        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>{movie?.title}</Text>
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
                            <Text style={{ color: 'green', ...FONTS.body3 }}>%97 match</Text>
                            <Text style={{ color: COLORS.white, ...FONTS.body3, marginLeft: SIZES.base }}>{movie?.year}</Text>
                            <Text style={{ color: COLORS.white, ...FONTS.body3, marginLeft: SIZES.base }}>{movie?.duration}</Text>
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
                        <Text style={{ color: COLORS.white, ...FONTS.body4 }}>{movie?.synopsis}</Text>
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
                    {/* Similar Section */}
                    <View
                        style={{
                            marginTop: SIZES.padding2
                        }}
                    >
                        <Text style={{ color: COLORS.white, ...FONTS.body2 }}>Similar</Text>
                        {/* Similar Movies FlatList 3 Columns */}
                    </View>
                </ScrollView>
            </View>
        </Modal>
    )
}

export default ModalDetail