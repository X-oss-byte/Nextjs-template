async function myAction(a, b, c) {
  'use server'
  console.log('a')
}

export default function Page() {
  return <Button action={myAction}>Delete</Button>
}

export const action = withValidate(async () => {
  'use server'
})
