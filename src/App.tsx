
function App() {

  const requestNotificationPermission = async () => {
    if ('Notification' in window && 'serviceWorker' in navigator) {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        console.log('Notification permission granted.');
      } else {
        console.log('Notification permission denied.');
      }
    } else {
      alert('푸시 알림을 지원하지 않는 브라우저이다.');
    }
  };

  const triggerPushNotification = async () => {
    const registration = await navigator.serviceWorker.ready;
    if (registration && 'showNotification' in registration) {
      registration.showNotification('순수 리액트 푸시알림', {
        body: '이것은 간단한 리액트 푸시알림이다.',
        icon: '/vite.svg',
      });
    } else {
      console.error('Notification trigger failed.');
    }
  };

  return (
    <div>
      <h1>React Push Notifications</h1>
      <button onClick={requestNotificationPermission}>
        요청 알림 권한
      </button>
      <button onClick={triggerPushNotification}>
        푸시 알림 트리거
      </button>
    </div>
  )
}

export default App
