import { expect } from 'chai';
import routes from '../../src/config/routes';

describe('Routes', () => {
  describe('smoke tests', () => {
    it('Should exist the routes method', () => {
      expect(routes).to.exist;
    });
  });
});
