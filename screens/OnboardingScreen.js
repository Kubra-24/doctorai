import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { AntDesign } from '@expo/vector-icons';

export default function OnboardingScreen({ navigation }) {
  const onboardingRef = useRef(null);
  const [pageIndex, setPageIndex] = useState(0);

  const totalPages = 3;

  const Dots = ({ activeIndex }) => (
    <View style={styles.dotsWrapper}>
      {[...Array(totalPages)].map((_, i) => (
        <View
          key={i}
          style={[
            styles.dot,
            activeIndex === i ? styles.activeDot : styles.inactiveDot,
          ]}
        />
      ))}
    </View>
  );

  const pages = [
    {
      backgroundColor: '#000',
      title: 'Meet Doctor AI',
      titleStyles: {
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold',
      },
      image: (
        <>
          <View style={styles.imageShadowWrapper}>
            <Image
              source={require('../assets/image.png')}
              style={styles.imageStyle}
            />
          </View>
          <Dots activeIndex={pageIndex} />
        </>
      ),
    },
    {
      backgroundColor: '#000',
      title: 'AI Assistant for Your Health',
      subtitle: 'Get smart suggestions for symptoms instantly',
      titleStyles: {
        color: '#fff',
        fontSize: 26,
        fontWeight: '600',
      },
      subTitleStyles: {
        color: '#aaa',
        fontSize: 16,
      },
      image: (
        <>
          <View style={styles.imageShadowWrapper}>
            <Image
              source={require('../assets/image1.jpg')}
              style={styles.imageStyle}
            />
          </View>
          <Dots activeIndex={pageIndex} />
        </>
      ),
    },
    {
      backgroundColor: '#000',
      title: '10 Steps to Diagnosis',
      subtitle: 'Follow guided steps and get fast results',
      titleStyles: {
        color: '#fff',
        fontSize: 26,
        fontWeight: '500',
      },
      subTitleStyles: {
        color: '#aaa',
        fontSize: 16,
      },
      image: (
        <>
          <View style={styles.imageShadowWrapper}>
            <Image
              source={require('../assets/image2.png')}
              style={styles.imageStyle}
            />
          </View>
          <Dots activeIndex={pageIndex} />
        </>
      ),
    },
  ];

  return (
    <View style={{ flex: 1 }}>
     
      <TouchableOpacity
        style={styles.skipButton}
        onPress={() => navigation.replace('Welcome')}
      >
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      <Onboarding
        ref={onboardingRef}
        pages={pages}
        onSkip={() => navigation.replace('Welcome')}
        onDone={() => navigation.replace('Welcome')}
        showNext={false}
        showDone={false}
        showSkip={false}
        showPagination={false}
        bottomBarHighlight={false}
        pageIndexCallback={index => setPageIndex(index)}
      />

    
      <View style={styles.arrowsBox}>

        <TouchableOpacity
          onPress={() => {
            if (pageIndex > 0) onboardingRef.current.goToPage(pageIndex - 1, true);
          }}
        >
          <AntDesign name="arrowleft" size={20} color="#fff" />
        </TouchableOpacity>

        <View style={styles.separator} />

        <TouchableOpacity
          onPress={() => {
            if (pageIndex < totalPages - 1) {
              onboardingRef.current.goToPage(pageIndex + 1, true);
            } else {
              navigation.replace('Welcome');
            }
          }}
        >
          <AntDesign name="arrowright" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  skipButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    zIndex: 10,
  },
  skipText: {
    color: '#fff',
    fontSize: 16,
  },
  imageShadowWrapper: {
    shadowColor: '#b3e0ff', 
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.7,
    shadowRadius: 30,
    elevation: 20,
   
  },
  imageStyle: {
    width: 250,
    height: 250,
    alignSelf: 'center',
    borderRadius: 20,
  },
  dotsWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 3.5,
    marginHorizontal: 6,
  },
  activeDot: {
    backgroundColor: 'white',
  },
  inactiveDot: {
    backgroundColor: '#555',
  },
  arrowsBox: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  separator: {
    width: 1,
    height: 24,
    backgroundColor: '#ffffff',
    marginHorizontal: 25,
  },
});
