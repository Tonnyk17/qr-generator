import QrCode from 'qrcode';

export const content = {
    inputs: [
       { 
        type: 'text',
        placeholder: 'Nombre y Apellido',
        value: 'name',
        labelText:'Nombre completo'
       },
       { 
        type: 'email',
        placeholder: 'correo@correo.com',
        value: 'email',
        labelText:'Correo electronico'
       },
       { 
        type: 'number',
        placeholder: '5555555555',
        value: 'phone',
        labelText:'Número telefonico'
       },
       { 
        type: 'text',
        placeholder: 'Nombre y Apellido',
        value: 'referal',
        labelText:'Nombre de quien lo invitó'
       }
    ]
}

export const createTicket = async (data) => {
    var segs = [
        { data: data.name},
        { data: data.email},
        { data: data.phone},
        { data: data.referal},
      ]
    try {
        return QrCode.toDataURL(segs)
    } catch (error) {
        console.error(error)
    }
}