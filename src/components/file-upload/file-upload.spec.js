import template from './file-upload.html';
import { fileUpload } from './file-upload';

describe('File Upload', () => {
  describe('Template', () => {
    it('toMatch', () => {
      expect(template).toMatch(/file_upload/);
    });
  });

  it('toBeDefined', () => {
    expect(fileUpload).toBeDefined();
  });
});
