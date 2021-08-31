import React from 'react';
import { View, Text } from 'react-native';

interface ISubscribedTabItemProps {
  color: string;
  prayerLength: number;
}

export default function SubscribedTabItem({
  color,
  prayerLength,
}: ISubscribedTabItemProps) {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        borderRadius: 50,
      }}>
      <Text
        style={{
          color: color,
          fontSize: 13,
          fontWeight: '600',
          textTransform: 'uppercase',
        }}>
        Subscribed
      </Text>
      <View
        style={{
          marginLeft: 4,
          backgroundColor: '#AC5253',
          width: 16,
          height: 16,
          borderRadius: 50,
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 9,
            lineHeight: 16,
            color: '#fff',
          }}>
          {prayerLength}
        </Text>
      </View>
    </View>
  );
}
