import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import COLORS from '../../components/consts/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';
const width = Dimensions.get('window').width / 2 - 30;

const Home = ({navigation, garden}) => {
  const Plant = ({plant}) => {
    const [checked, setChecked] = useState(false);

    return (
      <View style={style.plant}>
        <View style={{alignItems: 'flex-end'}}>
          {/* checkbox-blank-outline checkbox-marked */}
          <View
            style={{
              width: 30,
              height: 30,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity onPress={() => setChecked(!checked)}>
              {checked === false && (
                <Icon name={'checkbox-blank-outline'} size={28} />
              )}
              {checked === true && (
                <Icon name={'checkbox-marked'} size={28} color={COLORS.green} />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View style={{height: 100, alignItems: 'center'}}>
          <Image
            source={plant.image}
            style={{flex: 1, resizeMode: 'contain'}}
          />
        </View>
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
            Home
          </Text>
        </View>
      </View>
      <View>
        <Text
          style={{
            fontSize: 24,
            color: 'grey',
            fontWeight: 'bold',
            textAlign: 'center',
            paddingTop: 20,
          }}>
          Welcome to
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontSize: 30,
            color: COLORS.green,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          The Little Plant Guide
        </Text>
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
          data={garden.filter(
            plant => plant.interval < 7 && plant.watered === false,
          )}
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
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
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
    height: 200,
    backgroundColor: COLORS.light,
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
});

export default Home;
