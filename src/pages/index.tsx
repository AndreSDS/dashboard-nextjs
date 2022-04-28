import {Button, Flex, Stack} from "@chakra-ui/react";
import {yupResolver} from "@hookform/resolvers/yup";
import {SubmitHandler, useForm} from "react-hook-form";
import * as yup from "yup";
import {Input} from "../components/Form/Input";

interface SigInData {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().email("E-mail inválido").required("E-mail obrigatório"),
  password: yup.string().required("Senha obrigatótia"),
});

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(signInFormSchema),
  });

  const handleSignIn: SubmitHandler<SigInData> = async (data, event) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log({data});
  };

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxW={360}
        bg="gray.800"
        p={8}
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input
            name="email"
            label="E-mail"
            type="email"
            error={errors.email}
            {...register("email")}
          />

          <Input
            name="password"
            label="Senha"
            type="password"
            error={errors.password}
            {...register("password")}
          />
        </Stack>

        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
