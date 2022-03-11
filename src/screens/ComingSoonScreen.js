import { View, Text, FlatList } from 'react-native'
import React from 'react'
import NewAndPopularHeader from '../components/NewAndPopularHeader';
import axios from '../utils/axios';
import requests from '../utils/requests';

import { COLORS, SIZES, FONTS } from '../constants';
import NewAndPopularItem from '../components/NewAndPopularItem';

const ComingSoonScreen = () => {

    const [upcoming, setUpcoming] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    const getUpcoming = async () => {
        if (loading) {
            return;
        }
        setLoading(true);
        const { data } = await axios.get(requests.fetchUpcoming);
        setUpcoming(data.results);
        setLoading(false)
    }

    React.useEffect(() => {
        getUpcoming();
    }, [])

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.black }}>
            <NewAndPopularHeader />
            <FlatList
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => `${item.id}`}
                data={upcoming}
                renderItem={({ item }) => <NewAndPopularItem movie={item} />}
            />
        </View>
    )
}

export default ComingSoonScreen