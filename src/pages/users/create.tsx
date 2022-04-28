import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import {yupResolver} from "@hookform/resolvers/yup";
import Link from "next/link";
import {SubmitHandler, useForm} from "react-hook-form";
import * as yup from "yup";
import {Input} from "../../components/Form/Input";
import {Header} from "../../components/Header";
import {SideBar} from "../../components/SideBar";

interface CreateUserFormData {
  nome: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

const createUserFormSchema = yup.object().shape({
  name: yup.string().required("O nome é obrigatório"),
  email: yup.string().email("E-mail inválido").required("E-mail obrigatório"),
  password: yup
    .string()
    .min(6, "A senha precisa no mínimo 6 caracteres")
    .required("Senha obrigatótia"),
  password_confirmation: yup
    .string()
    .oneOf([null, yup.ref("password")], "As senhas não conterem"),
});

export default function CreateUser() {
  const {
    register,
    handleSubmit,
    formState,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(createUserFormSchema),
  });

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log({data});
  };

  return (
    <Box>
      <Header />

      <Flex w="100%" maxW={1480} mx="auto" px="6">
        <SideBar />

        <Box
          as="form"
          onSubmit={handleSubmit(handleCreateUser)}
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p={["6", "8"]}
        >
          <Heading size="lg" fontWeight="normal">
            Criar Usuário
          </Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                name="name"
                label="Nome completo"
                error={errors.name}
                {...register("name")}
              />
              <Input
                name="email"
                type="email"
                label="E-mail"
                error={errors.email}
                {...register("email")}
              />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                name="password"
                type="password"
                label="Senha"
                error={errors.password}
                {...register("password")}
              />
              <Input
                name="password_confirmation"
                type="password"
                label="Confirmar senha"
                error={errors.password_confirmation}
                {...register("password_confirmation")}
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button as="a" colorScheme="whiteAlpha">
                  Cancelar
                </Button>
              </Link>
              <Button
                type="submit"
                isLoading={formState.isSubmitting}
                colorScheme="pink"
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
