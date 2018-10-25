export default {
  namespace: 'inputs',
  state: {
    input: 'name',
    newInput:'content',
    index:'number'
  },

  reducers: {
    change(state, {payload: name,content,number}) {

      return {
        input: name,
        newInput: content,
        index: number
      }
    }
  }
};
