import {cNumber, CountActionTypes} from './types'

let initialState: cNumber = 0;

export function countReducer(
  state = initialState,
  action: CountActionTypes
) :cNumber{
  switch (action.type) {
    case 'ADD_NUM':
      return state + action.payload
    case 'RM_NUM':
      return state - action.payload
    default: //设置 state 初始值
      return 100
  }
}
