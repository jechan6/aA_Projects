import React from 'react';
import TabsItem from './tabsitem';

class Tabs extends React.Component {

  constructor (props) {
    super(props);
    this.state = {index: 0};
  }

  render() {
    return (
      <div>
        <h1>Tabs</h1>
          <ul>
            {this.props.tabsList.map( (tab,idx) =>
              <div>
                <h1 onClick={this.changeTab.bind(this,idx)}>{tab.title}</h1>
                <TabsItem key={idx} index={idx} content={tab.content}/>
              </div>
              )
            };

          </ul>
      </div>
    );
  }

  changeTab(idx) {
    const classn = "content-" + idx;
    const content = document.getElementsByClassName(classn);
    const hideContent = document.getElementsByTagName("li");
    // console.log(hideContent);
    Array.from(hideContent).map( (el) => {
      el.classList.remove('hidden');
      el.classList.remove('show');
      el.classList.add('hidden');
    });

    content[0].classList.add('show');

  }

}

export default Tabs;
