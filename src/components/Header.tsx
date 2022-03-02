import React, { FC } from 'react';

import { View } from 'react-native';
import { Text } from '@ui-kitten/components';
import { observer } from 'mobx-react-lite';
import { useRoute } from '@react-navigation/native';

interface IHeaderProps {}

const Header: FC<IHeaderProps> = () => {
  const route = useRoute() as any;

  const orderType = route.params.orderType;

  return (
    <View
      style={{
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#E5E5E5',
      }}>
      <Text>{orderType}</Text>
    </View>
  );
};

export default observer(Header);
