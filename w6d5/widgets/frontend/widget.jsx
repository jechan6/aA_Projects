import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';

document.addEventListener("DOMContentLoaded", ()=>{
  const root = document.getElementById("root");
  ReactDOM.render(<Root />,root);
});

























// const tabList =[
//   {
//     title: "tab1",
//     content: "My last name is smith"
//   },
//   {
//     title: "tab2",
//     content: "tab2 stuff"
//   },
//   {
//     title: "tab3",
//     content: "Bob Smith"
//   }
// ];
// console.log(tabList);
// ReactDOM.render(<Tabs tabsList={tabList}/>,root);
