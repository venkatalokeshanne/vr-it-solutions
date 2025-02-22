export const protectEmail = (email) => {
    const [username, domain] = email.split('@');
    return `${username} [at] ${domain.replace('.', ' [dot] ')}`;
  };
  
  export const deobfuscateEmail = (element) => {
    const text = element.textContent;
    const email = text
      .replace(' [at] ', '@')
      .replace(' [dot] ', '.');
    return email;
  };