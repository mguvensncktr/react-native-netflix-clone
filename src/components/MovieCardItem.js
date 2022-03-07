import { TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SIZES } from '../constants'
import ModalDetail from '../components/ModalDetail';

const MovieCardItem = ({ movie }) => {

    const [isModalVisible, setModalVisible] = React.useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <TouchableOpacity
            style={{
                width: SIZES.width / 3,
                height: SIZES.height / 3 - 50,
                marginRight: SIZES.base
            }}
            onPress={toggleModal}
        >
            <Image
                source={{ uri: movie?.image }}
                style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: SIZES.base
                }}
                resizeMode="contain"
            />
            <ModalDetail isModalVisible={isModalVisible} setModalVisible={setModalVisible} movie={movie} />
        </TouchableOpacity>
    )
}

export default MovieCardItem