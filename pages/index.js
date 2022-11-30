class QrGenerator {
    constructor(){
        this.base64 = ''
        this.callBackend()
    }

    async callBackend(){
        const resp = await fetch('http://localhost:3000/')
        const data = await resp.json()
        this.base64 = data.qr
    }

    obtainQR(){
        return new Promise((resolve,reject) => {
            if(this.base64 !== "") return resolve(this.base64)
            return reject("No se pudo generar el 64")
        })
    }
}

const imgElement = document.getElementById('qrImage')

const qrGenerator = new QrGenerator()

setTimeout(() => {
    qrGenerator.obtainQR().then(resp => imgElement.src = resp)
},500)


