// dynamic css
dynamicCss()

function dynamicCss() {
    // get theme
    let theme = null;
    let themeKey = localStorage.getItem('theme-key')
    if (themeKey !== null && themeKey !== '') {
        theme = localStorage.getItem(themeKey)
    }
    if (typeof theme === 'undefined' || theme == null || theme.length === 0 || theme === 'null') {
        theme = 'light'
    }

    // get dynamic css
    let head = document.getElementsByTagName('head')[0];
    let elements = head.getElementsByClassName('theme');
    if (elements.length === 0) {
        let headHtml = head.innerHTML;
        headHtml += '<link class="theme" href="static/theme/' + theme + '.css" rel="stylesheet" type="text/css">'
        document.getElementsByTagName('head')[0].innerHTML = headHtml
    } else {
        let link = elements[0]
        link.setAttribute('href', 'static/theme/' + theme + '.css')
    }
}

// 加载主题
function loadTheme() {
    return new Promise(resolve => {
        axios({
            method: 'get',
            url: 'shell/theme'
            // data : theme
        }).then((data) => {
            // k: token; v: theme
            window.localStorage.setItem(window.localStorage.getItem('theme-key'), data)
        }).then(() => resolve())
    })
}