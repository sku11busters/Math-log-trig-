import { Daemon } from "../daemon";
import { Magician } from "../magician";

describe('Character attack calculations', () => {
    test('Magician attack calculation without stoned', () => {
        const magician = new Magician(100);
        magician.distance = 2;
        expect(magician.attack).toBe(90);
    });
    
    test('Magician attack calculation with stoned', () => {
        const magician = new Magician(100);
        magician.distance = 2;
        magician.stoned = true;
        expect(magician.attack).toBe(85);
    });
    
    test('Daemon attack calculation without stoned', () => {
        const daemon = new Daemon(100);
        daemon.distance = 5;
        expect(daemon.attack).toBe(60);
    });
    
    test('Distance less than 1 throws error', () => {
        const magician = new Magician(100);
        expect(() => {
            magician.distance = 0;
        }).toThrow('Distance must be a number between 1 and 5');
    });
    
    test('Distance more than 5 throws error', () => {
        const daemon = new Daemon(100);
        expect(() => {
            daemon.distance = 6;
        }).toThrow('Distance must be a number between 1 and 5');
    });
    
    test('Non-numeric attack value throws error', () => {
        const magician = new Magician(100);
        expect(() => {
            magician.attack = 'strong';
        }).toThrow('Attack value must be a positive number');
    });
    
    test('Negative attack value throws error', () => {
        const daemon = new Daemon(100);
        expect(() => {
            daemon.attack = -50;
        }).toThrow('Attack value must be a positive number');
    });
    
    test('Non-boolean stoned value throws error', () => {
        const magician = new Magician(100);
        expect(() => {
            magician.stoned = 'yes';
        }).toThrow('Stoned value must be a boolean');
    });
});