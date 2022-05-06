import React from 'react';
import {View, SafeAreaView, Image, Text, StyleSheet} from 'react-native';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../components/consts/colors';
import AIcon from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation, useRoute} from '@react-navigation/native';

const PlantDetail = ({garden, addToGarden}) => {
  const navigation = useNavigation();
  const route = useRoute();

  const plant = route.params;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <View style={style.header}>
        <MIcon
          name="arrow-back"
          size={28}
          onPress={() => navigation.goBack()}
        />
        <Text style={{fontSize: 22, fontWeight: 'bold', color: COLORS.green}}>
          Plant Details
        </Text>
      </View>
      <View style={style.imageContainer}>
        <Image source={plant.image} style={{resizeMode: 'contain', flex: 1}} />
      </View>
      <View style={style.detailsContainer}>
        <View
          style={{
            marginTop: 5,
            alignItems: 'center',
            marginBottom: 10,
            marginLeft: 20,
            marginRight: 30,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 22, fontWeight: 'bold'}}>{plant.name}</Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => addToGarden(plant)}>
            <AIcon name="pluscircle" size={35} color={COLORS.green} />
          </TouchableOpacity>
        </View>
        <View style={style.detailRow}>
          <Text>
            <Text style={style.detailType}>Family: </Text>
            <Text style={style.detailContent}>{plant.family}</Text>
          </Text>
        </View>
        <View style={style.detailRow}>
          <Text>
            <Text style={style.detailType}>Difficulty: </Text>
            <Text
              style={[
                plant.difficulty === 'easy' && style.easy,
                plant.difficulty === 'medium' && style.medium,
                plant.difficulty === 'hard' && style.hard,
              ]}>
              {plant.difficulty}
            </Text>
          </Text>
        </View>
        <View style={style.detailRow}>
          <Text>
            <Text style={style.detailType}>Light: </Text>
            <Text style={style.detailContent}>{plant.light}</Text>
          </Text>
        </View>
        <View style={style.detailRow}>
          <Text>
            <Text style={style.detailType}>Humidity: </Text>
            <Text style={style.detailContent}>{plant.humidity}</Text>
          </Text>
        </View>
        <View style={style.detailRow}>
          <Text>
            <Text style={style.detailType}>Toxicity: </Text>
            <Text
              style={[
                plant.toxicity === 'Non-Toxic' && style.easy,
                plant.toxicity === 'Medium' && style.medium,
                plant.toxicity === 'Toxic' && style.hard,
              ]}>
              {plant.toxicity}
            </Text>
          </Text>
        </View>
        <View style={style.detailRow}>
          <Text>
            <Text style={style.detailType}>Water: </Text>
            <Text style={style.detailContent}>{plant.water}</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    flex: 0.45,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    flex: 0.55,
    backgroundColor: COLORS.light,
    marginHorizontal: 7,
    marginBottom: 7,
    borderRadius: 20,
    marginTop: 20,
    paddingTop: 20,
  },
  detailRow: {
    paddingHorizontal: 20,
    marginTop: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailType: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  detailContent: {
    fontSize: 16,
  },
  easy: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.green,
  },
  medium: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'orange',
  },
  hard: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
  },
});

export default PlantDetail;
