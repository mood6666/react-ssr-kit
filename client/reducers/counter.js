


export default function counter(state = 0, action) {
  switch (action.type) {
    case '1111':
      return state + 1
    case '222':
      return state - 1
    default:
      return state
  }
}
