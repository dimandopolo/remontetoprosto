import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// index.js

// Функция для добавления iframe с кодом
function addIframe() {
  // Создаем элемент iframe
  const iframe = document.createElement('iframe');
  iframe.id = "big_light_70000001084274876";
  iframe.frameBorder = "0";
  iframe.width = "528px";
  iframe.height = "824px";
  iframe.sandbox = "allow-modals allow-forms allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation";

  // Находим div с классом 'TO'
  const div = document.querySelector('.TO'); // Используем querySelector для поиска по классу
  if (div) {
      div.appendChild(iframe); // Добавляем iframe в div
  } else {
      console.error("Div с классом 'TO' не найден");
      return;
  }

  // Вставляем скрипт для загрузки контента в iframe
  const scriptContent = `((r,p)=>{const l=document.getElementById(r);l.contentWindow.document.open(),l.contentWindow.document.write(decodeURIComponent(escape(atob(p)))),l.contentWindow.document.close()})("big_light_70000001084274876", "PGhlYWQ+PHNjcmlwdCB0eXBlPSJ0ZXh0L2phdmFzY3JpcHQiPgogICAgd2luZG93Ll9fc2l6ZV9fPSdiaWcnOwogICAgd2luZG93Ll9fdGhlbWVfXz0nbGlnaHQnOwogICAgd2luZG93Ll9fYnJhbmNoSWRfXz0nNzAwMDAwMDEwODQyNzQ4NzYnCiAgICB3aW5kb3cuX19vcmdJZF9fPScnCiAgIDwvc2NyaXB0PjxzY3JpcHQgY3Jvc3NvcmlnaW49ImFub255bW91cyIgdHlwZT0ibW9kdWxlIiBzcmM9Imh0dHBzOi8vZGlzay4yZ2lzLmNvbS93aWRnZXQtY29uc3RydWN0b3IvYXNzZXRzL2lmcmFtZS5qcyI+PC9zY3JpcHQ+PGxpbmsgcmVsPSJtb2R1bGVwcmVsb2FkIiBjcm9zc29yaWdpbj0iYW5vbnltb3VzIiBocmVmPSJodHRwczovL2Rpc2suMmdpcy5jb20vd2lkZ2V0LWNvbnN0cnVjdG9yL2Fzc2V0cy9kZWZhdWx0cy5qcyI+PGxpbmsgcmVsPSJzdHlsZXNoZWV0IiBjcm9zc29yaWdpbj0iYW5vbnltb3VzIiBocmVmPSJodHRwczovL2Rpc2suMmdpcy5jb20vd2lkZ2V0LWNvbnN0cnVjdG9yL2Fzc2V0cy9kZWZhdWx0cy5jc3MiPjwvaGVhZD48Ym9keT48ZGl2IGlkPSJpZnJhbWUiPjwvZGl2PjwvYm9keT4=")`;

  // Создаем новый скрипт
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.innerHTML = scriptContent;

  // Добавляем скрипт в iframe
  iframe.onload = () => {
      iframe.contentWindow.document.body.appendChild(script);
  };
}

// Вызываем функцию после загрузки страницы
window.onload = addIframe;


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
