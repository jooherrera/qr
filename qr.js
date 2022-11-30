import  QRCode  from "qrcode";


export const callQR = () => {
    return new Promise((resolve,reject) => {
        QRCode.toDataURL('https://youtube.com', function (err, url) {
            if(err)  reject("No se pudo generar el QR")
            resolve(url)
          })
    })
}






