import React, { useState } from 'react';
import { Animated } from 'react-native';
import styled from 'styled-components/native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import PrayerIcon from '../ui/icons/PrayerIcon';
import UserIcon from '../ui/icons/UserIcon';
import LineIndicator from './LineIndicator';
import CheckIcon from '../ui/icons/CheckIcon';
import { IPrayerItem } from './PrayersList';
import { useDispatch } from 'react-redux';
import { actions } from '../store/ducks';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { UserRoutes } from '../navigation/UserNavigator/routes';

interface IPrayerItemProps {
  item: IPrayerItem;
}
type PrayersScreenNavigationProp = StackNavigationProp<RootStackParamList>;
export default function PrayerItem({ item }: IPrayerItemProps) {
  const dipsatch = useDispatch();
  const navigation = useNavigation<PrayersScreenNavigationProp>();
  const [dataItem, useDataItem] = useState(item.item);
  const [checked, useChecked] = useState(dataItem.checked);

  return (
    <StyledAnimatedView>
      <Row>
        <LineCheckboxWrap>
          <LineIndicator />
          <StyledBouncyChecbox
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
            onPress={(isChecked?: boolean) => {
              useChecked(!checked);
              console.log('data', {
                title: dataItem.title,
                description: dataItem.description,
                checked: isChecked,
              });

              dipsatch({
                type: actions.prayers.updatePrayer.type,
                values: {
                  id: dataItem.id,
                  title: dataItem.title,
                  description: dataItem.description,
                  checked: isChecked,
                },
              });
            }}
          />
        </LineCheckboxWrap>
        <Link
          onPress={() =>
            navigation.navigate(UserRoutes.PrayerDetailScreen, {
              prayerId: dataItem.id,
            })
          }>
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
`;

const Link = styled.Pressable`
  flex-grow: 1;
  height: 68px;
  align-items: center;
  justify-content: center;
`;
const LinkWrap = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  height: 100%;
`;
const LinkTitle = styled.Text.attrs(() => ({
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
const StyledBouncyChecbox = styled(BouncyCheckbox)`
  margin-left: 15px;
`;
