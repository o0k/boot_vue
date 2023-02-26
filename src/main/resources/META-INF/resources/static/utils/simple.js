// Displays 对象 (文本集)
function Display(minSize, maxSize) {
    // 总文本最大长度
    this.maxLength = 3_000_000;
    // 文本最小数量
    this.minSize = minSize
    // 文本最大数量
    this.maxSize = maxSize

    // 文本数组
    this.textList = []
    // 文本长度数组
    this.lenList = [];
    // 总长度计数
    this.length = 0;

    if (maxSize < this.minSize * 3) {
        throw new Error("max size must greater and equal than " + this.minSize * 3);
    }

    // add 元素
    this.add = function (text) {
        let length = text.length
        this.length += length
        this.textList.push(text)
        this.lenList.push(length)

        checkAndRemove(this, text)
    }

    /**
     * 校验文本大小并控制内存
     *
     * @param display
     * @param text
     */
    function checkAndRemove(display, text) {
        let rmCount = 0;
        // 总文本长度超标,  需要移除早期文本, 避免内存过大
        if (display.length > display.maxLength) {
            let len = 0;
            for (let i = display.lenList.length - 1; i > -1; i--) {
                len += display.lenList[i]
                if (len > display.maxLength) {
                    rmCount = i
                    break
                }
            }
            if (rmCount > display.minSize) {
                removeText(display, rmCount - display.minSize)
                rmCount = 0;
            }
        }

        // 二次校验总文本长度是否超标
        if (rmCount > 0 && display.length > display.maxLength) {
            removeText(display, rmCount)
        }

        // 数量超标
        if (display.lenList.length > display.maxSize) {
            // 超过数量要移除 1/2
            removeText(display, display.maxSize / 2)
        }
    }

    /**
     * 移除
     * @param display 展示对象
     * @param rmSize 从左到右需要移除的数量
     */
    function removeText(display, rmSize) {
        display.lenList.splice(0, rmSize)
        display.textList.splice(0, rmSize)
        display.length = display.lenList.reduce((total, num) => total + num, 0)
    }

    // 可展示的元素集
    this.getTexts = function () {
        return this.textList
    }

    // clear
    this.clear = function () {
        this.textList.length = 0
        this.lenList.length = 0
        this.length = 0
    }
}

// command 对象 (命令集)
function Command(maxSize) {
    this.cmdList = []
    this.maxSize = maxSize
    this.pos = 0

    this.add = function (cmd) {
        let len = this.cmdList.length;
        if (len === 0 || this.cmdList[len - 1] !== cmd) {
            this.cmdList.push(cmd)
        }
        this.pos = this.cmdList.length
        if (this.cmdList.length > this.maxSize) {
            this.cmdList.shift()
        }
    }

    /**
     * 获取命令
     * @param offSet 1: 获取下一个; -1: 获取上一个
     */
    this.getCmd = function (offSet) {
        this.pos += offSet
        if (this.pos < 0) {
            this.pos = -1
            return ""
        } else if (this.pos < this.cmdList.length) {
            return this.cmdList[this.pos]
        } else {
            this.pos = this.cmdList.length
            return ""
        }
    }

    // clear
    this.clear = function () {
        this.cmdList.length = 0
        this.pos = 0
    }
}


/** shell管理 */
function ShellManager() {

    let shellMap = {}

    this.putShellId = function (sessionId, shellId) {
        if (!isBlank(sessionId)) {
            shellMap[sessionId] = shellId
        }
    }

    this.getShellId = function (sessionId) {
        return shellMap[sessionId]
    }

    this.removeShellId = function (sessionId) {
        delete shellMap[sessionId]
    }

}

// 是否空文本
isBlank = function (str) {
    return typeof str !== 'string' || str.trim().length === 0
}

// 命令辅助
trimCmd = function (cmd) {
    return isBlank(cmd) ? '' : cmd.replaceAll(new RegExp(/\s+/, 'g'), ' ').trim()
}
