// Template String
// Uso de back-tick `
let userInfo: string;
userInfo = `
    User Info:
    username: ${username}
    firstName: ${username + ' Aviles'}
    phone: ${phone}
    isPro: ${isPro}
`;
console.log('userInfo', userInfo);