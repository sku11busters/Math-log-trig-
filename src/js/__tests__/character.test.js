import { Daemon } from "../daemon";
import { Magician } from "../magician";

describe('Character attack calculations', () => {
    test('Magician attack without stoned', () => {
        const magician = new Magician('Gandalf', 100);
        magician.distance = 2;
        expect(magician.attack).toBe(90); 
    });

    test('Daemon attack without stoned', () => {
        const daemon = new Daemon('Azazel', 100);
        daemon.distance = 3;
        expect(daemon.attack).toBe(80); 
    });

    test('Magician attack with stoned', () => {
        const magician = new Magician('Gandalf', 100);
        magician.distance = 2;
        magician.stoned = true;
        expect(magician.attack).toBe(85); 
    });

    test('Daemon attack with stoned', () => {
        const daemon = new Daemon('Azazel', 100);
        daemon.distance = 3;
        daemon.stoned = true;
        expect(daemon.attack).toBe(72); 
    });

    test('Attack should not be negative', () => {
        const daemon = new Daemon('Azazel', 10);
        daemon.distance = 10;
        daemon.stoned = true;
        expect(daemon.attack).toBe(0); 
    });
});