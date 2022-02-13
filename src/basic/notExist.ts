export default function notExistSample() {
  let name = null
  console.log('primitiveSample1 :', typeof name, name)

  name = 'トラハック'
  if (!name) {
    console.log('primitiveSample2 :', '吾輩は猫である、名前はまだ', name)
  } else {
    console.log('primitiveSample3 :', '吾輩は猫である、名前は', name)
  }

  const age = undefined
  console.log('primitiveSample4 :', typeof age, age)

  if (!age) {
    console.log('primitiveSample :', '年齢は秘密です')
  } else {
    console.log('primitiveSample :', '年齢は', age, 'です')
  }
}
