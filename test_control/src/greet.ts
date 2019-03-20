export function sayHello(name: string) {
    return `Hello from ${name}`;
}


export function test(k: string): void {
        document.addEventListener('keydown', (e: KeyboardEvent) => {
            const keyName = e.code;
            console.log(keyName);

            if (e.keyCode == 38) {
                alert(`lucas enculééééééééééééééééé`);
                // do not alert when only Control key is pressed.
            }

            if (e.ctrlKey) {
                // Even though event.key is not 'Control' (e.g., 'a' is pressed),
                // event.ctrlKey may be true if Ctrl key is pressed at the same time.
                alert(`Combination of ctrlKey + ${keyName}`);
            }
            else {
                alert(`Key pressed sddx ${keyName}`);
            }
        }, false);
   }
