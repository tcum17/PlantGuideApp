import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import COLORS from '../../components/consts/colors';
import PLANTS from '../../components/consts/plants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import AIcon from 'react-native-vector-icons/AntDesign';
const width = Dimensions.get('window').width / 2 - 30;
import {useNavigation} from '@react-navigation/native';

const Catalogue = ({garden, addToGarden}) => {
  const categories = ['POPULAR', 'SUCCULENT', 'FOLIAGE', 'FLOWERING'];
  const [categoryIndex, setCategoryIndex] = useState(0);
  const navigation = useNavigation();
  const CategoryList = () => {
    return (
      <View style={style.categoryContainer}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setCategoryIndex(index)}>
            <Text
              style={[
                style.category,
                categoryIndex === index && style.categorySelected,
              ]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

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
              activeOpacity={0.8}
              onPress={() => addToGarden(plant)}>
              <AIcon name="pluscircle" size={24} color={COLORS.green} />
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
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{flex: 1, paddingHorizontal: 20, backgroundColor: COLORS.white}}>
      <View style={style.header}>
        <View>
          <Text style={{fontSize: 30, color: COLORS.green, fontWeight: 'bold'}}>
            Plant Catalogue
          </Text>
        </View>
      </View>
      <CategoryList />
      {categoryIndex === 0 && (
        <FlatList
          columnWrapperStyle={{justifyContent: 'space-between'}}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{marginTop: 10, paddingBottom: 50}}
          numColumns={2}
          data={PLANTS}
          renderItem={({item}) => {
            return <Plant plant={item} />;
          }}
        />
      )}
      {categoryIndex === 1 && (
        <FlatList
          columnWrapperStyle={{justifyContent: 'space-between'}}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{marginTop: 10, paddingBottom: 50}}
          numColumns={2}
          data={PLANTS.filter(plant => plant.category === 'succulent')}
          renderItem={({item}) => {
            return <Plant plant={item} />;
          }}
        />
      )}
      {categoryIndex === 2 && (
        <FlatList
          columnWrapperStyle={{justifyContent: 'space-between'}}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{marginTop: 10, paddingBottom: 50}}
          numColumns={2}
          data={PLANTS.filter(plant => plant.category === 'foliage')}
          renderItem={({item}) => {
            return <Plant plant={item} />;
          }}
        />
      )}
      {categoryIndex === 3 && (
        <FlatList
          columnWrapperStyle={{justifyContent: 'space-between'}}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{marginTop: 10, paddingBottom: 50}}
          numColumns={2}
          data={PLANTS.filter(plant => plant.category === 'flowering')}
          renderItem={({item}) => {
            return <Plant plant={item} />;
          }}
        />
      )}
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryContainer: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  category: {
    fontSize: 16,
    color: 'grey',
    fontWeight: 'bold',
  },
  categorySelected: {
    color: COLORS.green,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: COLORS.green,
  },
  plant: {
    height: 225,
    backgroundColor: COLORS.light,
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
});

export default Catalogue;
