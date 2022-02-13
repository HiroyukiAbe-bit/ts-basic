export default function primitiviSample() {
  const name = 'トラハック'
  // name = 123

  console.log('primitiveSample1 :', typeof name, name)

  const age = 28
  console.log('primitiveSample :', typeof age, age)

  const isSingle = true
  console.log('primitiveSample :', typeof isSingle, isSingle)

  const isOver20: boolean = age >= 20
  console.log('primitiveSample :', typeof isOver20, isOver20)
}
