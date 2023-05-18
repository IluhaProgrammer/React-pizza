import React, {FC} from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader: FC = (props) => (
            <ContentLoader 
              speed={2}
              width={300}
              height={500}
              viewBox="0 0 300 460"
              backgroundColor="#f3f3f3"
              foregroundColor="#ecebeb"
              {...props}
            >
              <circle cx="150" cy="150" r="150" /> 
              <rect x="0" y="381" rx="16" ry="16" width="300" height="20" /> 
              <rect x="0" y="312" rx="15" ry="15" width="300" height="25" /> 
              <rect x="50" y="420" rx="0" ry="0" width="200" height="53" /> 
              <rect x="0" y="352" rx="8" ry="8" width="300" height="30" />
            </ContentLoader>
          )

export default MyLoader;