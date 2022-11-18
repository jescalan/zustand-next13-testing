import create from 'zustand'

const useStore = create((set) => ({
  val: 0,
  add: () => set(({ val }) => ({ val: val + 1 })),
}))

export default function Index() {
  const store = useStore()

  return (
    <>
      Testing
      <button onClick={() => store.add()}>{store.val}</button>
    </>
  )
}
