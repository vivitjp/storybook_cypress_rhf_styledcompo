import React, { createContext, useState, useContext, useEffect } from "react"

type DataContextType = {
  id: number
  name: string
  address: string
  age: number
  setId: (Id: number) => void
  setName: (name: string) => void
  setAddress: (address: string) => void
  setAge: (age: number) => void
}

const DataContext = createContext<DataContextType>({} as DataContextType)

type Props = {
  children: React.ReactNode
}

//必要に応じて次のHooksを使い、要素を取得
export const useRhfMockDataContext = () => {
  return useContext(DataContext)
}

//App.tsxで使用する store
export const RhfMockDataProvider = ({ children }: Props) => {
  const [id, setId] = useState<number>(0)
  const [name, setName] = useState<string>("")
  const [address, setAddress] = useState<string>("")
  const [age, setAge] = useState<number>(0)

  useEffect(() => {
    console.log(
      `Context: id= ${id}, name= ${name}, address= ${address}, age= ${age}`
    )
  }, [id, name, address, age])

  return (
    <DataContext.Provider
      value={{
        id,
        name,
        address,
        age,
        setId,
        setName,
        setAddress,
        setAge,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}
