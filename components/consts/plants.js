const PLANTS = [
  {
    id: 1,
    name: 'Monstera Deliciosa',
    family: 'Araceae',
    category: 'foliage',
    difficulty: 'easy',
    size: 'large',
    growth: 'fast',
    light: 'Adaptive, but will thrive most with indirect sunlight light',
    humidity:
      'Prefers relatively humid environment, but can handle most levels of humidity',
    toxicity: 'Medium',
    water:
      '1-2 weeks or when the majority of the top soil is dry. You should water until it flows through drainage holes',
    interval: 10,
    watered: false,
    image: require('../assets/monstera.png'),
  },
  {
    id: 2,
    name: 'Pothos',
    family: 'Araceae',
    category: 'foliage',
    difficulty: 'easy',
    growth: 'fast',
    size: 'medium',
    light: 'Adaptive, but do not do well with direct sunlight',
    humidity:
      'Prefers relatively humid environment, but can handle most levels of humidity',
    toxicity: 'Medium',
    water:
      '1-2 weeks or when half of the soil is dry. You should water until it flows through drainage holes',
    interval: 8,
    watered: false,
    image: require('../assets/pothos.png'),
  },
  {
    id: 3,
    name: 'Corn Plant',
    family: 'Dracaena',
    category: 'foliage',
    difficulty: 'easy',
    size: 'medium',
    growth: 'slow',
    light: 'Medium indirect light or low light',
    humidity: 'Prefer average to humid environments. Misting is recommended',
    toxicity: 'Medium',
    water:
      '2-4 Weeks or when majority or all of the soil is dry. Use filtered water if possible',
    interval: 16,
    watered: false,
    image: require('../assets/cornplant.png'),
  },
  {
    id: 4,
    name: 'Button Fern',
    family: 'Polypodiaceae',
    category: 'foliage',
    difficulty: 'medium',
    growth: 'slow',
    size: 'small',
    light: 'low',
    humidity: 'higher humidity',
    toxicity: 'Non-Toxic',
    water:
      "Weekly or when top 1-2 inches are dry. Be careful not to overwater it. Make sure you water it enough, but don't make the soil soggy",
    interval: 5,
    watered: false,
    image: require('../assets/buttonfern.jpg'),
  },
  {
    id: 5,
    name: 'Spider Plant',
    family: 'Asparagus',
    category: 'foliage',
    difficulty: 'easy',
    size: 'small',
    growth: 'medium',
    light: 'Prefers bright indirect sunlight but can easily handle low light',
    humidity: 'Low to more humid. However, misting is generally recommended.',
    toxicity: 'Non-Toxic',
    water:
      'Weekly or when top half of soil is dry. You should water it until the water flows through drainage holes. Use filtered water if possible',
    interval: 7,
    watered: false,
    image: require('../assets/spiderplant.png'),
  },
  {
    id: 6,
    name: 'Bird of Paradise',
    family: 'Strelitzia',
    category: 'flowering',
    difficulty: 'medium',
    size: 'medium',
    growth: 'medium',
    light: 'Prefers birhgt indirect light to full sun when acclimated.',
    humidity: 'Normal to more humid. Prefers more humid conditions if possible',
    toxicity: 'Irratative',
    water: 'Water every 1-2 weeks, allow soil to dry out between waterings',
    interval: 8,
    watered: false,
    image: require('../assets/birdofparadise.png'),
  },
  {
    id: 7,
    name: 'Peace Lily',
    family: 'Spathiphyllum',
    category: 'flowering',
    difficulty: 'easy',
    size: 'medium',
    growth: 'medium',
    light:
      'Thrives in medium to bright indirect light, but can tolerate low indirect light.',
    humidity:
      'Being tropical, peace lilies like humidity. To little, and leaf edges and tips may turn brown.',
    toxicity: 'Mild',
    water: 'Water every 1-2 weeks, allow soil to dry out between waterings',
    interval: 6,
    watered: false,
    image: require('../assets/peacelily.png'),
  },
  {
    id: 8,
    name: 'Jade Plant',
    family: 'Crassula',
    category: 'succulent',
    difficulty: 'easy',
    size: 'small',
    growth: 'slow',
    light:
      'Thrives in bright indirect light to full sun. Not suited for low light',
    humidity: 'Jade plant will do well in any level of humidity',
    toxicity: 'Toxic',
    water: 'Water every 1-2 weeks allowing soil to dry out completely',
    interval: 10,
    watered: false,
    image: require('../assets/pottedjadeplant.jpg'),
  },
];

export default PLANTS;
