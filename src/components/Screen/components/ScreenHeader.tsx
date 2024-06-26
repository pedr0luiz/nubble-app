import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {Box, TouchableOpacityBox} from '../../Box/Box';
import {Icon} from '../../Icon/Icon';
import {Text} from '../../Text/Text';
import {ScreenProps} from '../Screen';

const ICON_SIZE = 20;
type Props = Pick<ScreenProps, 'title' | 'canGoBack'>;
export function ScreenHeader({canGoBack, title}: Props) {
  const navigation = useNavigation();

  return (
    <Box
      flexDirection="row"
      paddingVertical="s12"
      alignItems="center"
      justifyContent="space-between">
      {canGoBack && (
        <TouchableOpacityBox
          flexDirection="row"
          alignItems="center"
          onPress={navigation.goBack}>
          <Icon size={ICON_SIZE} name="arrowLeft" color="primary" />
          {!title && (
            <Text preset="paragraphMedium" semiBold ml="s8">
              Voltar
            </Text>
          )}
        </TouchableOpacityBox>
      )}
      {title && <Text preset="headingSmall">{title}</Text>}
      {title && <Box backgroundColor="carrotSecondary" width={ICON_SIZE} />}
    </Box>
  );
}
