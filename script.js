document.addEventListener('DOMContentLoaded', () => {
    const term = new Terminal();
    term.open(document.getElementById('terminal'));
    term.write('AngelsCheckDevices v1.0\n');
    term.write('Собираю данные...\n');

    Telegram.WebApp.ready();

    setTimeout(() => {
        const info = {
            platform: Telegram.WebApp.platform,
            screen: window.screen.width + "x" + window.screen.height,
            cores: navigator.hardwareConcurrency || "Неизвестно",
            memory: navigator.deviceMemory ? navigator.deviceMemory + " GB" : "Неизвестно"
        };
        term.write('Готово!\n');
        document.getElementById('specs-output').textContent = `
Платформа: ${info.platform}
Экран: ${info.screen}
Ядер CPU: ${info.cores}
Память: ${info.memory}
        `;
    }, 1000);
});