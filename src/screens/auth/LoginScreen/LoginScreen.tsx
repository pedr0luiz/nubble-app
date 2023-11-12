import React from 'react';

import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {Button} from '../../../components/Button/Button';
import {TextInput} from '../../../components/TextInput/TextInput';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';

export function LoginScreen() {
  function navigateToSignUpScreen() {
    // navigation.navigate('SignUpScreen');
  }

  function navigateToForgotPasswordScreen() {
    // navigation.navigate('ForgotPasswordScreen');
  }
  return (
    <Screen>
      <Text marginBottom="s8" preset="headingLarge">
        Olá
      </Text>
      <Text preset="paragraphLarge" mb="s40">
        Digite seu e-mail e senha para entrar
      </Text>

      <TextInput
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's20'}}
      />

      <PasswordInput
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{mb: 's20'}}
      />

      <Text
        onPress={navigateToForgotPasswordScreen}
        color="primary"
        preset="paragraphSmall"
        bold>
        Esqueci minha senha
      </Text>

      <Button
        // loading={isLoading}
        // disabled={!formState.isValid}
        // onPress={handleSubmit(submitForm)}
        marginTop="s48"
        title="Entrar"
      />
      <Button
        onPress={navigateToSignUpScreen}
        preset="outline"
        marginTop="s12"
        title="Criar uma conta"
      />
    </Screen>
  );
}
