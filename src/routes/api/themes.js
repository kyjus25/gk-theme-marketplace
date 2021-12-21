import * as fs from 'fs';
import * as os from 'os';

export const get = async () => {
    const home = os.homedir();
    const themes = (os.platform() === "win32") ? fs.readdirSync(`${home}\\AppData\\Roaming\\.gitkraken\\themes`) : fs.readdirSync(`${home}/.gitkraken/themes`);
    return {
        body: themes.filter(i => i.includes('.json'))
    }
}

export const put = async request => {
    const theme = request.query.get('theme');
    const home = os.homedir();
    fs.copyFileSync(`./static/themes/${theme}/${theme}.jsonc`, `${home}/.gitkraken/themes/${theme}.jsonc`);
    const themes = fs.readdirSync(`${home}/.gitkraken/themes`);
    return {
        body: themes.filter(i => i.includes('.jsonc'))
    }
}

export const del = async request => {
    const theme = request.query.get('theme');
    const home = os.homedir();
    fs.unlinkSync(`${home}/.gitkraken/themes/${theme}.jsonc`);
    const themes = fs.readdirSync(`${home}/.gitkraken/themes`);
    return {
        body: themes.filter(i => i.includes('.jsonc'))
    }
}