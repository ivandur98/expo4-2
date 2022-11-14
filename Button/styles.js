import { StyleSheet } from 'react-native';

const Base = StyleSheet.create({
  main: {
    padding: 10,
    borderRadius: 3,
  },
  label: {
    color: '#333',
  },
  rounded: {
    borderRadius: 20,
  },
});

const Danger = StyleSheet.create({
  main: {
    backgroundColor: '#e74c3c',
  },
});

const Info = StyleSheet.create({
  main: {
    backgroundColor: '#3498db',
  },
});

const Success = StyleSheet.create({
  main: {
    backgroundColor: '#1abc9c',
  },
});
const Big = StyleSheet.create({
    main: {
      backgroundColor: '#00FF00',
      color: "#000000",
      fontSize: 16,
      padding: 20,
    },
  });
  const Small = StyleSheet.create({
    main: {
      backgroundColor: '#008CBA',
      color: 'fff',
      padding: 5,
    },
  });
  const Ugly = StyleSheet.create({
    main: {
      backgroundColor: '#8b4513',
      color: 'fff',
      padding: 8,
      fontSize: 10,
    },
  });
  const Pink = StyleSheet.create({
    main: {
      backgroundColor: '#ff69b4',
      fontSize: 20,
    },
  });    
const Default = StyleSheet.create({
  main: {
    backgroundColor: '#000',
  },
  label: {
    color: '#fff',
  },
});

export {
  Base,
  Danger,
  Info,
  Success,
  Big,Small,Ugly, Pink,
  Default,
};