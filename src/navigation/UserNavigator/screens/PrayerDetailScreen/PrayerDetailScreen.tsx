import { RouteProp } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { Platform } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { actions, selectors } from '../../../../store/ducks';
import { RootStackParamList } from '../../../../types';
import ArrowBackIcon from '../../../../ui/icons/ArrowBackIcon';
import PrayerIcon from '../../../../ui/icons/PrayerIcon';
import LineIndicator from '../../../../components/LineIndicator';
import CounterPrayer from '../../../../components/CounterPrayer';
import CommentsList from '../../../../components/CommentsList';
import MembersList from '../../../../components/MembersList';
import PlusIcon from '../../../../ui/icons/PlusIcon';
import AddCommentInput from '../../../../components/AddCommentInput';

type PrayerDetailScreenRouteProp = RouteProp<
  RootStackParamList,
  'PrayersDetail'
>;
type PrayerDetailScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'PrayersDetail'
>;
type Props = {
  navigation: PrayerDetailScreenNavigationProp;
  route: PrayerDetailScreenRouteProp;
};

export default function PrayerDetailScreen({ navigation, route }: Props) {
  const dispatch = useDispatch();
  const { prayerId } = route.params;
  const data = useSelector(selectors.prayers.seletPrayerById(prayerId));

  useEffect(() => {
    dispatch({ type: actions.comments.getComments.type });
  }, [dispatch]);

  return (
    <Root>
      <Header>
        <HeaderTop>
          <HeaderBackBtn onPress={() => navigation.goBack()}>
            <ArrowBackIcon />
          </HeaderBackBtn>
          <HeaderPrayerBtn>
            <PrayerIcon fillPath="#fff" />
          </HeaderPrayerBtn>
        </HeaderTop>
        <TitleWrap>
          <Title>{data.title}</Title>
        </TitleWrap>
      </Header>
      <Container
        data={null}
        renderItem={info => null}
        ListHeaderComponent={
          <>
            <LastPrayedWrap>
              <LineIndicator />
              <LastPrayedText>Last prayed 8 min ago</LastPrayedText>
            </LastPrayedWrap>
            <StyledCounterPrayer prayerId={data.id} />
            <MembersWrap>
              <SectionTitle>Members</SectionTitle>

              <MembersListContainer>
                <MembersList />
                <AddMemberBtn onPress={() => console.log('click')}>
                  <PlusIcon width={18} height={18} fillPath="#fff" />
                </AddMemberBtn>
              </MembersListContainer>
            </MembersWrap>
          </>
        }
        ListFooterComponent={
          <CommentsWrap>
            <SectionTitle style={{ paddingLeft: 15 }}>Comments</SectionTitle>
            <CommentsList prayerId={prayerId} />
            <AddCommentInput prayerId={prayerId} />
          </CommentsWrap>
        }
      />
    </Root>
  );
}
const Root = styled.View`
  display: flex;
  height: 100%;
  background-color: #fff;
`;

const Container = styled.FlatList`
  display: flex;
  background-color: #fff;
`;
const Header = styled.View`
  padding: 24px 15px;
  padding-top: ${Platform.OS === 'ios' ? '74px' : '20px'};
  position: relative;
  min-height: 130px;
  display: flex;
  background-color: #bfb393;
`;
const HeaderTop = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;
const HeaderBackBtn = styled.Pressable``;
const HeaderPrayerBtn = styled.Pressable``;

const TitleWrap = styled.View``;
const Title = styled.Text`
  font-size: 17px;
  line-height: 27px;
  color: #ffffff;
`;
const LastPrayedWrap = styled.View`
  padding: 14px 15px;
  display: flex;
  flex-direction: row;
`;
const LastPrayedText = styled.Text`
  font-size: 17px;
  line-height: 20px;
  color: #514d47;
  margin-left: 10px;
`;
const StyledCounterPrayer = styled(CounterPrayer)``;
const SectionTitle = styled.Text`
  font-size: 13px;
  line-height: 15px;
  display: flex;
  align-items: flex-end;
  text-transform: uppercase;
  margin-bottom: 15px;
  color: #72a8bc;
`;

const MembersWrap = styled.View`
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 30px;
  margin-top: 20px;
`;
const MembersListContainer = styled.View`
  display: flex;
  flex-direction: row;
`;
const AddMemberBtn = styled.Pressable`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #bfb393;
  border-radius: 100px;
`;
const CommentsWrap = styled.View``;
