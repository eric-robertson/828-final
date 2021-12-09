type ThemeMap = {[k:string] : ColorTheme}
interface ColorTheme {
    text : string
    text2 : string,
    back : [string, string]
    default : [string, string, string]
    accept : [string, string, string]
    warn : [string, string, string],
    shadow : string
}

let activeTheme = 'light' 
let themes : ThemeMap = {
    light : {
        text:"#424446",
        text2:"#FFFFFF",
        back:["#fffefa", "#fdfaec"],
        default:["#435FFD","#2C47E0","#1D37CA"],
        accept: ["#58E492","#19EB89","#0D9E5A"],
        warn:["#FD7B7B","#F93838","#961414"],
        shadow : "#888888"
    }
}


export function setTheme ( color : string ) {
    activeTheme = color
}

export function getTheme (){ 
    return themes[activeTheme]
}