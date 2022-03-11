import { View, Text, TextInput, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../constants'
import { EvilIcons } from '@expo/vector-icons';
import requests from '../utils/requests';
import axios from '../utils/axios';
import PopularSearchItem from '../components/PopularSearchItem';
import MovieCardItem from '../components/MovieCardItem';
import SimilarCardItem from '../components/SimilarCardItem';


const SearchScreen = () => {

    const [searchTerm, setSearchTerm] = React.useState('')
    const [mostSearched, setMostSearched] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [searchResults, setSearchResults] = React.useState([])

    const getPopular = async () => {
        if (loading) {
            return
        }
        setLoading(true)
        const { data } = await axios.get(requests.fetchPopular)
        setMostSearched(data.results)
        setLoading(false)
    }

    const searchMovie = async () => {
        if (searchTerm.length < 3) {
            return
        }
        setLoading(true)
        const { data } = await axios.get(requests.searchMovie + searchTerm)
        setSearchResults(data.results)
        setLoading(false)
    }

    React.useEffect(() => {
        getPopular()
    }, [])

    React.useEffect(() => {
        searchMovie()
    }, [
        searchTerm
    ])

    //search handle
    const handleSearch = (text) => {
        setSearchTerm(text)
    }

    function SearchBar() {
        return (
            <View
                style={{
                    marginTop: SIZES.radius,
                    marginHorizontal: SIZES.padding2,
                }}
            >
                <View style={{
                    flexDirection: 'row',
                    backgroundColor: COLORS.darkGray,
                    justifyContent: 'center',
                    borderRadius: SIZES.base,
                    alignItems: 'center',
                }}>
                    <EvilIcons name="search" size={24} color={COLORS.gray2} />
                    <TextInput
                        style={{
                            height: 40,
                            color: COLORS.white,
                            flex: 1,
                            textAlignVertical: 'center'
                        }}
                        placeholder="Search"
                        placeholderTextColor={COLORS.gray2}
                        value={searchTerm}
                        onChangeText={handleSearch}
                    />
                </View>
            </View>
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.black }}>
            {SearchBar()}
            {
                searchTerm.length > 0 ? (
                    <View
                        style={{
                            marginTop: SIZES.padding
                        }}
                    >
                        <Text style={{ color: COLORS.white, ...FONTS.h3, marginHorizontal: SIZES.padding2 }}>Movies, Series and Programs</Text>
                        <FlatList
                            data={searchResults}
                            keyExtractor={(item) => `${item.id}`}
                            renderItem={({ item }) => <SimilarCardItem movie={item} />}
                            showsVerticalScrollIndicator={false}
                            numColumns={3}
                            key={searchResults.length}
                            contentContainerStyle={{
                                paddingBottom: 100,
                                paddingHorizontal: SIZES.padding,
                            }}
                        />
                    </View>
                )
                    :
                    <View
                        style={{ marginTop: SIZES.padding }}
                    >
                        <Text style={{ color: COLORS.white, ...FONTS.h3, marginHorizontal: SIZES.padding2 }}>Most Searched</Text>
                        <FlatList
                            data={mostSearched}
                            showsVerticalScrollIndicator={false}
                            keyExtractor={(item) => `item-${item.id}`}
                            renderItem={({ item }) => <PopularSearchItem item={item} />}
                            contentContainerStyle={{ paddingBottom: 110 }}
                        />
                    </View>
            }
            {
                loading ? (
                    <View
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: COLORS.black,
                            opacity: 0.5
                        }}
                    >
                        <ActivityIndicator size="large" color={COLORS.darkRed} />
                    </View>
                ) : null
            }
            {
                searchResults.length === 0 && !loading ? (
                    <View
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: COLORS.black,
                            opacity: 0.5
                        }}
                    >
                        <Text style={{ color: COLORS.white, ...FONTS.h3, marginHorizontal: SIZES.padding2 }}>No results found for {searchTerm}</Text>
                    </View>
                ) : null
            }
            {
                searchTerm.length > 0 && (
                    <TouchableOpacity
                        style={{
                            position: 'absolute',
                            top: 40,
                            right: 30,
                        }}
                        onPress={() => {
                            setSearchTerm('')
                        }}
                    >
                        <Text style={{ color: COLORS.white, ...FONTS.body4 }}>Cancel</Text>
                    </TouchableOpacity>
                )
            }
        </View>
    )
}

export default SearchScreen