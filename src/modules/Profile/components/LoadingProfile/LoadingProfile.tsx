import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { type TypeLoad } from './LoadingProfile.types'

export const LoadingProfile = ({ loading, children }: TypeLoad) => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#2f2f2f">
      {loading ? <Skeleton count={4} height={60} /> : <div>{children}</div>}
    </SkeletonTheme>
  )
}
