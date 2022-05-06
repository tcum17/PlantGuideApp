import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
} from 'react-native';
import COLORS from '../../components/consts/colors';
import AIcon from 'react-native-vector-icons/AntDesign';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation, useRoute} from '@react-navigation/native';

const width = Dimensions.get('window').width / 2 - 30;

const Garden = ({garden, deletePlant}) => {
  const navigation = useNavigation();

  const Plant = ({plant}) => {
    return (
      <View style={style.plant}>
        <View style={{alignItems: 'flex-end', paddingBottom: 10}}>
          <View
            style={{
              width: 30,
              height: 30,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              activeOpactiy={0.8}
              onPress={() => deletePlant(plant)}>
              <AIcon name="minuscircle" size={24} color={'red'} />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Details', plant)}>
          <View style={{height: 100, alignItems: 'center'}}>
            <Image
              source={plant.image}
              style={{flex: 1, resizeMode: 'contain'}}
            />
          </View>
        </TouchableOpacity>
        <Text style={{fontWeight: 'bold', fontSize: 17, marginTop: 10}}>
          {plant.name}
        </Text>
        <Text style={{fontWeight: 'bold', fontSize: 15, marginTop: 5}}>
          {'Time until next watering day: ' + plant.interval}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{flex: 1, paddingHorizontal: 20, backgroundColor: COLORS.white}}>
      <View style={style.header}>
        <View>
          <Text style={{fontSize: 30, color: COLORS.green, fontWeight: 'bold'}}>
            My Garden
          </Text>
        </View>
      </View>
      <View>
        {garden.length === 0 && (
          <Text style={style.subtitle}>There are no plants in your garden</Text>
        )}
      </View>
      <View style={{paddingTop: 20}}>
        <FlatList
          columnWrapperStyle={{justifyContent: 'space-between'}}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{marginTop: 10, paddingBottom: 50}}
          numColumns={2}
          data={garden}
          renderItem={({item}) => {
            return <Plant plant={item} />;
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subtitle: {
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    color: 'grey',
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
  plant: {
    height: 260,
    backgroundColor: COLORS.light,
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
});

export default Garden;
