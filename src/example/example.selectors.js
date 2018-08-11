import { createSelector } from 'reselect'

const _getCoolStatus = state => state.example.allCool

export const getCoolStatus = createSelector(
  _getCoolStatus,
  flag => flag
)
