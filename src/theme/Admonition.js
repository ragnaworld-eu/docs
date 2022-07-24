import React from 'react';
import Admonition from '@theme-original/Admonition';
// import MyIcon from '@site/static/img/info.svg';

export default function AdmonitionWrapper(props) {
  if (props.type == 'cmd') {
    return <Admonition title="Command" {...props} />;
  }

  return <Admonition {...props} />;
}
