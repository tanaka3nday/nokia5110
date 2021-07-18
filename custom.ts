
/**
* このファイルを使って、独自の関数やブロックを定義してください。
* 詳しくはこちらを参照してください：https://makecode.microbit.org/blocks/custom
*/

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace custom {
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block
    export function foo(n: number, s: string, e: MyEnum): void {
        // Add code here
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block
    export function fib(value: number): number {
        return value <= 1 ? value : fib(value -1) + fib(value - 2);
    }
    
    /**
     * 表示開始のY座標を指定します
     * @param y describe parameter here, eg: 5
     */
    //% block="Y座標"
    export function LSetY(y: number): void{
        LCommand([0x40 + y]);
    }

    /**
     * 画面表示を全消去します
     */
    //% block="画面クリア"
    export function LClear():void {
        for (let index = 0; index < 504; index++) {
            LWrt(1, [0x00]);
        }
    }
    /**
     * LCDの初期化をします。最初に実行してください。
     */
    //% block="LCD初期化"
    export function init(): void {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P0, 1)
        LCommand(LInit);
    }
    /**
     * 表示開始のX座標を指定します。
     * @param x describe parameter here, eg: 5
     */
    //% block="X座標"
    export function LSetX(x: number): void {
        LCommand([0x80 + x]);
    }

    /**
     * 文字列を表示します
     * @param message describe parameter here, eg: "HELLO"
     */
    //% block="文字表示"
    export function LPrint(message: string): void {
        let text = [];
        for (let i = 0; i <= message.length - 1; i++) {
            let s = message[i].charCodeAt(0);
            let c = (s - 32) * 5;
            for (let k = 0; k < 5; k++) {
                text.push(font[c + k])
            }
        }
        LWrt(1, text);
    }
    
    /**
     * 文字列を表示します
     * @param dc describe parameter here, eg: 0
     * @param data describe parameter here, eg: [array]
     */
    //% block
    function LWrt(dc: number, data: number[]): void {
        pins.digitalWritePin(DigitalPin.P8, dc);
        pins.digitalWritePin(DigitalPin.P1, 0);
        data.forEach(function (s) {
            pins.spiWrite(s);
        })
        pins.digitalWritePin(DigitalPin.P1, 1)
    }
    
    //% block
    function LCommand(data: int8[]): void {
        LWrt(0, data);
    }

    const font = [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        95,
        0,
        0,
        0,
        7,
        0,
        7,
        0,
        20,
        127,
        20,
        127,
        20,
        36,
        42,
        127,
        42,
        18,
        35,
        19,
        8,
        100,
        98,
        54,
        73,
        85,
        34,
        80,
        0,
        5,
        3,
        0,
        0,
        0,
        28,
        34,
        65,
        0,
        0,
        65,
        34,
        28,
        0,
        20,
        8,
        62,
        8,
        20,
        8,
        8,
        62,
        8,
        8,
        0,
        80,
        48,
        0,
        0,
        8,
        8,
        8,
        8,
        8,
        0,
        96,
        96,
        0,
        0,
        32,
        16,
        8,
        4,
        2,
        62,
        81,
        73,
        69,
        62,
        0,
        66,
        127,
        64,
        0,
        66,
        97,
        81,
        73,
        70,
        33,
        65,
        69,
        75,
        49,
        24,
        20,
        18,
        127,
        16,
        39,
        69,
        69,
        69,
        57,
        60,
        74,
        73,
        73,
        48,
        1,
        113,
        9,
        5,
        3,
        54,
        73,
        73,
        73,
        54,
        6,
        73,
        73,
        41,
        30,
        0,
        54,
        54,
        0,
        0,
        0,
        86,
        54,
        0,
        0,
        8,
        20,
        34,
        65,
        0,
        20,
        20,
        20,
        20,
        20,
        0,
        65,
        34,
        20,
        8,
        2,
        1,
        81,
        9,
        6,
        50,
        73,
        121,
        65,
        62,
        126,
        17,
        17,
        17,
        126,
        127,
        73,
        73,
        73,
        54,
        62,
        65,
        65,
        65,
        34,
        127,
        65,
        65,
        34,
        28,
        127,
        73,
        73,
        73,
        65,
        127,
        9,
        9,
        9,
        1,
        62,
        65,
        73,
        73,
        122,
        127,
        8,
        8,
        8,
        127,
        0,
        65,
        127,
        65,
        0,
        32,
        64,
        65,
        63,
        1,
        127,
        8,
        20,
        34,
        65,
        127,
        64,
        64,
        64,
        64,
        127,
        2,
        12,
        2,
        127,
        127,
        4,
        8,
        16,
        127,
        62,
        65,
        65,
        65,
        62,
        127,
        9,
        9,
        9,
        6,
        62,
        65,
        81,
        33,
        94,
        127,
        9,
        25,
        41,
        70,
        70,
        73,
        73,
        73,
        49,
        1,
        1,
        127,
        1,
        1,
        63,
        64,
        64,
        64,
        63,
        31,
        32,
        64,
        32,
        31,
        63,
        64,
        56,
        64,
        63,
        99,
        20,
        8,
        20,
        99,
        7,
        8,
        112,
        8,
        7,
        97,
        81,
        73,
        69,
        67,
        0,
        127,
        65,
        65,
        0,
        2,
        4,
        8,
        16,
        32,
        0,
        65,
        65,
        127,
        0,
        4,
        2,
        1,
        2,
        4,
        64,
        64,
        64,
        64,
        64,
        0,
        1,
        2,
        4,
        0,
        32,
        84,
        84,
        84,
        120,
        127,
        72,
        68,
        68,
        56,
        56,
        68,
        68,
        68,
        32,
        56,
        68,
        68,
        72,
        127,
        56,
        84,
        84,
        84,
        24,
        8,
        126,
        9,
        1,
        2,
        12,
        82,
        82,
        82,
        62,
        127,
        8,
        4,
        4,
        120,
        0,
        68,
        125,
        64,
        0,
        32,
        64,
        68,
        61,
        0,
        127,
        16,
        40,
        68,
        0,
        0,
        65,
        127,
        64,
        0,
        124,
        4,
        24,
        4,
        120,
        124,
        8,
        4,
        4,
        120,
        56,
        68,
        68,
        68,
        56,
        124,
        20,
        20,
        20,
        8,
        8,
        20,
        20,
        24,
        124,
        124,
        8,
        4,
        4,
        8,
        72,
        84,
        84,
        84,
        32,
        4,
        63,
        68,
        64,
        32,
        60,
        64,
        64,
        32,
        124,
        28,
        32,
        64,
        32,
        28,
        60,
        64,
        48,
        64,
        60,
        68,
        40,
        16,
        40,
        68,
        12,
        80,
        80,
        80,
        60,
        68,
        100,
        84,
        76,
        68,
        0,
        8,
        54,
        65,
        0,
        0,
        0,
        127,
        0,
        0,
        0,
        65,
        54,
        8,
        0,
        16,
        8,
        8,
        16,
        8,
        0,
        0,
        0,
        0,
        0
    ]

    const LInit = [
        33,
        191,
        4,
        20,
        12,
        32,
        12
    ]



}
