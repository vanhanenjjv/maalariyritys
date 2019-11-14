const initialState = {
  selectedColor: '',
  selectedArea: ''
};

const palette = (state = initialState, action) => {
  switch (action.type) {
    case 'PALETTE_SET_COLOR':
      return {
        ...state,
        selectedColor: action.color
      };
    case 'PALETTE_SET_AREA':
      return {
        ...state,
        selectedArea: action.area
      };
    default:
      return state;
  }
}

export default palette;
