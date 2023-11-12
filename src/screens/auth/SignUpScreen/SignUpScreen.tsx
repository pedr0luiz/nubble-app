import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';

export function SignUpScreen() {
  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" mb="s32">
        Criar uma conta
      </Text>

      <TextInput
        label="Seu username"
        placeholder="@"
        // errorMessage={usernameValidation.errorMessage}
        boxProps={{mb: 's20'}}
        // RightComponent={
        //   usernameValidation.isFetching ? (
        //     <ActivityIndicator size="small" />
        //   ) : undefined
        // }
      />

      <TextInput
        autoCapitalize="words"
        label="Nome"
        placeholder="Digite seu nome"
        boxProps={{mb: 's20'}}
      />
      <TextInput
        autoCapitalize="words"
        label="Sobrenome"
        placeholder="Digite seu sobrenome"
        boxProps={{mb: 's20'}}
      />
      <TextInput
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's20'}}
        // errorMessage={emailValidation.errorMessage}
        // RightComponent={
        //   emailValidation.isFetching ? (
        //     <ActivityIndicator size="small" />
        //   ) : undefined
        // }
      />

      <PasswordInput
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{mb: 's48'}}
      />

      <Button
        // loading={isLoading}
        // disabled={
        //   !formState.isValid ||
        //   usernameValidation.notReady ||
        //   emailValidation.notReady
        // }
        // onPress={handleSubmit(submitForm)}
        title="Criar uma conta"
      />
    </Screen>
  );
}
