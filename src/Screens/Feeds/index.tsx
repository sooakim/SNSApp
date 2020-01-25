import React, { useContext, useState, useEffect } from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';

import Styled from 'styled-components/native';

import { RandomUserDataContext } from '~/Context/RandomUserData';
import IconButton from '~/Components/IconButton';
import Input from '~/Components/Input';
import ImageFeedList from '~/Components/ImageFeedList';

const SearchBar = Styled.SafeAreaView`
    flex: 1;
    flex-direction: row;
    align-items: center;
    border-bottom-width: 1px;
    border-color: #D3D3D3;
`;

interface Props{
    navigation: NavigationScreenProp<NavigationState>;
}

const Feeds = ({ navigation }: Props) => {
    const { getMyFeed } = useContext(RandomUserDataContext);
    const [feedList, setFeedList] = useState<Array<IFeed>>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setFeedList(getMyFeed(24));
    }, []);

    return (
        <ImageFeedList
            feedList={feedList}
            loading={loading}
            onRefresh={() => {
                setLoading(true);
                setTimeout(() => {
                    setFeedList(getMyFeed(24));
                    setLoading(false);
                }, 2000);
            }}
            onEndReached={() => {
                setFeedList([...feedList, ...getMyFeed(24)]);
            }}
            onPress={() => {
                navigation.navigate('FeedListOnly');
            }}
        />
    );
};

Feeds.navigationOptions = {
    header: () => (
        <SearchBar>
            <Input
                style={{ flex: 1, marginLeft: 8, height: 32 }}
                placeholder="검색"
            />
            <IconButton iconName="camera" />
        </SearchBar>
    ),
    headerBackTitleVisible: false,
};
export default Feeds;