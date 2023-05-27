export async function submit(data: FormData) {
  'use server'

  const { text } = Object.fromEntries(data)
  console.log(text)

}