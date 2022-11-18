'use client'
import create from 'zustand'

interface FooState {
  foo: number
  increaseFoo: () => void
}

const useStore = create<FooState>((set) => ({
  foo: 0,
  increaseFoo: () => set((state) => ({ foo: state.foo + 1 })),
}))

export default function Home() {
  const foos = useStore((state) => state.foo)
  const increaseFoos = useStore((state) => state.increaseFoo)
  return <p onClick={increaseFoos}>There are {foos} foos</p>
}
