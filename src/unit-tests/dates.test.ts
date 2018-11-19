import 'reflect-metadata';
import { MockDatesProvider } from '../mocks/mock.dates';


/**
 * Block level variable for assigning the Mock DatesProvider service to
 *
 */
let date = null;



/**
 * Re-create the MockDatesProvider class object before each
 * unit test is run
 *
 */
beforeEach(() => {
   date = new MockDatesProvider();

});



/**
 * Group the unit tests for the MockDatesProvider into one
 * test suite
 *
 */
describe('Dates service', () =>
{


   /**
    * Test that the returned value matches today's date
    *
    */
   test('Retorna la fecha actual', () =>
   {
      expect.assertions(1);
      let currentDate = date.returnCurrentDate();

      //expect(currentDate).toEqual("2017-07-14");//Genero la falla
      expect(currentDate).toEqual("2018-11-08");
   });



   /**
    * Test that the total months of the year are returned
    *
    */
   test('Retorna todos los meses del año', () =>
   {
      expect.assertions(2);
      let months = date.returnMonthsOfTheYear(),
          expected = ['Julio', 'Noviembre'];

      expect(months).toHaveLength(12);
      expect(months).toEqual(expect.arrayContaining(expected));
   });



   /**
    * Test that the current month is returned
    *
    */
   test('Retorna el mes actual', () =>
   {
      expect.assertions(1);
      let currentMonth = date.returnCurrentMonth();

      //expect(currentMonth).toBe("July"); Genero falla
      expect(currentMonth).toBe("Noviembre");
   });



   /**
    * Test that the current timestamp is returned
    *
    */
   test('Retorna la marca de tiempo actual', () =>
   {
      expect.assertions(1);
   	let timestamp = date.returnCurrentTimestamp();
   	expect(timestamp).toBeGreaterThanOrEqual(Math.floor(Date.now()/1000));
   });




});