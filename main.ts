namespace MoveRobot {
    //% block
    //% value.min=0 value.max=1023
    //% value.defl=512
    //% blockId="driveM_setPWM" block="drive motor at value %value"
    export function MoveRobot(value: number): void {
        // Map the value to PWM range
        let pwmValue = Math.map(value, 0, 1023, 0, 1023) // or 0-255 depending on your hardware
        pins.analogWritePin(AnalogPin.P0, pwmValue) // Use appropriate PWM pin
    }
}