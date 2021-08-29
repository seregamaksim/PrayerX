import React, { useState } from 'react';
import { Animated, Pressable, View, Text } from 'react-native';
import styled from 'styled-components/native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import { IPrayer } from '../store/prayers/types';
import PrayerIcon from '../ui/icons/PrayerIcon';
import UserIcon from '../ui/icons/UserIcon';
import LineIndicator from './LineIndicator';
import CheckIcon from '../ui/icons/CheckIcon';

interface IPrayerItemProps {
  item: {
    item: IPrayer;
  };
}
export default function PrayerItem({ item }: IPrayerItemProps) {
  const [dataItem, useDataItem] = useState(item.item);
  const [checked, useChecked] = useState(dataItem.checked);

  return (
    <StyledAnimatedView>
      <Row>
        <LineCheckboxWrap>
          <LineIndicator />
          <BouncyCheckbox
            size={22}
            fillColor="#fffff"
            unfillColor="#FFFFFF"
            isChecked={checked}
            disableText={true}
            ImageComponent={() => <CheckIcon />}
            iconStyle={{
              borderColor: '#514D47',
              borderRadius: 4,
            }}
            style={{
              marginLeft: 15,
            }}
            onPress={(isChecked?: boolean) => {
              useChecked(!checked);
            }}
          />
        </LineCheckboxWrap>
        <Link
          onPress={() => console.log('You touched me')}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 68,
          }}>
          <LinkWrap>
            <LinkTitle checked={checked}>{dataItem.title}</LinkTitle>
            <LinkIconsList>
              <LinkIcon>
                <UserIcon />
                <LinkIconText>3</LinkIconText>
              </LinkIcon>
              <LinkIcon>
                <PrayerIcon />
                <LinkIconText>120</LinkIconText>
              </LinkIcon>
            </LinkIconsList>
          </LinkWrap>
        </Link>
      </Row>
    </StyledAnimatedView>
  );
}
const StyledAnimatedView = styled(Animated.View)`
  padding-left: 15px;
  padding-right: 15px;
  background-color: #fff;
`;

const Row = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: #e5e5e5;
`;
const LineCheckboxWrap = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 15px;
`;

const Link = styled.Pressable`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-grow: 1;
  height: 68px;
  /* width: 100%; */
`;
const LinkWrap = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  /* width: 100%; */
  flex-grow: 1;
  height: 100%;
  /* background-color: red; */
`;
const LinkTitle = styled.Text.attrs(props => ({
  numberOfLines: 1,
}))<{ checked: boolean }>`
  font-size: 17px;
  line-height: 20px;
  color: #514d47;
  width: 150px;
  margin-right: 15px;
  text-decoration-line: ${props => (props.checked ? 'line-through' : 'none')};
  text-decoration-style: solid;
`;

const LinkIconsList = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const LinkIcon = styled(LinkIconsList)`
  margin-right: 15px;
  &:last-child {
    margin-right: 0;
  }
`;
const LinkIconText = styled.Text`
  font-size: 12px;
  line-height: 14px;
  color: #514d47;

  margin-left: 5px;
`;
