// defer -- атрибут який дозволяє втсавляти скрипт в любому місці HTML
// при цьому скрипти будуть виконуватись після повного завантаження 
// і промальовування DOM дерева
// також  defer забезпечує чіткий порядок виконання скриптів по списку

// async  -- атрибут який виконує скрипт і не чекає завантаження сторінки

// розміщення скрипта на сторінці з допомогою JS


function addScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.body.append(script);
}
addScript('js/test.js');
addScript('js/addscript.js');

// script.async = false; забезпечить чіткий порядок виконання скриптів
