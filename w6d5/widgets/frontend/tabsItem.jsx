import React from 'react';

const TabsItem = ({content, index}) => {

  const classn = "content-" +index;
  return(

    <div>


      <li className={classn}>{content}</li>

    </div>
  );
};

export default TabsItem;
