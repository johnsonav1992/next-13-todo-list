import { submit } from '@/actions/submit'

export default async function App() {
  
  return (
    <div>
      <form action={submit}>
        <input type="text" name="text" id="input" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
