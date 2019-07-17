import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.less';
import registerServiceWorker from './registerServiceWorker';

// 将antd的语言设置成中文
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';

ReactDOM.render(
  <LocaleProvider locale={zhCN}>
    <App />
  </LocaleProvider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
