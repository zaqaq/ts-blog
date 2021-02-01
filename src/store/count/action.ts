import {cNumber, ADD_NUM, RM_NUM, CountActionTypes} from './types'

function addNUM(data: cNumber): CountActionTypes{
  return {
    type: ADD_NUM,
    payload: data
  }
}

function rmNUM(data: number): CountActionTypes{
  return {
    type: RM_NUM,
    payload: data
  }
}

export {addNUM, rmNUM}
