import React, { useEffect, useState, useRef } from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
    Button,
    Image,
    TouchableOpacity,
    Animated,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { fetchData } from '../redux/actions/postAction';
import LottieView from 'lottie-react-native';



const Item = ({ title, description, image }) => (
    <View style={styles.item}>
        <Image source={{ uri: image }} style={styles.image} />
        <View style={styles.textContainer}>
            <Text numberOfLines={2} style={styles.title}>{title}</Text>
            <Text numberOfLines={2} style={styles.description}>{description}</Text>
        </View>
    </View>
);

const PostListScreen = () => {
    const insets = useSafeAreaInsets();
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.data);

    useEffect(() => {
        console.log('useEffectuseEffect')
        dispatch(fetchData());
    }, [dispatch]);

    if (loading) {
        return (
            <View style={styles.centeredContainer}>
                <LottieView
                    source={require('../assets/lottieFiles/loading_anim.json')}
                    autoPlay
                    loop
                    style={styles.loaderLottie}
                />
            </View>   
            
        );
    }

    if (error) {
        return (
            <View styles={styles.errorContainer}>
                <Text style={styles.centerMesssage}>{error}</Text>
            </View>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item }) => <Item title={item.title} description={item.body} image={"https://picsum.photos/id/237/200/300"} />}
                keyExtractor={item => item.id}
                ListEmptyComponent={
                    <View style={styles.centeredContainer}>
                        <LottieView
                            source={require('../assets/lottieFiles/NoData.json')}
                            autoPlay
                            loop
                            style={styles.noDataDoundLottie}
                        />
                    </View>
                }

                contentContainerStyle={{ marginBottom: 40, paddingBottom: insets.bottom }}
            />
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({

    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: '#DBDDDE',
        paddingBottom: 16,
    },
    item: {
        backgroundColor: '#ffffff',
        padding: 0,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        borderRadius: 16,
        alignItems: 'center',
        // Add elevation for Android
        elevation: 5,
        // Add shadow properties for iOS
        shadowColor: '#707679',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
    },
    textContainer: {
        flex: 1,
        paddingLeft: 10,
    },
    centeredContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 16,
    },

    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 16,
        backgroundColor: 'black'
    },

    image: {
        width: 120,
        height: 100,
        borderTopLeftRadius: 16,
        borderBottomLeftRadius: 16,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#101B20',
    },

    centerMesssage: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#101B20',
        alignSelf: 'center',
    },
    description: {
        fontSize: 14,
        marginTop: 8,
        color: '#707679',
    },

    floatingButton: {
        // position: 'absolute',
        width: 24,
        height: 24,
        alignItems: 'center',
        justifyContent: 'center',
        right: 16,
        backgroundColor: '#ff6347',
        borderRadius: 10,
        elevation: 8,
    },

    loaderLottie: {
        height: 200,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },

    noDataDoundLottie: {
        height: 300,
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
    },
}); 

export default PostListScreen;
