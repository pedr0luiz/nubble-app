import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useAuthCredentials} from '@services';

import {AppStackParamList} from '@routes';

export function useAppNavigation() {
  const {authCredentials} = useAuthCredentials();

  const navigation =
    useNavigation<NativeStackNavigationProp<AppStackParamList>>();

  function toProfile(userId: number) {
    if (authCredentials?.user.id === userId) {
      navigation.navigate('AppTabNavigator', {screen: 'MyProfileScreen'});
    } else {
      navigation.push('ProfileScreen', {userId});
    }
  }

  type Params = Omit<AppStackParamList['PostCommentScreen'], 'showPost'>;
  function toPostComment(params: Params): void {
    navigation.push('PostCommentScreen', params);
  }

  const navigate = {
    toProfile,
    toPostComment,
  };

  return navigate;
}
