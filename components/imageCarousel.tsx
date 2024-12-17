import React, { useRef, useState } from 'react';
import { View, ScrollView, Image, Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

type Props = {
  images: any[];
};

const ImageCarousel = (props: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);

  const images = [props.images[props.images.length - 1], ...props.images, props.images[0]]; // Add duplicates

  const handleScroll = (event: any) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.floor(scrollPosition / width);

    if (index === 0) {
      // If at the duplicate last image, jump to the real last image
      scrollViewRef.current?.scrollTo({ x: (props.images.length) * width, animated: false });
      setActiveIndex(props.images.length - 1);
    } else if (index === images.length - 1) {
      // If at the duplicate first image, jump to the real first image
      scrollViewRef.current?.scrollTo({ x: width, animated: false });
      setActiveIndex(0);
    } else {
      setActiveIndex(index - 1);
    }
  };

  const handleMomentumScrollEnd = (event: any) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.floor(scrollPosition / width);

    if (index === 0) {
      // Jump seamlessly to the real last image
      scrollViewRef.current?.scrollTo({ x: (props.images.length) * width, animated: false });
    } else if (index === images.length - 1) {
      // Jump seamlessly to the real first image
      scrollViewRef.current?.scrollTo({ x: width, animated: false });
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleMomentumScrollEnd}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        contentOffset={{ x: width, y: 0 }} // Start at the real first image
      >
        {images.map((image, index) => (
          <Image key={index} source={image} style={styles.image} />
        ))}
      </ScrollView>
      <View style={styles.indicatorContainer}>
        {props.images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              { opacity: index === activeIndex ? 1 : 0.5 },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  image: {
    aspectRatio: 16 / 9,
    width,
    height: 'auto',
    resizeMode: 'contain',
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#000',
    marginHorizontal: 5,
  },
});

export default ImageCarousel;
