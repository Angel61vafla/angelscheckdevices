document.addEventListener('DOMContentLoaded', () => {
    const term = new Terminal({
        theme: {
            foreground: '#00ff00', // зелёный текст в терминале
            background: '#001100'  // тёмно-зелёный фон
        }
    });
    term.open(document.getElementById('terminal'));
    term.write('AngelsCheckDevices v1.0\n');
    term.write('Собираю данные...\n');

    Telegram.WebApp.ready();
    term.write('Подключено к Telegram Web App\n');

    // Собираем данные
    const info = {
        platform: Telegram.WebApp.platform || 'Неизвестно',
        screen: `${window.screen.width}x${window.screen.height}` || 'Неизвестно',
        version: Telegram.WebApp.version || 'Неизвестно'
    };

    // Выводим в терминал для отладки
    term.write('Готово!\n');
    term.write(`Платформа: ${info.platform}\n`);
    term.write(`Экран: ${info.screen}\n`);
    term.write(`Версия Telegram: ${info.version}\n`);

    // Обновляем основной вывод
    document.getElementById('specs-output').textContent = `
Платформа: ${info.platform}
Экран: ${info.screen}
Версия Telegram: ${info.version}
    `;
});
