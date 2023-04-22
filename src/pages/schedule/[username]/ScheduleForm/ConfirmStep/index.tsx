import { Button, Text, TextArea, TextInput } from '@ignite-ui/react'
import { ConfirmForm, FormActions, FormHeader } from './styles'
import { CalendarBlank, Clock } from 'phosphor-react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const confirmFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  observations: z.string().nullable(),
})

export function ConfirmStep() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({
    resolver: zodResolver(confirmFormSchema),
  })

  function handleConfirmScheduling() {}
  return (
    <ConfirmForm as="form" onSubmit={handleConfirmScheduling}>
      <FormHeader>
        <Text>
          <CalendarBlank />
          22 de Setembro de 2022
        </Text>

        <Text>
          <Clock />
          18:00h
        </Text>
      </FormHeader>

      <label>
        <Text size="sm">Nome Completo</Text>
        <TextInput type="text" placeholder="Seu nome" {...register('name')} />
      </label>

      <label>
        <Text size="sm">Endreço de e-mail</Text>
        <TextInput
          type="email"
          placeholder="johndone@example.com"
          {...register('email')}
        />
      </label>

      <label>
        <Text size="sm">Observações</Text>
        <TextArea {...register('observations')}/>
      </label>

      <FormActions>
        <Button type="button" variant="tertiary">
          Cancelar
        </Button>
        <Button type="submit">Confirmar</Button>
      </FormActions>
    </ConfirmForm>
  )
}
