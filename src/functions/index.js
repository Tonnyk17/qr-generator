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
        labelText:'Correo electrónico'
       },
       { 
        type: 'text',
        placeholder: '5555555555',
        value: 'phone',
        labelText:'Número telefónico'
       },
       { 
        type: 'text',
        placeholder: 'Nombre y Apellido',
        value: 'referal',
        labelText:'Nombre de quien lo invitó'
       }
    ]
}

export const createTicket = async(data) => {
        return  await QrCode.toDataURL(data)      
}