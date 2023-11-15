import React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';

import {useAppSafeArea, useAppTheme} from '@hooks';

import {Box, BoxProps} from '../Box/Box';

import {ScrollViewContainer, ViewContainer} from './components/ScreenContainer';
import {ScreenHeader} from './components/ScreenHeader';

export interface ScreenProps extends BoxProps {
  children: React.ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
  title?: string;
  hideHeader?: boolean;
}

export function Screen({
  children,
  canGoBack = false,
  scrollable = false,
  style,
  title,
  hideHeader = false,
  ...boxProps
}: ScreenProps) {
  const {bottom, top} = useAppSafeArea();
  const {colors} = useAppTheme();

  const Container = scrollable ? ScrollViewContainer : ViewContainer;
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container backgroundColor={colors.background}>
        <Box
          paddingHorizontal="s24"
          style={[{paddingTop: top, paddingBottom: bottom}, style]}
          {...boxProps}>
          {!hideHeader && <ScreenHeader canGoBack={canGoBack} title={title} />}
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
