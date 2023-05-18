import React, { FC } from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton: FC = () => {
    return (
  <ContentLoader 
    speed={2}
    width={260}
    height={440}
    viewBox="0 0 260 440"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="-1" y="268" rx="11" ry="11" width="260" height="23" /> 
    <rect x="2" y="315" rx="10" ry="10" width="260" height="40" /> 
    <rect x="0" y="390" rx="10" ry="10" width="90" height="35" /> 
    <rect x="142" y="380" rx="10" ry="10" width="120" height="50" /> 
    <circle cx="125" cy="125" r="125" />
  </ContentLoader>
    )
}

export default Skeleton;