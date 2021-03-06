export const blue = '#00B4E1';
export const lightBlue = '#ABCED7';
export const darkBackground = '#222';
export const grey = '#CCC';
export const warning = '#FF915C';
export const error = '#D90000';
export const success = '#85DB41';

export const Colors = {
  blue: '#00B4E1',
  lightBlue: '#ABCED7',
  darkBackground: '#222',
  grey: '#CCC',
  warning: '#FF915C',
  error: '#D90000',
  success: '#85DB41',
  caution: '#FFD300',
  placeholder: '#f2f2f2',
};

export const Pages = Object.freeze({
  HomeScreen: 'HomeScreen',
  QRScanner: 'QRScanner',
  QRScannerDni: 'QRScannerDni',
  MailInput: 'MailInput',
  MailCheck: 'MailCheck',
  PhoneInput: 'PhoneInput',
  PhoneCheck: 'PhoneCheck',
  BackDNIScanner: 'BackDNIScanner',
  SelfiePhoto: 'SelfiePhoto',
  DocumentScannerFront: 'DocumentScannerFront',
  DocumentScannerBack: 'DocumentScannerBack',
  AfipDocumentScanner: 'AfipDocumentScanner',
  FacePicture: 'FacePicture',
  Legajo: 'Legajo',
  LoadingValidation: 'LoadingValidation',
  Results: 'Results',
  LoadingFinal: 'LoadingFinal',
  Final: 'Final',
});

export const Keys = Object.freeze({
  EntityJSON: 'EntityJSON',
  Mail: 'Mail',
  Phone: 'Phone',
  Name: 'Name',
  DniQR: 'DniQR',
  DocumentoFrontal: 'PictureFront',
  DocumentoAnterior: 'PictureBack',
  Selfie: 'PictureSelfie',
  DocumentoFrontalBase64 :'PictureFrontBase64',
  SelfieBase64: 'SelfieBase64',
  DocumentoAnteriorBase64: 'PictureAnteriorBase64'
});

export const IconsType = Object.freeze({
  warning: 'warning',
  check: 'check',
});

// estas son las keys que esperamos que tenga el QR de la entidad como minimo
export const EntityQRKeys = ['id', 'nombreEntidad', 'operacion', 'url','address'];
