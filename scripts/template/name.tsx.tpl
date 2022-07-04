import React from 'react';
import { I<%= pascalCaseName %>Props } from './type';
import './index.scss'

const <%= pascalCaseName %> = (props: I<%= pascalCaseName %>Props) => {
  const {} = props;

  return (
    <div className='.<%= kebabCaseName %>'>
    
    </div>
  );
};

export default <%= pascalCaseName %>;
