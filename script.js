document.addEventListener('DOMContentLoaded', () => {
    const term = new Terminal();
    term.open(document.getElementById('terminal'));
    term.write('AngelsCheckDevices v1.0\n');
    term.write('Собираю данные...\n');

    Telegram.WebApp.ready();
    term.write('Подключено к Telegram Web App\n');

    setTimeout(() => {
        const info = {
            platform: Telegram.WebApp.platform || 'Неизвестно',
            screen: window.screen.width && window.screen.height ? `${window.screen.width}x${window.screen.height}` : 'Неизвестно',
            cores: navigator.hardwareConcurrency || 'Неизвестно',
            memory: navigator.deviceMemory ? `${navigator.deviceMemory} GB` : 'Неизвестно'
        };

        term.write('Готово!\n');

        // Проверяем, есть ли данные
        if (info.platform === 'Неизвестно' && info.screen === 'Неизвестно' && info.cores === 'Неизвестно' && info.memory === 'Неизвестно') {
            term.write('Ошибка: не удалось собрать данные\n');
            document.getElementById('specs-output').textContent = 'Не удалось получить характеристики телефона';
        } else {
            document.getElementById('specs-output').textContent = `
Платформа: ${info.platform}
Экран: ${info.screen}
Ядер CPU: ${info.cores}
Память: ${info.memory}
            `;
        }
    }, 1000);
});
