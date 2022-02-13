export default function unkownSample() {
  const maybeNumber: unknown = 10
  console.log('primitiveSample1 :', typeof maybeNumber, maybeNumber)

  const isFoo = maybeNumber === 'foo'
  console.log('primitiveSample1 :', typeof isFoo, isFoo)

  // const sum = maybeNumber + 10

  if (typeof maybeNumber === 'number') {
    const sum = maybeNumber + 10
    console.log('primitiveSample13:', typeof sum, sum)
  }
}
