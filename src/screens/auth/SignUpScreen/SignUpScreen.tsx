import React from 'react';
// import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useForm} from 'react-hook-form';
import {SignUpSchema, signUpSchema} from './signUpSchema';
import {zodResolver} from '@hookform/resolvers/zod';
import {RootStackParamList} from '@routes';
import {useResetNavigationSuccess} from '@hooks';
import {
  Button,
  FormPasswordInput,
  FormTextInput,
  Screen,
  Text,
} from '@components';

// type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>;

const defaultValues: SignUpSchema = {
  username: '',
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

const resetParam: RootStackParamList['SuccessScreen'] = {
  title: 'Sua conta foi criada com sucesso!',
  description: 'Agora é só fazer login na nossa plataforma',
  icon: {
    name: 'checkRound',
    color: 'success',
  },
};

export function SignUpScreen() {
  const {control, formState, handleSubmit} = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues,
    mode: 'onChange',
  });

  const {reset} = useResetNavigationSuccess();

  // const navigateToSuccess = () => {
  //   reset(resetParam);
  // };

  function submitForm(formValues: SignUpSchema) {
    // signUp(formValues);
    console.log(formValues);
    reset(resetParam);
  }

  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" mb="s32">
        Criar uma conta
      </Text>

      <FormTextInput
        control={control}
        name="username"
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

      <FormTextInput
        control={control}
        name="firstName"
        autoCapitalize="words"
        label="Nome"
        placeholder="Digite seu nome"
        boxProps={{mb: 's20'}}
      />
      <FormTextInput
        control={control}
        name="lastName"
        autoCapitalize="words"
        label="Sobrenome"
        placeholder="Digite seu sobrenome"
        boxProps={{mb: 's20'}}
      />
      <FormTextInput
        control={control}
        name="email"
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

      <FormPasswordInput
        control={control}
        name="password"
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{mb: 's48'}}
      />
      <Button
        // loading={isLoading}
        disabled={
          !formState.isValid
          // usernameValidation.notReady ||
          // emailValidation.notReady
        }
        onPress={handleSubmit(submitForm)}
        title="Criar uma conta"
      />
    </Screen>
  );
}
