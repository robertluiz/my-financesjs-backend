import { expect } from 'chai';
import server from '../../src/config/server';

describe('Server', () => {
  describe('smoke tests', () => {
    it('Should exist the server method', () => {
      expect(server).to.exist;
    });
  });
});
