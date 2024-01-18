import { z } from "zod"

const schema = z.object({
    firstName: z.string().min(1),
    email: z.string().min(1).email(),

})

  // const mutation = makeDomainFunction(schema)(async (values) => values)
  
  // export const action: ActionFunction = async ({ request }) =>
  //   formAction({
  //     request,
  //     schema,
  //     mutation,
  //     successPath: '/success',
  //   })
  
  // export default () => <Form schema={schema} />