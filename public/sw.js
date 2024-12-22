self.addEventListener('push', (event) => {
    const data = event.data ? event.data.text() : 'No payload';
    self.registration.showNotification('순수 리액트 푸시알림', {
      body: data,
      icon: '/vite.svg', // 앱 아이콘 경로
    });
  });
  