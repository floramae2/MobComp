import * as React from 'react';
import { Image } from 'react-native';
import { Banner } from 'react-native-paper';


const MyComponent = () => {
  const [visible, setVisible] = React.useState(true);

  return (
    <Banner
      visible={visible}
      actions={[
        {
          label: 'Fix it',
          onPress: () => setVisible(false),
        },
        {
          label: 'Learn more',
          onPress: () => setVisible(false),
        },
      ]}
      icon={({size}) => (
        <Image
          source={{
            uri: 'C:\Users\Win10\Downloads\comp.png',
          }}
          style={{
            width: size,
            height: size,
            backgroundColor: 'blue-violet',
          }}
        />
      )}>
      There was a problem processing a transaction on your credit card.
    </Banner>
  );
};

export default MyComponent;