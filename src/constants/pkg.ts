import pkg from '../../package.json';

const { version, name, author, license } = pkg;

export const LOGO = `

____  _____  ________  ____      ____  _________  _______  _____     
|_   \|_   _||_   __  ||_  _|    |_  _||  _   _  ||_   __ \|_   _|    
  |   \ | |    | |_ \_|  \ \  /\  / /  |_/ | | \_|  | |__) | | |      
  | |\ \| |    |  _| _    \ \/  \/ /       | |      |  ___/  | |   _  
 _| |_\   |_  _| |__/ |    \  /\  /       _| |_    _| |_    _| |__/ | 
|_____|\____||________|     \/  \/       |_____|  |_____|  |________| 

`;

export const BANNER = `
/**
* ${name} v${version}
* (c) ${new Date().getFullYear()} ${author}
* @license ${license}
*/
`;

export default pkg;
