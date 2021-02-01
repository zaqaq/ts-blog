
//State
export type cNumber = number

//Action
export const ADD_NUM = 'ADD_NUM'
export const RM_NUM = 'RM_NUM'

interface AddNumAction {
  type: typeof ADD_NUM
  payload: number
}

interface RMNumAction {
  type: typeof RM_NUM
  payload: number
}

export type CountActionTypes = AddNumAction | RMNumAction
