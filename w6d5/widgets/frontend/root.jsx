import Clock from './clock';
import Tabs from './tabs';
import React from 'react';
class Root extends React.Component {

  render() {
    const tabList =[
      {
        title: "tab1",
        content: "My last name is smith"
      },
      {
        title: "tab2",
        content: "tab2 stuff"
      },
      {
        title: "tab3",
        content: "Bob Smith"
      }
    ];
    return(
      <div>
        <Clock />
        <Tabs tabsList={tabList}/>
      </div>
    );
  }
}

export default Root;
