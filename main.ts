namespace kuangRobot {
    //% block
    //% value.min=0 value.max=1023
    //% value.defl=512
    //% blockId="KuangRobot_move" block="drive motor at value %value"
    export function moveRobot(value: number): void {
        // Map the value to PWM range
        let pwmValue = Math.map(value, 0, 1023, 0, 1023) // or 0-255 depending on your hardware
        pins.analogWritePin(AnalogPin.P0, pwmValue) // Use appropriate PWM pin
    }

    //% block
    //% value.min=0 value.max=1023
    //% value.defl=18
    //% block="read line sensor | for left motor at address %value"
    export function readLineLeft(value: number): number {
        return 0.0;
    }

    //% block
    //% value.min=0 value.max=1023
    //% value.defl=18
    //% block="read line sensor | for right motor at address %value"
    export function readLineRight(value: number): number {
        return 0.0;
    }

}