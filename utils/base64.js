const fsm = wx.getFileSystemManager();
const FILE_BASE_NAME = 'tmp_base64src';

const base64src = function (base64data) {
  return new Promise((resolve, reject) => {
    const format = 'ewm';
    
    const filePath = `${wx.env.USER_DATA_PATH}/${FILE_BASE_NAME}.${format}`;
    const buffer = wx.base64ToArrayBuffer(base64data);
    fsm.writeFile({
      filePath,
      data: buffer,
      encoding: 'binary',
      success() {
        resolve(filePath);
      },
      fail() {
        reject(new Error('ERROR_BASE64SRC_WRITE'));
      },
    });
  });
};

module.exports = base64src;