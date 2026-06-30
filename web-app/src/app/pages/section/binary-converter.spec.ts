// Unit tests for binary/decimal converter logic used in SectionComponent

function binaryToDecimal(value: string): string {
  if (/^[01]+$/.test(value) && value.length > 0) {
    return `= ${parseInt(value, 2)} (decimal)`;
  }
  return '';
}

function decimalToBinary(value: string): string {
  const n = parseInt(value, 10);
  if (!isNaN(n) && n >= 0) {
    return `= ${n.toString(2)} (binary)`;
  }
  return '';
}

describe('Binary Converter Logic', () => {

  describe('binaryToDecimal', () => {
    it('should convert 1010 to 10', () => {
      expect(binaryToDecimal('1010')).toBe('= 10 (decimal)');
    });

    it('should convert 0 to 0', () => {
      expect(binaryToDecimal('0')).toBe('= 0 (decimal)');
    });

    it('should convert 1 to 1', () => {
      expect(binaryToDecimal('1')).toBe('= 1 (decimal)');
    });

    it('should convert 11111111 to 255', () => {
      expect(binaryToDecimal('11111111')).toBe('= 255 (decimal)');
    });

    it('should return empty string for invalid input', () => {
      expect(binaryToDecimal('102')).toBe('');
      expect(binaryToDecimal('abc')).toBe('');
      expect(binaryToDecimal('')).toBe('');
    });
  });

  describe('decimalToBinary', () => {
    it('should convert 10 to 1010', () => {
      expect(decimalToBinary('10')).toBe('= 1010 (binary)');
    });

    it('should convert 0 to 0', () => {
      expect(decimalToBinary('0')).toBe('= 0 (binary)');
    });

    it('should convert 255 to 11111111', () => {
      expect(decimalToBinary('255')).toBe('= 11111111 (binary)');
    });

    it('should return empty string for negative numbers', () => {
      expect(decimalToBinary('-1')).toBe('');
    });

    it('should return empty string for non-numeric input', () => {
      expect(decimalToBinary('abc')).toBe('');
      expect(decimalToBinary('')).toBe('');
    });
  });
});
